import { Loader } from "../tools/Loader.js";
import { Clock, AnimationMixer } from "three";

export class Rick {
  constructor(scene) {
    this.glb = null;
    this.scene = scene;
  }

  addToScene() {
    this.scene.add(this.glb.scene);
  }

  async Load() {
    const loader = new Loader();
    this.glb = await loader.load("/rick.glb");
    this.addToScene();
    this.setAnimation();
  }

  setAnimation() {
    const clock = new Clock();
    const mixer = new AnimationMixer(this.glb.scene);
    const animation = this.glb.animations[0];
    const action = mixer.clipAction(animation);
    this.glb.scene.scale.set(0.7, 0.7, 0.7);
    action.play();
    const animate = () => {
      this.handleResponsively();
      const delta = clock.getDelta();
      mixer.update(delta);
      requestAnimationFrame(animate);
    };
    animate();
  }

  handleResponsively() {
    if (window.innerWidth <= 650) {
      this.glb.scene.position.set(0, -1, 0);
    }

    if (window.innerWidth > 650) {
      this.glb.scene.position.set(0, -1, 0);
      this.glb.scene.position.x = -window.innerWidth / 1000;
    }
  }
}
