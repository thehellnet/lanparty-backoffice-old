<template>
  <button
    class="bg-transparent hover:bg-button.hover disableb:bg-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    v-on="$listeners"
    :type="type"
  >
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: Boolean,
    icon: String,
    type: { type: String, default: "button" }
  }
};
</script>

<style scoped></style>
