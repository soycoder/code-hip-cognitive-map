<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Home -   -->
      <div class="card" style="background-color: lemonchiffon">
        <div div class="card-body">
          <h4 class="card-title text-center">คำชี้แจง</h4>
          <p class="card-text" style="text-indent: 2.5em">
            การทดลองนี้ เกี่ยวกับการประมวลสารสนเทศของมนุษย์ (HUMAN INFORMATION
            PROCESSING) <br />เรื่อง การจดจำแผนที่ เท่านั้น
          </p>
          <p class="card-text" style="text-indent: 2.5em">
            ผลการทดลอง <u>ไม่ได้</u> บ่งชี้ถึงสติปัญญาของผู้ร่วมการทดลอง
            ดังนั้นจึงขอรบกวนทำการทดลองให้เป็นปกติ และธรรมชาติ
            โดยไม่ใช้เครื่องมือใด ๆ เพื่อเป็นการช่วยเหลือ
          </p>

          <p class="card-text" style="text-indent: 2.5em">
            ข้อมูลจากการทดลอง จะเก็บความลับและ<b> <u>ไม่เผยแพร่</u> </b
            >ต่อสาธารณชน แต่อย่างใด <b><u>ระยะเวลาการทดลอง</u></b> <br />ประมาณ
            5-10 นาที
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-2">
      <!-- Login - TU  -->
      <!-- <div class="card p-3">
        <h3 class="text-center">เข้าสู่ระบบ</h3>
        <div class="text-center">
          <div class="card-body">
            <p class="card-title">
              สำหรับ นักศึกษา มธ. ใช้รหัสผ่านด้วย TU-WIFI
            </p>
          </div>
        </div>
        <form @submit.prevent="loginTU">
          <div class="form-group">
            <label>รหัสนักศึกษา</label>
            <input
              v-model="username_tu"
              class="form-control"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label>รหัสผ่าน</label>
            <input
              v-model="password"
              class="form-control"
              type="password"
              required
            />
          </div>
          <p v-if="error" class="error">
            รหัสนักศึกษาหรือรหัสผ่าน ไม่ถูกต้อง ลองอีกครั้ง
          </p>
          <button type="submit" class="btn btn-warning btn-block">
            เข้าสู่ระบบ
          </button>
        </form>
      </div> -->

      <!-- Login - Other -->
      <div class="card p-3 mt-3">
        <h3 class="text-center">เข้าสู่ระบบ</h3>

        <form @submit.prevent="loginOther">
          <div class="form-group">
            <label>รหัสนักศึกษา</label>
            <input
              v-model="username_other"
              class="form-control"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label>เพศ</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input ml-3"
                type="radio"
                id="male"
                value="ชาย"
                v-model="gender"
              />
              <label class="form-check-label" for="male">ชาย</label>

              <input
                class="form-check-input ml-3"
                type="radio"
                id="female"
                value="หญิง"
                v-model="gender"
              />
              <label class="form-check-label" for="female">หญิง</label>

              <input
                class="form-check-input ml-3"
                type="radio"
                id="none"
                value="ไม่ระบุ"
                v-model="gender"
              />
              <label class="form-check-label" for="none">ไม่ระบุ</label>
              <p v-if="hasGender" class="error ml-3 pt-3">กรุณาเลือก</p>
            </div>
          </div>
          <div class="form-group">
            <label>สาขา</label
            ><small class="ml-2">(เช่น วิทยาการคอมพิวเตอร์)</small>
            <input
              v-model="department"
              class="form-control"
              type="text"
              required
            />
          </div>
          <button type="submit" class="btn btn-warning btn-block">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username_tu: "",
      password: "",
      username_other: "",
      gender: "",
      hasGender: false,
      department: "",
      displayname_th: "",
      error: false,
    };
  },
  methods: {
    loginTU() {
      let dataAuth = {
        username: this.username_tu,
        password: this.password,
      };
      // console.log(dataAuth);
      axios
        .post("https://auth-tu-api.herokuapp.com/api/auth", dataAuth)
        .then(function (res) {
          if (res.data.status === true) {
            // console.log(res.data);
            localStorage.stuID = res.data.username;
            localStorage.status = res.data.status;
            localStorage.type = res.data.type;
            localStorage.displayname_th = res.data.displayname_th;
            localStorage.displayname_en = res.data.displayname_en;
            localStorage.faculty = res.data.faculty;
            location.replace("/info");
          } else {
            this.error = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loginOther() {
      if (this.gender !== "") {
        localStorage.stuID = this.username_other;
        localStorage.type = this.gender;
        localStorage.faculty = this.department;
        location.replace("/info");
      } else {
        this.hasGender = true;
      }
    },
  },
};
</script>

<style>
.error {
  font-size: 12px;
  color: red;
}
</style>