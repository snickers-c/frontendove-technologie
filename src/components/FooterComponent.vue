<script lang="ts">
import { defineComponent } from 'vue';
import productsPages from '../products-pages.json';

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      links: productsPages.pages,
    }
  },
});

</script>

<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-left">
        <RouterLink :to="{ name: 'domov' }">Domov</RouterLink>
        <RouterLink :to="{ name: 'kontakt' }">Kontakt</RouterLink>
        <RouterLink :to="{ name: 'obchodne-podmienky' }">Obchodné-podmienky</RouterLink>
        <RouterLink v-for="link in links" :to="{ name: 'produkty', params: { slug: link.slug } }">{{ link.name }}
        </RouterLink>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 - {{ new Date().getFullYear() }} Športové potreby</p>
    </div>
  </div>
</template>