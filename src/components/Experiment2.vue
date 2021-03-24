<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <!-- Experiment 2  -  -->

      <div
        id="explanation_ex2"
        class="col-8"
        style="margin-right: auto; margin-left: auto"
      >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">คำอธิบาย: การทดลองที่ 2</h4>
            <p class="card-text">
              1. ให้ผู้ร่วมการทดลอง กดปุ่มบน<span style="color: #ee0f0f"
                >คีย์บอร์ด W A S D</span
              >
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pic-keyboard.png"
                style="height: 60px"
              />
              ในการบังคับรถยนต์ เพื่อ<b>เดินตามเส้นทาง</b>
              ที่ท่านได้จดจำเมื่อเริ่มการทดลอง
              <br />
            </p>
            <p>
              <img
                src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/ex2-play.gif"
                style="height: 280px"
              />

              <br />
              หากท่านคิดว่าได้
              <b>เดินทางมาถึงเป้าหมายแล้ว</b>
              (โดยใช้เส้นทางเดินเดียวกับตอนอธิบาย) กดปุ่ม ถึง จุดหมายแล้ว
              <span class="btn btn-warning">ถึง จุดหมายแล้ว</span>
              <br />
              <b style="color: #ee0f0f">*หมายเหตุ* </b> แรกเริ่ม ผู้ร่วมการทดลอง
              ต้องปฏิบัติ ตามรูป
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
          id="getInfo2"
          @click="startEX2"
        >
          เริ่ม การทดลอง
        </button>
      </div>

      <div id="ex2" class="hidden">
        <img
          class="hidden"
          id="full-map"
          src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map_di.png"
          alt="full_map_di.png"
          width="1000"
          height="720"
        />
        <img class="hidden" id="AudiCar-A" src="../assets/car/Audi_A.png" />
        <img class="hidden" id="AudiCar-S" src="../assets/car/Audi_S.png" />
        <img class="hidden" id="AudiCar-W" src="../assets/car/Audi_W.png" />
        <img class="hidden" id="AudiCar-D" src="../assets/car/Audi_D.png" />
        <div class="row container">
          <div class="col-1"></div>
          <div class="col-8">
            <canvas
              width="1000"
              height="720"
              id="canvas_ex2"
              tabindex="0"
              @keydown="doKeyMove"
            >
              Canvas tag
            </canvas>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="container">
          <button
            class="btn btn-warning btn-lg btn-block"
            data-toggle="modal"
            data-target="#myModal"
            @click="saveData"
          >
            ถึง จุดหมายแล้ว
          </button>
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

      <!-- The Modal -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h3 class="modal-title">สถานะการบันทึกข้อมูล</h3>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body center" id="mymodal-body">
              <div
                class="spinner-border text-warning center"
                style="width: 5rem; height: 5rem; font-size: 20px"
                role="status"
              ></div>
              <br />
              <span style="font-size: 20px">กำลังบันทึกข้อมูล...</span>
            </div>

            <!-- Modal footer -->
            <div class="hidden" id="footer">
              <div class="modal-footer center" id="mymodal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  id="btn-close"
                >
                  เสร็จสิ้น
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var text = 0;
var y_in_map = 0;
var x_in_map = 0;
var x= 0;
var y= 0;
var map_axis_x= 1000;
var map_axis_y= 720;
var map_x_channel= 50;
var map_y_channel= 37;
var tiles_x= map_axis_x / map_x_channel;
var tiles_y= map_axis_y / map_y_channel;
var x= 2 * tiles_x;
var y= 29 * tiles_y;
var car_x= 50;
var car_y= 55;
var discovered= null;
var lastkey= null;
var car_A= null;
var car_S= null;
var car_W= null;
var car_D= null;

