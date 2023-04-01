<template>
  <div class="q-pa-md">
    <q-table
      :title="props.title"
      :rows="props.rows"
      :columns="props.columns"
      :row-key="props['row-key']"
    >
      <slot v-for="(_, name) in $slots" :name="name" />
    </q-table>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: null,
    description: "Titulo de la tabla",
    required: false,
  },
  rows: {
    type: Array,
    default: () => [],
    description: "Arreglo de datos de la tabla",
    required: true,
  },
  columns: {
    type: Array,
    default: () => [],
    description: "Arreglo de encabezados de la tabla",
    required: true,
  },
  "row-key": {
    type: String,
    required: false,
    default: "",
  },
});
</script>
