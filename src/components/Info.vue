<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Information -->

      <!-- คำอธิบาย -->
      <div class="card" id="explanation">
        <div div class="card-body">
          <h4 class="card-title text-center">คำอธิบาย</h4>
          <p class="card-text">
            1. เมื่อเริ่ม ระบบจะทำการสร้างแผนที่เมืองขึ้นมาโดยมีสถานที่ต่าง ๆ
            และถนน
          </p>
          <p class="card-text">
            2. ให้ผู้ร่วมการทดลอง<span style="color: #ee0f0f"
              >จดจำเส้นทางตามการอธิบาย</span
            >จากจุดเริ่มต้น(Start) ไปจนถึงจุดปลายทาง(Finish)
            ตามที่การอธิบายให้ได้มากที่สุด
          </p>
          <p class="card-text" style="text-indent: 2.5em">
            2.1. รูปแบบการอธิบาย นั้นจะ
            <span style="color: #ee0f0f">แตกต่างกัน</span>ออกไปในแต่ละคน
            ซึ่งแต่ละคนจะได้รับเพียงแค่ 1 รูปแบบการอธิบายเท่านั้น
          </p>
          <p class="card-text" style="text-indent: 2.5em">
            รูปแบบการอธิบาย แบ่งเป็น 2 รูปแบบการอธิบาย คือ
          </p>
          <p class="card-text" style="text-indent: 3em">
            <b>1) แบบแอนิเมชั่น</b> - ผู้ร่วมการทดลอง ต้องเตรียมตัวให้พร้อม
            แอนิเมชั่นจะเล่นอัตโนมัติ โดยมีสัญญาณบอกเริ่ม
            <br />
            <img
              src="../assets/expain/pre-animate.gif"
              style="height: 90px; margin-left: 3em"
            />
          </p>
          <p class="card-text" style="text-indent: 3em">
            <b>2) แบบบรรยายด้วยเสียง</b> - ผู้ร่วมการทดลอง
            ต้องเปิดเสียงคอมพิวเตอร์ และ<b>กดปุ่มเริ่มด้วยตัวเอง</b>
            ดูแผนที่ประกอบ
            <br />
            <img
              src="../assets/expain/pic-map.png"
              style="height: 90px; margin-left: 3em"
            />
            <img
              src="../assets/expain/pic-audio.png"
              style="height: 40px; margin-left: 3em"
            />
          </p>

          <p class="card-text">
            3. เมื่อการอธิบายเส้นทาง จบลง ระบบจะนับถอยหลังอีก 30 วินาที
          </p>
          <p class="card-text">4. จากนั้น ระบบจะนำทางไป หน้าถัดไปอัตโนมัติ</p>
        </div>

        <button
          class="btn btn-warning btn-lg btn-block"
          @click="startInformation"
        >
          เริ่ม จดจำเส้นทางการเดินทาง
        </button>
      </div>
      
      <!-- info 1 - animate -->
      <div id="info1" class="hidden">
        <div class="row">
          <div class="col"></div>
          <div class="col-8">
            <div class="card">
              <video controls id="img-info1">
                <source
                  src="../assets/expain/hip-map-animate.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div class="col-3">
            <div id="CountDown-animate" class="hidden">
              <span
                id="lebelCountDown-animate"
                class="btn-danger"
                style="margin-left: 15px; padding: 5px 10px"
                >นับถอยหลัง 30 s</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- info 2 - landmark -->
      <div id="info2" class="hidden">
        <div class="row">
          <div class="col"></div>
          <div class="col-8">
            <div class="card">
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map_di.png"
                width="800px"
                class="center"
              />
              <div class="row">
                <div class="col">
                  <div class="card-body" id="card-aud-land">
                    <audio
                      id="infoLandmark"
                      class="center"
                      src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/sound/info_voice_landmark.mp3"
                      controls
                    ></audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div id="CountDown-land" class="hidden">
              <span
                id="lebelCountDown-land"
                class="btn-danger"
                style="margin-top: 22px; padding: 5px 10px"
              >
                นับถอยหลัง 30 s
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- info 3 - direction -->
      <div id="info3" class="hidden">
        <div class="row">
          <div class="col"></div>
          <div class="col-8">
            <div class="card">
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map_di.png"
                width="800px"
                class="center"
              />
              <div class="row">
                <div class="col">
                  <div class="card-body" id="card-aud-di">
                    <audio
                      id="infoDirection"
                      class="center"
                      src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/sound/info_voice_direction.mp3"
                      controls
                    ></audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div id="CountDown-di" class="hidden">
              <span
                id="lebelCountDown-di"
                class="btn-danger"
                style="margin-top: 22px; padding: 5px 10px"
              >
                นับถอยหลัง 30 s
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Timer -->
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
        <span id="countdowntimer">5</span>
      </div>
    </div>
  </div>
  <!-- Test html file -->
  <!-- <button @click="toExp1">EXP 1</button> -->
</template>

