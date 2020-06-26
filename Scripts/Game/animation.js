class Animation {
    constructor(array2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite) {
        this.array2D = array2D;
        this.image = image;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.yVar = yVar;
        this.y = height - this.altura - this.yVar;//eixo y dos inimigos
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frame = 0;
        //this.n = this.array2D.length - 1;
    }

    showCharacter() {
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
            
        this.animation();
    }

    animation () {
        this.frame++;

        if(this.frame >= this.array2D.length-1){
            this.frame = 0;
        }
    }
}