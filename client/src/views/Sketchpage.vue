<template>
    <div class="wh-100">
        <div id="tokoron-container">
            <img id="tokoron-image" src="http://www.city.tokorozawa.saitama.jp/other/tokoron_gazou/jpeg/asobu.jpg" alt="">
        </div>
        <div id="sketchBoard" class="h-75 w-75 d-flex flex-wrap justify-content-center">
            <h1 class="col-12 my-3">Etch a sketch</h1>
            <div id="innerFrame" class="h-75 w-75" >
                <Sketch></Sketch>
            </div> 
            <div id="leftControl" class="h-10 w-10"></div>
            <div id="rightControl" class="h-10 w-10"></div>
        </div>
    </div>
</template>

<script>
import Sketch from '@/components/Sketch.vue'

export default {
    name: 'Sketchpage',
    components: {
        Sketch
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
h1 {
    font-family: 'Indie Flower', cursive;
    font-size: 3rem;
    color: #dab300;
}
#sketchBoard {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)
             translateY(-50%);
 box-shadow: 10px 10px 10px rgba(0,0,0,0.6);
 border-radius: 1rem;

 background-color: red;
}
#innerFrame {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)
             translateY(-50%);
}
#leftControl, #rightControl {
    width : 75px;
    height: 75px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.6);
}
#leftControl {
  position: fixed;
  left: 3%;
  top: 85%;
}
#rightControl {
  position: fixed;
  right: 3%;
  top: 85%;
}

#tokoron-container {
    position: fixed;
    right: 0%;
    top: 5%;
}

#tokoron-image{
    max-height: 150px;
    width: auto;
}


</style>