class RandomWalk {
  constructor(location) {
    this.location = location;
    this.size = 1;
    this.isDead = false;
  }

  draw() {
    point(this.location.x, this.location.y);
  }

  update() {
    const rand = Math.floor(random(4));
    if(rand === 0) {
      this.location.y -= this.size;
    } else if(rand === 1) {
      this.location.x += this.size;
    } else if(rand === 2) {
      this.location.y += this.size;
    } else {
      this.location.x -= this.size;
    }

    if(this.location.x < 0) {
      this.isDead = true;
    } else if(this.location.x > width) {
      this.isDead = true;
    }

    if(this.location.y < 0) {
      this.isDead = true;
    } else if(this.location.y > height) {
      this.isDead = true;
    }
  }
}
