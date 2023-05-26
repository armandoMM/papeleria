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
            <q-input
              :label="$t('users.inputs.ape_paterno')"
              v-model="formData.ape_paterno"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.ape_materno')"
              v-model="formData.ape_materno"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-select
              :label="$t('users.inputs.tipo')"
              v-model="formData.tipo_id"
              emit-value
              map-options
              :options="catTipos"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-select>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.fecha_nac')"
              type="date"
              v-model="formData.fecha_nac"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.telefono')"
              v-model="formData.telefono"
              mask="##########"
              :length="10"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.calle')"
              v-model="formData.calle"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.numero')"
              v-model="formData.numero"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.colonia')"
              v-model="formData.colonia"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-select
              :label="$t('users.inputs.estado')"
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
import { ref, reactive, onBeforeMount, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onBeforeMount(async () => {
  try {
    if (!usuario.value) {
      routeBack();
    }
    Object.assign(formData, usuario.value);
    formData.tipo_id = usuario.value.tipo_id.id;
    formData.estado_id = usuario.value.estado_id.id;
  } catch (e) {
    console.log(e);
  }
});

let usuario = computed(() => store.state.papeleria.usuarioSelected);
let catTipos = computed(() => store.getters["papeleria/catTipos"]);
let catEstados = computed(() => store.getters["papeleria/catEstados"]);

let formData = reactive({
  nombre: null,
  ape_materno: null,
  ape_paterno: null,
  fecha_nac: null,
  telefono: null,
  calle: null,
  numero: null,
  colonia: null,
  municipio: null,
  estado_id: null,
  tipo_id: null,
});

const handleSubmit = async () => {
  try {
    let data = { ...formData };
    let res = await store.dispatch("papeleria/updateUsuario", { data });
    routeBack();
  } catch (error) {
    throw error;
  }
};

const routeBack = async () => {
  router.push({ name: "usuarios" });
};
</script>
