<template>
  <div class="v-spinner-bg" v-show="loading">
    <div class="v-spinner-container" :style="spinnerPosition">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSpinnerContainer",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    width: { type: String, default: "40px" },
    height: { type: String, default: "40px" }
  },
  data() {
    return {
      spinnerPosition: {
        top: `calc(50% - (${this.height} / 2))`,
        left: `calc(50% - (${this.width} / 2))`
      }
    };
  }
};
</script>

<style lang="scss">
.v-spinner-bg {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  & > .v-spinner-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
