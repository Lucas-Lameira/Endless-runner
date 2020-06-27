class Life {
    constructor(maxLife, minLife){
        this.maxLife = maxLife;
        this.minLife = minLife;
        
        this.life = this.minLife;

        this.largura = 50;
        this.altura = 50;
        this.x = 20;
        this.y = 20;
    }

    draw(){
        for(let i =0; i<this.life; i++){
            let margin = i * 35;
            let position = this.x * (i + 1);
            image(lifeImage, position + margin, this.y, this.largura, this.altura);
        }
        
    }

    increaseLife(){
        if(this.life < this.maxLife){
            this.life++
        }
    }

    loseLife(){
        this.life--;
    }

}