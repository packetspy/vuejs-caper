<template>
  <div class="flex items-baseline mt-4 mb-6">
      <div class="space-x-2 flex">
        <label>
          <date-picker />
        </label>
        <label>
          <input class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none" name="description" type="text" value="" placeholder="Descrição" autocomplete="off">
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m">
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l">
        </label>
        <label>
          <input class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none" name="value" type="text" value="" placeholder="Valor" autocomplete="off">
        </label>
      </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import  datePicker  from "@/components/atom/DatePicker.vue";
  
  export default defineComponent({
    name: "AddTransaction",
    components: {
      datePicker
    }

  });
  </script>