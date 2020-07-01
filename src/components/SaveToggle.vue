<template>
  <div class="flex items-center relative">
    <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
    <span
      role="checkbox"
      tabindex="0"
      aria-checked="false"
      class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
      :class="saveOnDisk ? 'bg-indigo-600' : 'bg-gray-200'"
      @click="toggleSave"
    >
      <!-- On: "translate-x-5", Off: "translate-x-0" -->
      <span
        aria-hidden="true"
        class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
        :class="saveOnDisk ? 'translate-x-5' : 'translate-x-0'"
      ></span>
    </span>

    <span
      v-if="saveOnDisk"
      class="text-blue-500 text-sm ml-3 inline-block leading-none"
      >Your settings <strong>are saved</strong> in the browser storage</span
    >
    <span v-else class="text-gray-500 text-sm ml-3 inline-block leading-none"
      >Save your settings in the browser storage</span
    >

    <img
      class="h-8 absolute bottom-8 left-6"
      src="/images/arrow-left.png"
      alt="Decorative Arrow pointing at Toggle"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["saveOnDisk"]),
  },

  methods: {
    toggleSave() {
      this.$store.dispatch("toggleSave");
    },
  },
};
</script>
