import { camera } from "./camera.js";
import { tilemap } from "./tilemap.js";

function Renderer() {
  /** @type {HTMLCanvasElement} */
  const mainCanvas = document.getElementById("main");
  const mainCtx = mainCanvas.getContext("2d");

  mainCanvas.width = camera.w;
  mainCanvas.height = camera.h;

  const bufferCanvas = document.createElement("canvas");
  const bufferCtx = bufferCanvas.getContext("2d");

  this.render = function () {
    mainCtx.clearRect(0, 0, camera.w, camera.h);
    mainCtx.drawImage(bufferCanvas, camera.x, camera.y, camera.w, camera.h, 0, 0, camera.w, camera.h);
  }

  this.buffer = function (img, x, y) {
    if (img !== undefined) bufferCtx.drawImage(img, x * tilemap.tileSize, y * tilemap.tileSize);
  }

  /**
   * 
   * @param {number} w Width of tiles not in pixel coordinates.
   * @param {number} h Height of tiles not in pixel coordinates.
   */
  this.init = function (w, h) {
    bufferCanvas.width = w * tilemap.tileSize;
    bufferCanvas.height = h * tilemap.tileSize;
  }

  this.getCanvas = function () { return mainCanvas; }
}

export const renderer = new Renderer();