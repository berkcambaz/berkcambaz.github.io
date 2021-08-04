import { tilemap } from "./tilemap.js";
import { player } from "./entities/player.js";
import { asset } from "./asset.js";
import { input } from "./input.js";
import { ui } from "./ui.js";

function init(callback) {
  const calls = 2;
  let callsDone = 0;

  asset.loadSprites(() => { if (++callsDone === calls) callback(); });
  asset.loadSounds(() => { if (++callsDone === calls) callback() });
}

init(() => {
  tilemap.generate(32, 32);

  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let dt = 1000 / 30;

  let currentTime = 0;
  let accumulator = 0;

  let refreshCount = 0;
  let renders = 0;
  let updates = 0;

  function loop(newTime) {
    requestAnimationFrame(loop);

    //if (newTime / 1000 >= refreshCount + 1) {
    //  refreshCount++;
    //  console.log("FPS: " + renders);
    //  console.log("Ticks: " + updates);
    //  renders = 0;
    //  updates = 0;
    //}

    let frameTime = newTime - currentTime;
    currentTime = newTime;
    accumulator += frameTime;

    while (accumulator >= dt) {
      update();
      updates++;
      accumulator -= dt;
    }

    let alpha = accumulator / dt;

    render(alpha);
    renders++;
  }

  function render(alpha) {
    tilemap.render(ctx);
    player.render(ctx, alpha);
  }

  function update() {
    tilemap.update();
    player.update();
    ui.update();

    input.update();
  }

  requestAnimationFrame(loop);
});