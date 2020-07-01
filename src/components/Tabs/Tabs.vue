<template>
  <div>
    <TabItem
      class="mb-2"
      name="1. General Information"
      description="Give information about yourself and where your users can find related
      pieces of information."
      @click.native="setView('editor')"
    ></TabItem>
    <TabItem
      class="mb-2"
      name="2. Processing Activities"
      description="Tell the people how you will use their personal data."
      @click.native="setView('activities')"
    ></TabItem>
    <TabItem
      class="mb-2"
      name="3. View Output"
      description="Take a look at your final data processing consent."
      @click.native="setView('output')"
    ></TabItem>
  </div>
</template>

<script>
import TabItem from "./TabItem";
export default {
  components: { TabItem },

  methods: {
    setView(target) {
      this.$store.commit("setView", target);
    },
  },
};
</script>
