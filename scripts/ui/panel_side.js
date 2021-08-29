import { util } from "../util.js";

function PanelSide() {
  const panel = document.getElementById("panel--side");

  const provinceName = document.getElementById("province_name");
  const occupiedName = document.getElementById("occupied_name");
  const landmarkName = document.getElementById("landmark_name");
  const armyName = document.getElementById("army_name");

  let currentProvince = undefined;

  this.init = function () {

  }

  this.toggle = function (province) {
    if (currentProvince !== province) {
      currentProvince = province;
      this.update(province);
      this.show();
    } else {
      currentProvince = undefined;
      this.hide();
    }
  }

  this.show = function () {
    panel.classList.remove("hide");
  }

  this.hide = function () {
    panel.classList.add("hide");
  }

  this.update = function (province) {
    const info = util.provinceToInfo(province);
    provinceName.textContent = info.provinceName;
    occupiedName.textContent = info.occupiedName;
    landmarkName.textContent = info.landmarkName;
    armyName.textContent = info.armyName;
  }
}

export const panelSide = new PanelSide();