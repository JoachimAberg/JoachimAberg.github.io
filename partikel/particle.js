export class Particle {
  constructor(particlesManager, x, y, color) {
    this.particlesManager = particlesManager;
    this.x = x;
    this.y = y;
    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.color = color;
    this.velocityColor = "";
    this.size = this.particlesManager.gap;
    this.vx = 0;
    this.vy = 0;
    this.diffx = 0;
    this.diffy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
    this.gravityEnabled = this.particlesManager.gravityEnabled;
  }

  draw(context) {
    context.fillStyle = this.particlesManager.velocityRendering
      ? this.velocityColor
      : this.color;
    context.fillRect(
      Math.floor(this.x),
      Math.floor(this.y),
      this.size,
      this.size
    );
  }
  update() {
    if (this.gravityEnabled) {
      this.handleGravity();
    } else {
      this.handleConvergeToOrigin();
    }
    if (this.x < 0) {
      this.x = 1;
    }
    if (this.x > this.particlesManager.width) {
      this.x = this.particlesManager.width - 1;
    }
    if (this.y < 0) {
      this.y = 1;
    }
    if (this.y > this.particlesManager.height) {
      this.y = this.particlesManager.height - 1;
    }
  }
  calculateforce() {
    this.diffx = this.particlesManager.mouse.x - this.x;
    this.diffy = this.particlesManager.mouse.y - this.y;
    this.distance = Math.sqrt(this.diffx ** 2 + this.diffy ** 2);
    this.force =
      this.distance == 0
        ? 0
        : ((((this.distance > this.particlesManager.mouse.radius ? 0.2 : 1) *
            this.particlesManager.mouse.radius) /
            this.distance) *
            this.particlesManager.clickForceVal) /
          100;
    if (this.force > 1) {
      if (Math.random() > 0.9) this.force = this.force * 5;
    }
    if (this.force > 0.01) {
      this.angle = Math.atan2(this.diffy, this.diffx);
      this.vx += -this.force * Math.cos(this.angle);
      this.vy += -this.force * Math.sin(this.angle);
    }
  }
  toggleGravity() {
    this.gravityEnabled = this.particlesManager.gravityEnabled;
  }
  resetPosition() {
    this.x = this.originX;
    this.y = this.originY;
  }
  handleGravity() {
    this.vy = this.vy + this.particlesManager.gravyVal / 4000;
    this.vx = this.vx + this.particlesManager.gravxVal / 4000;
    if (this.x + this.vx < 5) {
      this.vx = -this.vx;
    } else if (
      Math.floor(this.x + 1) + this.vx >=
      this.particlesManager.width - 5
    ) {
      this.vx =
        (-this.vx * (100 - this.particlesManager.bounceLossVal)) / 100 +
        this.particlesManager.frictionVal / 100;
    }
    if (this.y + this.vy < 5) {
      this.vy = -this.vy;
    } else if (
      Math.floor(this.y + 1) + this.vy >=
      this.particlesManager.height - 5
    ) {
      this.vy =
        (-this.vy * (100 - this.particlesManager.bounceLossVal)) / 100 +
        this.particlesManager.frictionVal / 100;

      const logval =
        (this.particlesManager.bounceScatterVal / 100) *
        0.3 *
        Math.log(Math.abs(this.particlesManager.width * 0.5 - this.x));
      const leftRight = this.particlesManager.width * 0.5 > this.x ? 1 : -1;
      const randomDir =
        (this.particlesManager.bounceScatterVal / 100) *
        0.3 *
        (Math.random() - 0.5);
      this.vx =
        Math.abs(this.vx) < 0.01
          ? this.vx + randomDir + logval * leftRight * 0.1 * this.vy
          : this.vx * 0.7;
    }
    this.calculateforce();

    this.x += this.vx;
    this.y += this.vy;
  }
  handleConvergeToOrigin() {
    if (this.x + this.vx < 5 || this.x > this.particlesManager.width - 5) {
      this.vx = -this.vx;
    }
    if (this.y + this.vy < 5 || this.y > this.particlesManager.height - 5) {
      this.vy = -this.vy;
    }
    this.calculateforce();
    this.x += this.vx + (this.originX - this.x) * this.particlesManager.ease;
    this.y += this.vy + (this.originY - this.y) * this.particlesManager.ease;
    this.vx =
      this.vx *
      (1 - this.particlesManager.inertiaVal / (100 * 30)) *
      (1 - this.particlesManager.ease / 100);
    this.vy =
      this.vy *
      (1 - this.particlesManager.inertiaVal / (100 * 30)) *
      (1 - this.particlesManager.ease / 100);
    if (Math.abs(this.x - this.originX) < 0.1) {
      this.x = this.originX;
    }
    if (Math.abs(this.y - this.originY) < 0.1) {
      this.y = this.originY;
    }
  }
}
