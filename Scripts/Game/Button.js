class Button {
    constructor (text, textX, textY) {
        this.text = text;
        this.textX = textX;
        this.textY = textY;

        this.button = createButton(this.text);
        this.button.addClass('botao-tela-inicial')
        
        this.button.mousePressed(()=> this._changeScreen());

        
    }

    draw(){
        this.button.position(this.textX, this.textY);
        this.button.center('horizontal')
    }

    _changeScreen(){
        this.button.remove()
        sceneScreen = 'game'
    }
}