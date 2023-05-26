<template>
  <q-dialog ref="dialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">{{ title }}</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          :label="labelBtnCancel"
          color="secondary"
          @click="$emit('clickCancel')"
          v-close-popup
        />
        <q-btn
          flat
          :label="labelBtnOk"
          color="secondary"
          @click="$emit('clickOK')"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { nextTick } from "vue";
import { ref } from "vue";

const emit = defineEmits(["clickOk", "clickCancel"]);
const dialog = ref(null);

const props = defineProps({
  modelValue: {
    default: false,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  labelBtnOk: {
    type: String,
    required: true,
  },
  labelBtnCancel: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    default: false,
    reqiured: true,
  },
});

const handleEmit = () => {
  emit("clickCancel");
};

const handleEmitOk = () => {
  emit("clickOK");
};

const show = () => {
  nextTick(() => {
    dialog.value.show();
  });
};

const hide = () => {
  nextTick(() => {
    dialog.value.hide();
  });
};

defineExpose({
  show,
  hide,
});
</script>
