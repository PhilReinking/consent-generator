<template>
  <div>
    <label class="block px-2 text-sm" for="">{{ label }}</label>
    <textarea
      class="block w-full border px-2 py-1 focus:outline-none focus:border-gray-900"
      rows="3"
      @input="$emit('input', $event.target.value)"
      :value="value"
    >
    </textarea>
    <span class="text-sm text-gray-500">{{ textLength }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
  computed: {
    textLength() {
      return this.value ? this.value.length : 0;
    }
  }
};
</script>