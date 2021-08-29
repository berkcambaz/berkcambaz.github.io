import { util } from "../util.js";

function PanelTop() {
  const panel = document.getElementById("panel--top");

  const countryImage = document.getElementById("country_image");

  const goldText = document.getElementById("gold_text");
  const incomeText = document.getElementById("income_text");
  const armyText = document.getElementById("army_text");
  const manpowerText = document.getElementById("manpower_text");

  this.init = function () {
    panel.classList.remove("hide");
  }

  this.changeCountry = function (country) {
    countryImage.src = util.countryToSrc(country);
  }

  this.update = function (country) {
    goldText.textContent = country.gold;
    incomeText.textContent = country.income;
    armyText.textContent = country.army;
    manpowerText.textContent = country.manpower;
  }
}

export const panelTop = new PanelTop();