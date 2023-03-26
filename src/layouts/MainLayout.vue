<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <img
            alt="Papeleria logo"
            src="~assets/logo3.png"
            style="width: 50px; height: 50px"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <ATable
        title="Prueba de tabla"
        :columns="columnsTable"
        :rows="rowsTable"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

import EssentialLink from "components/EssentialLink.vue";
import ATable from "components/ATable.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "manage_accounts",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "screwdriver-wrench",
    link: "https://github.com/quasarframework",
  },
];

const columns = [
  { name: "calories", label: "Calories", field: "calories", sortable: true },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
];

const rows = [
  {
    calories: 159,
    fat: 6.0,
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    ATable,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      rowsTable: rows,
      columnsTable: columns,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
