<script lang="ts">
import { defineComponent } from 'vue'
// import type Product from '../types/product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return {
    }
  },
  methods: {
    open() {
      this.$router.push({ name: 'produkt', params: { id: this.product.id } });
    },
    cart() {

    }
  }
})
</script>

<template>
  <v-card @click="open" :title=product.name :text="product.price + '€'">
    <v-container fluid>
      <v-row>
        <v-col align="center">
          <img class="product-card-img" height="200" :src="'/images/products/' + product.img" alt="produkt"></img>
          <v-btn @click.stop="cart" variant="outlined">Do košíka</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style></style>