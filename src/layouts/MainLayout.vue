<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated class="bg-secondary-low">
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
        <essential-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <a-table
        title="Prueba de tabla"
        :columns="columnsTable"
        :rows="rowsTable"
      /> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const essentialLinks = reactive([
  // {
  //   title: "Docs",
  //   caption: "quasar.dev",
  //   icon: "screwdriver-wrench",
  //   link: "https://quasar.dev",
  // },
  {
    title: t("users.title"),
    icon: " manage_accounts",
    route: "usuarios",
  },
]);

// const columnsTable = ref([
//   { name: "calories", label: "Calories", field: "calories", sortable: true },
//   { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
// ]);

// const rowsTable = ref([
//   {
//     calories: 159,
//     fat: 6.0,
//   },
// ]);

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
