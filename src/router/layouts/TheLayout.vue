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
    <the-footer></the-footer>
    <base-spinner :loading="this.loading"></base-spinner>
  </div>
</template>

<script>
import TheNavBar from "./TheNavBar";
import TheFooter from "./TheFooter";
import BaseSpinner from "../../components/Base/BaseSpinner";
import { mapState } from "vuex";

export default {
  name: "TheLayout",
  components: { BaseSpinner, TheFooter, TheNavBar },
  computed: {
    ...mapState({
      loading: state => state.spinner.loading
    })
  }
};
</script>

<style scoped></style>
