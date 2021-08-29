import { panelTop } from "./panel_top.js";
import { panelSide } from "./panel_side.js";
import { panelBottom } from "./panel_bottom.js";
import { chat } from "./chat.js";

function UI() {
  this.init = function () {
    panelTop.init();
    panelSide.init();
    panelBottom.init();
    chat.init();
  }
}

export const ui = new UI();