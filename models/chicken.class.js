class Chicken extends MovableObject {
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  walking_audio = new Audio ('audio/chicken-sound.mp3');

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 500 + Math.random() * (2000 - 300);

    this.y = 352;
    this.height = 65;
    this.width = 65;
    this.speed = 0.15 + Math.random() * 0.35;
    this.animate();
    
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
      // this.walking_audio.play(); 
    }, 200);
  }
}
