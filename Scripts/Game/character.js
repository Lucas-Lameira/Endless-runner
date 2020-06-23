class Character {
    constructor(image) {
        this.image = image;

        this.array2D = [
            [0,0],
            [220,0],
            [440,0],
            [660,0],
            [0,270],
            [220,270],
            [440,270],
            [660,270],
            [0,540],
            [220,540],
            [440,540],
            [660,540],
            [0,810],
            [220,810],
            [440,810],
            [660,810],
        ]

        this.frame = 0;

        this.n = this.array2D.length - 1;
    }

    showCharacter() {
        image(this.image, 0, height - witchHeight - 20 , witchHeight, WitchWidth
            ,this.array2D[this.frame][0], this.array2D[this.frame][1] 
            ,220, 270);

            this.animation();
    }

    animation () {
        this.frame++;

        if(this.frame >= this.n){
            this.frame = 0;
        }
    }
}
