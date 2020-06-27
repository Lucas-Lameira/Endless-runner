function preload() 
{
    fita = loadJSON('/Cartucho/cartucho.json');
    startScreenImage = loadImage('/imagens/assets/telaInicial.png');
    fontScreen = loadFont('imagens/assets/fonteTelaInicial.otf');
    scenarioImage = loadImage('imagens/cenario/floresta.png');
    lifeImage = loadImage('imagens/assets/coracao.png');
    gameOverImage = loadImage('imagens/assets/game-over.png')
    witchImage = loadImage('imagens/personagem/witch.png');
    rainDropImage = loadImage('imagens/inimigos/gotinha.png');
    trollImage = loadImage('imagens/inimigos/troll.png');
    flyingDropImage = loadImage('imagens/inimigos/gotinha-voadora.png');
}


function setup()
{    
    createCanvas(windowWidth, windowHeight);
    frameRate(48)   
    
    scenario = new Scenario(scenarioImage, 2);    
    button = new Button('Start', width/2, height/2);
    
    game = new Game();
    start = new Start();
    game.setup();
    
    scenes = {
        game,
        start,
    }

}

function keyPressed() 
    {
        game.keyPressed(key);
    }


function draw() 
{    
    scenes[sceneScreen].draw();
}