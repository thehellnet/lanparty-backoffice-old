<template>
  <button
    class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    v-on="$listeners"
    :type="type"
  >
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "BaseIconButton",
  props: {
    disabled: Boolean,
    icon: String,
    type: { type: String, default: "button" }
  }
};
</script>

<style scoped></style>
