<template>
  <q-page class="flex flex-center">
    <img
      alt="Papeleria logo"
      src="~assets/logo3.png"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script setup>
import { defineComponent, onMounted, provide, nextTick } from "vue";
// import { showMsg } from "src/utils/notify";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

const { t } = useI18n();
const $q = useQuasar();

defineComponent({
  name: "IndexPage",
});

onMounted(() => {
  $q.notify({
    color: "accent",
    message: t("gral.welcome"),
    position: "top",
    classes: "elevate-notify",
  });
});
</script>
