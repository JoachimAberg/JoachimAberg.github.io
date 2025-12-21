import * as getElements from "./get-elements.js";
import { ParticlesManager } from "./particle-manager.js";
window.addEventListener("load", function () {
  //Get Elements
  const canvas = getElements.canvas;
  const gravityBtn = getElements.gravityBtn;
  const changeImgBtn = getElements.changeImgBtn;
  const changeResolutionBtn = getElements.changeResolutionBtn;
  const styleSwitchBtn = getElements.styleSwitchBtn;
  const resetPositionBtn = getElements.resetPositionBtn;
  const convergionSpeed = getElements.convergionSpeed;
  const mouseClickForce = getElements.mouseClickForce;
  const mouseClickRadius = getElements.mouseClickRadius;
  const mouseClickGrowth = getElements.mouseClickGrowth;
  const gravy = getElements.gravy;
  const gravx = getElements.gravx;
  const friction = getElements.friction;
  const inertia = getElements.inertia;
  const bounceLoss = getElements.bounceLoss;
  const bounceScatter = getElements.bounceScatter;
  const convergionSpeedLabel = getElements.convergionSpeedLabel;
  const mouseClickForceLabel = getElements.mouseClickForceLabel;
  const mouseClickRadiusLabel = getElements.mouseClickRadiusLabel;
  const mouseClickGrowthLabel = getElements.mouseClickGrowthLabel;
  const gravyLabel = getElements.gravyLabel;
  const gravxLabel = getElements.gravxLabel;
  const frictionLabel = getElements.frictionLabel;
  const inertiaLabel = getElements.inertiaLabel;
  const bounceLossLabel = getElements.bounceLossLabel;
  const bounceScatterLabel = getElements.bounceScatterLabel;
  const valjAnnanBildInput = getElements.valjAnnanBildInput;
  let img;
  //Setup eventlisteners
  gravityBtn.addEventListener("click", () => {
    toggleGravity();
  });

  canvas.addEventListener("mousedown", () => {
    particlesManager.mouse.radius = Math.max(
      particlesManager.mouse.radiusDefault,
      particlesManager.mouse.radius
    );
    timeout = this.window.clearInterval(timeout);
    timeout = this.setInterval(() => {
      particlesManager.mouse.radius =
        particlesManager.mouse.radius +
        (((particlesManager.mouse.radius * clickForceVal) / 500) *
          particlesManager.mouse.growth) /
          100;
      globalForce += (1 * clickForceVal) / 100;
    }, 25);
  });
  this.document.addEventListener("mouseup", () => {
    timeout = this.window.clearInterval(timeout);
    timeout = this.setInterval(() => {
      particlesManager.mouse.radius = Math.max(
        0,
        particlesManager.mouse.radius * 0.95 - 0.05
      );
      globalForce = Math.max(1, globalForce - 1);
    }, 25);
  });
  changeImgBtn.addEventListener("click", () => {
    bytBild();
  });
  changeResolutionBtn.addEventListener("click", () => {
    bytUpplosning();
  });

  resetPositionBtn.addEventListener("click", () => {
    resetPosition();
  });
  styleSwitchBtn.addEventListener("click", () => {
    changeStyle();
  });
  this.window.addEventListener("resize", () => {
    canvas.width = this.document.body.clientWidth;
    canvas.height = this.document.body.clientHeight;
    particlesManager.width = canvas.width;
    particlesManager.height = canvas.height;
  });
  convergionSpeed.addEventListener("input", (e) => {
    particlesManager.ease = +e.target.value / 500;
    convergionSpeedLabel.innerHTML =
      "Grupperinghastighet (" + e.target.value + ")";
  });
  gravx.addEventListener("input", (e) => {
    particlesManager.gravxVal = +e.target.value;
    gravxLabel.innerHTML = "Gravitation x (" + e.target.value + ")";
  });
  gravy.addEventListener("input", (e) => {
    particlesManager.gravyVal = +e.target.value;
    gravyLabel.innerHTML = "Gravitation y (" + e.target.value + ")";
  });
  friction.addEventListener("input", (e) => {
    particlesManager.frictionVal = +e.target.value;
    frictionLabel.innerHTML = "friction (" + e.target.value + ")";
  });
  bounceLoss.addEventListener("input", (e) => {
    particlesManager.bounceLossVal = +e.target.value;
    bounceLossLabel.innerHTML = "Studsförlust (" + e.target.value + ")";
  });
  bounceScatter.addEventListener("input", (e) => {
    particlesManager.bounceScatterVal = +e.target.value;
    bounceScatterLabel.innerHTML =
      "X-randomisering golv (" + e.target.value + ")";
  });
  mouseClickForce.addEventListener("input", (e) => {
    particlesManager.clickForceVal = +e.target.value;
    mouseClickForceLabel.innerHTML = "Klick-kraft  (" + e.target.value + ")";
  });
  mouseClickRadius.addEventListener("input", (e) => {
    particlesManager.mouse.radiusDefault = +e.target.value;
    mouseClickRadiusLabel.innerHTML = "Klick-radie  (" + e.target.value + ")";
  });
  mouseClickGrowth.addEventListener("input", (e) => {
    particlesManager.mouse.growth = +e.target.value;
    mouseClickGrowthLabel.innerHTML =
      "Klick-tillväxt  (" + e.target.value + ")";
  });
  inertia.addEventListener("input", (e) => {
    particlesManager.inertiaVal = +e.target.value;
    inertiaLabel.innerHTML = "Tröghet  (" + e.target.value + ")";
  });
  valjAnnanBildInput.addEventListener("change", (e)=>{
    // particlesManager.init()
    console.log(e);
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.onload = () => {
      images.push(img);
      particlesManager.initWithImg(ctx, img);
      particlesManager.imageIndex = imageIndex.length-1;
      valjAnnanBildInput.value=null;
    }
    img.src = url;   
  })

  window.addEventListener(
    "keypress",
    (e) => {
      if (e.code === "KeyZ") {
        toggleGravity();
      } else if (e.code === "KeyX") {
        bytBild();
      } else if (e.code === "KeyC") {
        bytUpplosning();
      } else if (e.code === "KeyV") {
        resetPosition();
      } else if (e.code === "KeyB") {
        changeStyle();
      }
    },
    false
  );

  const toggleGravity = (e) => {
    particlesManager.toggleGravity();
  };
  const bytBild = (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesManager.imageIndex =
      (particlesManager.imageIndex + 1) % images.length;
    particlesManager.init(ctx);
  };
  const resetPosition = (e) => {
    particlesManager.resetPosition();
  };
  const changeStyle = () => {
    particlesManager.changeStyle();
  };
  const bytUpplosning = (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resolutionIndex = (resolutionIndex + 1) % upplosningar.length;
    particlesManager.resolutionIndex = resolutionIndex;
    particlesManager.gap = upplosningar[resolutionIndex];
    changeResolutionBtn.innerHTML =
      "Byt Upplösning (nu=" + upplosningar[resolutionIndex] + ") <kbd>c</kbd>";
    particlesManager.init(ctx);
  };

  let gravyVal = 100;
  let gravxVal = 0;
  let frictionVal = 10;
  let bounceLossVal = 20;
  let bounceScatterVal = 100;
  let clickForceVal = 10;
  let inertiaVal = 10;
  let ease = 0.05;
  let timeout;
  let globalForce = 1;
  const ctx = canvas.getContext("2d");
  canvas.width = this.document.body.clientWidth;
  canvas.height = this.document.body.clientHeight;
  let imageIndex = 0;
  const upplosningar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];
  let resolutionIndex = 3;
  let images = getElements.images;
  const timestampsArray = [];
  let timestamp;
  let frameCounter = 1;
  const particlesManager = new ParticlesManager(
    canvas.width,
    canvas.height,
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
  );
  particlesManager.init(ctx);

  function animate() {
    if (frameCounter > 60) {
      frameCounter = 1;
    }
    updateFps();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (particlesManager) {
      particlesManager.draw(ctx);

      particlesManager.update();
    }
    frameCounter++;
    requestAnimationFrame(animate);
  }
  animate();

  function updateFps() {
    if (!timestamp) {
      timestamp = Date.now();
    } else {
      timestampsArray.push(Date.now() - timestamp);
      timestamp = Date.now();
      const totalTime = timestampsArray.reduce((a, b) => a + b);
      if (totalTime > 1000) {
        timestampsArray.splice(0, 1);
      }
      getElements.fpsCounter.innerHTML = (
        1 /
        (totalTime / timestampsArray.length / 1000)
      ).toFixed(2);
    }
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    getElements.canvas.classList.add("d-none");
    getElements.controls.classList.add("d-none");
    getElements.mobile.classList.remove("d-none");
  }
});
