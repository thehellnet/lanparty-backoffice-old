<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="handleSubmit"
    >
      <base-input
        :id="'email'"
        :label="'Email'"
        :placeholder="'admin'"
        :type="'text'"
        :invalid-msg="
          error && submitting && this.invalidEmail ? 'Email is required' : ''
        "
        v-model="user.email"
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
import logger from "../services/app-logger/app-logger.service";

export default {
  name: "LoginForm",
  components: { BaseButton, BaseInput },
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidEmail || this.invalidPassword) {
        this.error = true;
        return;
      }

      this.$store
        .dispatch("auth/doLogin", this.user)
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          logger.debug(error);
        });
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidEmail() {
      return this.user.username === "";
    },

    invalidPassword() {
      return this.user.password === "";
    }
  }
};
</script>

<style scoped></style>
