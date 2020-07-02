<template>
  <div>
    <PanelHeader
      title="Output"
      description="Copy this text into your form. Make sure that the right checkboxes are checked before using data for a purpose."
    />

    <div class="max-w-xl py-8">
      <ConsentForm class="mt-4 mx-auto max-w-md" />
    </div>
  </div>
</template>

<script>
import ConsentForm from "./partials/ConsentForm";
import PanelHeader from "./partials/PanelHeader";

export default {
  components: { ConsentForm, PanelHeader }
};
</script>