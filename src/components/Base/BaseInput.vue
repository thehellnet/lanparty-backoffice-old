<template>
  <div>
    <label
      v-if="label"
      class="block text-text-secondary text-sm font-bold mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-primary mb-3 leading-tight focus:outline-none"
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
    <p v-if="invalidMsg" class="text-error text-xs italic">
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
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>

<style scoped></style>
