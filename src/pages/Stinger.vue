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
        img-src="~assets/Stinger/555.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/Stinger/111.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/Stinger/222.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/Stinger/333.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/Stinger/444.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Мчитесь навстречу ветру</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Классические пропорции соседствуют с новейшими разработками в
              области аэродинамики и шумопоглощения, в то время как облик
              автомобиля обеспечивает минимальное сопротивление и максимальную
              управляемость.
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
            <q-carousel-slide :name="1" img-src="~assets/Stinger/1.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/Stinger/2.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/Stinger/3.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/Stinger/4.jpg" />
            <q-carousel-slide :name="5" img-src="~assets/Stinger/5.jpg" />
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
            <q-carousel-slide :name="1" img-src="~assets/Stinger/11.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/Stinger/22.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/Stinger/33.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/Stinger/44.jpg" />
            <q-carousel-slide :name="5" img-src="~assets/Stinger/55.jpg" />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Все под контролем</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Новый Kia Stinger — это бескомпромиссный автомобиль для водителя.
              Здесь Все сделано специально для Вас, от сидений со спортивной
              поддержкой до современных технологий. Вы сможете совершать самые
              продолжительные поездки, не чувствуя усталости.
            </q-card-section>
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
          src=" https://cdn.kia.ru//media-data/banners/models/stinger_new/main/new-stinger-desc.mp4"
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
