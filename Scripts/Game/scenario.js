class Scenario {
    constructor(image, speed){
        this.image = image;
        this.speed = speed;
        this.speedX1 = 0;
        this.speedX2 = width;//canvas width
    }

    show(){
        image(this.image, this.speedX1, 0, width, height); 
        image(this.image, this.speedX2, 0, width, height);    
    }

    //move scenario left
    moveScenario(){
        this.speedX1 = this.speedX1 - this.speed;//- flows to the right
        this.speedX2 = this.speedX2 - this.speed;

        if(this.speedX1 < -width){
            this.speedX1 = width;
        }
        if(this.speedX2 < -width){
            this.speedX2 = width;
        }
    }
}