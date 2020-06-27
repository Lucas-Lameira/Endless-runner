class Start{
    constructor () {}

    draw(){
        this._backdroundImage();
        this._text();
        this._button();
    }

    _backdroundImage() {
        image(startScreenImage, 0, 0, width, height)
    }

    _text () {
        textFont(fontScreen);
        textAlign(CENTER)
        
        textSize(100);
        text('As aventuras de', width/2, 140);
        textSize(130);
        text('Hipsta', width/2, 240);
    }

    _button(){ 
        button.textY = height / 7 * 5;
        button.draw();
    }
}