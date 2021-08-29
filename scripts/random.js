function Random() {
  /**
   * 
   * @param {number} min Minimum number, inclusive.
   * @param {number} max Maximum number, inclusive.
   */
  this.number = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * 
   * @param {{percent: number, result: any}[]} cases 
   */
  this.percent = function (cases) {
    if (window.__DEV__) {
      let totalPercent = 0;
      for (let i = 0; i < cases.length; ++i) totalPercent += cases[i].percent;
      if (totalPercent !== 100) console.error("Total percentage of cases must be equal to 100!");
    }

    const percentage = this.number(0, 99);
    let previousPercent = 0;
    for (let i = 0; i < cases.length; ++i) {
      if (previousPercent - 1 < percentage && percentage < previousPercent + cases[i].percent) {
        return cases[i].result;
      }

      previousPercent += cases[i].percent;
    }
  }
}

export const random = new Random();