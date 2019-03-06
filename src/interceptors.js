import axios from "axios";
import store from "./store";

export default function setup() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function(config) {
      store.commit("setLoading", true);
      return config;
    },
    function(error) {
      store.commit("setLoading", true);
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      store.commit("setLoading", false);
      return response;
    },
    function(error) {
      store.commit("setLoading", false);
      return Promise.reject(error);
    }
  );
}
