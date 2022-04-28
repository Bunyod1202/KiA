<template>
  <div>
    <div class="contene">
      <q-btn class="edd" label="дабавить " @click="bar2 = true" />
       <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-black text-white">
        <q-bar>
          <div> <q-btn dense flat icon="clear" @click="delitePhoto" v-close-popup/>
          </div>

          <q-space />

          <q-btn dense flat icon="check" @click="addPhoto"  v-close-popup/>
        </q-bar>
        <q-card-section>
          <q-input  class="bg-white" rounded outlined  label="title" v-model="title" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-file rounded outlined class="bg-white" v-model="img">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-card-section>
      </q-card>
    </q-dialog>

    </div>
  </div>
</template>

<script>

import { ref } from 'vue'
export default {
  components: {
  },
  setup () {
    return {
      img: ref(null),
      title: '',
      bar2: ref(false),
    }
  },
  methods: {
    addPhoto() {
      const reader = new FileReader()
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        }
        this.$emit('addPhoto',photo)
      }
      reader.readAsDataURL(this.img)
      setTimeout(()=>{
        this.delitePhoto()
      },1000)
    },
    delitePhoto () {
     this.img = "",
     this.title =""
    }
  }
}
</script>

<style lang="scss" scoped>
.contene {
  .rows {
    display: flex;
    width: 1500px !important;
    justify-content: center;
  }
}
</style>
<style lang="scss" scoped>
.edd{
  margin-left: 47%;
  margin-top: 30px;
  background-color: black;
  color: #fff;
}
</style>
