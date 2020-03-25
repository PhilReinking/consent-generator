<template>
  <div class="px-6 py-8 border rounded">
    <p class="mb-4">
      Uns liegt deine Privatsphäre sowie die Sicherheit deiner Daten sehr am
      Herzen, weshalb wir dich hier um Erlaubnis fragen möchten, deine Angaben
      zu folgendem Zwecke zu verwenden.
    </p>

    <div
      class="flex items-center mb-2"
      v-for="(item, index) in config.activities"
      :key="index"
    >
      <input class="mr-4" type="checkbox" />
      <div>
        <label class="font-bold" for="">{{ item.type }}</label>
        <p>{{ item.purpose }}</p>
      </div>
    </div>

    <div class="text-sm my-8 italic flex items-center">
      <svg
        class="h-10 w-10 mr-4 flex-shrink-0 fill-current text-gray-700"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256 409.6V100l-142.9 59.5c8.4 116.2 65.2 202.6 142.9 250.1zM466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z"
        />
      </svg>
      <blockquote>
        "Du kannst deine Einwilligung jederzeit widerrufen, indem du uns über
        {{ config.contact_email }} kontaktierst. Falls du weitere Fragen zum
        Umgang mit deinen Daten hast, dann findest du weitere Details in unserer
        <a :href="config.privacy_url">Datenschutzerklärung</a>""
        <footer>—{{ config.contact_name }}, {{ config.company }}</footer>
      </blockquote>
    </div>

    <button
      class="bg-gray-400 text-gray-900 px-6 py-2 border border-gray-600 text-sm font-medium leading-none"
    >
      I agree
    </button>

    <div class="mt-3 font-medium text-xs" v-show="config.company">
      <span
        ><a :href="config.legal_notice_url" target="_blank"
          >Legal Notice</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["config"]
};
</script>