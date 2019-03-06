<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title class="subheading">{{$route.name}}</v-card-title>
      </v-card>

      <v-stepper v-model="stepperpage">
        <v-stepper-header>
          <v-stepper-step :complete="stepperpage > 1" step="1">นำส่งข้อมูลประกาศราคา</v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step :complete="stepperpage > 2" step="2">บันทึกข้อมูลประกาศราคา</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">ยืนยันข้อมูล</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card color="grey lighten-2" height="200px">
              <v-divider></v-divider>
              <v-layout align-center justify-center column fill-height>
                <label for="file" class="headline grey--text text--darken-2">เลือกเอกสารประกาศราคา</label>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
                <v-btn
                  :loading="this.$store.state.loading"
                  :disabled="this.$store.state.loading"
                  color="primary"
                  @click="submitFile()"
                >อัพโหลดเอกสาร</v-btn>
              </v-layout>
            </v-card>

            <!-- <v-btn color="primary" @click="e1 = 2">ถัดไป</v-btn>

            <v-btn flat>Cancel</v-btn>-->
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card-title class="subheading font-weight-bold">ข้อมูลประกาศราคา</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 sm6 md10>
                  <v-text-field
                    v-model="declaration.declareLine"
                    label="วัตถุประสงค์ / สายทางพิเศษ"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field v-model="declaration.district" label="เขต"></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md2>
                  <v-text-field v-model="declaration.declareNo" label="ประกาศราคาครั้งที่"></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md4>
                  <date-picker :pdate.sync="declaration.declareDate" :plabel="'ลงวันที่'"></date-picker>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-title class="subheading font-weight-bold">ข้อมูลการเวนคืนที่ดิน</v-card-title>
            <v-divider></v-divider>
            <v-data-table
              :headers="headers"
              :items="declaration.lepMstDeclarationDetailList"
              :pagination.sync="tableconfig"
              class="elevation-0"
            >
              <template slot="items" slot-scope="props">
                <!-- <td class="text-xs-center">{{props.item.id}}</td> -->
                <td class="text-xs-center">{{props.item.seq}}</td>
                <td class="text-xs-center">{{props.item.sheet}}</td>
                <td class="text-xs-center">{{props.item.plangNo}}</td>
                <td class="text-xs-left">{{props.item.owner}}</td>
                <td class="text-xs-center">{{props.item.licenseDoc}}</td>
                <td class="text-xs-center">{{props.item.parcelNo}}</td>
                <td class="text-xs-center">{{props.item.utm}}</td>
                <td class="text-xs-center">{{props.item.expRai}}</td>
                <td class="text-xs-center">{{props.item.expNgan}}</td>
                <td class="text-xs-center">{{props.item.expSqrWah}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmLandAmt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmRemainAmt)}}</td>
                <td class="text-xs-center">{{props.item.rpmBuildingNo}}</td>
                <td class="text-xs-center">{{props.item.rpmBuildingDistrict}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmBuildingAmt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmBuildingRenovateAmt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmPerennialAmt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmRenterAmt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.rpmSection21Amt)}}</td>
                <td class="text-xs-right">{{formatMoney(props.item.sumAmt)}}</td>
                <td class="text-xs-left">{{props.item.remark}}</td>
                <td class="text-xs-center">{{props.item.declarationId}}</td>
                <!-- <td class="text-xs-center">
                    <date-picker :datechange.sync="props.item.dateCreate"></date-picker>
                </td>-->
                <td class="text-xs-center">{{props.item.userCreate}}</td>
                <td class="text-xs-center">{{props.item.dateUpdate}}</td>
                <td class="text-xs-center">{{props.item.userUpdate}}</td>
              </template>
            </v-data-table>
            <v-container>
              <v-layout align-center justify-center>
                <v-btn flat @click="stepperpage = 1">ย้อนกลับ</v-btn>
                <v-btn color="primary" @click="stepperpage = 3">ถัดไป</v-btn>
              </v-layout>
            </v-container>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card-title class="subheading font-weight-bold">ยืนยันการบันทึกข้อมูลประกาศราคา</v-card-title>
            <v-divider></v-divider>

            <v-layout align-center justify-center row fill-height>
              <label for="file" class="headline"></label>
              <v-container>
                <v-layout align-center justify-center>
                  <v-btn flat @click="stepperpage = 1">ย้อนกลับ</v-btn>
                  <v-btn
                    :loading="this.$store.state.loading"
                    color="primary"
                    @click="submitDataList"
                  >ตกลง</v-btn>
                </v-layout>
              </v-container>
            </v-layout>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
    <v-snackbar v-model="snackbar" :timeout="5000" :top="'top'" :text="snackbartext">
      {{ snackbartext }}
      <v-btn color="success" @click="snackbar = false">ปิด</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import DatePicker from "@/components/DatePicker";