<script>
export default {
  data() {
    return {
      text: "true",
    };
  },
  methods: {
    startInformation() {
      // document.getElementById("mainInfo").
      let digit = localStorage.stuID.charAt(8);
      console.log(digit);
      switch (parseInt(digit) % 3) {
        case 0:
          document.getElementById("explanation").classList.add("hidden");
          localStorage.group = "animate";
          this.getTimer1();
          break;
        case 1:
          document.getElementById("explanation").classList.add("hidden");
          localStorage.group = "landmark";
          this.getTimer2();
          break;
        case 2:
          document.getElementById("explanation").classList.add("hidden");
          localStorage.group = "direction";
          this.getTimer3();
          break;
        default:
          break;
      }
    },
    getTimer1() {
      let ntimeleft = 6;

      var downloadTimer = setInterval(function () {
        ntimeleft--;
        document.getElementById("timer").classList.remove("hidden");
        document.getElementById("countdowntimer").textContent = ntimeleft;
        if (ntimeleft <= 0) {
          clearInterval(downloadTimer);
          document.getElementById("info1").classList.remove("hidden");
          document.getElementById("timer").classList.add("hidden");
        }
      }, 1000);
      this.playSoundListener();
    },
    getTimer2() {
      let ntimeleft = 6;

      var downloadTimer = setInterval(function () {
        ntimeleft--;
        document.getElementById("timer").classList.remove("hidden");
        document.getElementById("countdowntimer").textContent = ntimeleft;
        if (ntimeleft <= 0) {
          clearInterval(downloadTimer);
          document.getElementById("info2").classList.remove("hidden");
          document.getElementById("timer").classList.add("hidden");
        }
      }, 1000);
      this.playSoundListener();
    },
    getTimer3() {
      let ntimeleft = 6;

      var downloadTimer = setInterval(function () {
        ntimeleft--;
        document.getElementById("timer").classList.remove("hidden");
        document.getElementById("countdowntimer").textContent = ntimeleft;
        if (ntimeleft <= 0) {
          clearInterval(downloadTimer);
          document.getElementById("info3").classList.remove("hidden");
          document.getElementById("timer").classList.add("hidden");
        }
      }, 1000);
      this.playSoundListener();
    },
    playSoundListener() {
      // Play
      document
        .getElementById("img-info1")
        .addEventListener("play", function () {
          localStorage.infoStart = Date();
          document.getElementById("img-info1").controls = false;
        });
      document
        .getElementById("infoLandmark")
        .addEventListener("play", function () {
          localStorage.infoStart = Date();
          document.getElementById("card-aud-land").classList.add("hidden");
        });
      document
        .getElementById("infoDirection")
        .addEventListener("play", function () {
          localStorage.infoStart = Date();
          document.getElementById("card-aud-di").classList.add("hidden");
        });

      // End
      document
        .getElementById("img-info1")
        .addEventListener("ended", function () {
          document.getElementById("CountDown-animate").classList.remove("hidden");
          // Timer 30s
          let ntimeleft2 = 30;
          document.getElementById("CountDown-animate").classList.remove("hidden");
          let downloadTimer2 = setInterval(function () {
            ntimeleft2--;
            // console.log(ntimeleft2);
            document.getElementById(
              "lebelCountDown-animate"
            ).textContent = `นับถอยหลัง ${ntimeleft2} s ไปหน้าถัดไป.`;
            if (ntimeleft2 <= 0) {
              clearInterval(downloadTimer2);
              localStorage.infoFinish = Date();
              location.replace("/experiment_1.html");
            }
          }, 1000);
        });
      document
        .getElementById("infoLandmark")
        .addEventListener("ended", function () {
          document.getElementById("CountDown-land").classList.remove("hidden");
          // Timer 30s
          let ntimeleft2 = 30;
          document.getElementById("CountDown-land").classList.remove("hidden");
          let downloadTimer2 = setInterval(function () {
            ntimeleft2--;
            // console.log(ntimeleft2);
            document.getElementById(
              "lebelCountDown-land"
            ).textContent = `นับถอยหลัง ${ntimeleft2} s ไปหน้าถัดไป.`;
            if (ntimeleft2 <= 0) {
              clearInterval(downloadTimer2);
              localStorage.infoFinish = Date();
              location.replace("/experiment_1.html");
            }
          }, 1000);
        });
      document
        .getElementById("infoDirection")
        .addEventListener("ended", function () {
          document.getElementById("CountDown-di").classList.remove("hidden");
          // Timer 30s
          let ntimeleft2 = 30;
          document.getElementById("CountDown-di").classList.remove("hidden");
          let downloadTimer2 = setInterval(function () {
            ntimeleft2--;
            // console.log(ntimeleft2);
            document.getElementById(
              "lebelCountDown-di"
            ).textContent = `นับถอยหลัง ${ntimeleft2} s ไปหน้าถัดไป.`;
            if (ntimeleft2 <= 0) {
              clearInterval(downloadTimer2);
              localStorage.infoFinish = Date();
              location.replace("/experiment_1.html");
            }
          }, 1000);
        });
    },
    
  },
};


</script>

<style>
.hidden {
  display: none;
}
</style>