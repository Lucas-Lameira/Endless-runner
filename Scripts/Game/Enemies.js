class Enemy extends Animation {
    constructor(rainDropArray2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite){
        super(rainDropArray2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite);   

        this.enemySpeed = 6;
    }    
    
    moveLeft() {
        this.x = this.x - this.enemySpeed;

        if(this.x < -this.largura){
            this.x = width;
        }
    }

}