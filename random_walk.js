const walkers = [];

function setup() {
  createCanvas(900, 700);
  const numWalkers = 1500;
  for(let i = 0; i < numWalkers; i++) {
    createRandomWalker();
  }
}

function draw() {
  walkers.forEach((walker, i) => {
    walker.draw();
    walker.update();
    if(walker.isDead) {
      walkers.splice(i, 1);
      //console.info('walker died');
    }
  });
}

function createRandomWalker() {
  const x = random(0, width);
  const y = random(0, height);
  const location = createVector(x, y);
  walkers.push(new RandomWalk(location));
}
