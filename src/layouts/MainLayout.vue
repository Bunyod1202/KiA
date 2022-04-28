<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar style="background-color: rgb(78, 75, 75)">
        <q-btn flat dense round aria-label="Menu" @click="toggleLeftDrawer">
          <q-img src="~assets/Logo/Logo.png" />
        </q-btn>

        <q-toolbar-title> Auto Car </q-toolbar-title>

        <q-input
          dark
          borderless
          v-model="text"
          input-class="text-right"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer id="q" v-model="leftDrawerOpen" overlay bordered>
      <q-list>
        <q-item-label
          header
          style="
            text-align: center;
            font-size: 30px;
            color: black;
            font-weight: bolder;
          "
        >
          KIA Auto
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Selts",
    caption: "Campaign KIA ",
    icon: "directions_car",
    link: "http://localhost:8080/#/Selts",
  },
  {
    title: "K5",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/K5",
  },
  {
    title: "Sarento",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/Sarento",
  },
  {
    title: "Stinger",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/Stinger",
  },
  {
    title: "Soul",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/Soul",
  },
  {
    title: "Cornival",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/Cornival",
  },
  {
    title: "K8",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/K8",
  },
  {
    title: "User",
    caption: "Campaign KIA",
    icon: "directions_car",
    link: "http://localhost:8080/#/Emale",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      text: ref(""),
      model: ref("one"),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
<style lang="scss" scoped>
#d {
  position: absolute;
  z-index: 5;
  opacity: 5;
}
</style>
