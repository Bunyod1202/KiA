<template>
  <div>
    <div class="col">
      <div class="card">
        <div class="card-body">


            <q-chat-message
        name="Bunyod"
        avatar="~/assets/photo_2021-07-25_10-10-57.jpg"

        sent
        text-color="white"
        bg-color="black"
      >

        <div>
          <div class="video"><video loop autoplay :src="photo.url" width="200"  /></div>
          <audio loop autoplay :src="photo.url" width="200"  />
          <div class="img"><img :src="photo.url" width="200" /></div>

        </div>
        <div>
        {{photo.title}}
        </div>
      </q-chat-message>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>

  .col {
    width: 100%;
    .card {
      padding: 30px;
      width: 500px;
      .card-title{
        padding: 20px;
        text-align: center;
      }
      .card-body{
         padding: 20px;
        text-align: center;
      }
      .btn{
        background-color: black;
        color: #fff;
        margin-left: 45%;
      }
    }
  }

</style>
