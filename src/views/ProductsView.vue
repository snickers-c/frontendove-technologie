<script lang="ts">
import productsPages from '../products-pages.json';
import productsItems from '../products-items.json';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  props: {
    slug: { type: String, required: false },
  },
  data() {
    return {
      pages: productsPages.pages,
      products: productsItems.products,
    }
  },
  computed: {
    currentPage() {
      return this.pages.find(page => page.slug === this.slug);
    },
    currentProducts() {
      return this.products.filter(product => product.category === this.currentPage?.id)
    },
    rowCount() {
      let count = 0;
      let i = 0;
      let rows: any = [];
      for (let p of this.currentProducts) {
        // if (count % 4 == 0 && count !== 0) {
        //   count = -1;
        //   i++;
        // }
        rows[i].push({ p });
        count++;
      }

      return rows;
    },
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet>
          <v-container fluid>
            <v-row>
              <v-col>
                <h1>{{ currentPage ? currentPage.name : "Všetky produkty" }}</h1>
              </v-col>
            </v-row>

            <v-row class="products-row">
              <v-col cols="3">
                filter
              </v-col>
              <v-col>
                <v-container fluid>
                  <!-- v-for="row in rowCount" -->
                  <v-row>
                    <v-col v-for="product in currentProducts">
                      <ProductCard :product=product></ProductCard>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>