<template>
  <div>
    <label
      v-if="label"
      class="block text-gray-700 text-sm font-bold mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
      :class="{
        'border-error': !!invalidMsg,
        'focus:shadow-outline': !invalidMsg
      }"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      v-on="inputListeners"
    />
    <p v-if="invalidMsg" class="text-red-500 text-xs italic">
      {{ invalidMsg }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: String,
    label: String,
    type: String,
    invalidMsg: String,
    placeholder: String,
    value: String
  },
  computed: {
    inputListeners: function() {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function(event) {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  }
};
</script>

<style scoped></style>
