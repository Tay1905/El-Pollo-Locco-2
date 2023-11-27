class DrawableObject{

    x = 120;
    y = 250;
    img;
    width = 100;
    height = 450;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
      }

      draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }


      loadImages(array) {
        array.forEach((path) => {
          let img = new Image();
          img.src = path;
          img.style = 'transform: scaleX(-1)';
          this.imageCache[path] = img;
        });
      }
      
        drawFrame(ctx){
    if (this instanceof Character || this instanceof Chicken ) {
      
    
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    }
  }
    
}