(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad25e15"],{3698:function(t,e,a){},4477:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"subheading"},[t._v(t._s(t.$route.name))]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md5:""}},[a("v-select",{attrs:{items:t.items,"item-text":"name",label:"ระบุโครงการ/สายทาง","single-line":"","return-object":""},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(t._s(e.item.name))]}},{key:"item",fn:function(e){return[t._v(t._s(e.item.id)+" - "+t._s(e.item.name))]}}]),model:{value:t.search.declare_line,callback:function(e){t.$set(t.search,"declare_line",e)},expression:"search.declare_line"}})],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-text-field",{attrs:{label:"ประกาศราคาครั้งที่"},model:{value:t.search.declare_no,callback:function(e){t.$set(t.search,"declare_no",e)},expression:"search.declare_no"}})],1),a("v-flex",{attrs:{xs12:"",md5:""}},[a("v-text-field",{attrs:{label:"ระบุชื่อเจ้าของหรือผู้ครอบครอง"},model:{value:t.search.owner,callback:function(e){t.$set(t.search,"owner",e)},expression:"search.owner"}})],1)],1),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-btn",{attrs:{color:"primary",loading:this.$store.state.loading,disabled:this.$store.state.loading},on:{click:t.getDeclarationDetail}},[t._v("ค้นหา")]),a("v-btn",{attrs:{flat:""}},[t._v("ล้างเงื่อนไขการค้นหา")])],1)],1)],1),a("br"),t.declaration?a("v-card",[a("v-card-title",{staticClass:"subheading"},[t._v("ผลลัพธ์การค้นหา")]),a("v-card-text",[a("v-flex",{attrs:{xs6:"",md12:""}},[a("v-dialog",{attrs:{"max-width":"450px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"subheading"},[t._v("บันทึกเลขที่ใบสำคัญจ่าย")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md5:""}},[a("v-text-field",{attrs:{label:"เลขที่ใบสำคัญจ่าย",mask:"##########"},model:{value:t.payment.docno,callback:function(e){t.$set(t.payment,"docno",e)},expression:"payment.docno"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"ปีงบประมาณ",mask:"####"},model:{value:t.payment.fiscalyear,callback:function(e){t.$set(t.payment,"fiscalyear",e)},expression:"payment.fiscalyear"}})],1)],1)],1)],1),a("v-card-actions")],1)],1),a("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.declaration,pagination:t.tableconfig,"item-key":"id"},on:{"update:pagination":function(e){t.tableconfig=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[a("v-icon",{on:{click:function(a){t.editItem(e.item)}}},[t._v("save")])],1),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.seq))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.sheet))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.plangNo))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.owner))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.licenseDoc))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.parcelNo))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.utm))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.expRai))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.expNgan))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.expSqrWah))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmLandWahAmt)))]),a("td",{staticClass:"text-xs-right"},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[a("v-flex",{attrs:{xs12:""}},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmLandAmt)))]),a("v-flex",{attrs:{xs12:""}},[t._v(t._s(e.item.rpmLandAmtDoc))])],1)],1),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmRemainAmt)))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rpmBuildingNo))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rpmBuildingDistrict))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmBuildingAmt)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmBuildingRenovateAmt)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmPerennialAmt)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmRenterAmt)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.rpmSection21Amt)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t.convertToMoneyFormat(e.item.sumAmt)))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.remark))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.declarationId))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.userCreate))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.dateUpdate))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.userUpdate))])]}}]),model:{value:t.tableSelected,callback:function(e){t.tableSelected=e},expression:"tableSelected"}})],1)],1)],1):t._e()],1),a("v-snackbar",{attrs:{timeout:4e3,top:"top",text:t.snackbar.text},model:{value:t.snackbar.open,callback:function(e){t.$set(t.snackbar,"open",e)},expression:"snackbar.open"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n    "),a("v-btn",{attrs:{color:"success"},on:{click:function(e){t.snackbar.open=!1}}},[t._v("ปิด")])],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog_item,callback:function(e){t.dialog_item=e},expression:"dialog_item"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"subheading"},[t._v("บันทึกเลขที่ใบสำคัญจ่าย")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{readonly:"",label:"ลำดับสส."},model:{value:t.editedItem.seq,callback:function(e){t.$set(t.editedItem,"seq",e)},expression:"editedItem.seq"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{readonly:"",label:"แผ่นที่"},model:{value:t.editedItem.sheet,callback:function(e){t.$set(t.editedItem,"sheet",e)},expression:"editedItem.sheet"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{readonly:"",label:"แปลงที่"},model:{value:t.editedItem.plangNo,callback:function(e){t.$set(t.editedItem,"plangNo",e)},expression:"editedItem.plangNo"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{readonly:"",label:"ชื่อเจ้าของหรือผู้ครอบครอง"},model:{value:t.editedItem.owner,callback:function(e){t.$set(t.editedItem,"owner",e)},expression:"editedItem.owner"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####","return-masked-value":"",label:"ค่าทดแทนที่ดิน ("+t.convertToMoneyFormat(t.editedItem.rpmLandAmt)+" บาท)"},model:{value:t.editedItem.rpmLandAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmLandAmtDoc",e)},expression:"editedItem.rpmLandAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####","return-masked-value":"",label:"ค่าทดแทนที่ดินส่วนที่เหลือที่มีราคาลดลง ("+t.convertToMoneyFormat(t.editedItem.rpmRemainAmt)+")"},model:{value:t.editedItem.rpmRemainAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmRemainAmtDoc",e)},expression:"editedItem.rpmRemainAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####",label:"ค่าทดแทนสิ่งปลูกสร้าง ("+t.convertToMoneyFormat(t.editedItem.rpmBuildingAmt)+")"},model:{value:t.editedItem.rpmBuildingAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmBuildingAmtDoc",e)},expression:"editedItem.rpmBuildingAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####","return-masked-value":"",label:"ค่าบูรณะ ("+t.convertToMoneyFormat(t.editedItem.rpmBuildingRenovateAmt)+")"},model:{value:t.editedItem.rpmBuildingRenovateAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmBuildingRenovateAmtDoc",e)},expression:"editedItem.rpmBuildingRenovateAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####",label:"ค่าทดแทนไม้ยืนต้น ("+t.convertToMoneyFormat(t.editedItem.rpmPerennialAmt)+")"},model:{value:t.editedItem.rpmPerennialAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmPerennialAmtDoc",e)},expression:"editedItem.rpmPerennialAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####","return-masked-value":"",label:"ค่าทดแทนผู้เช่า ("+t.convertToMoneyFormat(t.editedItem.rpmRenterAmt)+")"},model:{value:t.editedItem.rpmRenterAmtDoc,callback:function(e){t.$set(t.editedItem,"rpmRenterAmtDoc",e)},expression:"editedItem.rpmRenterAmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{mask:"##########/####","return-masked-value":"",label:"ค่าทดแทนม.21 วรรคท้าย ("+t.convertToMoneyFormat(t.editedItem.rpmSection21Amt)+" บาท)"},model:{value:t.editedItem.rpmSection21AmtDoc,callback:function(e){t.$set(t.editedItem,"rpmSection21AmtDoc",e)},expression:"editedItem.rpmSection21AmtDoc"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:"หมายเหตุ"},model:{value:t.editedItem.remarkPayment,callback:function(e){t.$set(t.editedItem,"remarkPayment",e)},expression:"editedItem.remarkPayment"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("ยกเลิก")]),a("v-btn",{attrs:{color:"primary",loading:this.$store.state.loading,disabled:this.$store.state.loading},on:{click:t.save}},[t._v("บันทึก")])],1)],1)],1)],1)},i=[],n=a("5176"),l=a.n(n),r=a("59ad"),d=a.n(r),o=(a("386d"),a("bd86")),c=a("8f51"),m=a("e94a"),v=a("2ab3"),x={data:function(){var t;return t={search:{line:"",declare_no:"",declare_line:"",owner:""},snackbar:{open:!1,text:""},editedItem:{},editedIndex:-1,mydate1:"01/01/2561",mydate2:"31/12/2561",itemSelected:null,dialog_item:!1,dialog:!1,tableSelected:[],tableconfig:{rowsPerPage:10},payment:{docno:"",fiscalyear:""},items:[{name:"โครงการทางพิเศษ (เริ่มต้น)",id:1},{name:"ฉลองรัช",id:2},{name:"เฉลิมมหานคร",id:3},{name:"บูรพาวิถี",id:4},{name:"ศรีรัช-วงแหวนรอบนอกกรุงเทพมหานคร",id:5},{name:"สายเชื่อมอุตสาหกรรมบางพลี - สุขสวัสดิ์ ",id:6},{name:"สายบางนา - อาจณรงค์",id:7},{name:"สายพระราม 3 - ดาวคะนอง - วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก",id:8},{name:"สายรามอินทรา - วงแหวนรอบนอก",id:9},{name:"อุดรรัถยา",id:10}]},Object(o["a"])(t,"tableconfig",{rowsPerPage:10}),Object(o["a"])(t,"headers",[{text:"",width:"1%",sortable:!1},{text:"ลำดับ",value:"seq",width:"1%"},{text:"แผ่นที่",value:"sheet",width:"1%"},{text:"แปลง",value:"plangNo",width:"1%"},{text:"__________ ชื่อเจ้าของหรือผู้ครอบครอง __________ ",value:"owner",width:"800px"},{text:"เอกสารสิทธิ์เลขที่",value:"licenseDoc",width:"1%"},{text:"เลขที่ดิน",value:"parcelNo",width:"1%"},{text:"UTM",value:"utm",width:"1%"},{text:"ถขท.ไร่",value:"expRai",width:"1%"},{text:"ถขท.งาน",value:"expNgan",width:"1%"},{text:"ถขท.ตารางวา",value:"expSqrWah",width:"1%"},{text:"ทด.ตารางวาละ",value:"rpmLandWahAmt",width:"1%"},{text:"ทด.จำนวนเงิน",value:"rpmLandAmt",width:"1%"},{text:"ค่าทดแทนที่ดินส่วนที่เหลือ",value:"rpmRemainAmt",width:"1%"},{text:"สปส.บ้านเลขที่",value:"rpmBuildingNo",width:"1%"},{text:"สปส.แขวง",value:"rpmBuildingDistrict",width:"900"},{text:"สปส.จำนวนเงิน",value:"rpmBuildingAmt",width:"1%"},{text:"สปส.ค่าบูรณะ",value:"rpmBuildingRenovateAmt",width:"1%"},{text:"ค่าทดแทนไม่ยืนต้น",value:"rpmPerennialAmt",width:"1%"},{text:"ค่าทดแทนผู้เช่า",value:"rpmRenterAmt",width:"1%"},{text:"ค่าทดแทนม.21 วรรคท้าย",value:"rpmSection21Amt",width:"1%"},{text:"รวมเป็นเงินทั้งสิ้น",value:"sumAmt",width:"1%"},{text:"_____________หมายเหตุ_____________",value:"remark",width:"1%"},{text:"CODE ประกาศราคา",value:"declarationId",width:"1%"},{text:"วันที่สร้าง",value:"dateCreate",width:"1%"},{text:"ผู้ใช้ที่สร้าง",value:"userCreate",width:"1%"},{text:"วันที่ปรับปรุง",value:"dateUpdate",width:"1%"},{text:"ผู้ใช้ที่ปรับปรุง",value:"userUpdate",width:"1%"}]),Object(o["a"])(t,"declaration",null),t},methods:{savePaymentDocument:function(t){var e=this;v["a"].savePaymentDocument(t).then(function(t){e.snackbar.open=!0,e.snackbar.text=t.data.message}).catch(function(t){console.log(t)})},getDeclarationDetail:function(){var t=this;v["a"].getDeclarationDetail(this.search).then(function(e){t.declaration=e.data.data}).catch(function(t){console.log(t)})},convertToMoneyFormat:function(t){return t?d()(t).toLocaleString("en-US",{minimumFractionDigits:2}):"-"},editItem:function(t){this.editedIndex=this.declaration.indexOf(t),this.editedItem=l()({},t),this.dialog_item=!0},close:function(){var t=this;this.dialog_item=!1,setTimeout(function(){t.editedItem=l()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;this.editedIndex>-1?(l()(this.declaration[this.editedIndex],this.editedItem),v["a"].savePaymentDocument(this.editedItem).then(function(e){t.snackbar.open=!0,t.snackbar.text=e.data.message,t.close()}).catch(function(t){console.log(t)})):(this.declaration.push(this.editedItem),this.close())}},components:{DatePicker:m["a"],TestCom:c["a"]},computed:{},watch:{}},u=x,_=(a("5f27"),a("2877")),p=Object(_["a"])(u,s,i,!1,null,"0f4859fd",null);e["default"]=p.exports},"5f27":function(t,e,a){"use strict";var s=a("3698"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-4ad25e15.d6a1945b.js.map