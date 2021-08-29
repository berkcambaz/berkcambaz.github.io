import { game, COUNTRY, LANDMARK } from "./game.js";
import { random } from "./random.js";
import { renderer } from "./renderer.js";
import { sprites } from "./resources.js";
import { util } from "./util.js";

function Tilemap() {
  this.tileSize = 128;
  /** @type {{x: number, y: number}} */
  this.highlightedTilePos = undefined;

  this.generate = function (countries, provinces, countryCount, width, height) {
    const origins = chooseOrigins(countryCount, width, height);

    for (let i = 0; i < countryCount; ++i)
      provinces[origins[i][0].x + origins[i][0].y * width].country = countries[i];

    chooseProvinces(countries, provinces, origins, countryCount, width, height);
    sprinkleNature(provinces, width, height);

    for (let y = 0; y < height; ++y)
      for (let x = 0; x < width; ++x)
        this.draw(provinces[x + y * height]);
  }

  const chooseOrigins = function (countryCount, width, height) {
    const origins = [];

    for (let i = 0; i < countryCount; ++i) {
      origins.push([{ x: random.number(0, width - 1), y: random.number(0, height - 1) }]);
      for (let j = i - 1; j > -1; --j) {
        if (origins[j][0] === origins[i][0]) return chooseOrigins(countryCount, width, height);
      }
    }

    return origins;
  }

  const chooseProvinces = function (countries, provinces, origins, countryCount, width, height) {
    let unoccupiedProvincesLeft = true;
    while (unoccupiedProvincesLeft) {
      unoccupiedProvincesLeft = false;

      for (let countryId = 0; countryId < countryCount; ++countryId) {
        if (origins[countryId].length === 0) continue;

        const originX = origins[countryId][0].x;
        const originY = origins[countryId][0].y;

        const upIndex = (originX) + (originY - 1) * width;
        const rightIndex = (originX + 1) + (originY) * width;
        const downIndex = (originX) + (originY + 1) * width;
        const leftIndex = (originX - 1) + (originY) * width;

        if (originY - 1 > -1 && provinces[upIndex].country.id === COUNTRY.NONE) {
          origins[countryId].push({ x: originX, y: originY - 1 })
          provinces[upIndex].country = countries[countryId];
          //provinces[upIndex].l1 = util.countryIdToSprite(countryId);
        } else if (originX + 1 < width && provinces[rightIndex].country.id === COUNTRY.NONE) {
          origins[countryId].push({ x: originX + 1, y: originY })
          provinces[rightIndex].country = countries[countryId];
          //provinces[rightIndex].l1 = util.countryIdToSprite(countryId);
        } else if (originY + 1 < height && provinces[downIndex].country.id === COUNTRY.NONE) {
          origins[countryId].push({ x: originX, y: originY + 1 })
          provinces[downIndex].country = countries[countryId];
          //provinces[downIndex].l1 = util.countryIdToSprite(countryId);
        } else if (originX - 1 > -1 && provinces[leftIndex].country.id === COUNTRY.NONE) {
          origins[countryId].push({ x: originX - 1, y: originY })
          provinces[leftIndex].country = countries[countryId];
          //provinces[leftIndex].l1 = util.countryIdToSprite(countryId);
        } else {
          origins[countryId].splice(0, 1);
        }

        unoccupiedProvincesLeft |= origins[countryId] !== 0;
      }
    }
  }

  const sprinkleNature = function (provinces, width, height) {
    for (let y = 0; y < height; ++y)
      for (let x = 0; x < width; ++x)
        provinces[x + y * width].landmark.id = random.percent([
          { percent: 10, result: LANDMARK.MOUNTAINS },
          { percent: 15, result: LANDMARK.FOREST },
          { percent: 75, result: LANDMARK.NONE }
        ])
  }

  this.draw = function (province) {
    if (province === undefined) return;
    renderer.buffer(util.getCountrySprite(province), province.x, province.y);
    renderer.buffer(util.getLandmarkSprite(province), province.x, province.y);
    renderer.buffer(util.getArmySprite(province), province.x, province.y);
  }

  this.highlightTile = function (pos) {
    if (this.highlightedTilePos !== pos) {
      if (this.highlightedTilePos !== undefined)
        this.draw(game.provinces[this.highlightedTilePos.x + this.highlightedTilePos.y * game.width]);
      renderer.buffer(sprites.select_white.img, pos.x, pos.y);
      this.highlightedTilePos = pos;
    }
  }
}

export const tilemap = new Tilemap();