export default {
  data: () => ({
    stepperpage: 0,
    snackbar: false,
    snackbartext: "false",
    tableconfig: {
      rowsPerPage: 10
    },
    headers: [
      // { text: "id", value: "id", width: "1%" },
      { text: "ลำดับ", value: "seq", width: "1%" },
      { text: "แผ่นที่", value: "sheet", width: "1%" },
      { text: "แปลง", value: "plangNo", width: "1%" },
      {
        text: ". . . . . ชื่อเจ้าของหรือผู้ครอบครอง . . . . .",
        value: "owner",
        class: "xs8"
      },
      { text: "เอกสารสิทธิ์เลขที่", value: "licenseDoc", width: "1%" },
      { text: "เลขที่ดิน", value: "parcelNo", width: "1%" },
      { text: "UTM", value: "utm", width: "1%" },
      { text: "ถขท.ไร่", value: "expRai", width: "1%" },
      { text: "ถขท.งาน", value: "expNgan", width: "1%" },
      { text: "ถขท.ตารางวา", value: "expSqrWah", width: "1%" },
      { text: "ทด.ตารางวาละ", value: "rpmLandWahAmt", width: "1%" },
      { text: "ทด.จำนวนเงิน", value: "rpmLandAmt", width: "1%" },
      {
        text: "ค่าทดแทนที่ดินส่วนที่เหลือ",
        value: "rpmRemainAmt",
        width: "1%"
      },
      { text: "สปส.บ้านเลขที่", value: "rpmBuildingNo", width: "1%" },
      {
        text: "สปส.แขวง",
        value: "rpmBuildingDistrict",
        width: "900"
      },
      { text: "สปส.จำนวนเงิน", value: "rpmBuildingAmt", width: "1%" },
      {
        text: "สปส.ค่าบูรณะ",
        value: "rpmBuildingRenovateAmt",
        width: "1%"
      },
      { text: "ค่าทดแทนไม่ยืนต้น", value: "rpmPerennialAmt", width: "1%" },
      { text: "ค่าทดแทนผู้เช่า", value: "rpmRenterAmt", width: "1%" },
      { text: "ค่าทดแทนม.21 วรรคท้าย", value: "rpmSection21Amt", width: "1%" },
      { text: "รวมเป็นเงินทั้งสิ้น", value: "sumAmt", width: "1%" },
      { text: "หมายเหตุ", value: "remark", width: "1%" },
      { text: "CODE ประกาศราคา", value: "declarationId", width: "1%" },
      { text: "วันที่สร้าง", value: "dateCreate", width: "1%" },
      { text: "ผู้ใช้ที่สร้าง", value: "userCreate", width: "1%" },
      { text: "วันที่ปรับปรุง", value: "dateUpdate", width: "1%" },
      { text: "ผู้ใช้ที่ปรับปรุง", value: "userUpdate", width: "1%" }
    ],
    declaration: {}
  }),
  methods: {
    submitFile: function() {
      if (this.file) {
        let formData = new FormData();
        formData.append("file", this.file);
        this.$http
          .post(
            process.env.VUE_APP_API_LEP_ENDPOINT +
              "/api/v1/declaration/upload/excel",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => {
            this.declaration = response.data.data;
            this.stepperpage = 2;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    submitDataList: function() {
      if (this.declaration) {
        var url = process.env.VUE_APP_API_LEP_ENDPOINT + "/api/v1/declaration";
        var requestBody = {
          datalist: JSON.stringify(this.declaration)
        };
        var config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };

        var querystring = require("querystring");

        this.$http
          .post(url, querystring.stringify(requestBody), config)
          .then(response => {
            console.log(response);
            this.snackbar = true;
            this.snackbartext = "บันทึกประกาศราคาเสร็จสมบูรณ์";
            // this.declaration = response.data.data;

            this.stepperpage = 1;
          })
          .catch(error => {
            // console.log(error);
          });
      }
    },
    handleFileUpload: function() {
      this.file = this.$refs.file.files[0];
    },
    formatMoney: function(value) {
      return this.$formatting.money(value);
    }
  },
  mounted: function() {
    // DeclarationService.getAll();
  },
  components: {
    DatePicker
  },
  created() {
    var vm = this;
    // console.log(this.$formatting.capitalizeFirstLetter("abcdefg"));
    // this.$http
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then(function(response) {
    //     console.log(response.data);
    //   });
  }
};
</script>
