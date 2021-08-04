function Maths() {
  this.interp = (a, b, amount) => {
    return (b - a) * amount + a;
  }

  this.clamp = (value, min, max) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  }
}

export const maths = new Maths();