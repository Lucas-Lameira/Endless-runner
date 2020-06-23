//Image variables
let imageScenario;
let witchImage;

//Enemies Image
let enemyImage;
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
let witchHeight = 110;
let WitchWidth = 135;
//class related
let scenario;
//Character Related
let character;

//p5.prototype.registerPreloadMethod('loadSound'); 
//musica = loadSound('sons/poxa.mp3');
//musica.loop();
function preload() 
{
    
    imageScenario = loadImage('imagens/cenario/floresta.png');
    witchImage = loadImage('imagens/personagem/witch.png');
    enemyImage = loadImage('imagens/inimigos/gotinha.png');
}

function setup()
{    
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imageScenario, 2);
    character = new Character(witchImage);
    enemy = new Enemy(enemyArray2D, enemyImage, width -50, 52, 52, 104, 104);
}

function draw() 
{
    scenario.show();    
    scenario.moveScenario();

    character.showCharacter()

    enemy.showCharacter()
    
}