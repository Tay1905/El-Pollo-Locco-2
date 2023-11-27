class Endboss extends MovableObject {

IMAGES_WALKING = [
    'img/4_enemie_boss_chicken/1_walk/G1.png',
    'img/4_enemie_boss_chicken/1_walk/G2.png',
    'img/4_enemie_boss_chicken/1_walk/G3.png',
    'img/4_enemie_boss_chicken/1_walk/G4.png'


];
IMAGES_ENDBOSS = [
    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png'
];
walking_audio = new Audio('audiorunning.mp3');


constructor(){
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ENDBOSS);
    this.x = 2750;
    this.y = 100;
    this.height = 350;
    this.width = 300;
    this.animate();
    this.moveLeft();
}

// if (moveLeft) {
//     setInterval(() => {
       
//         this.playAnimation(this.IMAGES_WALKING);
//         // this.walking_audio.play();
//       }, 50);
// }


animate(){
  
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
           
    }, 200);
    }
}
    
    
    


