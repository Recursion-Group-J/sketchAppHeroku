<template>
    <div id="all-container" class="vh-100">
        <div id="upper-container" class="col-12 d-flex py-2">
            <div id="buuton-container" class="col-2 d-flex">
                <div class="mx-3">
                    <button @click.prevent="saveWork" class="btn btn-lg">Save</button>
                </div>
                <div class="mx-3">
                    <button class="btn btn-lg">Load</button>
                </div>
                
             </div>
             <div class="offset-md-1">
                <h2 class="mb-0">How to etch a sketch <span>s:← d:→ k:↑ l:↓</span></h2>

             </div>
            <div id="tokoron-container">
                <img id="tokoron-image" src="http://www.city.tokorozawa.saitama.jp/other/tokoron_gazou/jpeg/asobu.jpg" alt="">
            </div>
        </div>   
        <div id="sketch-board" class="h-75 w-75 d-flex flex-wrap justify-content-center">
            <h1 class="col-12 my-3">Etch a sketch</h1>
            <div id="inner-frame" class="h-75 w-75" >
                <Sketch></Sketch>
            </div> 
            <div id="left-control" class="h-10 w-10"></div>
            <div id="right-control" class="h-10 w-10"></div>
        </div>
    </div>
</template>

<script>
import Sketch from '@/components/Sketch.vue';
// import apiService from '../util/api.service';
import { csrftoken } from "../util/csrftoken.js";


export default {
    name: 'Sketchpage',
    components: {
        Sketch
    },
    methods:{
        saveWork: function(){
            let work = JSON.parse(this.$store.state.work)
            // let work = this.$store.state.work
            let data = {name:"test",work:work}
            console.log(data)
            console.log("------------")
            console.log(JSON.stringify(data))
            console.log(csrftoken)
            const config = {
            method: "POST",
            body: JSON.stringify(data),
            headers :{
                "content-type":"application/json",
                "X-CSRFTOKEN":csrftoken
                }
            }
        fetch('http://127.0.0.1:8000/api/works/', config).then(response => {
            console.log(response.data);
        });
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
h1 {
    color: #dab300;
    font-size: 4rem;
}
h2 {
    font-size: 3rem;
}

#all-container{
    font-family: 'Indie Flower', cursive;
    background-image: url(https://cdn.pixabay.com/photo/2016/01/25/18/21/wood-1161204_960_720.jpg);
}
#sketch-board {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)
             translateY(-50%);
border-radius: 50px;
background-color: #FF101F;
box-shadow:  10px 10px 10px rgba(0,0,0,0.6);
}
#inner-frame {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)
             translateY(-50%);
}
#left-control, #right-control {
    width : 75px;
    height: 75px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.6);
}
#left-control {
  position: fixed;
  left: 3%;
  top: 85%;
}
#right-control {
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
button:hover {
    background-color: darkgrey;
    border: none;
    color: white;
}
button {
    background-color: lightgrey;
    border: none;
}


</style>