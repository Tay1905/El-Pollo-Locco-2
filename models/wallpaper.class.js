class Wallpaper extends MovableObject{

    
    
    constructor(imagePath, x, y){
        super().loadImage(imagePath)
       this.width = 720;
       this.height = 480;
       this.x = x;
       this.y = y;
       

        
    }
}