<template>
  <div>
    <AddTransaction />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/useStore";

import AddTransaction from "@/components/organism/AddTransaction.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    AddTransaction,
  },
  setup() {
    const store = useStore();
    const sidebarIsOpen = computed(() => store.getters.getSidebarStatus);

    return {
      sidebarIsOpen,
    };
  }

  
});
</script>
