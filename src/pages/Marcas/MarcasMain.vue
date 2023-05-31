<template>
  <div class="q-ma-lg">
    <div class="text-h2 text-center q-mt-md">{{ $t("marcas.title") }}</div>
    <div class="q-my-md q-mx-lg">
      <q-form @submit="handleSubmit">
        <div class="row q-col-gutter-md">
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('marcas.inputs.nombre')"
              v-model="formData.nombre"
            ></q-input>
          </div>
          <div class="col-12 col-md-3 offset-md-1 self-center">
            <q-btn
              color="secondary"
              :label="$t('gral.search')"
              type="submit"
              disable
            ></q-btn>
            <q-btn
              class="q-ml-xs"
              color="secondary"
              :label="$t('gral.add')"
              @click="handleAdd()"
            ></q-btn>
          </div>
        </div>
      </q-form>
    </div>
    <q-table
      :columns="columnsTable"
      :rows="marcas"
      :loading="loadingTable"
      row-key="acciones"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:body-cell-tipo="scope">
        <q-td>
          {{ scope.row.tipo_id.tipo }}
        </q-td>
      </template>
      <template v-slot:body-cell-acciones="scope">
        <q-td auto-width class="q-ma-sm">
          <div class="row items-center">
            <q-btn
              size="sm"
              color="secondary"
              class="q-pa-xs"
              icon="edit"
              round
              unelevated
              @click="handleEdit(scope.row)"
            ></q-btn>
            <q-btn
              size="sm"
              color="primary"
              class="q-pa-xs"
              icon="delete_forever"
              round
              unelevated
              @click="handleModal(scope.row)"
            ></q-btn>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
  <modal-dialog
    ref="modal"
    :title="$t('gral.modals.delete')"
    :labelBtnOk="$t('gral.delete')"
    :labelBtnCancel="$t('gral.cancel')"
    @clickOK="handleDelete"
  ></modal-dialog>
</template>
<script setup>
import { ref, reactive, onBeforeMount, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

const router = useRouter();
const store = useStore();
const { t } = useI18n();
const $q = useQuasar();

const modal = ref(null);
let brand = reactive({ id: null });
const columnsTable = ref([
  {
    name: "id",
    label: t("gral.id"),
    field: "id",
    align: "center",
    sortable: true,
  },
  {
    name: "nombre",
    label: t("marcas.inputs.nombre"),
    field: "nombre",
    align: "center",
    sortable: true,
  },
  {
    name: "activa",
    label: t("marcas.inputs.importacion"),
    field: "nombre",
    align: "center",
    sortable: true,
  },
  {
    name: "acciones",
    label: t("gral.actions"),
    field: "acciones",
    align: "center",
  },
]);

onBeforeMount(async () => {
  try {
    $q.loading.show();
    await handleSearch();
  } catch (e) {
    console.log(e);
  } finally {
    $q.loading.hide();
  }
});

onMounted(() => {});

let marcas = computed(() => store.state.papeleria.marcas);
let usuario = computed(() => store.state.papeleria.usuario);

let formData = reactive({
  nombre: null,
});
let loadingTable = ref(false);

const handleSearch = async () => {
  try {
    loadingTable.value = true;
    await store.dispatch("papeleria/getMarcas", { query: {} });
  } catch (error) {
  } finally {
    loadingTable.value = false;
  }
};

const handleSubmit = () => {};

const handleEdit = (row) => {
  store.commit("papeleria/SET_SELECTED_MARCA", row);
  router.push({ name: "marcasEdit" });
};

const handleAdd = () => {
  router.push({ name: "marcasAdd" });
};

const handleModal = (row) => {
  modal.value.show();
  brand.id = row.id;
};
const handleDelete = async () => {
  try {
    let res = await store.dispatch("papeleria/deleteMarca", {
      data: { id: brand.id },
    });
    handleSearch();
    $q.notify({
      color: "accent",
      message: "Marca eliminada",
      position: "top",
      classes: "elevate-notify",
    });
  } catch (error) {}
  // console.log("id", row.id);
  // router.push({});
};
</script>
