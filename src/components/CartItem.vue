<script lang="ts">
import { defineComponent } from 'vue';
import ProductAmount from '@/components/ProductAmount.vue';

export default defineComponent({
  name: 'CartItem',
  components: {
    ProductAmount,
  },
  data() {
    return {
      amount: 1,
    }
  },
  methods: {
    open() {
      // this.$router.push({ name: 'produkt', params: { slug: this.product.slug } });
    },
  },
  computed: {
    g() {
      return this.amount
    }
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
                <img height="55" src="/images/products/nike-white-shirt1.jpg" alt="product">
              </v-col>
              <v-col>
                <v-card-title>Tričko Babibas</v-card-title>
                <v-card-subtitle>5.99€</v-card-subtitle>
              </v-col>
              <v-col>
                {{ g }}
                <ProductAmount v-model:amount="amount"></ProductAmount>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>