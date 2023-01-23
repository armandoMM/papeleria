<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <template> </template>
</template>
<script setup>
import { defineComponent, ref } from "vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

defineComponent({
  name: "MainLayout",
});
</script>
