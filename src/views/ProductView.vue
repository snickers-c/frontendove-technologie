<script lang="ts">
import productsItems from '../products-items.json';
import { useCartCounterStore } from '../stores/cartCounter';

export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      products: productsItems.products,
      counter: useCartCounterStore(),
    }
  },
  methods: {
  },
  computed: {
    currentProduct() {
      return this.products.find(product => product.id === Number(this.id));
    }
  },
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet>
          <v-container fluid>
            <v-row>
              <v-col cols="4">
                <img height="500" :src="'/images/products/' + currentProduct?.img" alt="produkt">
              </v-col>
              <v-col>
                <v-card height="500" :title="currentProduct?.name" :subtitle="'značka: ' + currentProduct?.brand">
                  <v-card-text>
                    <p>{{ currentProduct?.desc }}</p>
                    <br>
                    <p id="price">{{ currentProduct?.price }}€</p>
                    {{ counter.count }}
                  </v-card-text>

                  <v-card-actions>
                    <v-btn @click="counter.addProduct(currentProduct?.id)" variant="outlined">Do košíka</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#price {
  color: rgb(255, 47, 47);
  font-size: 18px;
}
</style>