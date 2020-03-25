<template>
  <div>
    <label class="block px-2 text-sm" for="">{{ label }}</label>
    <input
      class="block w-full border px-2 py-1 focus:outline-none focus:border-gray-900"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "value"]
};
</script>