<template>
  <div class="relative rounded px-4 py-6 bg-gray-700">
    <button
      type="button"
      class="absolute px-4 py-2 right-0 text-gray-200 text-xs top-0 underline focus:outline-none"
      @click="removeActivity(index)"
    >
      remove
    </button>

    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-5 text-gray-100"
        >Title
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          id="email"
          class="form-input block w-full sm:text-sm sm:leading-5 border-none bg-gray-800 text-gray-100"
          placeholder="you@example.com"
          :value="item.attributes"
          ref="attributes"
          @change="update"
        />
      </div>
    </div>

    <div class="mt-3">
      <label
        for="about"
        class="block text-sm font-medium leading-5 text-gray-100"
      >
        Purpose of the processing
      </label>
      <div class="mt-1 rounded-md shadow-sm">
        <textarea
          id="about"
          rows="3"
          class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-none bg-gray-800 text-gray-100"
          ref="purpose"
          :value="item.purpose"
          @change="update"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item", "index"],

  methods: {
    update() {
      this.updateActivity({
        index: this.index,
        item: {
          ...this.item,
          attributes: this.$refs.attributes.value,
          purpose: this.$refs.purpose.value
        }
      });
    },
    ...mapMutations(["removeActivity", "updateActivity"])
  }
};
</script>
