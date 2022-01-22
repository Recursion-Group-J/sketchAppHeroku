<template>
    <div>
      <p>s:← d:→ k:↑ l:↓ </p>
      <div id="canvas-container">
      </div>
    </div>
    
</template>

<script>
import Konva from 'konva'

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
      }
  },
  mounted:function(){
      this.stage = new Konva.Stage({
          container: 'canvas-container', //親要素のdivタグのidを指定
          width: 400, //キャンバスの横幅
          height: 400 //キャンバスの高さ
        }),
      this.layer = new Konva.Layer(),
      this.box = new Konva.Rect({
            width: 400, //横幅
            height: 400, //高さ
            fill: "#ddd", //塗り潰しの色
            stroke: "#000", //枠線の色
            strokeWidth: 1, //枠線の太さ
            opacity: 1, //透過率
            cornerRadius: [3, 3, 3, 3] //四角の角を丸める
      })
    this.layer.add(this.box); //作った四角をlayerにadd
    this.stage.add(this.layer); //layerをstageにadd (階層の上に順番に追加していく)

    this.layer.draw(); //これで描画

    window.addEventListener('keydown', this.sketching);
  },
  methods:{
    sketching:function(event){
      let ajstX = 0;
      let ajstY = 0;

      if (event.key === 'k' ) { ajstX = 0, ajstY = -1;}
      else if (event.key === 'l') {ajstX = 0, ajstY = 1;}
      else if (event.key === 's') {ajstX = -1, ajstY = 0;}
      else if (event.key === 'd') {ajstX = 1; ajstY = 0}

      if(this.xpos+ajstX >= 0 && this.xpos+ajstX <= 400 && this.ypos+ajstY >= 0 && this.ypos+ajstY <= 400) {
          var line = new Konva.Line({
                  points: [this.xpos, this.ypos, this.xpos+ajstX, this.ypos+ajstY],
                  stroke: '#696969',
                  strokeWidth: 3,
                  lineCap: 'round',
                  lineJoin: 'round',
              })
        this.xpos = this.xpos + ajstX;
        this.ypos = this.ypos + ajstY;

        this.layer.add(line);
        this.stage.add(this.layer);
        this.layer.draw();
      }
    }
  }
}
</script>