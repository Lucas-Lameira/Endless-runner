class Score {
    constructor(){
        this.score = 0;
    }
    
    showScore(){
        textAlign(RIGHT);
        fill('#ff5100')
        textSize(100)
        text(
            parseInt(this.score), 
            width-50, //eixo x
            110//eixo y
        )
    }
    //frame Based?
    increaseScore(){
        this.score+= 0.05;
    }
}