export default {
  data() {
    return {
      dataImg: {},
      canvas: null,
      map: [
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "10",
          "*",
          "*",
          "*",
          "*",
          "11",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "12",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "13",
          "13",
          "13",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "9",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "8",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "7",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "2",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "3",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "6",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "4",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "5",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "*",
          "*",
          "*",
          "*",
          "*",
          "1",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
        [
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "*",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
        ],
      ],
      
      
    };
  },
  mounted() {
    var cc = document.getElementById("canvas_ex2");
    this.canvas = cc.getContext("2d");
    // this.canvas.addEventListener("keydown", doKeyMove, true);
    // document.body.appendChild("canvas_2");
    this.car_A = document.getElementById("AudiCar-A");
    this.car_S = document.getElementById("AudiCar-S");
    this.car_W = document.getElementById("AudiCar-W");
    this.car_D = document.getElementById("AudiCar-D");
    this.drawingImage();
    this.discovered = new Set();
  },
  methods: {
    startEX2() {
      let timeleft = 6;
      document.getElementById("explanation_ex2").classList.add("hidden");
      let downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("timer").classList.remove("hidden");
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
          document.getElementById("ex2").classList.remove("hidden");
          document.getElementById("timer").classList.add("hidden");
          document.getElementById("banner").classList.add("hidden");
        }
      }, 1000);
      localStorage.startExperiment2 = Date();

      //   this.canvas.drawImage(
      //     document.getElementById("full-map"),
      //     0,
      //     0,
      //     this.map_axis_x,
      //     this.map_axis_y
      //   );
      this.road();
      this.base64ToJSON();
      //   console.warn(this.dataImg);
    },
    base64ToJSON() {
      let len = sessionStorage.getItem("base64canvas").length;
      let col = parseInt(len / 45000) + 1;
      let dataOut = {};
      dataOut["stuID"] = localStorage.getItem("stuID");
      for (let i = 0; i < col; i++) {
        let img = "";
        if (i == col) {
          img = sessionStorage
            .getItem("base64canvas")
            .substring(i * 45000, len);
        } else {
          img = sessionStorage
            .getItem("base64canvas")
            .substring(i * 45000, (i + 1) * 45000);
        }

        let c = i + 1;
        dataOut[c.toString()] = img;
        console.log(c, img.length);
      }
      this.dataImg = dataOut;
    },
    drawingImage() {
      this.canvas.drawImage(
        document.getElementById("full-map"),
        0,
        0,
        this.map_axis_x,
        this.map_axis_y
      );
      this.road();
    },
    road() {
      for (let i = 0; i < this.map[0].length; i++) {
        // 100
        for (let j = 0; j < this.map.length; j++) {
          // 75
          if (this.map[j][i] === "*") {
            // console.log(i, j);
            this.canvas.fillStyle = "#dc3545";
            this.canvas.fillRect(
              i * this.tiles_x,
              j * this.tiles_y,
              this.tiles_x,
              this.tiles_y
            );
          }
        }
      }
    },
    clearCanvas() {
      this.canvas.width = this.canvas.width;
    },
    drawMaps() {
      this.canvas.beginPath();
      // Grid - Vertical line
      for (let i = 1; i <= this.map_y_channel; i++) {
        this.canvas.moveTo(0, i * this.tiles_x);
        this.canvas.lineTo(this.map_axis_x, i * this.tiles_x);
      }

      // Grid - Horizontal line
      for (let i = 1; i <= this.map_x_channel; i++) {
        this.canvas.moveTo(i * this.tiles_y, 0);
        this.canvas.lineTo(i * this.tiles_y, this.map_axis_y);
      }
      this.drawingImage();
      this.canvas.stroke();
    },
    doKeyMove(e) {
      console.log(e.keyCode);
      this.drawMaps();
      this.canvas.fillStyle = "#FF0000";
      x_in_map = 0;
      if (((x / tiles_x) * 10) % 10 > 5)
        x_in_map = parseInt(x / tiles_x) + 1;
      else x_in_map = parseInt(x / tiles_x);
      y_in_map = 0;
      if (((y / tiles_y) * 10) % 10 > 5)
        y_in_map = parseInt(y / tiles_y) + 1;
      else y_in_map = parseInt(y / tiles_y);

        console.log('(x,y) : (',x_in_map,',',y_in_map,')',text);
      let isRoad = false;

      //====================
      //	THE W KEY
      //====================
      if (e.keyCode == 87 && this.map[y_in_map - 1][x_in_map] != "-") {
        this.clearCanvas();
        this.drawMaps();
        this.y = this.y - this.tiles_y;
        if (this.y < 0) {
          this.y = 0;
        }
        this.canvas.drawImage(
          this.car_W,
          this.x - 15,
          this.y - 15,
          this.car_x,
          this.car_y
        );
        // this.canvas.fillStyle = "#28a745";
        // this.canvas.fillRect(x, y, tiles_x, tiles_y);
        this.lastkey = "W";
        isRoad = true;
        let sign = this.map[y_in_map][x_in_map];
        if (sign != "*" && sign != "-") {
          // console.log(sign,parseInt(sign));
          this.discovered.add(parseInt(sign));
        }
      }

      //====================
      //	THE S KEY
      //====================
      if (e.keyCode == 83 && this.map[y_in_map + 1][x_in_map] != "-") {
        this.clearCanvas();
        this.drawMaps();
        this.y = this.y + this.tiles_y;
        if (this.y >= this.map_axis_y) {
          this.y = this.map_axis_y - this.tiles_y;
        }
        this.canvas.drawImage(
          this.car_S,
          this.x - 15,
          this.y - 20,
          this.car_x,
          this.car_y
        );
        // this.canvas.fillStyle = "#28a745";
        // this.canvas.fillRect(x, y, tiles_x, tiles_y);
        this.lastkey = "S";
        isRoad = true;
        let sign = this.map[y_in_map][x_in_map];
        if (sign != "*" && sign != "-") {
          // console.log(sign,parseInt(sign));
          this.discovered.add(parseInt(sign));
        }
      }

      //====================
      //	THE A KEY
      //====================
      if (e.keyCode == 65 && this.map[y_in_map][x_in_map - 1] != "-") {
        this.clearCanvas();
        this.drawMaps();
        this.x = this.x - this.tiles_x;
        if (this.x < 0) {
          this.x = 0;
        }
        this.canvas.drawImage(
          this.car_A,
          this.x - 15,
          this.y - 20,
          this.car_x,
          this.car_y
        );
        // this.canvas.fillStyle = "#28a745";
        // this.canvas.fillRect(x, y, tiles_x, tiles_y);
        this.lastkey = "A";
        isRoad = true;
        let sign = this.map[y_in_map][x_in_map];
        if (sign != "*" && sign != "-") {
          // console.log(sign,parseInt(sign));
          this.discovered.add(parseInt(sign));
        }
      }

      //====================
      //	THE D KEY
      //====================
      if (e.keyCode == 68 && this.map[y_in_map][x_in_map + 1] != "-") {
        this.clearCanvas();
        this.drawMaps();
        this.x = this.x + this.tiles_x;
        if (this.x >= this.map_axis_x) {
          this.x = this.map_axis_x - this.tiles_x;
        }
        this.canvas.drawImage(
          this.car_D,
          this.x - 25,
          this.y - 20,
          this.car_x,
          this.car_y
        );
        // this.canvas.fillStyle = "#28a745";
        // this.canvas.fillRect(x, y, tiles_x, tiles_y);
        this.lastkey = "D";
        isRoad = true;
        let sign = this.map[y_in_map][x_in_map];
        if (sign != "*" && sign != "-") {
          // console.log(sign,parseInt(sign));
          this.discovered.add(parseInt(sign));
        }
      }
      // console.log(this.lastkey,isRoad);

      //====================
      //	THE LAST KEY
      //====================
      if (this.lastkey != "-" && !isRoad) {
        switch (this.lastkey) {
          case "W":
            this.canvas.drawImage(
              this.car_W,
              this.x - 15,
              this.y - 15,
              this.car_x,
              this.car_y
            );
            break;
          case "A":
            this.canvas.drawImage(
              this.car_A,
              this.x - 15,
              this.y - 20,
              this.car_x,
              this.car_y
            );
            break;
          case "S":
            this.canvas.drawImage(
              this.car_S,
              this.x - 15,
              this.y - 20,
              this.car_x,
              this.car_y
            );
            break;
          case "D":
            this.canvas.drawImage(
              this.car_D,
              this.x - 25,
              this.y - 20,
              this.car_x,
              this.car_y
            );
            break;
          default:
            break;
        }
      }
    },
    saveData() {
      localStorage.finishExperiment2 = Date();
      localStorage.result = Array.from(this.discovered);
      saveDataToSheet();
    },
    saveDataToSheet() {
      // let img1 = sessionStorage.getItem("base64canvas").substring(0,parseInt(sessionStorage.getItem("base64canvas").length/2));
      // let img2 = sessionStorage.getItem("base64canvas").substring(parseInt(sessionStorage.getItem("base64canvas").length/2),parseInt(sessionStorage.getItem("base64canvas").length));
      let data = {
        stuID: localStorage.getItem("stuID"),
        type: localStorage.getItem("type"),
        faculty: localStorage.getItem("faculty"),
        displayname_th: localStorage.getItem("displayname_th"),
        displayname_en: localStorage.getItem("displayname_en"),
        group: localStorage.getItem("group"),
        infoStart: localStorage.getItem("infoStart"),
        infoFinish: localStorage.getItem("infoFinish"),
        startExperiment1: localStorage.getItem("startExperiment1"),
        finishExperiment1: localStorage.getItem("finishExperiment1"),
        startExperiment2: localStorage.getItem("startExperiment2"),
        finishExperiment2: localStorage.getItem("finishExperiment2"),
        result: localStorage.getItem("result"),
      };

      // Send a POST request
      function axiosSendToapiResult() {
        return axios({
          method: "post",
          url: "https://gsheet-api.herokuapp.com/api/result",
          data,
        }).then((response) => {
          return response.data;
        });
      }

      function axiosSendToapiImage() {
        return axios({
          method: "post",
          url: "https://gsheet-api.herokuapp.com/api/image",
          data: dataImg,
        }).then((response) => {
          return response.data;
        });
      }

      axiosSendToapiResult().then((resResult) => {
        axiosSendToapiImage().then((resImage) => {
          console.log(resImage);

          if (resResult.success === true && resImage.success === true) {
            document.getElementById("mymodal-body").innerHTML = ` 
                <div class="text-success center">
                  <i class="fas fa-check-circle fa-5x"></i>
                </div>
                <br/>
                <span class="center" style="font-size: 20px">บันทึกสำเร็จ</span>
                `;
            document.getElementById("footer").classList.remove("hidden");
          }
        });
      });

      document
        .getElementById("btn-close")
        .addEventListener("click", function () {
          location.replace("thank.html");
        });
    },
  },
};
</script>
