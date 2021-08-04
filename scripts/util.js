import { tilemap } from "./tilemap.js";

function Util() {
  this.worldToTilePos = (x, y) => {
    return { x: Math.floor(x / tilemap.tileSize), y: Math.floor(y / tilemap.tileSize) };
  };

  this.tileToWorldPos = (x, y) => {
    return { x: x * tilemap.tileSize, y: y * tilemap.tileSize };
  }
}

export const util = new Util();