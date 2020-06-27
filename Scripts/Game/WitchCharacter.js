class Witch {    
    constructor(array2D, image, x, yVar, largura, altura, larguraSprite, alturaSprite) {
        this.array2D = array2D;
        this.image = image;
        this.altura = altura;
        this.x = x;                
        this.yVar = yVar; 
        this.ystart = height - this.altura - this.yVar; //eixo y da bruxa
        this.largura = largura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        
        this.frame = 0;
        this.n = this.array2D.length - 1;

        this.y = this.ystart;

        this.jumpSpeed = 0;
        this.jumpHeight = -50;
        this.gravity = 5;
        this.jumping = 0    
        
        this.invincible = false;
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
    
    jumps() {
        if(this.jumping < 2){            
            this.jumpSpeed = this.jumpHeight;
            this.jumping++;
        }
        
    }

    gravityIn(){
        this.y += this.jumpSpeed;
        
        this.jumpSpeed += this.gravity;
        
        if(this.y > this.ystart)
        {
            this.y = this.ystart;
            this.jumping = 0;
        }
    }

    Invincible (){
        this.invincible = true;
        setTimeout(()=> {this.invincible = false} , 1000)
    }   
    
    colliding(enemy) { 
        
        if (this.invincible){
            return false;
        }
        const precision = 0.7;
        const b = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precision, 
            this.altura * precision,
            enemy.x, 
            enemy.y, 
            enemy.largura * precision, 
            enemy.altura * precision
            
        );     
        return b;       
    }
    
}
