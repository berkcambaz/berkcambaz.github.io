import { renderer } from "./renderer.js";
import { util } from "./util.js";

function Camera() {
  this.x = 0;
  this.y = 0;

  this.w = window.innerWidth;
  this.h = window.innerHeight;

  this.zoom = 0.5;
  let zoomPointX = window.innerWidth / (this.zoom * 2);
  let zoomPointY = window.innerHeight / (this.zoom * 2);

  window.addEventListener("resize", (ev) => {
    const canvas = renderer.getCanvas();
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.setTransform(this.zoom, 0, 0, this.zoom, 0, 0);

    this.w = window.innerWidth / this.zoom;
    this.h = window.innerHeight / this.zoom;

    zoomPointX = window.innerWidth / (this.zoom * 2);
    zoomPointY = window.innerHeight / (this.zoom * 2);
  });

  this.processZoom = function (wheelDelta) {
    const dt = Math.sign(wheelDelta) * 0.05;
    this.zoom = util.clamp(this.zoom + dt, 0.50, 1.25);

    const canvas = renderer.getCanvas();
    const ctx = canvas.getContext("2d");

    ctx.setTransform(this.zoom, 0, 0, this.zoom, 0, 0);

    const newZoomPointX = window.innerWidth / (this.zoom * 2);
    const newZoomPointY = window.innerHeight / (this.zoom * 2);

    this.x -= -zoomPointX + newZoomPointX;
    this.y -= -zoomPointY + newZoomPointY;

    zoomPointX = newZoomPointX;
    zoomPointY = newZoomPointY;

    this.w = window.innerWidth / this.zoom;
    this.h = window.innerHeight / this.zoom;
  }
}

export const camera = new Camera();