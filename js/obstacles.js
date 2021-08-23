function drawObstacles() {
    currentGame.obstclesFrequency++;
    if(currentGame.obstaclesFrequency % 100 === 1) {
        const radnomObstacleX = Math.floor(Math.random() * 450);
        const randomObstacleY = 0;
        const randomObstacleWidth = Math.floor(Math.random() * (50 - 20 + 1));
        const randomObstacleHeight = Math.floor(Math.random() * (50 - 20 + 1) +20);

        const newObstacle = new Obstacle(
             randomObstacleX,
             randomObstacleY,
             randomObstacleWidth,
             randomObstacleHeight 
        );

        currentGame.obsacles.push(newObstacle);
    }
    
    currentGame.obstacles.forEach((obstacle) => {
        obstacle.y += 1
        obstacle.draw();
    }

     if (obstacle.y)
    
    
    
    /*game.obstacles.forEach((obstacle) => {
      obstacle.y += 1;
      obstacle.draw();
    });
  
    game.frames++;
  
    if (game.frames % 120 === 0) {
      const minWidth = 150;
      const maxWidth = 150;
      const randomWidth = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth);
  
      const minGap = 180;
      const maxGap = 250;
      const randomGap = Math.floor(
        Math.random() * (maxGap - minGap + 1) + minGap);
  
      //Create Right obstacle
      const obstacleRight = new Component(
        canvas.clientWidth,
        0,
        -randomWidth,
        30,
        "red"
      );
      setInterval(() => { 
        game.obstacles.push(obstacleRight);
      }, 100);
  
      //Create Left obstacle
      const obstacleLeft= new Component(
        0,
        0,
        randomWidth,
        30,
        "red"
      );
      
      setInterval(() => { 
        game.obstacles.push(obstacleLeft);
      }, 300);
  
      console.log(game.obstacles);
    }
  }
  