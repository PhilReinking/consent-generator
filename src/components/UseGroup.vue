<template>
  <div>
    <h2>Data Processing Activity #{{ index }}</h2>

    <div>
      <SelectGroup
        class="mb-3"
        label="Data Type"
        v-bind="{ options: dataTypes }"
        v-model="selectedType"
      />
      <TextGroup label="Purpose of Processing" v-model="purpose" />
    </div>
  </div>
</template>


<script>
import SelectGroup from "./SelectGroup";
import TextGroup from "./TextGroup";

export default {
  components: { SelectGroup, TextGroup },

  props: ["index", "value"],

  data() {
    return {
      dataTypes: [
        "Email",
        "Phone Number",
        "Address",
        "IP Address",
        "Bank Details"
      ],
      selectedType: this.value.type || undefined,
      purpose: this.value.purpose || undefined
    };
  },

  watch: {
    selectedType() {
      this.emitInput();
    },
    purpose() {
      this.emitInput();
    }
  },

  methods: {
    emitInput() {
      this.$emit("input", {
        type: this.selectedType,
        purpose: this.purpose
      });
    }
  }
};
</script>