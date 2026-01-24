<script setup lang="ts">
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