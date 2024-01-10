<template lang="pug">
main(id="rm-home")
  rm-header
  canvas(id="canvas")
</template>

<script>
import { Scene, AmbientLight } from "three";
import {Camera} from "../three/init/Camera.js"
import {Render} from "../three/init/Render.js"
import {Rick} from "../three/objects/Rick.js"


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
      scene.add(new AmbientLight('white', 2))

      await new Rick(scene).Load()
      
      const render = new Render(camera, scene, "canvas")
      render.animateLoop()
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
    z-index: -1;
    height: calc(100vh - 100px);
  }

</style>
