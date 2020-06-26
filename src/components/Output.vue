<template>
  <div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Output
      </h3>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        You need to provide this information, to make it easy for others find
        out more about you or to contact you.
      </p>
    </div>
    <div class="max-w-xl py-8">
      <img
        style="width: 100%; max-width: 420px;"
        src="/images/form-dummy.png"
        alt="Form Dummy"
      />

      <ConsentForm class="mt-4" />
    </div>
  </div>
</template>

<script>
import ConsentForm from "./ConsentForm";

export default {
  components: { ConsentForm }
};
</script>