<template>
  <div
    class="relative border border-blue-100 max-w-sm p-4 rounded-lg bg-white cursor-pointer pr-12"
  >
    <header class="flex items-center mb-1">
      <div class="font-bold">{{ name }}</div>
    </header>
    <div class="text-sm text-gray-700">
      {{ description }}
    </div>

    <div
      class="absolute inset-y-0 right-0 flex items-center text-gray-700 px-2"
    >
      <svg class="h-8 w-8 fill-current" viewBox="0 0 192 512">
        <path
          d="M187.8 264.5l-146.8 148c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 8.88178e-16-17l118.5-119.7 -118.5-119.7c-4.7-4.7-4.7-12.3-2.66454e-15-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description"]
};
</script>