<template>
  <div class="row justify-content-center">
    <div class="col-12" >
      <!-- Experiment 1  -  -->

      <div id="explanation_ex1" class="col-8" style="margin-right: auto;margin-left: auto;">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">คำอธิบาย: การทดลองที่ 1</h4>
            <p class="card-text">
              1. ให้ผู้ร่วมการทดลอง ใช้<b
                ><span style="color: #ee0f0f">เมาส์</span></b
              >
              <b>วงกลม</b> สถานที่ ที่หายไป หรือ ย้ายตำแหน่ง จากแผนที่
              ที่ให้จดจำเส้นทางในตอนเริ่มต้น
              <br />
            </p>
            <p class="card-text" style="margin-left: 3em">
              หากท่านคิดว่า<b>วงกลมครบทุกจุด</b> แล้ว กดปุ่ม ถัดไป
              <span
                class="btn btn-warning"
                style="margin-right: 20px; margin: 5px"
                >ถัดไป</span
              >
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/ex1-draw.gif"
                style="height: 200px"
              />
            </p>
            <p class="card-text" style="margin-left: 3em">
              หาก <b>ต้องการแก้ไข</b> กดปุ่ม วาดใหม่
              <span class="btn btn-secondary" style="margin-right: 20px"
                >วาดใหม่</span
              >
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/ex1-re.gif"
                style="height: 200px"
              />
            </p>
          </div>
        </div>
        <button
          class="btn btn-warning btn-lg btn-block"
          id="getInfo1"
          @click="startEX1"
        >
          เริ่ม การทดลอง
        </button>
      </div>

      <div class="container-fluid hidden" id="ex1">
        <div class="row">
          <div class="col-9">
            <div id="canvas-ex1" class="center" style="max-width: 1000px">
              <img
                class="hidden"
                id="full_map_ex1"
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map_ex1_di.png"
                alt="full_map_ex1.png"
              />
              <canvas
                ref="capture"
                width="900"
                height="650"
                id="myCanvas_ex1"
                tabindex="0"
                @mousemove="draw"
                @mousedown="beginDrawing"
                @mouseup="stopDrawing"
              >
                Experiment 1
              </canvas>
            </div>
          </div>
          <div class="col"></div>
          <div ref="btn" class="col-2">
            <div class="row">
              <button
                @click="clearArea"
                class="btn btn-secondary btn-lg btn-block"
                style="margin-right: 20px; margin: 5px"
              >
                วาดใหม่
              </button>
            </div>
            <div class="row">
              <button
                @click="saveCanvas"
                class="btn btn-warning btn-lg btn-block"
                style="margin-right: 20px; margin: 5px"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timer"
        class="hidden"
        style="
          text-align: center;
          margin-top: 50px;
          font-size: 60px;
          color: #ee0f0f;
        "
      >
        <span id="countdowntimer">5 </span>
      </div>
      <!-- Canvas Output -->
      <div id="img-out"></div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";



export default {
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
    };
  },
  mounted() {
    var c = document.getElementById("myCanvas_ex1");
    // var _map = document.getElementById("full_map_ex1");
    this.canvas = c.getContext("2d");
  },
  methods: {
    startEX1() {
      let timeleft = 6;
      document.getElementById("explanation_ex1").classList.add("hidden");
      let downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("timer").classList.remove("hidden");
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
          document.getElementById("ex1").classList.remove("hidden");
          document.getElementById("timer").classList.add("hidden");
        }
      }, 1000);
      localStorage.startExperiment1 = Date();

      this.canvas.drawImage(
        document.getElementById("full_map_ex1"),
        0,
        0,
        900,
        650
      );
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 4;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    draw(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clearArea() {
      let ctx = this.canvas;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.canvas.drawImage(
        document.getElementById("full_map_ex1"),
        0,
        0,
        900,
        650
      );
    },
    saveCanvas() {
      html2canvas(this.$refs.btn).then((canvas) => {
        document.getElementById("img-out").appendChild(canvas);
        console.log(canvas.toDataURL());

        sessionStorage.setItem("base64canvas", canvas.toDataURL());
        location.replace("/exp2")
      });
    },
  },
};
</script>