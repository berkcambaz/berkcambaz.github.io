import { COUNTRY, game } from "../game.js";

function PanelBottom() {
  const panel = document.getElementById("panel--bottom");

  const worldWidth = document.getElementById("world_width");
  const worldHeight = document.getElementById("world_height");

  const generateButton = document.getElementById("generate_button");
  const startButton = document.getElementById("start_button");

  const greenButton = document.getElementById("green_button");
  const purpleButton = document.getElementById("purple_button");
  const redButton = document.getElementById("red_button");
  const yellowButton = document.getElementById("yellow_button");

  const roundText = document.getElementById("round_text");

  this.init = function () {
    generateButton.addEventListener("click", (ev) => {
      const width = parseInt(worldWidth.value);
      const height = parseInt(worldHeight.value);
      if (width === NaN || height === NaN) return;

      game.generate(4, width, height);
    });

    startButton.addEventListener("click", (ev) => {
      game.start();
    });

    greenButton.addEventListener("click", (ev) => {
      game.changeCountry(game.countries[COUNTRY.GREEN]);
    });

    purpleButton.addEventListener("click", (ev) => {
      game.changeCountry(game.countries[COUNTRY.PURPLE]);
    });

    redButton.addEventListener("click", (ev) => {
      game.changeCountry(game.countries[COUNTRY.RED]);
    });

    yellowButton.addEventListener("click", (ev) => {
      game.changeCountry(game.countries[COUNTRY.YELLOW]);
    });
  }
}

export const panelBottom = new PanelBottom();