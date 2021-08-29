import { game } from "./game.js";
import { renderer } from "./renderer.js";
import { asset } from "./asset.js";
import { input } from "./input.js";
import { ui } from "./ui/ui.js";
import { camera } from "./camera.js";

window.__DEV__ = true;

function init(callback) {
  const todo = 2;
  let done = 0;

  asset.loadSprites(() => { if (++done === todo) callback(); });
  asset.loadSounds(() => { if (++done === todo) callback(); });
}

function loop() {
  window.requestAnimationFrame(loop);

  // UPDATE \\


  // RENDER \\
  renderer.render();
}

init(() => {
  input.init();
  ui.init();
  game.generate(4, 10, 10);

  camera.processZoom(0);

  window.requestAnimationFrame(loop);
});