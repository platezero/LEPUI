import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: "/declaration/import",
      name: "นำเข้าข้อมูลประกาศราคา",
      component: () => import("./views/DeclarationImport")
    },
    {
      path: "/declaration/payment/save",
      name: "บันทึกข้อมูลใบสำคัญจ่าย",
      component: () => import("./views/PaymentSave")
    },
    {
      path: "/declaration/view",
      name: "ตรวจสอบข้อมูลการจ่ายค่าเวนคืนที่ดิน",
      component: () => import("./views/DeclarationView")
    },
    {
      path: "/login",
      name: "เข้าสู่ระบบ",
      component: () => import("./views/Login")
    }
  ]
});
