<template>
  <div id="app" class="max-w-lg mx-auto">
    <h1 class="text-3xl font-bold mb-6">Deck9 Consent Generator</h1>

    <div class="mb-8 flex justify-around">
      <button
        class="w-full mx-1 px-8 py-1 focus:outline-none"
        :class="view === 'edit' ? 'bg-gray-400' : 'bg-gray-200'"
        @click="view = 'edit'"
      >
        Edit
      </button>
      <button
        class="w-full mx-1 px-8 py-1 focus:outline-none"
        :class="view === 'view' ? 'bg-gray-400' : 'bg-gray-200'"
        @click="view = 'view'"
      >
        View
      </button>
    </div>

    <Editor
      v-show="view === 'edit'"
      @input="updateConfig"
      v-bind="{ config }"
    />
    <ConsentForm
      v-bind="{
        config
      }"
      v-show="view === 'view'"
    />
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";
import ConsentForm from "./components/ConsentForm.vue";

export default {
  name: "App",

  components: {
    Editor,
    ConsentForm
  },
  data() {
    return {
      view: "edit",
      config: {}
    };
  },

  created() {
    this.config = JSON.parse(window.localStorage.getItem("config"));
  },

  methods: {
    updateConfig(ev) {
      this.config = ev;
      window.localStorage.setItem("config", JSON.stringify(ev));
    }
  }
};
</script>