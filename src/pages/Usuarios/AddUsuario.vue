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
              stack-label
              v-model="formData.fecha_nac"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.telefono')"
              v-model="formData.telefono"
              mask="##########"
              :length="10"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.calle')"
              v-model="formData.calle"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.numero')"
              v-model="formData.numero"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.colonia')"
              v-model="formData.colonia"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.municipio')"
              v-model="formData.municipio"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
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
          <div class="col-12 col-md-4">
            <q-input
              :label="$t('users.inputs.password')"
              v-model="formData.pw"
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => !!val || $t('gral.error.fieldRequired')]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
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
              :label="$t('gral.add')"
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
import { ref, onBeforeMount, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

const router = useRouter();
const store = useStore();
const $q = useQuasar();

// onBeforeMount(async () => {
//   try {
//     if (!usuario.value) {
//       routeBack();
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });

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
  pw: null,
});
let isPwd = ref(true);

const handleSubmit = async () => {
  try {
    $q.loading.show();
    let data = { ...formData };
    let res = await store.dispatch("papeleria/addUsuario", { data });
    $q.notify({
      color: "accent",
      message: "Usuario agregado",
      position: "top",
      classes: "elevate-notify",
    });
    routeBack();
  } catch (error) {
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
  router.push({ name: "usuarios" });
};
</script>
