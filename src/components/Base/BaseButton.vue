<template>
  <button
    class="bg-secondary hover:bg-button.hover disableb:bg-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    :class="[
      { 'cursor-not-allowed': disabled },
      { 'bg-button-disabled': disabled },
      { 'hover:bg-button-hover': !disabled },
      { 'bg-secondary': !disabled }
    ]"
    v-on="$listeners"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: Boolean,
    text: String,
    type: String
  }
};
</script>

<style scoped></style>
