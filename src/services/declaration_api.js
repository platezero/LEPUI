import axios from "axios";

var BASE_URL = process.env.VUE_APP_API_LEP_ENDPOINT;

export default {
  getDeclarationDetail(params) {
    // axios.defaults.headers.common["Authorization"] = "XXXXXX";
    return axios.get(BASE_URL + "/api/v1/declaration/listby", {
      params: params,
      headers: { Authorization: "Bearer XXXXX" }
    });
  },
  savePaymentDocument(item) {
    var url =
      process.env.VUE_APP_API_LEP_ENDPOINT + "/api/v1/declaration/detail";
    var requestBody = {
      datalist: JSON.stringify(item)
    };
    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    var querystring = require("querystring");

    return axios.post(url, querystring.stringify(requestBody), config);
  }
};
