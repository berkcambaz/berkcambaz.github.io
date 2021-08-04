import { tilemap } from "./tilemap.js";

function Physics() {
  this.box_point = (x1, y1, w1, h1, x2, y2) => {
    return x2 >= x1 && x2 <= x1 + w1 && y2 >= y1 && y2 <= y1 + h1;
  }

  this.box_box = (x1, y1, w1, h1, x2, y2, w2, h2) => {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
  }

  this.box_tile = (x1, y1, w1, h1, x2, y2) => {
    x2 = Math.floor(x2 / tilemap.tileSize) * tilemap.tileSize;
    y2 = Math.floor(y2 / tilemap.tileSize) * tilemap.tileSize;
    return x1 < x2 + tilemap.tileSize && x1 + w1 > x2 && y1 < y2 + tilemap.tileSize && y1 + h1 > y2;
  }
}

export const physics = new Physics();