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
        img-src="~assets/Carnival/fon1.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/Carnival/fon2.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/Carnival/fon3.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/Carnival/fon4.png"
        style="width: 950px; margin-left: 15%"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/Carnival/fon5.png"
        style="width: 950px; margin-left: 15%"
      />
    </q-carousel>

    <div class="Container">
      <div class="row" style="margin-top: 30px">
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Понравится всем</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >От футуристических фар, дополняющих фирменную решетку радиатора,
              и до эффектной широкой полосы задних фонарей — свежие акценты
              создают новый роскошный дизайн, характерный для больших
              автомобилей.
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
            <q-carousel-slide :name="1" img-src="~assets/Carnival/car1.jpeg" />
            <q-carousel-slide :name="2" img-src="~assets/Carnival/car2.jpeg" />
            <q-carousel-slide :name="3" img-src="~assets/Carnival/car3.jpeg" />
            <q-carousel-slide :name="4" img-src="~assets/Carnival/car4.jpeg" />
            <q-carousel-slide :name="5" img-src="~assets/Carnival/car5.jpeg" />
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
            <q-carousel-slide
              :name="1"
              img-src="~assets/Carnival/salon1.jpeg"
            />
            <q-carousel-slide
              :name="2"
              img-src="~assets/Carnival/salon2.jpeg"
            />
            <q-carousel-slide
              :name="3"
              img-src="~assets/Carnival/salon3.jpeg"
            />
            <q-carousel-slide
              :name="4"
              img-src="~assets/Carnival/salon4.jpeg"
            />
            <q-carousel-slide
              :name="5"
              img-src="~assets/Carnival/salon5.jpeg"
            />
          </q-carousel>
        </div>
        <div class="col">
          <q-card class="my-card" style="height: 100%">
            <q-card-section>
              <div class="text-h3">Все под контролем</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6" style=""
              >Технологии навсегда изменили вождение. В новом Kia Carnival Вам
              не придется защищаться от потока информации, ведь на экраны
              выводятся только актуальные данные. Информационная среда
              автомобиля спроектирована для того, чтобы Вы наслаждались дорогой,
              оставаясь в курсе наиболее важной информации.
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
          src="  https://cdn.kia.ru/media-data/banner/video/carnival-new.mp4"
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
