<template>
  <form>
    <InputGroup class="mb-2" label="Your Company Name" v-model="company" />
    <InputGroup class="mb-2" label="Contact Person" v-model="contact_name" />
    <InputGroup
      class="mb-2"
      label="Contact E-Mail"
      type="email"
      v-model="contact_email"
    />
    <InputGroup
      class="mb-2"
      label="Privacy URL"
      type="url"
      v-model="privacy_url"
    />
    <InputGroup
      class="mb-2"
      label="Legal Notice URL"
      type="url"
      v-model="legal_notice_url"
    />

    <hr class="my-8" />

    <UseGroup
      class="mb-4"
      :index="index + 1"
      v-for="(item, index) in activities"
      v-model="activities[index]"
      :key="index"
    />

    <button
      type="button"
      class="bg-gray-400 text-gray-900 px-2 py-2 border border-gray-600 text-sm font-medium leading-none"
      @click="addActivity"
    >
      Add Data Processing Activity
    </button>
  </form>
</template>

<script>
import InputGroup from "./InputGroup.vue";
import UseGroup from "./UseGroup.vue";

export default {
  components: { InputGroup, UseGroup },

  props: ["config"],

  data() {
    return {
      company: this.config.company || undefined,
      contact_name: this.config.contact_name || undefined,
      contact_email: this.config.contact_email || undefined,
      privacy_url: this.config.privacy_url || undefined,
      legal_notice_url: this.config.legal_notice_url || undefined,
      activities: this.config.activities || []
    };
  },

  watch: {
    company: "emitUpdate",
    contact_name: "emitUpdate",
    contact_email: "emitUpdate",
    privacy_url: "emitUpdate",
    legal_notice_url: "emitUpdate",
    activities: "emitUpdate"
  },

  methods: {
    addActivity() {
      this.activities.push({});
    },
    emitUpdate() {
      this.$emit("input", {
        company: this.company,
        contact_name: this.contact_name,
        contact_email: this.contact_email,
        privacy_url: this.privacy_url,
        legal_notice_url: this.legal_notice_url,
        activities: this.activities
      });
    }
  }
};
</script>