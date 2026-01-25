<script lang="ts">
import { defineComponent } from 'vue';
import CartItem from '@/components/CartItem.vue';


export default defineComponent({
  name: 'CartView',
  components: {
    CartItem,
  },
  methods: {
    pay() {
      alert("Simulacia platby");
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
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
              </v-col>
              <v-col cols="3">
                <v-card title="Zhrnutie platby" text="celková cena: 59.99€">
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