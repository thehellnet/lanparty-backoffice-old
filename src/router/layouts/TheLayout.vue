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
  </div>
</template>

<script>
import TheNavBar from "./TheNavBar";
import TheFooter from "./TheFooter";
export default {
  name: "TheLayout",
  components: { TheFooter, TheNavBar }
};
</script>

<style scoped></style>
