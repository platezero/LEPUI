import axios from "axios";

var BASE_URL = process.env.VUE_APP_API_SAP_ENDPOINT;

export default {
  getClearingDocument(document, fiscalyear) {
    return axios.get(
      BASE_URL + "/api/v1/fi/document/clearing/" + document + "/" + fiscalyear
    );
  }
  // savePaymentDocument(item) {
  //   var url = process.env.VUE_APP_API_LEP_ENDPOINT + "/api/v1/declaration";
  //   var requestBody = {
  //     datalist: JSON.stringify(item)
  //   };
  //   var config = {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     }
  //   };

  //   var querystring = require("querystring");

  //   return axios.post(url, querystring.stringify(requestBody), config);
  // }
};
