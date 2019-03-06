import axios from "axios";
import cookies from "@/services/cookies";
import KJUR from "jsrsasign";
var BASE_URL = process.env.VUE_APP_API_LEP_ENDPOINT;

axios.defaults.headers.common["Authorization"] =
  "Bearer " + cookies.get("access_token") ? "" : cookies.get("access_token");

export default {
  login(params) {
    axios
      .get(BASE_URL + "/api/v1/sso/login", {
        params: params
      })
      .then(response => {
        var access_token = response.data.data.access_token;
        console.log(access_token);

        console.log(
          KJUR.jws.JWS.verifyJWT(access_token, "P@ssw0rdJWT", {
            alg: ["HS256"]
          })
        );

        cookies.set("access_token", access_token);

        var sJWT = access_token;

        var headerObj = KJUR.jws.JWS.readSafeJSONString(
          this.base64toutf(sJWT.split(".")[0])
        );
        var payloadObj = KJUR.jws.JWS.readSafeJSONString(
          this.base64toutf(sJWT.split(".")[1])
        );

        // console.log(headerObj);
        // console.log(payloadObj);
      })
      .catch(error => {
        console.log(error);
      });
  },
  utftobase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  },
  base64toutf(str) {
    return decodeURIComponent(escape(atob(str)));
  }
};
