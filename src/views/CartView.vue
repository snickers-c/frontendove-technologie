<script lang="ts">
import { defineComponent } from 'vue';
import CartItem from '@/components/CartItem.vue';
import { useCartStore } from '@/stores/cart';


export default defineComponent({
  name: 'CartView',
  components: {
    CartItem,
  },
  data() {
    return {
      cart: useCartStore(),
    }
  },
  methods: {
    pay() {
      alert("Simulacia platby");
      this.cart.clear();
    }
  },
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet height="">
          <v-container fluid>
            <v-row>
              <v-col>
                <v-card v-if="cart.products.length == 0" title="Košík je prázdny"></v-card>
                <CartItem v-for="product in cart.products" :id="product.id"></CartItem>
              </v-col>
              <v-col cols="3">
                <v-card title="Zhrnutie platby">
                  <v-card-text>celková cena: {{ cart.totalPrice }}€</v-card-text>
                  <v-card-actions>
                    <v-btn @click="pay" variant="outlined">Zaplatiť</v-btn>
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