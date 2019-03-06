<template>
  <v-layout>
    <v-flex xs12 lg6>
      <input type="text" :value="doc" @blur="returnToParent($event.target.value)">
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    doc: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {};
  },
  methods: {
    returnToParent: function(newRating) {
      console.log(newRating);
      this.$emit("update:doc", newRating);
    }
  },
  watch: {
    doc: function(newRating, oldRating) {
      this.returnToParent(newRating);
    }
  },
  components: {}
};
</script>