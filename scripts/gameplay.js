function Gameplay() {
  this.playerCountry = undefined;
  this.aiCountries = [];

  this.changeCountry = function (playerCountry, aiCountries) {
    this.playerCountry = playerCountry;
    this.aiCountries = aiCountries;
  }
}

export const gameplay = new Gameplay();