<template lang="pug">
main(id="rm-home")
  rm-header
  canvas(id="canvas")
</template>

<script>
import { 
  Scene, AmbientLight, PlaneGeometry, MeshLambertMaterial, 
  Mesh, DirectionalLight } from "three";
import {Camera} from "../three/init/Camera.js"
import {Render} from "../three/init/Render.js"
import {Rick} from "../three/objects/Rick.js"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



import RmHeader from "../components/RmHeader.vue"
export default {
  name: "RmHome",
  components: {
    RmHeader,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },

  async mounted(){

    this.initCanvas()

  },
  methods: {

    async initCanvas(){
      const camera = new Camera()
      const scene = new Scene()
      scene.add(new AmbientLight('white', 2.3))

      const loadRick = new Rick(scene)
      const rick = await loadRick.Load()
      
      const rickMesh = rick.scene.children[0].children[0]
      rickMesh.castShadow = true;
      console.log(rickMesh)

      this.traverseScene(scene)

      this.setPlane(scene)
      this.setDirectionalLight(scene, rickMesh)
      const render = new Render(camera, scene, "canvas")

      //this.setOrbitControls(camera, render)

      render.animateLoop()
    },

    traverseScene(scene){
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
       requestAnimationFrame(() => this.traverseScene(scene));
    },

    setPlane(scene){
      const planeGeo = new PlaneGeometry(100, 100, 100, 100)
      const material = new MeshLambertMaterial({ color: '#434465'})
      const plane = new Mesh(planeGeo, material)
      plane.receiveShadow = true
      plane.rotation.x = -Math.PI / 2
      plane.position.set(0, -1, 0)
      scene.add(plane)
    },

    setDirectionalLight(scene, lookAt){
      const light = new DirectionalLight('white', 1)
      light.position.set(3, 7, 0)
      light.castShadow = true

      light.shadow.mapSize.width = 512; // default
      light.shadow.mapSize.height = 512; // default
      light.shadow.camera.near = 0.5; // default
      light.shadow.camera.far = 500; // default

      light.target = lookAt
      scene.add(light)
      //scene.add( helper );
    },

    setOrbitControls(camera, render){
      const controls = new OrbitControls(camera, render.domElement)




      function loop() {
        controls.update()
        requestAnimationFrame(loop)
      }
      loop()
    }

  }
};
</script>


<style lang="scss" scoped>

  #rm-home{
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  #canvas{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: calc(100vh - 100px);
  }

</style>
