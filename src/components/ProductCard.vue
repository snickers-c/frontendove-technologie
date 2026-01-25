<script lang="ts">
import { defineComponent } from 'vue'

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
      this.$router.push({ name: 'produkt', params: { slug: this.product.slug } });
    },
  }
})
</script>

<template>
  <v-card class="card" @click="open" :title=product.name :text="product.price + '€'">
    <v-container fluid>
      <v-row>
        <v-col class="card-bottom">
          <img class="product-card-img" height="200" :src="'./images/products/' + product.img" alt="produkt"></img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>