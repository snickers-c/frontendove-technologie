<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


</script>

<template>
  <v-app>
    <NavigationComponent></NavigationComponent>

    <v-main>
      <RouterView></RouterView>
    </v-main>

    <FooterComponent></FooterComponent>
  </v-app>
</template>

<style scoped></style>

<!-- <template>
  <Navigation></Navigation>

  <div class="container">

    <RouterView></RouterView>

  </div>
  <Footer></Footer>
</template> -->