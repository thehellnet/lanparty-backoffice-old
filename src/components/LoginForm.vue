<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="handleSubmit"
    >
      <base-input
        :id="'username'"
        :label="'Username'"
        :placeholder="'admin'"
        :type="'text'"
        :invalid-msg="
          error && submitting && this.invalidUsername
            ? 'Username is required'
            : ''
        "
        v-model="user.username"
        @focus="clearStatus"
        @keypress="clearStatus"
      ></base-input>
      <base-input
        :id="'password'"
        :label="'Password'"
        :placeholder="'********'"
        :type="'password'"
        :invalid-msg="
          error && submitting && this.invalidPassword
            ? 'Password is required'
            : ''
        "
        v-model="user.password"
        @focus="clearStatus"
        @keypress="clearStatus"
      ></base-input>
      <base-button :text="'LogIn'" :type="'submit'"></base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./Base/BaseInput";
import BaseButton from "./Base/BaseButton";
import * as authService from "../services/auth.service";
import { logger } from "../services/app-logger/app-logger.service";
export default {
  name: "LoginForm",
  components: { BaseButton, BaseInput },
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidUsername || this.invalidPassword) {
        this.error = true;
        return;
      }

      authService
        .login(this.user)
        .then(() => {
          this.$router.replace({ path: "/home" });
        })
        .catch(error => {
          logger.error(error);
        });
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidUsername() {
      return this.user.username === "";
    },

    invalidPassword() {
      return this.user.password === "";
    }
  }
};
</script>

<style scoped></style>
