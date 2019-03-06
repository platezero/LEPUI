<template>
  <v-snackbar v-model="snackbar" :timeout="5000" :top="'top'" :text="snackbartext">
    {{ snackbartext }}
    <v-btn color="success" @click="snackbar = false">ปิด</v-btn>
  </v-snackbar>
</template>

<script>
export default {};
</script>
