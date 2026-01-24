<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      links: [
        { "name": "Oblečenie", "slug": "oblecenie" },
        { "name": "Obuv", "slug": "obuv" },
        { "name": "Závažia", "slug": "zavazia" },
        { "name": "Konštrukcie", "slug": "konstrukcie" },
        { "name": "Stroje", "slug": "stroje" },
        { "name": "Pomôcky", "slug": "pomocky" }
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
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        <RouterLink to="/obchodne-podmienky">Obchodné-podmienky</RouterLink>
        <RouterLink v-for="link in links" :to="{ name: 'produkty', params: { slug: link.slug } }">{{ link.name }}
        </RouterLink>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 - {{ new Date().getFullYear() }} Športové potreby</p>
    </div>
  </div>
</template>