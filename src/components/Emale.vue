<template>
  <div>
    <div class="contener">
      <PhotoForm @add-photo='addPhoto'/>
      <div class="row">
        <Photo
        v-for="photo in photos" :key="photo"
        :photo="photo"
        />
      </div>
  <DataTimer
  :year="2021"
  :month="11"
  :date="0"
  :hour="0"
  :minute="0"
  :second="0"
  :millisecond="0"
  />

    </div>
  </div>
</template>

<script>
import Photo from 'components/Photo.vue'
import PhotoForm from 'components/PhotoForm.vue'
// import DataTimer from 'components/DataTimer.vue'


export default {
  components: {
     Photo,
     PhotoForm,
    //  DataTimer,
  },
  data: () => ({
    photos: JSON.parse(localStorage.getItem('photos') || '[]'),
  }),
  mounted() {
    // this.featchTodo()
  },
  methods: {
    addPhoto(photo) {
      this.photos.push(photo)
      localStorage.setItem('photos', JSON.stringify(this.photos))
    },

  }
}
</script>

<style lang="scss" scoped>

</style>
