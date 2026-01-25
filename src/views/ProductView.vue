<script lang="ts">
import { defineComponent } from 'vue';
import productsItems from '../products-items.json';
import { useCartCounterStore } from '../stores/cartCounter';
import ProductAmount from '@/components/ProductAmount.vue';

export default defineComponent({
  name: 'ProductView',
  components: {
    ProductAmount,
  },
  props: {
    slug: { type: String, required: true },
  },
  data() {
    return {
      products: productsItems.products,
      cart: useCartCounterStore(),
      amount: 1,
    }
  },
  computed: {
    currentProduct() {
      return this.products.find(product => product.slug === this.slug);
    },
    g() {
      return this.amount;
    },
  },
})
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
                    {{ cart.count }}
                    {{ cart.products }}
                  </v-card-text>

                  <v-card-actions>
                    <v-container fluid>
                      <v-row>
                        <v-col cols="4">
                          <ProductAmount v-model:amount="amount"></ProductAmount>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn @click="cart.addProduct(currentProduct?.id + '')" variant="outlined">Do košíka</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
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