class Animation {
    constructor(array2D, image, x, largura, altura, larguraSprite, alturaSprite) {
        this.array2D = array2D;
        this.image = image;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frame = 0;
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

        if(this.frame >= this.n){
            this.frame = 0;
        }
    }
}