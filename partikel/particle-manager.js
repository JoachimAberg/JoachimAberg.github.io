import { Particle } from "./particle.js";
import * as getElements from "./get-elements.js";
export class ParticlesManager {
  constructor(
    width,
    height,
    imageIndex,
    gravxVal,
    gravyVal,
    frictionVal,
    bounceLossVal,
    bounceScatterVal,
    clickForceVal,
    inertiaVal,
    ease,
    images
  ) {
    this.width = width;
    this.height = height;
    this.particlesArray = [];
    this.gravityEnabled = false;
    this.imageIndex = imageIndex;
    this.gravxVal = gravxVal;
    this.gravyVal = gravyVal;
    this.frictionVal = frictionVal;
    this.bounceLossVal = bounceLossVal;
    this.bounceScatterVal = bounceScatterVal;
    this.clickForceVal = clickForceVal;
    this.inertiaVal = inertiaVal;
    this.ease = ease;
    this.images = this.images;
    this.particlesAmtElement = getElements.particlesAmtElement;
    this.gap = 3;
    this.velocityRendering = false;
    this.mouse = {
      radius: 0,
      radiusDefault: 50,
      x: Number.MAX_SAFE_INTEGER,
      y: Number.MAX_SAFE_INTEGER,
      growth: 0,
    };
    this.images = images;
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });
    this.maximumVx = 0;
    this.maximumVy = 0;
  }
  init(context) {
    this.x = this.width * 0.5 - this.images[this.imageIndex].width * 0.5;
    this.y = this.height * 0.5 - this.images[this.imageIndex].height * 0.5;
    this.maximumVx = 0;
    this.maximumVy = 0;
    context.drawImage(this.images[this.imageIndex], this.x, this.y);
    //clamped array, r,g,b,a därav 4 på index
    this.particlesArray = [];
    const pixels = context.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const color = "rgb(" + red + "," + green + "," + blue + ")";

        if (alpha > 0) {
          this.particlesArray.push(new Particle(this, x, y, color));
        }
      }
    }
    this.particlesAmtElement.innerHTML =
      this.particlesArray.length + " partiklar";
  }

  draw(context) {
    for (let index = 0; index < this.particlesArray.length; index++) {
      this.particlesArray[index].draw(context);
    }
    context.beginPath();
    context.arc(this.mouse.x, this.mouse.y, this.mouse.radius, 0, 2 * Math.PI);
    context.lineWidth = Math.max(2, this.mouse.radius / 10);
    context.strokeStyle = "#ffab03";
    context.stroke();
  }

  update() {
    for (let index = 0; index < this.particlesArray.length; index++) {
      const currentParticle = this.particlesArray[index];
      currentParticle.update();
      this.maximumVy = Math.max(this.maximumVy, Math.abs(currentParticle.vy));
      this.maximumVx = Math.max(this.maximumVx, Math.abs(currentParticle.vx));
      if (this.velocityRendering) {
        const currentColorY =
          this.maximumVy == 0
            ? 0
            : Math.max(-1, Math.min(currentParticle.vy / this.maximumVy, 1)) *
              127;
        const currentColorX =
          this.maximumVy == 0
            ? 0
            : Math.max(-1, Math.min(currentParticle.vx / this.maximumVx, 1)) *
              127;
        currentParticle.velocityColor =
          "rgb(" +
          (127 - currentColorY) +
          "," +
          (127 + currentColorY) +
          "," +
          (127 + currentColorX) +
          ")";
      }
    }
  }
  toggleGravity() {
    this.gravityEnabled = !this.gravityEnabled;
    this.particlesArray.forEach((p) => p.toggleGravity());
  }
  resetPosition() {
    this.particlesArray.forEach((p) => p.resetPosition());
  }
  changeStyle() {
    this.velocityRendering = !this.velocityRendering;
    this.maximumVx = 0;
    this.maximumVy = 0;
  }
}
