<template>
  <div class="guide" @click.prevent.stop="guide">
    <i class="icon-video-camera" />
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './defineSteps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>


<style lang="less" scoped>
   
  .guide{

    height:50px;
    line-height:50px;
    text-align:center;
    cursor:pointer;
    font-size:18px;
  }

</style>