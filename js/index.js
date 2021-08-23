const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


document.getElementById("game-board").style.display= "none";
document.getElementById('start-button').onclick = () => {
document.getElementById("game-board").style.display= "block";
  startGame();
};


//const player1 = new Car(225, 575);
let currentGame;

function startGame() {
 context.clearRect(0, 0, context.clientWidth, context.clientHeight)
 currentGame.car = new Car ();
 currentGame.car.draw();
 updateCanvas();
};

function updateCanvas() {
  game.clear();
  player1.draw();
  drawObstacles();
  checkGameOver();
  game.score();
}


document.addEventListener("keydown", (e) => {
  currentGame.car.moveCar(e.key);
});


functon detectCollision(obstacle) {
  return !(
     currentGame.car.left() > obstacle.left() ||
     currentGame.car.right() > obstacle.left() ||
     currentGame,e

  )
}

let interval;

class game {
  constructor () {
    this.car = {};
    this.obstacles = [];
    this.score = 0;
    this.obstaclesFrequency = 0;
    this.gameover = false;
    this.animationID = null;
  }
}

class Component {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedY = 0;
    this.speedX = 0;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
  
    this.y = 5
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(car) {
    return !(
      this.bottom() < car.top() ||
      this.top() > car.bottom() ||
      this.right() < car.left() ||
      this.left() > car.right()
    );
  }
}
















 
function checkGameOver() {
    const crashed = game.obstacles.some((obstacle) => {
        return player1.crashWith(obstacle) === true;
    });

    if (crashed) {
        game.stop()
        
}
}


