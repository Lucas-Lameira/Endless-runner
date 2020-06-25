class Score {
    constructor(){
        this.score = 0;
    }

    showScore(){
        textAlign(RIGHT);
        fill('#FFF')
        textSize(100)
        text(
            parseInt(this.score), 
            width-50, 
            110//eixo y
        )
    }

    increaseScore(){
        this.score+= 0.05;
    }
}