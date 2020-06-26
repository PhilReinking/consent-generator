<template>
  <form>
    <!-- Start Generic Form here -->
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        General Information
      </h3>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        You need to provide this information, to make it easy for others find
        out more about you or to contact you.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label
          for="company"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Your company name
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="company"
            type="text"
            :value="company"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label
          for="name"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Contact Person
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="name"
            :value="name"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label
          for="email"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Contact Email
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            type="email"
            :value="email"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="sm:col-span-4">
        <label
          for="privacy-url"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Privacy Policy
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="privacy-url"
            type="url"
            :value="privacy_url"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="sm:col-span-4">
        <label
          for="legal-notice"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Legal Notice
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="legal-notice"
            type="url"
            :value="legal_notice_url"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>
    </div>
    <!-- End Generic Form -->
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["company", "name", "email", "privacy_url", "legal_notice_url"])
  }
};
</script>