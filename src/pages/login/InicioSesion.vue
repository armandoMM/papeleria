<template>
  <q-img src="~/assets/4.jpeg" class="fullscreen">
    <div
      class="fit row wrap justify-center self-center items-center content-center"
    >
      <div class="col-12 col-md-6">
        <q-card class="bg-white" max-width="500px" heigth="45%">
          <div class="column items-center">
            <q-img
              src="~/assets/logo2.png"
              width="270px"
              class="no-padding"
            ></q-img>
            <q-card-section class="no-padding">
              <q-form @submit="handleLogin" class="q-mb-md">
                <div class="row">
                  <div class="col-12 col-md-12">
                    <q-input
                      :label="$t('login.inputs.user')"
                      v-model="formData.user"
                      :rules="[
                        (val) => !!val || $t('gral.error.fieldRequired'),
                      ]"
                    ></q-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-12">
                    <q-input
                      :label="$t('login.inputs.password')"
                      v-model="formData.pw"
                      :type="isPwd ? 'password' : 'text'"
                      :rules="[
                        (val) => !!val || $t('gral.error.fieldRequired'),
                      ]"
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
                <div class="row q-my-md items-center">
                  <div class="col-12 col-md-8 offset-md-2">
                    <q-btn
                      color="secondary"
                      :label="$t('login.btn.signin')"
                      type="submit"
                    ></q-btn>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </q-img>
</template>
<script setup>
import { reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { showMsg } from "src/utils/notify";
import { useQuasar } from "quasar";

const router = useRouter();
const store = useStore();
const $q = useQuasar();

let formData = reactive({
  user: null,
  pw: null,
});
let isPwd = ref(true);

const handleLogin = async () => {
  try {
    $q.loading.show();
    await store.dispatch("papeleria/login", {
      query: { ...formData },
    });
    router.push({ name: "portal" });
  } catch (error) {
    showMsg("error", error.response.data.message);
  } finally {
    $q.loading.hide();
  }
};
</script>
