<template>
  <div class="q-pa-md">
    <q-carousel
      :navigation-position="navPos"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="~assets/K8/fon-1.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/K8/fon-2.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/K8/fon-3.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/K8/fon-4.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/K8/fon-5.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Экстерьер</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Спортивный футуристический дизайн, который наполняет жизнь новым
              вдохновением. Дизайн K8 отрывается от нынешних парадигм, чтобы
              представить будущее мобильности. Свежесть бампера "все в одном" со
              встроенной решеткой радиатора непривычна, но привлекательна, а
              безупречная гармония спортивного кузова фастбэк устанавливает
              новый уровень класса.
            </q-card-section>
            <q-btn
              color="dark"
              style="margin-top: 50px; margin-left: 100px"
              glossy
              label="Deep Orange"
            />
          </q-card>
        </div>
        <div class="col">
          <q-carousel
            animated
            v-model="slid"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" img-src="~assets/K8/car1.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/K8/car2.png" />
            <q-carousel-slide :name="3" img-src="~assets/K8/car3.png" />
            <q-carousel-slide :name="4" img-src="~assets/K8/car4.png" />
            <q-carousel-slide :name="5" img-src="~assets/K8/car5.png" />
          </q-carousel>
        </div>
      </div>
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-carousel
            animated
            v-model="slia"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" img-src="~assets/K8/salon1.png" />
            <q-carousel-slide :name="2" img-src="~assets/K8/salon2.png" />
            <q-carousel-slide :name="3" img-src="~assets/K8/salon3.png" />
            <q-carousel-slide :name="4" img-src="~assets/K8/salon4.png" />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Выдающееся Пространство</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""> </q-card-section>
            <q-btn
              color="dark"
              style="margin-top: 25px; margin-left: 100px"
              glossy
              label="Deep Orange"
            />
          </q-card>
        </div>
      </div>
      <div class="row" style="margin-top: 30px">
        <video
          autoplay
          loop
          style="width: 1490px"
          src=" https://cdn.kia-motors.uz/uploads/files/K8_launching_MUSIC_notext.mp4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const navPos = ref("left");
    const vertical = ref(false);

    watch(vertical, (val) => {
      navPos.value = val === true ? "right" : "bottom";
    });

    return {
      slia: ref(1),
      slid: ref(1),
      autoplay: ref(true),
      vertical,
      arrows: ref(true),
      navigation: ref(true),
      slide: ref(1),
      navPos,
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
