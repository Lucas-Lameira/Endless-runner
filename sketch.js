//GLOBAL GAME VARIABLE
let scenarioImage;
let gameOverImage;
let score; //Class
let gameSound;
let jumpSound;
let gameOverSound;

//WITCH VARIABLE
let witch; //Class
let witchImage;

//Enemies VARIABLES
let rainDropImage; let trollImage; let flyingDropImage;
const enemies = [] ;

//SPRITE 2D_ARRAYS
const witchArray2D = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
]

const enemyArray2D = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
]

const trollArray2D = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
]

const flyingDropArray2D = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
]

function preload() 
{
    scenarioImage = loadImage('imagens/cenario/floresta.png');
    gameOverImage = loadImage('imagens/assets/game-over.png')
    witchImage = loadImage('imagens/personagem/witch.png');
    rainDropImage = loadImage('imagens/inimigos/gotinha.png');
    trollImage = loadImage('imagens/inimigos/troll.png');
    flyingDropImage = loadImage('imagens/inimigos/gotinha-voadora.png');
}


function setup()
{    
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(scenarioImage, 2);
    score = new Score();

    witch = new Witch(witchArray2D, witchImage, 30, 30, 110, 110, 220, 270);

    const rainDrop = new Enemy(enemyArray2D, rainDropImage, width - 52, 30, 52, 52, 104, 104);

    const troll = new Enemy(trollArray2D, trollImage, width, 0, 200, 200, 400, 400);

    const flyingDrop = new Enemy(flyingDropArray2D, flyingDropImage, width-52, 200, 100, 75, 200, 150);

    const flyingDrop1 = new Enemy(flyingDropArray2D, flyingDropImage, width-52, 400, 100, 75, 200, 150);
    
    enemies.push(rainDrop, troll, flyingDrop, flyingDrop1);

    frameRate(45)
}


function keyPressed() 
{
    if(key === 'ArrowUp')
        witch.jumps();    
}

function draw() 
{
    scenario.show();    
    scenario.moveScenario();
    
    score.showScore();
    score.increaseScore();

    witch.showWitch();
    witch.gravityIn();  

    enemies.forEach(enemy => {
        enemy.showCharacter();
        enemy.moveLeft();
    })
    
    
    /*
    if(witch.colliding(enemies)){
        image(gameOverImage, width/2 - 200, height/2)
        noLoop();
    }
    */
}