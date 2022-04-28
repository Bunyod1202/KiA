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
        img-src="~assets/Sarento/b1.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/Sarento/b2.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/Sarento/b3.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/Sarento/b4.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/Sarento/b5.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Новые грани безупречности</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Дизайн нового Kia Sorento — отражение его функциональности и
              инновационности. Аэродинамичный облик, элегантная линия профиля,
              эффектная решетка радиатора, светодиодные фары и стильные
              легкосплавные диски — каждая деталь формирует солидный и
              мужественный образ этого автомобиля.
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
            <q-carousel-slide
              :name="1"
              img-src="~assets/Sarento/cartinka1.jpeg"
            />
            <q-carousel-slide
              :name="2"
              img-src="~assets/Sarento/cartinka2.jpeg"
            />
            <q-carousel-slide
              :name="3"
              img-src="~assets/Sarento/cartinka3.jpeg"
            />
            <q-carousel-slide
              :name="4"
              img-src="~assets/Sarento/cartinka4.jpeg"
            />
            <q-carousel-slide
              :name="5"
              img-src="~assets/Sarento/cartinka5.jpeg"
            />
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
            <q-carousel-slide :name="1" img-src="~assets/Sarento/w1.jpeg" />
            <q-carousel-slide :name="2" img-src="~assets/Sarento/w2.jpeg" />
            <q-carousel-slide :name="3" img-src="~assets/Sarento/w3.jpeg" />
            <q-carousel-slide :name="4" img-src="~assets/Sarento/w4.jpeg" />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">
                Сочетание технологий и дизайнерских решений
              </div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Необходимость постоянно отслеживать бесконечный поток информации
              требует грамотной расстановки приоритетов. Новый Kia Sorento берет
              это на себя, снабжая Вас только необходимой информацией в удобной
              форме и снижая отвлекающие факторы до минимума.
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
          src="  https://cdn.kia.ru//media-data/banner/video/c4b54edd-3f3d-4a2c-bf44-44e9ef2dc763.mp4"
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
