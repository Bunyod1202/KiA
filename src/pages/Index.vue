<template>
  <q-page class="flex flex-center">
    <img
      class="img1"
      alt="Quasar logo"
      src="~assets/Logo/wheel.png"
      style="width: 200px; height: 200px"
    />
    <img class="img2" src="~assets/Logo/chang.png" alt="" />
    <div class="chang"></div>
    <a href="http://localhost:8080/#/Selts">
      <q-btn
        class="btn"
        :loading="progress[0].loading"
        :percentage="progress[0].percentage"
        color="primary"
        @click="startComputing(0)"
        style="width: 150px"
      >
        Saytga o'tish
        <template v-slot:loading>
          <q-spinner-gears class="on-left" />
          Computing...
        </template>
      </q-btn>
    </a>
  </q-page>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  setup() {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
    ]);

    const intervals = [null, null, null];

    function startComputing(id) {
      progress.value[id].loading = true;
      progress.value[id].percentage = 0;

      intervals[id] = setInterval(() => {
        progress.value[id].percentage += Math.floor(Math.random() * 8 + 10);
        if (progress.value[id].percentage >= 100) {
          clearInterval(intervals[id]);
          progress.value[id].loading = false;
        }
      }, 700);
    }

    onBeforeUnmount(() => {
      intervals.forEach((val) => {
        clearInterval(val);
      });
    });

    return {
      progress,
      startComputing,
    };
  },
};
</script>
<style lang="scss" scoped>
.flex {
  /* The element to apply the animation to */
  .btn {
    margin-top: 400px;
    margin-left: -200px;
    text-decoration: none;
  }

  .chang {
    z-index: 3;
    position: absolute;
    width: 400px;
    left: 650px;
    top: 180px;
    height: 300px;

    animation-name: chang;
    animation-duration: 5s;

    animation-iteration-count: infinite;
  }
  .img2 {
    z-index: 1;
    position: absolute;
    width: 400px;
    left: 630px;
    top: 220px;
  }
  .img1 {
    z-index: 5;
    width: 100px;
    height: 100px;
    position: relative;
    animation-name: example;
    animation-duration: 5s;

    animation-iteration-count: infinite;
    // animation-direction: alternate-reverse;
  }
}
@keyframes example {
  0% {
    transform: rotate(3600deg);
    left: 0px;
  }
  25% {
    transform: rotate(0deg);
    left: 0px;
  }
  50% {
    transform: rotate(0deg);
    left: 500px;
  }
  55% {
    transform: rotate(0deg);
    left: 500px;
  }
  70% {
    transform: rotate(0deg);
    left: 500px;
  }

  100% {
    transform: rotate(-360deg);
    left: 0px;
  }
}
@keyframes chang {
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  25% {
    background-color: rgba(255, 255, 255, 0.452);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.76);
  }
  75% {
    background-color: rgba(255, 255, 255, 0.884);
  }
  100% {
    background-color: rgb(255, 255, 255);
  }
}
</style>
