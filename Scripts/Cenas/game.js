class Game {
    constructor() {
        this.index = 0;
        
        this.arrayMap = fita.arrayMap;
    }

    setup (){
        score = new Score();        
        lifes = new Life(fita.witchLife.maxLife, fita.witchLife.minLife);

        witch = new Witch(witchArray2D, witchImage, 30, 30, 110, 110, 220, 270);
    
        const rainDrop = new Enemy(enemyArray2D, rainDropImage, width - 52, 30, 52, 52, 104, 104, 10);
    
        const troll = new Enemy(trollArray2D, trollImage, width, 0, 200, 200, 400, 400, 10);
    
        const flyingDrop = new Enemy(flyingDropArray2D, flyingDropImage, width-52, 200, 100, 75, 200, 150, 10);
    
        const flyingDrop1 = new Enemy(flyingDropArray2D, flyingDropImage, width-52, 400, 100, 75, 200, 150, 10);
        
        enemies.push(rainDrop, troll, flyingDrop, flyingDrop1);
    
    }

    keyPressed(key) 
    {
        if(key === 'ArrowUp')
         witch.jumps();    
    }

    draw(){

        scenario.show();    
        scenario.moveScenario();        
        lifes.draw();
        score.showScore();
        score.increaseScore();
        witch.showWitch();
        witch.gravityIn();  

        const line = this.arrayMap[this.index]
        const enemy = enemies[line.enemy];
        const visibleEnemy = enemy.x < - enemy.largura;
        
        enemy.showCharacter();
        enemy.moveLeft();                
                        
        enemy.speed = line.speed;
        
        if(visibleEnemy){
            enemy.show();
            this.index++;
            if(this.index > this.arrayMap.length -1){
                this.index = 0;                
            }
        }    

        if(witch.colliding(enemy)){
            lifes.loseLife();
            witch.Invincible();
            
            if(lifes.life === 0){
                image(gameOverImage, width/2 - 200, height/3)
                noLoop();
            }
        }
        
    }
}
