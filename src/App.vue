<template>
  <div id="main-body" class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <Sidebar />
      <div
        id="main-content"
        class="w-full bg-gray-100 pl-0  min-h-screen"
        :class="sidebarIsOpen ? 'overlay lg:pl-64' : ''"
      >
        <Navbar />
        <div class="p6 bg-gray-100 mb-20">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/useStore";

import Sidebar from "@/components/molecule/Sidebar.vue";
import Navbar from "@/components/molecule/Navbar.vue";
import Footer from "@/components/molecule/Footer.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    Sidebar,
    Navbar,
    Footer
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
