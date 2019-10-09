<template>
  <div class="v-spinner-bg" v-show="loading">
    <div class="v-spinner" :style="spinnerPosition">
      <div
        class="v-scale v-scale1"
        v-bind:style="[spinnerStyle, spinnerDelay1]"
      ></div>
      <div
        class="v-scale v-scale2"
        v-bind:style="[spinnerStyle, spinnerDelay2]"
      ></div>
      <div
        class="v-scale v-scale3"
        v-bind:style="[spinnerStyle, spinnerDelay3]"
      ></div>
      <div
        class="v-scale v-scale4"
        v-bind:style="[spinnerStyle, spinnerDelay4]"
      ></div>
      <div
        class="v-scale v-scale5"
        v-bind:style="[spinnerStyle, spinnerDelay5]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSpinner",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    height: {
      type: String,
      default: "35px"
    },
    width: {
      type: String,
      default: "4px"
    },
    totalWidth: {
      type: String,
      default: "40px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "2px"
    }
  },
  data() {
    return {
      spinnerPosition: {
        position: "absolute",
        top: `calc(50% - (${this.height} / 2))`,
        left: `calc(50% - (${this.totalWidth} / 2))`
      },
      spinnerStyle: {
        backgroundColor: this.color,
        height: this.height,
        width: this.width,
        margin: this.margin,
        borderRadius: this.radius,

        display: "inline-block",
        animationName: "v-scaleStretchDelay",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
        animationFillMode: "both"
        // TODO
        // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
        // animationFillMode: "both"
      },
      spinnerDelay1: {
        animationDelay: "0.1s"
      },
      spinnerDelay2: {
        animationDelay: "0.2s"
      },
      spinnerDelay3: {
        animationDelay: "0.3s"
      },
      spinnerDelay4: {
        animationDelay: "0.4s"
      },
      spinnerDelay5: {
        animationDelay: "0.5s"
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
  & .v-spinner {
    position: absolute;
    text-align: center;
  }
}
@-webkit-keyframes v-scaleStretchDelay {
  0%,
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}
@keyframes v-scaleStretchDelay {
  0%,
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}
</style>
