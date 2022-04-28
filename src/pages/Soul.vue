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
        img-src="~assets/Soul/Soul-1.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/Soul/Soul-2.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/Soul/Soul-3.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/Soul/Soul-4.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/Soul/Soul-5.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Яркий городской кроссовер</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Kia Soul сочетает в себе яркий дизайн, инновационные опции и
              динамичный характер. Элегантные линии, футуристичный дизайн
              головной оптики, двухцветная окраска кузова привлекут к Вам массу
              внимания.
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
            <q-carousel-slide :name="1" img-src="~assets/Soul/z11.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/Soul/z22.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/Soul/z33.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/Soul/z44.jpg" />
            <q-carousel-slide :name="5" img-src="~assets/Soul/z55.jpg" />
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
            <q-carousel-slide :name="1" img-src="~assets/Soul/a111.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/Soul/a222.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/Soul/a333.jpg" />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Растопите лед теплом Soul</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Kia Soul поможет максимально комфортно перенести любую погоду.
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
          src=" https://cdn.kia.ru/media-data/banner/video/f40ef96f-6e3d-4796-9db0-a8286841bcce.mp4"
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
