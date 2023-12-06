<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { Component, toVue } from '@haixing_hu/vue3-class-component';

@Component
class IndexPage {
  //  empty
}

export default toVue(IndexPage);
</script>
