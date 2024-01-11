import { WebGLRenderer, PCFSoftShadowMap } from "three";

export class Render extends WebGLRenderer {
  constructor(camera, scene, id) {
    super({ antialias: true, alpha: true, canvas: document.querySelector(id) });
    this.shadowMap.enabled = true;
    this.shadowMap.type = PCFSoftShadowMap;

    this.setSize(window.innerWidth, window.innerHeight);
    this.camera = camera;
    this.scene = scene;
    this.onResize();
  }

  animateLoop() {
    requestAnimationFrame(this.animateLoop.bind(this));
    this.render(this.scene, this.camera);
  }

  onResize() {
    window.addEventListener("resize", () => {
      this.setSize(window.innerWidth, window.innerHeight);
      this.camera.update();
    });
  }
}
