<template>
  <div>
    <PanelHeader
      title="Processing Activities"
      description="You need to provide this information, to make it easy for others find out more about you or to contact you."
    />

    <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
      <TemplateSelection class="sm:col-span-6 lg:col-span-4" />
    </div>
    <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
      <ActivityItem
        class="sm:col-span-6 lg:col-span-5"
        v-for="(item, index) in activities"
        :key="item.name + index"
        v-bind="{ item, index }"
      />
    </div>
  </div>
</template>

<script>
import TemplateSelection from "./partials/TemplateSelection";
import ActivityItem from "./partials/ActivityItem";
import { mapState } from "vuex";

export default {
  components: {
    TemplateSelection,
    ActivityItem
  },
  computed: {
    ...mapState(["activities"])
  }
};
</script>