class Enemy extends Animation {
    constructor(rainDropArray2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite, speed){
        super(rainDropArray2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite);   

        this.speed = speed;    
        this.x = width;  
    }    
    
    moveLeft() {
        this.x -= this.speed;        
    }
    
    show(){        
        this.x = width;
    }

}