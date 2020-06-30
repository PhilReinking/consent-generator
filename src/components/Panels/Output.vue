<template>
  <div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Output
      </h3>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Copy this text into your form. Make sure that the right checkboxes are
        checked before using data for a purpose.
      </p>
    </div>
    <div class="max-w-xl py-8">
      <ConsentForm class="mt-4 mx-auto max-w-md" />
    </div>
  </div>
</template>

<script>
import ConsentForm from "./partials/ConsentForm";

export default {
  components: { ConsentForm }
};
</script>