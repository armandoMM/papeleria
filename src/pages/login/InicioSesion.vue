<template>
  <q-img src="~/assets/4.jpeg" width="100%" heigth="100%">
    <div class="fit row wrap justify-center items-center content-start">
      <q-card class="bg-white">
        <q-card-section>
          <div class="column items-center">
            <q-form>
              <div class="row">
                <q-input
                  :label="$t('login.inputs.user')"
                  v-model="formData.password"
                ></q-input>
              </div>
              <div class="row">
                <q-input
                  :label="$t('login.inputs.password')"
                  v-model="formData.password"
                  :type="isPwd ? 'password' : 'text'"
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
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-img>
</template>
<script setup>
import { reactive, ref } from "vue";

let formData = reactive({
  user: null,
  password: null,
});
let isPwd = ref(true);
</script>
