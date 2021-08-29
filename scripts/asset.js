import { sprites, sounds } from "./resources.js";

function Asset() {
  this.loadSprites = (callback) => {
    let spriteCount = Object.keys(sprites).length;
    let loadedSpriteCount = 0;

    for (const key in sprites) {
      const src = "/sprites" + sprites[key].path + key + ".png";
      const img = new Image();
      img.onload = () => { if (++loadedSpriteCount === spriteCount) callback(); };
      img.src = src;
      sprites[key].img = img;
      sprites[key].path = src;
    }
  }

  this.loadSounds = (callback) => {
    callback();
  }
}

export const asset = new Asset();