import VueCookie from "vue-cookie";
//REF : https://github.com/alfhen/vue-cookie

export default {
  set(key, value, day) {
    VueCookie.set(key, value, day);
  },
  get(key) {
    VueCookie.get(key);
  },
  delete(key) {
    VueCookie.delete(key);
  }
};
