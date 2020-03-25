<template>
  <div>
    <label class="block px-2 text-sm" for="">{{ label }}</label>
    <select
      class="block w-full border focus:outline-none focus:border-gray-900"
      @change="$emit('input', $event.target.value)"
    >
      <option disabled :selected="!value">Please select a data type</option>
      <option
        :value="item"
        v-for="item in options"
        :key="item"
        :selected="item === value"
        >{{ item }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "options"]
};
</script>