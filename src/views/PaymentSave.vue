<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title class="subheading">{{$route.name}}</v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 md5>
              <v-select
                :items="items"
                v-model="search.declare_line"
                item-text="name"
                label="ระบุโครงการ/สายทาง"
                single-line
                return-object
              >
                <template slot="selection" slot-scope="data">{{ data.item.name }}</template>
                <template slot="item" slot-scope="data">{{ data.item.id }} - {{ data.item.name }}</template>
              </v-select>
            </v-flex>
            <v-flex xs12 md2>
              <v-text-field v-model="search.declare_no" label="ประกาศราคาครั้งที่"></v-text-field>
            </v-flex>
            <v-flex xs12 md5>
              <v-text-field v-model="search.owner" label="ระบุชื่อเจ้าของหรือผู้ครอบครอง"></v-text-field>
            </v-flex>
            <!-- <v-flex xs6 md4>
              <v-text-field label="ระบุลำดับที่" :mask="'###'"></v-text-field>
            </v-flex>
            <v-flex xs6 md4>
              <v-text-field label="ระบุแผ่นที่" :mask="'###'"></v-text-field>
            </v-flex>
            <v-flex xs6 md4>
              <v-text-field label="ระบุแปลงที่" :mask="'###'"></v-text-field>
            </v-flex>-->
          </v-layout>
          <v-layout align-center justify-center row fill-height>
            <v-btn
              color="primary"
              :loading="this.$store.state.loading"
              :disabled="this.$store.state.loading"
              @click="getDeclarationDetail"
            >ค้นหา</v-btn>
            <v-btn flat>ล้างเงื่อนไขการค้นหา</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <br>
      <v-card v-if="declaration">
        <v-card-title class="subheading">ผลลัพธ์การค้นหา</v-card-title>
        <v-card-text>
          <v-flex xs6 md12>
            <!-- <v-layout column fill-height>
              <v-flex xs6 md4>
                <v-btn color="primary" @click="dialog = true">บันทึกเลขที่ใบสำคัญจ่าย</v-btn>
              </v-flex>
            </v-layout>-->
            <v-dialog v-model="dialog" max-width="450px">
              <v-card>
                <v-card-title>
                  <span class="subheading">บันทึกเลขที่ใบสำคัญจ่าย</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md5>
                        <v-text-field
                          v-model="payment.docno"
                          label="เลขที่ใบสำคัญจ่าย"
                          :mask="'##########'"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="payment.fiscalyear"
                          label="ปีงบประมาณ"
                          :mask="'####'"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions></v-card-actions>
              </v-card>
            </v-dialog>
            <v-data-table
              v-model="tableSelected"
              :headers="headers"
              :items="declaration"
              :pagination.sync="tableconfig"
              class="elevation-0"
              item-key="id"
            >
              <template slot="items" slot-scope="props">
                <!-- <td>
                  <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                </td>-->
                <td class="text-xs-center">
                  <v-icon @click="editItem(props.item)">save</v-icon>
                </td>
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
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmLandWahAmt)}}</td>
                <td class="text-xs-right">
                  <v-layout align-center justify-center column fill-height>
                    <v-flex xs12>{{convertToMoneyFormat(props.item.rpmLandAmt)}}</v-flex>
                    <v-flex xs12>{{props.item.rpmLandAmtDoc}}</v-flex>
                  </v-layout>
                </td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmRemainAmt)}}</td>
                <td class="text-xs-center">{{props.item.rpmBuildingNo}}</td>
                <td class="text-xs-center">{{props.item.rpmBuildingDistrict}}</td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmBuildingAmt)}}</td>
                <td
                  class="text-xs-right"
                >{{convertToMoneyFormat(props.item.rpmBuildingRenovateAmt)}}</td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmPerennialAmt)}}</td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmRenterAmt)}}</td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.rpmSection21Amt)}}</td>
                <td class="text-xs-right">{{convertToMoneyFormat(props.item.sumAmt)}}</td>
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
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-snackbar v-model="snackbar.open" :timeout="4000" :top="'top'" :text="snackbar.text">
      {{ snackbar.text }}
      <v-btn color="success" @click="snackbar.open = false">ปิด</v-btn>
    </v-snackbar>
    <v-dialog v-model="dialog_item" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="subheading">บันทึกเลขที่ใบสำคัญจ่าย</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs4>
                <v-text-field v-model="editedItem.seq" readonly :label="'ลำดับสส.'"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field v-model="editedItem.sheet" readonly :label="'แผ่นที่'"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field v-model="editedItem.plangNo" readonly :label="'แปลงที่'"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.owner"
                  readonly
                  :label="'ชื่อเจ้าของหรือผู้ครอบครอง'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmLandAmtDoc"
                  mask="##########/####"
                  return-masked-value
                  :label="'ค่าทดแทนที่ดิน (' + convertToMoneyFormat(editedItem.rpmLandAmt)+' บาท)'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmRemainAmtDoc"
                  mask="##########/####"
                  return-masked-value
                  :label="'ค่าทดแทนที่ดินส่วนที่เหลือที่มีราคาลดลง (' + convertToMoneyFormat(editedItem.rpmRemainAmt)+')'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmBuildingAmtDoc"
                  mask="##########/####"
                  :label="'ค่าทดแทนสิ่งปลูกสร้าง ('+convertToMoneyFormat(editedItem.rpmBuildingAmt)+')'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmBuildingRenovateAmtDoc"
                  mask="##########/####"
                  return-masked-value
                  :label="'ค่าบูรณะ ('+convertToMoneyFormat(editedItem.rpmBuildingRenovateAmt)+')'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmPerennialAmtDoc"
                  mask="##########/####"
                  :label="'ค่าทดแทนไม้ยืนต้น ('+convertToMoneyFormat(editedItem.rpmPerennialAmt)+')'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmRenterAmtDoc"
                  mask="##########/####"
                  return-masked-value
                  :label="'ค่าทดแทนผู้เช่า ('+convertToMoneyFormat(editedItem.rpmRenterAmt)+')'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.rpmSection21AmtDoc"
                  mask="##########/####"
                  return-masked-value
                  :label="'ค่าทดแทนม.21 วรรคท้าย ('+convertToMoneyFormat(editedItem.rpmSection21Amt)+' บาท)'"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea v-model="editedItem.remarkPayment" :label="'หมายเหตุ'"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="close">ยกเลิก</v-btn>
          <v-btn
            color="primary"
            :loading="this.$store.state.loading"
            :disabled="this.$store.state.loading"
            @click="save"
          >บันทึก</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import TestCom from "@/components/TestCom";
