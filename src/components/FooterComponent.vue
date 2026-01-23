<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      links: ["kontakt", "obchodne-podmienky", "Oblečenie", "Obuv", "Závažia", "Konštrukcie", "Stroje", "Pomôcky"],
    }
  },
});

</script>

<template>
  <div class="footer">
    <div class="footer-left">
      <RouterLink v-for="link in links" :to="link">{{ link }}</RouterLink>
    </div>
  </div>
</template>