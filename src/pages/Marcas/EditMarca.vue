<template>
  <div class="q-ma-lg">
    <div class="text-h2 text-center q-mt-md">{{ $t("users.title") }}</div>
    <div class="q-my-md">
      <q-form @submit="handleSubmit">
        <div class="row q-col-gutter-md">
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.nombre')"
              v-model="formData.nombre"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            {{ $t("marcas.inputs.importacion") }}
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="formData.importacion"
                :val="$t('gral.yes')"
                :label="$t('gral.yes')"
              />
              <q-radio
                left-label
                v-model="formData.importacion"
                :val="$t('gral.no')"
                :label="$t('gral.no')"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-2 offset-md-8 self-center">
            <q-btn
              color="secondary"
              :label="$t('gral.back')"
              size="md"
              @click="routeBack()"
            ></q-btn>
          </div>
          <div class="col-12 col-md-2 self-center">
            <q-btn
              color="secondary"
              :label="$t('gral.edit')"
              type="submit"
              size="md"
            ></q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

const router = useRouter();
const store = useStore();
const $q = useQuasar();

onBeforeMount(async () => {
  try {
    Object.assign(formData, marcaSel.value);
  } catch (e) {
    console.log(e);
    routeBack();
  }
});

let marcaSel = computed(() => store.state.papeleria.marcaSelected);

let formData = reactive({
  nombre: null,
  importacion: null,
});

const handleSubmit = async () => {
  try {
    // TODO: checar editar
    $q.loading.show();
    let data = { ...formData };
    delete data.id;
    let res = await store.dispatch("papeleria/updateMarca", { data });
    $q.notify({
      color: "accent",
      message: "Marca Editada",
      position: "top",
      classes: "elevate-notify",
    });
    routeBack();
  } catch (error) {
    console.log(error);
    $q.notify({
      color: "red",
      message: error.response.data.message,
      position: "top",
      classes: "elevate-notify",
    });
  } finally {
    $q.loading.hide();
  }
};

const routeBack = async () => {
  router.push({ name: "marcas" });
};
</script>
