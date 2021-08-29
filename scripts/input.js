import { camera } from "./camera.js";
import { renderer } from "./renderer.js";
import { tilemap } from "./tilemap.js";
import { panelSide } from "./ui/panel_side.js";
import { panelTop } from "./ui/panel_top.js";
import { util } from "./util.js";

function Input() {
  this.mouse = { x: 0, y: 0, pressed: false, moved: false };

  this.init = function () {
    const canvas = renderer.getCanvas();
    canvas.addEventListener("mousemove", (ev) => {
      if (this.mouse.pressed) {
        camera.x += (this.mouse.x - ev.x) / camera.zoom;
        camera.y += (this.mouse.y - ev.y) / camera.zoom;

        this.mouse.moved = true;
      }

      this.mouse.x = ev.x;
      this.mouse.y = ev.y;

      tilemap.highlightTile(util.worldToTilePos(this.mouse.x, this.mouse.y));
    });

    canvas.addEventListener("touchmove", (ev) => {
      ev.preventDefault();

      const x = ev.touches[0].clientX;
      const y = ev.touches[0].clientY;

      if (this.mouse.pressed) {
        camera.x += (this.mouse.x - x) / camera.zoom;
        camera.y += (this.mouse.y - y) / camera.zoom;

        this.mouse.moved = true;
      }

      this.mouse.x = x;
      this.mouse.y = y;

      tilemap.highlightTile(util.worldToTilePos(this.mouse.x, this.mouse.y));
    })

    canvas.addEventListener("mousedown", (ev) => {
      this.mouse.pressed = true;
    });

    canvas.addEventListener("touchstart", (ev) => {
      ev.preventDefault();

      const rect = renderer.getCanvas().getBoundingClientRect();
      this.mouse.x = ev.touches[0].clientX - rect.left;
      this.mouse.y = ev.touches[0].clientY - rect.top;

      this.mouse.pressed = true;
    })

    canvas.addEventListener("mouseup", (ev) => {
      if (!this.mouse.moved)
        panelSide.toggle(util.worldPosToProvince(this.mouse.x, this.mouse.y));

      this.mouse.pressed = false;
      this.mouse.moved = false;
    });

    canvas.addEventListener("touchend", (ev) => {
      ev.preventDefault();

      if (!this.mouse.moved)
        panelSide.toggle(util.worldPosToProvince(this.mouse.x, this.mouse.y));

      this.mouse.pressed = false;
      this.mouse.moved = false;
    })

    canvas.addEventListener("wheel", (ev) => {
      camera.processZoom(ev.wheelDelta);

      tilemap.highlightTile(util.worldToTilePos(this.mouse.x, this.mouse.y));
    });

    canvas.addEventListener("mouseleave", (ev) => {
      this.mouse.pressed = false;
    })

    canvas.addEventListener("touchcancel", (ev) => {
      ev.preventDefault();

      this.mouse.pressed = false;
    })
  }
}

export const input = new Input();