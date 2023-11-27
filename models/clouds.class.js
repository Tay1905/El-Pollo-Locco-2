class Cloud extends MovableObject{
   speed = 0.15;
    
    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 500;
        this.animate();
        this.width = 550;
        this.height = 500;
        this.y = 0;
    }

    animate(){
        this.moveLeft();
    }


  
}