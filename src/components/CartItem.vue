<script lang="ts">
import { defineComponent } from 'vue';
import ProductAmount from '@/components/ProductAmount.vue';
import productsItems from '../products-items.json';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
  name: 'CartItem',
  components: {
    ProductAmount,
  },
  props: {
    id: { type: Number, required: true },
  },
  data() {
    return {
      products: productsItems.products,
      cart: useCartStore(),
    }
  },
  methods: {
    open() {
      this.$router.push({ name: 'produkt', params: { slug: this.currentProduct?.slug } });
    },
  },
  computed: {
    amount: {
      get(): number {
        return this.cart.getAmount(this.id);
      },
      set(value: number) {
        this.cart.setAmount(this.id, value);
      }
    },
    currentProduct() {
      return this.products.find(product => product.id === this.id);
    },
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card @click="open">
          <v-container fluid>
            <v-row>
              <v-col align="center" cols="1">
                <img height="55" :src="'/images/products/' + currentProduct?.img" alt="product">
              </v-col>
              <v-col>
                <v-card-title>{{ currentProduct?.name }}</v-card-title>
                <v-card-subtitle>{{ currentProduct?.price }}€</v-card-subtitle>
              </v-col>
              <v-col cols="2">spolu: {{ Math.round((currentProduct?.price || 0) * amount * 100) / 100 }}€</v-col>
              <v-col>
                <ProductAmount v-model:amount="amount"></ProductAmount>
              </v-col>
              <v-col cols="1">
                <v-btn @click.stop="cart.removeProduct(id)">X</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>