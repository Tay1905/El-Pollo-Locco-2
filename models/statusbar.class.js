class Statusbar extends DrawableObject {
  IMAGES_LIFEBAR = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];
  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES_LIFEBAR);
    this.setPercentage(100);

    this.x = 40;
    this.y = 0;
    this.height = 60;
    this.width= 200;
  }
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_LIFEBAR[this.resolveImagePath()];
    this.img = this.imageCache[path];
  }

  resolveImagePath() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}