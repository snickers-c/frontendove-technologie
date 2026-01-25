<script lang="ts">
import { defineComponent } from 'vue';
import productsPages from '../products-pages.json';

export default defineComponent({
  name: 'FilterComponent',
  data() {
    return {
      links: productsPages.pages,
    }
  },
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card title="Filter">
          <div v-for="link in links">
            <RouterLink :to="{ name: 'produkty', params: { slug: link.slug } }">{{ link.name }}</RouterLink>
            <v-divider></v-divider>
          </div>
          <RouterLink :to="{ name: 'produkty', params: { slug: '' } }">Všetko</RouterLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>