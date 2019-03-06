<template>
  <v-layout>
    <v-flex xs12 lg6>
      <v-menu
        ref="menu1"
        :close-on-content-click="false"
        v-model="menu1"
        :nudge-right="150"
        lazy
        transition="slide-y-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="dateFormatted"
          :label="label"
          hint
          persistent-hint
          prepend-icon="event"
          @blur="date = parseDate(dateFormatted)"
        ></v-text-field>
        <v-date-picker v-model="date" no-title @input="menu1 = false" locale="th"></v-date-picker>
      </v-menu>
      <!-- <p>
        Date in ISO format:
        <strong>{{ date }}</strong>
      </p>-->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    labelvalue: {
      type: String,
      required: false
    },
    datevalue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      label: "",
      date: "",
      menu1: false,
      dateFormatted: this.$props.datevalue
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${parseInt(year) + 543}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [day, month, year] = date.split("/");
      return `${parseInt(year) - 543}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
    }
  },
  // created() {
  //   console.log("CREATED this.datevalue : " + this.datevalue);
  //   this.date = this.datevalue;
  //   this.label = this.labelvalue;
  // },
  // mounted() {
  //   console.log("MOUNTED this.datevalue : " + this.datevalue);
  //   this.date = this.datevalue;
  //   this.label = this.labelvalue;
  // },
  components: {},
  watch: {
    date: function(newValue, oldValue) {
      console.log("New Value : ", newValue);
      this.dateFormatted = this.formatDate(newValue);
      this.$emit("update:datechange", this.dateFormatted);
    },
    datevalue: function(newValue, oldValue) {
      console.log("WATCH : newValue");
    }
  }
};
</script>