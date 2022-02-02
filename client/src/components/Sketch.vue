<template>
    <div class="h-100 w-100">
      <div id="canvas-container" class="h-100 w-100">
      </div>
    </div>
    
</template>

<script>
import Konva from 'konva';

export default {
  name: 'Sketch',
  props: {
    msg: String
  },
  data(){
      return{
        stage:null,
        layer:null,
        box:null,
        xpos: 200,
        ypos: 200,
        // points:[],
        line:null,
      }
  },
  mounted:function(){
     let frame = document.getElementById("canvas-container");
     console.log(frame.parentElement.offsetWidth);
     console.log(frame.offsetHeight);
      this.stage = new Konva.Stage({
          container: 'canvas-container', //親要素のdivタグのidを指定
          width: frame.offsetWidth, //キャンバスの横幅
          height: frame.offsetHeight //キャンバスの高さ
        }),
      this.layer = new Konva.Layer(),
      this.box = new Konva.Rect({
            width: frame.offsetWidth, //横幅
            height: frame.offsetHeight, //高さ
            fill: "#ddd", //塗り潰しの色
            stroke: "#000", //枠線の色
            strokeWidth: 3, //枠線の太さ
            opacity: 1, //透過率
            cornerRadius: [3, 3, 3, 3] //四角の角を丸める
      })
    this.layer.add(this.box); //作った四角をlayerにadd
    this.stage.add(this.layer); //layerをstageにadd (階層の上に順番に追加していく)

    this.layer.draw(); //これで描画
    var line = new Konva.Line({
                  points: [],
                  stroke: '#696969',
                  strokeWidth: 6,
                  lineCap: 'round',
                  lineJoin: 'round',
              })
    this.line = line;

    window.addEventListener('keydown', this.sketching);
    // window.addEventListener("keydown",this.load)
  },
  methods:{
    sketching:function(event){
      let ajstX = 0;
      let ajstY = 0;
      let frame = document.getElementById("canvas-container");

      if (event.key === 'k' ) { ajstX = 0, ajstY = -5;}
      else if (event.key === 'l') {ajstX = 0, ajstY = 5;}
      else if (event.key === 's') {ajstX = -5, ajstY = 0;}
      else if (event.key === 'd') {ajstX = 5; ajstY = 0}

      if(this.xpos+ajstX >= 0 && this.xpos+ajstX <= frame.offsetWidth && this.ypos+ajstY >= 0 && this.ypos+ajstY <= frame.offsetHeight) {
      //     var line = new Konva.Line({
      //             points: [this.xpos, this.ypos, this.xpos+ajstX, this.ypos+ajstY],
      //             stroke: '#696969',
      //             strokeWidth: 3,
      //             lineCap: 'round',
      //             lineJoin: 'round',
      //         })
        this.xpos = this.xpos + ajstX;
        this.ypos = this.ypos + ajstY;
        this.line.points(this.line.points().concat([this.xpos, this.ypos]));  
        this.layer.add(this.line);
        this.stage.add(this.layer);
        this.layer.draw();

        let work = this.stage.toJSON()
        this.$store.commit('updateWorkCoordinate',work);
      }
    },
    // load:function(event){
    //   if(event.key ==="p"){
    //     let json = {}
    //     this.stage = Konva.Node.create(json,"canvas-container" );
    //   }
    // }
  }
}
</script>
