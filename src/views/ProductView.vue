<script lang="ts">
import { defineComponent, toHandlers } from 'vue';
import productsItems from '../products-items.json';
import { useCartStore } from '../stores/cart';
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
      cart: useCartStore(),
      newAmount: 1,
    }
  },
  computed: {
    amount: {
      get(): number {
        const product = this.cart.products.find(product => product.id === this.currentProduct?.id);
        return product ? product.amount : this.newAmount;
      },
      set(value: number) {
        if (!this.currentProduct) return;
        const product = this.cart.products.find(product => product.id === this.currentProduct?.id);
        if (product) {
          this.cart.setAmount(this.currentProduct.id, value);
        } else {
          this.newAmount = value;
        }
      },
    },
    currentProduct() {
      return this.products.find(product => product.slug === this.slug);
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
                <img height="500" :src="'./images/products/' + currentProduct?.img" alt="produkt">
              </v-col>
              <v-col>
                <v-card height="500" :title="currentProduct?.name" :subtitle="'značka: ' + currentProduct?.brand">
                  <v-card-text>
                    <p>{{ currentProduct?.desc }}</p>
                    <br>
                    <p id="price">{{ currentProduct?.price }}€</p>
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
                          <v-btn v-if="currentProduct"
                            @click="cart.addProduct(currentProduct.id, amount, currentProduct.price)"
                            variant="outlined">Do košíka</v-btn>
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