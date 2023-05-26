<template>
  <div class="q-ma-lg">
    <div class="text-h2 text-center q-mt-md">{{ $t("users.title") }}</div>
    <div class="q-my-md q-mx-lg">
      <q-form @submit="handleSubmit">
        <div class="row q-col-gutter-md">
          <div class="col-md-4 col-12">
            <q-input
              :label="$t('users.inputs.nombre')"
              v-model="formData.nombre"
            ></q-input>
          </div>
          <div class="col-md-4 col-12">
            <q-select
              :label="$t('users.inputs.tipo')"
              v-model="formData.tipo"
              :options="catTipos"
            ></q-select>
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
    <q-table :columns="columnsTable" :rows="usuarios" row-key="acciones">
      <template v-slot:body-cell-tipo="scope">
        <q-td>
          {{ scope.row.tipo_id.tipo }}
        </q-td>
      </template>
      <template v-slot:body-cell-acciones="scope">
        <q-tr>
          <q-td auto-width class="q-ma-sm">
            <div class="row col-12 items-center justify-center">
              <q-btn
                size="sm"
                color="secondary"
                class="q-pa-xs"
                icon="edit"
                round
                unelevated
                :disable="scope.row.tipo_id.id === 1"
                @click="handleEdit(scope.row)"
              ></q-btn>
              <q-btn
                size="sm"
                color="primary"
                class="q-pa-xs"
                icon="delete_forever"
                round
                unelevated
                :disable="scope.row.tipo_id.id === 1"
                @click="handleModal(scope.row)"
              ></q-btn>
            </div>
          </q-td>
        </q-tr>
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
import { ref, reactive, onBeforeMount, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const { t } = useI18n();

const modal = ref(null);
let usr = reactive({ id: null });
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
    label: t("users.inputs.nombre"),
    field: "nombre",
    align: "center",
    sortable: true,
  },
  {
    name: "ape_paterno",
    label: t("users.inputs.ape_paterno"),
    field: "ape_paterno",
    align: "center",
    sortable: true,
  },
  {
    name: "ape_materno",
    label: t("users.inputs.ape_materno"),
    field: "ape_materno",
    align: "center",
    sortable: true,
  },
  {
    name: "fecha_nac",
    label: t("users.inputs.fecha_nac"),
    field: "fecha_nac",
    align: "center",
    sortable: true,
  },
  {
    name: "telefono",
    label: t("users.inputs.telefono"),
    field: "telefono",
    align: "center",
    sortable: true,
  },
  {
    name: "tipo",
    label: t("users.inputs.tipo"),
    field: "tipo_id",
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
    await handleSearch();
  } catch (e) {
    console.log(e);
  }
});

let usuarios = computed(() => store.state.papeleria.usuarios);
let catTipos = computed(() => store.getters["papeleria/catTipos"]);

let formData = reactive({
  nombre: null,
  tipo: null,
});

const handleSearch = async () => {
  try {
    await store.dispatch("papeleria/getUsuarios", { query: {} });
  } catch (error) {}
};

const handleSubmit = () => {};

const handleEdit = (row) => {
  store.commit("papeleria/SET_SELECTED_USUARIO", row);
  router.push({ name: "usuariosEdit" });
};

const handleAdd = () => {
  router.push({ name: "usuariosAdd" });
};

const handleModal = (row) => {
  modal.value.show();
  usr.id = row.id;
};
const handleDelete = async () => {
  try {
    let res = await store.dispatch("papeleria/deleteUsuario", {
      data: { id: usr.id },
    });
    handleSearch();
  } catch (error) {}
  // console.log("id", row.id);
  // router.push({});
};
</script>
