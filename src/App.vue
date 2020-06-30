<template>
  <div id="app">
    <div class="container mx-auto py-4 mb-12">
      <Header />
    </div>

    <div class="container mx-auto py-12 flex">
      <Tabs class="mr-8 flex-shrink-0"></Tabs>

      <div
        class="bg-white overflow-hidden rounded-lg w-full border border-blue-100"
      >
        <div class="px-4 py-5 sm:p-6">
          <General v-if="view === 'editor'" />
          <Activities v-if="view === 'activities'" />
          <Output v-if="view === 'output'" />
        </div>
      </div>
    </div>

    <div class="container mx-auto py-4 mt-12">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs/Tabs";

import General from "./components/Panels/General.vue";
import Activities from "./components/Panels/Activities.vue";
import Output from "./components/Panels/Output.vue";

import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    General,
    Activities,
    Output,
    Header,
    Footer,
    Tabs
  },
  data() {
    return {
      config: {}
    };
  },

  computed: {
    ...mapState(["view"])
  },

  created() {
    this.config = JSON.parse(window.localStorage.getItem("config")) || {};
  },

  methods: {
    updateConfig(ev) {
      this.config = ev;
      window.localStorage.setItem("config", JSON.stringify(ev));
    }
  }
};
</script>