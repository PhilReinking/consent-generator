<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
    <p v-if="description" class="mt-1 text-sm leading-5 text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" }
  }
};
</script>