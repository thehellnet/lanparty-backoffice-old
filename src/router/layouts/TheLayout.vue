<template>
  <div
    class="theme-default bg-grey-200 flex flex-col min-h-screen "
    id="app-container"
  >
    <the-nav-bar></the-nav-bar>
    <div
      id="main-container"
      class="container flex-grow flex justify-center items-center"
    >
      <slot />
    </div>
    <base-button @click="hideLader"></base-button>
    <base-spinner :loading="this.$store.state.loading"></base-spinner>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavBar from "./TheNavBar";
import TheFooter from "./TheFooter";
import BaseSpinner from "../../components/Base/BaseSpinner";
import BaseButton from "../../components/Base/BaseButton";
export default {
  name: "TheLayout",
  components: { BaseButton, BaseSpinner, TheFooter, TheNavBar },

  methods: {
    hideLader() {
      this.$store.dispatch("hide");
    }
  }
};
</script>

<style scoped></style>
