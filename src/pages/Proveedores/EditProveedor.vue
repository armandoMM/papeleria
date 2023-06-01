<template>
  <div class="q-ma-lg">
    <div class="text-h2 text-center q-mt-md">{{ $t("proveedores.title") }}</div>
    <div class="q-my-md">
      <q-form @submit="handleSubmit">
        <div class="row q-col-gutter-md">
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.nombre')"
              v-model="formData.nombre"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.telefono')"
              v-model="formData.telefono"
              mask="##########"
              :length="10"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.correo')"
              v-model="formData.correo"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
              type="email"
              :error-message="$t('gral.error.invalidEmail')"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.calle')"
              v-model="formData.calle"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.numero')"
              v-model="formData.numero"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.colonia')"
              v-model="formData.colonia"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('proveedores.inputs.municipio')"
              v-model="formData.municipio"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-select
              :label="$t('proveedores.inputs.estado')"
              v-model="formData.estado_id"
              :options="catEstados"
              emit-value
              map-options
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-select>
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
    Object.assign(formData, provSel.value);
    formData.estado_id = provSel.value.estado_id.id;
  } catch (e) {
    console.log(e);
    routeBack();
  }
});

let provSel = computed(() => store.state.papeleria.proveedorSelected);
let catEstados = computed(() => store.getters["papeleria/catEstados"]);

let formData = reactive({
  nombre: null,
  telefono: null,
  correo: null,
  calle: null,
  numero: null,
  colonia: null,
  municipio: null,
  estado_id: null,
});

const handleSubmit = async () => {
  try {
    $q.loading.show();
    let data = { ...formData };
    data.id = provSel.value.id;
    let res = await store.dispatch("papeleria/updateProveedor", { data });
    $q.notify({
      color: "accent",
      message: "Proveedor editado",
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
  router.push({ name: "proveedores" });
};
</script>
