<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="u_id"
                prepend-icon="person"
                name="login"
                label="รหัสพนักงาน"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="u_pass"
                id="password"
                prepend-icon="lock"
                name="password"
                label="รหัสผ่าน"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">ตกลง</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Cookies from "@/services/cookies";
import SSO from "@/services/sso";

export default {
  data: () => ({
    u_id: "",
    u_pass: "",
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    login() {
      SSO.login({ u_id: this.u_id, u_pass: this.u_pass });
    }
  },
  mounted() {
    Cookies.set("token", "XXX", 1);
    // SSO.login();
  }
};
</script>