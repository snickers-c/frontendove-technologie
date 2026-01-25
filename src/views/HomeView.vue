<script lang="ts">
import { defineComponent } from 'vue';
import productsItems from '../products-items.json';
import ProductCard from '../components/ProductCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: productsItems.products as any[],
    }
  },
  computed: {
    lastProduct() {
      return this.products.length - 1;
    }
  },
})
</script>

<template>
  <v-carousel cycle hide-delimiter-background>
    <v-carousel-item src="/images/carousel/banner1.webp" cover></v-carousel-item>

    <v-carousel-item src="/images/carousel/banner2.png" cover></v-carousel-item>

    <v-carousel-item src="/images/carousel/banner3.jpg" cover></v-carousel-item>
  </v-carousel>

  <v-container fluid>
    <v-row>
      <v-col>
        <v-card title="Najnovšie produkty">
          <v-container fluid>
            <v-row>
              <v-col>
                <ProductCard :product=products[lastProduct]></ProductCard>
              </v-col>
              <v-col>
                <ProductCard :product="products[lastProduct - 1]"></ProductCard>
              </v-col>
              <v-col>
                <ProductCard :product="products[lastProduct - 2]"></ProductCard>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>