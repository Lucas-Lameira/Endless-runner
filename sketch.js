//Image variables
let imageScenario;
let gameOverImage;

//rainDrop
let rainDrop;
let rainDropImage;
let rainDropEixoX = 72
let rainDropEixoy = 52;
let rainDropAlturaLargura = 52;
let rainDropAltura_larguraSprite = 104;
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

//Witch config
let witch;
let witchImage;
let witchHeight = 110;
let witchWidth = 135;
let witchEixoX = 0;
let witchEixoY = 20;
let witchWidthSprite = 220;
let witchHeightSprite = 270;
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


//troll cconfig
let troll;
let trollImage;
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

let flyingDrop;
let flyingDropImage;
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


let score;

//p5.prototype.registerPreloadMethod('loadSound'); 
//musica = loadSound('sons/poxa.mp3');
//musica.loop();
function preload() 
{
    
    imageScenario = loadImage('imagens/cenario/floresta.png');
    gameOverImage = loadImage('imagens/assets/game-over.png')
    witchImage = loadImage('imagens/personagem/witch.png');
    rainDropImage = loadImage('imagens/inimigos/gotinha.png');
    trollImage = loadImage('imagens/inimigos/troll.png');
    flyingDropImage = loadImage('imagens/inimigos/gotinha-voadora.png');
}


function setup()
{    
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imageScenario, 2);
    score = new Score();

    
    witch = new Witch(
        witchArray2D, 
        witchImage,
        witchEixoX,
        height - witchHeight -witchEixoY,
        witchWidth,
        witchHeight,
        witchHeightSprite,
        witchWidthSprite    
    );


    rainDrop = new Enemy(    
        enemyArray2D, 
        rainDropImage, 
        width - rainDropEixoX, 
        height - rainDropEixoy, 
        rainDropAlturaLargura, 
        rainDropAlturaLargura, 
        rainDropAltura_larguraSprite, 
        rainDropAltura_larguraSprite
    );

    troll = new Enemy(
        trollArray2D, 
        trollImage, 
        width, 
        height-200, 
        200, 
        200, 
        400, 
        400
    );

    flyingDrop = new Enemy(
        flyingDropArray2D, 
        flyingDropImage,
        width-52,
        200,
        100,
        75,
        200,
        150
    );    

}


function keyPressed() {
    if(key === 'ArrowUp'){
        witch.jump();
    }
}

function draw() 
{
    scenario.show();    
    scenario.moveScenario();
    
    score.showScore();
    score.increaseScore();

    rainDrop.showCharacter();
    rainDrop.moveLeft();
    
    troll.showCharacter();
    troll.moveLeft();

    flyingDrop.showCharacter();
    flyingDrop.moveLeft();

    
    witch.showWitch();
    witch.gravityIn();  
    /*
    if(witch.colliding(rainDrop)){
        image(gameOverImage, width/2 - 200, height/2)
        noLoop();
    }
    */
    
}