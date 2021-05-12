<template>
    <div>
        <litepie-datepicker ref="myRef" v-model="dateValue" placeholder="Selecione uma data" i18n="pt-br" as-single :formatter="formatter" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LitepieDatepicker from 'litepie-datepicker'

export default defineComponent({
    name: 'DatePicker',
    components: {
        LitepieDatepicker,
    },
    setup() {
        const myRef = ref(null)
        const dateValue = ref([])
        const formatter = ref({
            date: 'DD/MM/YYYY',
            month: 'MMM',
        })
        return {
            myRef,
            dateValue,
            formatter,
        }
    },
})
</script>

<style>
</style>
