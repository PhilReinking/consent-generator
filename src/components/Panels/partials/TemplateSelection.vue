<template>
  <form @submit.prevent="add">
    <label class="block text-sm font-medium leading-5 text-gray-700">
      Add template
    </label>

    <div class="mt-1 flex items-center">
      <div class="rounded-md shadow-sm w-full">
        <select
          class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          v-model="selected"
        >
          <option value="" disabled selected>Select a template</option>
          <option v-for="item in templates" :value="item" :key="item.name">{{
            item.name
          }}</option>
        </select>
      </div>
      <span class="inline-flex rounded-md shadow-sm flex-shrink-0 ml-1">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
          :class="!selected ? 'cursor-not-allowed opacity-25' : 'opacity-100'"
        >
          Add
        </button>
      </span>
    </div>
  </form>
</template>

<script>
const TEMPLATES = [
  {
    name: "Email Marketing",
    attributes: "Email Address",
    purpose:
      "We sent you product updates, tutorials and offers related to our product.",
  },
];

export default {
  data() {
    return {
      templates: TEMPLATES,
      selected: "",
    };
  },

  methods: {
    add() {
      this.$store.dispatch("addActivity", this.selected);
      this.selected = "";
    },
  },
};
</script>
