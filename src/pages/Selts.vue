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
        img-src="~assets/Imgs/1.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/Imgs/2.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/Imgs/3.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/Imgs/4.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/Imgs/5.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Притягивающий взгляды</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >За динамичным силуэтом компактного кроссовера с выразительными
              мускулистыми формами скрывается дружелюбный характер, в котором
              комфорт и техническая оснащенность соседствуют с азартом и
              драйвом. Новый Kia Seltos готов ответить на любой вызов.
            </q-card-section>
          <ModalGift/>
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
            <q-carousel-slide :name="1" img-src="~assets/Imgs/big-5eca48.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/Imgs/big-9ba6cb.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/Imgs/big-abb9e6.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/Imgs/big-bff401.jpg" />
            <q-carousel-slide :name="5" img-src="~assets/Imgs/big-f1622c.jpg" />
            <q-carousel-slide :name="6" img-src="~assets/Imgs/big-faec66.jpg" />
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
            <q-carousel-slide :name="1" img-src="~assets/Imgs/big-cfa1.jpg" />
            <q-carousel-slide
              :name="2"
              img-src="~assets/Imgs/big-49dacf2.jpg"
            />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">
                Мир выглядит ярче, когда вы за рулем KIA Seltos
              </div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Дисплеи приборной панели расположены под небольшим углом, чтобы
              быть в поле Вашего зрения. Но Seltos заботится не только о Вас.
              Интерьер и функциональные решения автомобиля тщательно продуманы,
              чтобы поездка оказалась для Ваших спутников также комфортной и
              увлекательной.
            </q-card-section>
            <ModalGift/>
          </q-card>
        </div>
      </div>
      <div class="row" style="margin-top: 30px">
        <video
          autoplay
          loop
          style="width: 1490px"
          src=" https://cdn.kia.ru/media-data/banners/models/seltos/desc/1920_desktop.mp4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import ModalGift from 'components/ModalGift.vue';
export default {
  components: {
    ModalGift
  },
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
