import { COUNTRY, game, LANDMARK } from "./game.js";
import { sprites } from "./resources.js";
import { tilemap } from "./tilemap.js";
import { camera } from "./camera.js";

function Util() {
  this.getCountrySprite = function (province) {
    if (province === undefined) {
      console.error(`Invalid province: ${province}`);
      return undefined;
    }

    switch (province.occupiedByCountry && province.occupiedByCountry.id) {
      case COUNTRY.GREEN:
        return sprites.tile_green_occupied.img;
      case COUNTRY.PURPLE:
        return sprites.tile_purple_occupied.img;
      case COUNTRY.RED:
        return sprites.tile_red_occupied.img;
      case COUNTRY.YELLOW:
        return sprites.tile_yellow_occupied.img;
    }

    switch (province.country.id) {
      case COUNTRY.GREEN:
        return sprites.tile_green.img;
      case COUNTRY.PURPLE:
        return sprites.tile_purple.img;
      case COUNTRY.RED:
        return sprites.tile_red.img;
      case COUNTRY.YELLOW:
        return sprites.tile_yellow.img;
    }
  }

  this.getLandmarkSprite = function (province) {
    if (province === undefined) {
      console.error(`Invalid province: ${province}`);
      return undefined;
    }

    switch (province.landmark.id) {
      case LANDMARK.NONE:
        return undefined;
      case LANDMARK.CAPITAL:
        return sprites.landmark_capital.img;
      case LANDMARK.CHURCH:
        return sprites.landmark_church.img;
      case LANDMARK.FOREST:
        return sprites.landmark_forest.img;
      case LANDMARK.HOUSE:
        return sprites.landmark_house.img;
      case LANDMARK.MOUNTAINS:
        return sprites.landmark_mountains.img;
      case LANDMARK.TOWER:
        return sprites.landmark_tower.img;
    }
  }

  this.getArmySprite = function (province) {
    if (province === undefined) {
      console.error(`Invalid province: ${province}`);
      return undefined;
    }

    switch (province.army.id) {
      case COUNTRY.NONE:
        return undefined;
      case COUNTRY.GREEN:
        return sprites.army_green_small.img;
      case COUNTRY.PURPLE:
        return sprites.army_purple_small.img;
      case COUNTRY.RED:
        return sprites.army_red_small.img;
      case COUNTRY.YELLOW:
        return sprites.army_yellow_small.img;
    }
  }

  this.provinceToInfo = function (province) {
    const info = { provinceName: "", occupiedName: "", landmarkName: "", armyName: "" };

    if (province === undefined) {
      console.error(`Invalid province: ${province}`);
      return info;
    }

    switch (province.country.id) {
      case COUNTRY.GREEN:
        info.provinceName = "Green's Province";
        break;
      case COUNTRY.PURPLE:
        info.provinceName = "Purple's Province";
        break;
      case COUNTRY.RED:
        info.provinceName = "Red's Province";
        break;
      case COUNTRY.YELLOW:
        info.provinceName = "Yellow's Province";
        break;
    }

    switch (province.occupiedByCountry.id) {
      case COUNTRY.NONE:
        info.occupiedName = "Unoccupied";
        break;
      case COUNTRY.GREEN:
        info.occupiedName = "Occupied by Green";
        break;
      case COUNTRY.PURPLE:
        info.occupiedName = "Occupied by Purple";
        break;
      case COUNTRY.RED:
        info.occupiedName = "Occupied by Red";
        break;
      case COUNTRY.YELLOW:
        info.occupiedName = "Occupied by Yellow";
        break;
    }

    switch (province.landmark.id) {
      case LANDMARK.NONE:
        info.landmarkName = "No Landmark";
        break;
      case LANDMARK.CAPITAL:
        info.landmarkName = "Capital";
        break;
      case LANDMARK.CHURCH:
        info.landmarkName = "Church";
        break;
      case LANDMARK.FOREST:
        info.landmarkName = "Forest";
        break;
      case LANDMARK.HOUSE:
        info.landmarkName = "House";
        break;
      case LANDMARK.MOUNTAINS:
        info.landmarkName = "Mountains";
        break;
      case LANDMARK.TOWER:
        info.landmarkName = "Tower";
        break;
    }

    switch (province.army.id) {
      case COUNTRY.NONE:
        info.armyName = "No Army";
        break;
      case COUNTRY.GREEN:
        info.armyName = "Green's Army";
        break;
      case COUNTRY.PURPLE:
        info.armyName = "Purple's Army";
        break;
      case COUNTRY.RED:
        info.armyName = "Red's Army";
        break;
      case COUNTRY.YELLOW:
        info.armyName = "Yellow's Army";
        break;
    }

    return info;
  }

  this.countryToSrc = function (country) {
    switch (country.id) {
      case COUNTRY.NONE:
        return undefined;
      case COUNTRY.GREEN:
        return sprites.army_green_big.path;
      case COUNTRY.PURPLE:
        return sprites.army_purple_big.path;
      case COUNTRY.RED:
        return sprites.army_red_big.path;
      case COUNTRY.YELLOW:
        return sprites.army_yellow_big.path;
    }
  }

  this.clamp = function (value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

  this.worldToTilePos = function (worldX, worldY) {
    return {
      x: Math.floor((worldX + camera.x * camera.zoom) / (tilemap.tileSize * camera.zoom)),
      y: Math.floor((worldY + camera.y * camera.zoom) / (tilemap.tileSize * camera.zoom))
    }
  }

  this.tilePosToProvince = function (pos) {
    if (pos.x < 0 || pos.x > game.width - 1 || pos.y < 0 || pos.y > game.height - 1)
      return undefined;
    else
      return game.provinces[pos.x + pos.y * game.width];
  }

  this.worldPosToProvince = function (worldX, worldY) {
    return this.tilePosToProvince(this.worldToTilePos(worldX, worldY));
  }
}

export const util = new Util();