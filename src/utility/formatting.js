export default {
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  money(number) {
    if (number) {
      //อ้างอิง : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      return parseFloat(number).toLocaleString("en-US", {
        minimumFractionDigits: 2
      });
    } else {
      return "-";
    }
  },
  moneyzzzz(number) {
    if (number) {
      //อ้างอิง : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      return parseFloat(number).toLocaleString("en-US", {
        minimumFractionDigits: 2
      });
    } else {
      return "-";
    }
  }
};
