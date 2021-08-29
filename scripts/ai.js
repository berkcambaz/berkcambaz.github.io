import { game, LANDMARK } from "./game.js";
import { gameplay } from "./gameplay.js";
import { renderer } from "./renderer.js";
import { sprites } from "./resources.js";
import { util } from "./util.js";

function AI() {
  this.chooseCapital = function () {
    for (let i = 0; i < gameplay.aiCountries.length; ++i) {
      const safetyMap = this.generateSafetyMap(gameplay.aiCountries[i]);
      const safestProvince = this.findSafestProvince(safetyMap, true);
      safestProvince.landmark.id = LANDMARK.CAPITAL;
      renderer.buffer(sprites.landmark_capital.img, safestProvince.x, safestProvince.y);
    }
  }

  this.generateSafetyMap = function (country) {
    const map = [];

    for (let y = 0; y < game.height; ++y) {
      for (let x = 0; x < game.width; ++x) {
        const index = x + y * game.width;
        map[index] = 0;

        const origins = [{ x: x, y: y, multiplier: game.width * game.height }];
        const visited = [];

        let unoccupiedProvincesLeft = true;
        while (unoccupiedProvincesLeft) {
          unoccupiedProvincesLeft = false;

          if (origins.length === 0) continue;

          const originX = origins[0].x;
          const originY = origins[0].y;
          const multiplier = origins[0].multiplier;

          const upIndex = (originX) + (originY - 1) * game.width;
          const rightIndex = (originX + 1) + (originY) * game.width;
          const downIndex = (originX) + (originY + 1) * game.width;
          const leftIndex = (originX - 1) + (originY) * game.width;

          const province = util.tilePosToProvince({ x: originX, y: originY });
          if (province.country.id === country.id) {
            map[index] += multiplier;

            switch (province.landmark.id) {
              case LANDMARK.NONE: break;
              case LANDMARK.FOREST: map[index] += 1 * multiplier; break;
              case LANDMARK.MOUNTAINS: map[index] += 2 * multiplier; break;
            }
          } else {
            map[index] -= multiplier;

            switch (province.landmark.id) {
              case LANDMARK.NONE: break;
              case LANDMARK.FOREST: map[index] -= 1 * multiplier; break;
              case LANDMARK.MOUNTAINS: map[index] -= 2 * multiplier; break;
            }
          }

          if (originY - 1 > -1 && !visited[upIndex]) {
            origins.push({ x: originX, y: originY - 1, multiplier: multiplier - 1 })
            visited[upIndex] = true;
          } else if (originX + 1 < game.width && !visited[rightIndex]) {
            origins.push({ x: originX + 1, y: originY, multiplier: multiplier - 1 })
            visited[rightIndex] = true;
          } else if (originY + 1 < game.height && !visited[downIndex]) {
            origins.push({ x: originX, y: originY + 1, multiplier: multiplier - 1 })
            visited[downIndex] = true;
          } else if (originX - 1 > -1 && !visited[leftIndex]) {
            origins.push({ x: originX - 1, y: originY, multiplier: multiplier - 1 })
            visited[leftIndex] = true;
          } else {
            origins.splice(0, 1);
          }

          unoccupiedProvincesLeft |= origins !== 0;
        }
      }
    }

    return map;
  }

  /*
  this.generateSafetyMap = function (country) {
    const map = [];

    for (let y = 0; y < game.height; ++y) {
      for (let x = 0; x < game.width; ++x) {
        const index = x + y * game.width;
        map[index] = 0;

        const provinces = [
          util.tilePosToProvince({ x: x, y: y }),
          util.tilePosToProvince({ x: x, y: y - 1 }),
          util.tilePosToProvince({ x: x + 1, y: y }),
          util.tilePosToProvince({ x: x, y: y + 1 }),
          util.tilePosToProvince({ x: x - 1, y: y })
        ];

        for (let i = 0; i < provinces.length; ++i) {
          if (provinces[i] === undefined) continue;

          if (provinces[i].country.id === country.id) {
            map[index] += 1;

            switch (provinces[i].landmark.id) {
              case LANDMARK.NONE: break;
              case LANDMARK.FOREST: map[index] += 1; break;
              case LANDMARK.MOUNTAINS: map[index] += 2; break;
            }
          } else {
            map[index] += -1;

            switch (provinces[i].landmark.id) {
              case LANDMARK.NONE: break;
              case LANDMARK.FOREST: map[index] += -1; break;
              case LANDMARK.MOUNTAINS: map[index] += -2; break;
            }
          }
        }
      }
    }

    return map;
  }
  */

  this.findSafestProvince = function (safetyMap, noLandmark) {
    let safestProvince = undefined;
    let safety = -Infinity;

    for (let y = 0; y < game.height; ++y) {
      for (let x = 0; x < game.width; ++x) {
        const index = x + y * game.width;

        if (noLandmark && game.provinces[index].landmark.id !== LANDMARK.NONE) continue;

        if (safetyMap[index] > safety) {
          safestProvince = game.provinces[index];
          safety = safetyMap[index];
        }
      }
    }

    return safestProvince;
  }
}

export const ai = new AI();