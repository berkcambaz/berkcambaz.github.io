import { tilemap } from "../tilemap.js";
import { input } from "../input.js";
import { sprites, sounds } from "../resources.js";
import { TILE_MODE } from "../tile.js";
import { physics } from "../physics.js";
import { maths } from "../maths.js";

function Player() {
  this.x = 0;
  this.y = 0;

  /* Needed for interpolation to make player move smoother even though game runs at 30 ticks. */
  let oldX = 0;
  let oldY = 0;

  let width = 24;
  let height = 42;

  this.speed = 8; /* Make sure it's never higher than 16 (tileSize). */

  this.jumpSpeed = 8; /* Make sure it's never higher than 16 (tileSize). */
  this.jumpHeight = 96;
  let remainingJumpHeight = 0;
  this.grounded = false; /* True if touches the ground. */
  this.jumping = false; /* True if on air & holding jump key & didn't collide with anything at the top. */

  this.fallSpeed = 0; /* Gradually increases as player falls, capped at 16 (tileSize). */
  this.fallSpeedMax = 10; /* Make sure it's never higher than 16 (tileSize). */

  this.tileMode = TILE_MODE.BREAK;

  this.tileReach = 4;
  this.tileReachInPixels = this.tileReach * tilemap.tileSize;

  this.update = () => {
    oldX = this.x;
    oldY = this.y;

    const center = this.getCenter();
    // If mouse is pressed, break or place a tile according to tile mode
    if (input.mouse.pressed && physics.box_tile(center.x - this.tileReachInPixels, center.y - this.tileReachInPixels, this.tileReachInPixels * 2, this.tileReachInPixels * 2, input.mouse.x, input.mouse.y)) {
      if (this.tileMode === TILE_MODE.BREAK)
        tilemap.setTileWorldPos(input.mouse.x, input.mouse.y, sprites.air);
      else if (this.tileMode === TILE_MODE.PLACE && !physics.box_tile(this.x, this.y, width, height, input.mouse.x, input.mouse.y))
        tilemap.setTileWorldPos(input.mouse.x, input.mouse.y, sprites.stone);
    }

    // Change tile modes on appropriate key presses
    if (input.getKeyDown(input.KEY_BREAK)) this.tileMode = TILE_MODE.BREAK;
    else if (input.getKeyDown(input.KEY_PLACE)) this.tileMode = TILE_MODE.PLACE;

    if (input.getKeyDown(input.KEY_JUMP) && this.grounded) {
      this.jumping = true;
      this.fallSpeed = 0;
      let jumpAmount;
      remainingJumpHeight = this.jumpHeight - this.jumpSpeed;
      if (remainingJumpHeight < 0) jumpAmount = this.jumpSpeed + remainingJumpHeight;
      else jumpAmount = this.jumpSpeed;

      this.y += -jumpAmount;
      const collisionUp = tilemap.checkCollisionY(this.x, this.y, width, 0);
      this.y = collisionUp.y;
    } else if (input.getKey(input.KEY_JUMP) && this.jumping && remainingJumpHeight > 0) {
      let jumpAmount;
      remainingJumpHeight -= this.jumpSpeed;
      if (remainingJumpHeight < 0) jumpAmount = this.jumpSpeed + remainingJumpHeight;
      else jumpAmount = this.jumpSpeed;

      this.y += -jumpAmount;
      const collisionUp = tilemap.checkCollisionY(this.x, this.y, width, 0);
      this.y = collisionUp.y;
      this.jumping = !collisionUp.collides;
    } else {
      this.jumping = false;
      this.fallSpeed = maths.clamp(this.fallSpeed + 1, 0, this.fallSpeedMax);
      this.y += this.fallSpeed;
      const collisionDown = tilemap.checkCollisionY(this.x, this.y, width, height);
      this.y = collisionDown.y;
      this.grounded = collisionDown.collides;
    }

    if (input.getKey(input.DOWN)) { }
    if (input.getKey(input.KEY_LEFT)) {
      this.x += -this.speed;
      let collisionLeft = tilemap.checkCollisionX(this.x, this.y, 0, height);
      const remainingMovement = this.x - collisionLeft.x;
      this.x = collisionLeft.x;

      if (remainingMovement && collisionLeft.collides) {
        if (!this.jumping) this.y -= tilemap.tileSize;
        const collisionTop = tilemap.checkCollisionY(this.x, this.y, width, 0);
        if (collisionTop.collides) { this.y += tilemap.tileSize; }
        else {
          this.x += remainingMovement;
          collisionLeft = tilemap.checkCollisionX(this.x, this.y, 0, height);
          if (collisionLeft.collides) {
            if (!this.jumping) this.y += tilemap.tileSize;
            this.x -= remainingMovement;
          }
        }
      }
      else { this.x = collisionLeft.x; }
    }
    if (input.getKey(input.KEY_RIGHT)) {
      this.x += this.speed;
      let collisionRight = tilemap.checkCollisionX(this.x, this.y, width, height);
      const remainingMovement = this.x - collisionRight.x;
      this.x = collisionRight.x;

      if (remainingMovement && collisionRight.collides) {
        if (!this.jumping) this.y -= tilemap.tileSize;
        const collisionTop = tilemap.checkCollisionY(this.x, this.y, width, 0);
        if (collisionTop.collides) { this.y += tilemap.tileSize; }
        else {
          this.x += remainingMovement;
          collisionRight = tilemap.checkCollisionX(this.x, this.y, width, height);
          if (collisionRight.collides) {
            if (!this.jumping) this.y += tilemap.tileSize;
            this.x -= remainingMovement;
          }
        }
      }
      else { this.x = collisionRight.x; }
    }

    // Clamp to make sure player doesn't go outside tilemap
    //this.x = maths.clamp(this.x, 0, tilemap.width - width - 1);
    //this.y = maths.clamp(this.y, 0, tilemap.height - height - 1);
  }

  /** @param {CanvasRenderingContext2D} ctx */
  this.render = (ctx, alpha) => {
    ctx.drawImage(sprites.angler.img, maths.interp(oldX, this.x, alpha), maths.interp(oldY, this.y, alpha), width, height);
    //ctx.strokeRect(this.x, this.y, width, height);
  }

  this.getCenter = () => {
    return { x: this.x + width / 2, y: this.y + height / 2 };
  }
}

export const player = new Player();