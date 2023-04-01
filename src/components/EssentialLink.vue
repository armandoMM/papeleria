<template>
  <q-item clickable tag="a" target="_blank" @click="redirect">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
/*export default defineComponent({
  name: 'EssentialLink',*/
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const redirect = () => {
  router.push({ name: props.route });
};
</script>
