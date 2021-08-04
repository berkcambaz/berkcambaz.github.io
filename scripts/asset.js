import { sprites, sounds } from "./resources.js";

function Asset() {
  this.loadSprites = (callback) => {
    let spriteCount = Object.keys(sprites).length;
    let loadedSpriteCount = 0;
    let id = 0;

    for (const key in sprites) {
      const img = new Image();
      img.onload = () => { if (++loadedSpriteCount === spriteCount) callback(); };
      img.src = "/sprites" + (sprites[key].path === "/" ? sprites[key].path : sprites[key].path + "/") + key + ".png";
      sprites[key].img = img;
      sprites[key].id = id++;
    }
  }

  this.loadSounds = (callback) => {
    callback();
  }
}

export const asset = new Asset();