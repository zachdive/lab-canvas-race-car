class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
  
        const car = new Image();
        car.src = './images/car.png';
        car.onload = () => {
            this.image = car;
            this.draw();
        };
    }
  
    draw() {
        context.drawImage(this.image, this.x, this.y, 50, 50)
    }
  
    moveCar(key) {
      context.clearRect(this.x, this.y, this.width, this.height);
      switch(key) {
         case "ArrowLeft":
           if (this.x > this. width) {
             this.x -=10
           }
           break;
           case "ArrowRight":
           if (this.x < canvas.clientWidth - this.width) {
             this.x+=10
           }
           break;
        }
    }
}
      