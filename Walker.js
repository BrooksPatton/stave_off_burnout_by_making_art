class Walker {
  constructor() {
    this.size = 1;
    this.isDead = false;
  }

  updateColor() {
    if(this.generateMonteCarloRandomNumber() < 0.01) {
      this.red = Math.floor(random(0, 256));
      this.green = Math.floor(random(0, 256));
      this.blue = Math.floor(random(0, 256));
    }
  }

  generateMonteCarloRandomNumber() {
    while (true) {
      const r1 = random();
      const probability = r1;
      const r2 = random();

      if(r2 < probability) {
        return r1;
      }
    }
  }
}
