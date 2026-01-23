<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      links: [
        { "name": "Kontakt", "url": "kontakt" },
        { "name": "Obchodné-podmienky", "url": "obchodne-podmienky" },
        { "name": "Oblečenie", "url": "oblecenie" },
        { "name": "Obuv", "url": "obuv" },
        { "name": "Závažia", "url": "zavazia" },
        { "name": "Konštrukcie", "url": "konstrukcie" },
        { "name": "Stroje", "url": "stroje" },
        { "name": "Pomôcky", "url": "pomocky" }
      ]
    }
  },
});

</script>

<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-left">
        <RouterLink to="/">Domov</RouterLink>
        <RouterLink v-for="link in links" :to="link.url">{{ link.name }}</RouterLink>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 - {{ new Date().getFullYear() }} Športové potreby</p>
    </div>
  </div>
</template>