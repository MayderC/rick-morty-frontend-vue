import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class Loader {
  constructor() {
    const draco = new DRACOLoader();
    draco.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    draco.setDecoderConfig({ type: "js" });
    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(draco);
  }

  async load(url) {
    try {
      const object = await this.gltfLoader.loadAsync(url);
      return object;
    } catch (err) {
      console.log(err);
    }
  }
}
