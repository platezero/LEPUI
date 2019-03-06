<template>
  <v-layout>
    <v-flex xs12 lg6>
      <v-menu
        ref="isDatePickerOpen"
        :close-on-content-click="false"
        v-model="isDatePickerOpen"
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
          :value="pdate"
          :label="plabel"
          hint
          persistent-hint
          prepend-icon="event"
          @keyup="assignDate($event.target.value)"
          @focus="assignDate($event.target.value)"
          @blur="assignDate($event.target.value)"
        ></v-text-field>
        <v-date-picker v-model="date" no-title @input="isDatePickerOpen = false" locale="th"></v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    plabel: {
      type: String,
      required: false
    },
    pdate: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      date: "",
      isDatePickerOpen: false,
      dateFormatted: this.$props.pdate
    };
  },
  methods: {
    assignDate(value) {
      var dateParsed = Date.parse(this.parseDate(value));
      if (dateParsed && dateParsed > 0) {
        this.date = this.parseDate(value);
      }
    },
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
  created() {},
  mounted() {},
  components: {},
  watch: {
    date: function(newValue, oldValue) {
      console.log("New Value : ", newValue);
      this.dateFormatted = this.formatDate(newValue);
      this.$emit("update:pdate", this.dateFormatted);
    },
    datevalue: function(newValue, oldValue) {
      console.log("WATCH : newValue");
    }
  }
};
</script>