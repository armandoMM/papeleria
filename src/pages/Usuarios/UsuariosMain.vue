<template>
  <div class="text-h2 text-center q-mt-md">{{ $t("users.title") }}</div>
  <div class="q-my-md q-mx-lg">
    <q-form @submit="handleSubmit">
      <div class="row q-col-gutter-md">
        <div class="col-md-4 col-12">
          <q-input
            :label="$t('users.inputs.name')"
            v-model="formData.nombre"
          ></q-input>
        </div>
        <div class="col-md-4 col-12">
          <q-input
            :label="$t('users.inputs.type')"
            v-model="formData.tipo"
          ></q-input>
        </div>
        <div class="col-12 col-md-3 offset-md-1 self-center">
          <q-btn
            color="secondary"
            :label="$t('gral.search')"
            type="submit"
            disable
          ></q-btn>
        </div>
      </div>
    </q-form>
  </div>
  <q-table :columns="columnsTable" :rows="rowsTable" row-key="acciones">
    <template v-slot:body-cell-acciones="scope">
      <q-tr>
        <q-td auto-width>
          <div>
            <q-btn
              size="md"
              color="secondary"
              label="Editar"
              class="q-px-xs"
              no-caps
              unelevated
              disable
              @click="handleEdit(scope)"
            ></q-btn>
            <!-- <q-icon name="edit" /> -->
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
  <!-- <a-table :columns="columnsTable" :rows="rowsTable" row-key="acciones">
    <template v-slot:body-cell-acciones="scope">
      <q-tr>
        <q-td auto-width>
          <div>
            <q-btn
              size="md"
              color="secondary"
              label="Editar"
              class="q-px-xs"
              no-caps
              unelevated
              disabled
              @click="handleEdit(scope)"
            ></q-btn>
            <q-icon name="edit" /> 
          </div>
        </q-td>
      </q-tr>
    </template>
  </a-table> -->
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const columnsTable = ref([
  { name: "nombre", label: "Nombre", field: "nombre", sortable: true },
  {
    name: "ape_paterno",
    label: "Apellido Paterno",
    field: "ape_paterno",
    sortable: true,
  },
  {
    name: "ape_materno",
    label: "Apellido Materno",
    field: "ape_materno",
    sortable: true,
  },
  {
    name: "fecha_nac",
    label: "Fecha de nacimiento",
    field: "fecha_nac",
    sortable: true,
  },
  { name: "telefono", label: "Telefono", field: "telefono", sortable: true },
  { name: "tipo_id", label: "Tipo", field: "tipo_id", sortable: true },
  { name: "acciones", label: "Acciones", field: "acciones" },

  // {
  //   nombre: "Armando",
  //   ape_paterno: "Matias",
  //   ape_materno: "Montaño",
  //   fecha_nac: "1999-05-12",
  //   telefono: "7223760782",
  //   tipo_id: "Administrador",
  // },
]);

const rowsTable = ref([
  {
    nombre: "Armando",
    ape_paterno: "Matias",
    ape_materno: "Montaño",
    fecha_nac: "1999-05-12",
    telefono: "7223760782",
    calle: "Narciso MEndoza",
    numero: "231",
    colonia: "Santa Barbara",
    municipio: "Toluca",
    estado_id: "Estado de Mexico",
    tipo_id: "Administrador",
  },
]);

let formData = reactive({
  nombre: null,
  tipo: null,
});
const handleSubmit = () => {};

const handleEdit = (row) => {
  console.log(row);
  router.push({ name: "usuariosEdit" });
};
</script>
