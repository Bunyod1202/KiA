<template>
  <div>
    <q-btn color="dark" style="margin-top: 50px; margin-left: 100px" glossy label="Deep Orange"
      @click="confirm = true" />
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="card_giftcard" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
  export default {
    setup() {
      return {
        confirm: ref(false),
      }
    }
  }
    
  </script>

<style>

</style>

  //   setup() {
  //     return {
  //       confirm: ref(false),
  //     }
  //   }
  // }
