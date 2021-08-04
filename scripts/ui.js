import { input } from "./input.js";

function UI() {
  /** @type {HTMLElement[]} */
  const rows = [];
  /** @type {HTMLElement[]} */
  const items = [];
  let inventoryShown = false;

  for (let i = 0; i < 4; ++i) rows[i] = document.getElementById("row" + i);
  for (let i = 0; i < 40; ++i) items[i] = document.getElementById("item" + i);

  this.toggleInventory = () => {
    if (inventoryShown) for (let i = 1; i < 4; ++i) rows[i].classList.add("hide");
    else for (let i = 1; i < 4; ++i) rows[i].classList.remove("hide");
    inventoryShown = !inventoryShown;
  }

  this.update = () => {
    if (input.getKeyDown(input.KEY_INVENTORY)) this.toggleInventory();
  }
}

export const ui = new UI();