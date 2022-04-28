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
        img-src="~assets/K5/11.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/K5/22.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/K5/33.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/K5/44.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/K5/55.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Впечатляет притязательных</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Kia K5 открывает новую эпоху дизайна автомобилей Kia. В этом
              инновационном седане сочетаются динамика и комфорт, дополненные
              дерзким и уверенным профилем. Его элегантность считывается в
              пристальном внимании к деталям.
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
            <q-carousel-slide :name="1" img-src="~assets/K5/12.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/K5/13.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/K5/14.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/K5/15.jpg" />
            <q-carousel-slide :name="5" img-src="~assets/K5/16.jpg" />
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
            <q-carousel-slide :name="1" img-src="~assets/K5/112.jpg" />

            <q-carousel-slide :name="2" img-src="~assets/K5/114.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/K5/115.jpg" />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Удивляет профессионалов</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Отражая спортивный дух автомобиля, салон K5 ориентирован на
              водителя, все элементы управления легкодоступны. Помимо выверенной
              эргономики, интерьер K5 вызывает шквал «технологических» эмоций.
              Продуманный интеллектуальный интерфейс предоставляет доступ к
              различным настройкам коммуникаций, комфорта и развлечений.
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
          src=" https://cdn.kia.ru/media-data/banner/video/55d1cae9-69aa-4172-b426-cc43a417eb48.mp4"
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

<style lang="scss" scoped>
.q-page-container {
  padding: 0;
}
</style>
