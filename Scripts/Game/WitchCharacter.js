class Witch {    
    constructor(array2D, image, x, y, largura, altura, larguraSprite, alturaSprite) {
        this.array2D = array2D;
        this.image = image;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.y = y;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frame = 0;
        this.n = this.array2D.length - 1;


        this.ystart = height -this.altura;
        this.y = this.ystart;
        
        this.jumpSpeed = 0;
        this.gravity = 3;
    }

    showWitch() {
        image(
            this.image, 
            this.x, 
            this.y, 
            this.largura, 
            this.altura, 
            this.array2D[this.frame][0], 
            this.array2D[this.frame][1], 
            this.larguraSprite, 
            this.alturaSprite
        );
            
        this.WitchAnimation();
    }

    WitchAnimation () {
        this.frame++;

        if(this.frame >= this.array2D.length-1){
            this.frame = 0;
        }
    }                
    
    jump() {
        this.jumpSpeed = -50;
    }

    gravityIn(){
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;

        if(this.y > this.ystart){
            this.y = this.ystart;
        }
    }

    colliding(Enemy) {
        const precision = .7;
        const colide = colideRectRect(
            this.x, this.y, this.largura * precision, this.altura * precision,
            rainDrop.x, rainDrop.y, rainDrop.largura * precision, rainDrop.altura * precision
        );

        return colide;
    }
}