import DatePicker from "@/components/DatePicker";
import DeclarationApi from "@/services/declaration_api";

export default {
  data() {
    return {
      search: {
        line: "",
        declare_no: "",
        declare_line: "",
        owner: ""
      },
      snackbar: {
        open: false,
        text: ""
      },
      editedItem: {},
      editedIndex: -1,
      mydate1: "01/01/2561",
      mydate2: "31/12/2561",
      itemSelected: null,
      dialog_item: false,
      dialog: false,
      tableSelected: [],
      tableconfig: {
        rowsPerPage: 10
      },
      payment: {
        docno: "",
        fiscalyear: ""
      },
      items: [
        {
          name: "โครงการทางพิเศษ (เริ่มต้น)",
          id: 1
        },
        {
          name: "ฉลองรัช",
          id: 2
        },
        {
          name: "เฉลิมมหานคร",
          id: 3
        },
        {
          name: "บูรพาวิถี",
          id: 4
        },
        {
          name: "ศรีรัช-วงแหวนรอบนอกกรุงเทพมหานคร",
          id: 5
        },
        {
          name: "สายเชื่อมอุตสาหกรรมบางพลี - สุขสวัสดิ์ ",
          id: 6
        },
        {
          name: "สายบางนา - อาจณรงค์",
          id: 7
        },
        {
          name: "สายพระราม 3 - ดาวคะนอง - วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก",
          id: 8
        },
        {
          name: "สายรามอินทรา - วงแหวนรอบนอก",
          id: 9
        },
        {
          name: "อุดรรัถยา",
          id: 10
        }
      ],
      tableconfig: {
        rowsPerPage: 10
      },
      headers: [
        // { text: "id", value: "id", width: "1%" },
        { text: "", width: "1%", sortable: false },
        { text: "ลำดับ", value: "seq", width: "1%" },
        { text: "แผ่นที่", value: "sheet", width: "1%" },
        { text: "แปลง", value: "plangNo", width: "1%" },
        {
          text: "__________ ชื่อเจ้าของหรือผู้ครอบครอง __________ ",
          value: "owner",
          width: "800px"
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
        {
          text: "ค่าทดแทนม.21 วรรคท้าย",
          value: "rpmSection21Amt",
          width: "1%"
        },
        { text: "รวมเป็นเงินทั้งสิ้น", value: "sumAmt", width: "1%" },
        {
          text: "_____________หมายเหตุ_____________",
          value: "remark",
          width: "1%"
        },
        { text: "CODE ประกาศราคา", value: "declarationId", width: "1%" },
        { text: "วันที่สร้าง", value: "dateCreate", width: "1%" },
        { text: "ผู้ใช้ที่สร้าง", value: "userCreate", width: "1%" },
        { text: "วันที่ปรับปรุง", value: "dateUpdate", width: "1%" },
        { text: "ผู้ใช้ที่ปรับปรุง", value: "userUpdate", width: "1%" }
      ],
      declaration: null
    };
  },
  methods: {
    savePaymentDocument: function(item) {
      DeclarationApi.savePaymentDocument(item)
        .then(response => {
          this.snackbar.open = true;
          this.snackbar.text = response.data.message;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDeclarationDetail: function() {
      DeclarationApi.getDeclarationDetail(this.search)
        .then(response => {
          this.declaration = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    convertToMoneyFormat: function(number) {
      if (number) {
        //อ้างอิง : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
        return parseFloat(number).toLocaleString("en-US", {
          minimumFractionDigits: 2
        });
      } else {
        return "-";
      }
    },
    editItem(item) {
      this.editedIndex = this.declaration.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog_item = true;
    },
    close() {
      this.dialog_item = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.declaration[this.editedIndex], this.editedItem);
        DeclarationApi.savePaymentDocument(this.editedItem)
          .then(response => {
            this.snackbar.open = true;
            this.snackbar.text = response.data.message;
            this.close();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.declaration.push(this.editedItem);
        this.close();
      }
    }
  },
  components: { DatePicker, TestCom },
  computed: {},
  watch: {}
};
</script>

<style scoped>
/* .v-label,
.v-input {
  border: 1px dashed rgba(0, 0, 0, 0.4);
  line-height: 28px;
} */
</style>