<script lang="ts">
import { defineComponent } from 'vue';
import productsPages from '../products-pages.json';
import productsItems from '../products-items.json';
import ProductCard from '../components/ProductCard.vue';
import FilterComponent from '@/components/FilterComponent.vue';

export default defineComponent({
  name: 'ProductsView',
  components: {
    ProductCard, FilterComponent
  },
  props: {
    slug: { type: String, required: false },
  },
  data() {
    return {
      pages: productsPages.pages,
      products: productsItems.products,
      currentPageIndex: 1,
      itemsPerPage: 8,
    }
  },
  computed: {
    currentPage() {
      return this.pages.find(page => page.slug === this.slug);
    },
    currentProducts() {
      if (this.currentPage?.id === undefined) return this.products;
      return this.products.filter(product => product.category === this.currentPage?.id)
    },
    paginatedProducts() {
      const start = (this.currentPageIndex - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.currentProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.currentProducts.length / this.itemsPerPage);
    },
    rowCount() {
      let count = 0;
      let i = -1;
      let rows: any = [];
      for (const p of this.paginatedProducts) {
        if (count % 4 == 0) {
          if (rows[++i] == undefined) {
            rows[i] = [];
          }
          rows[i].push(p);
        } else {
          rows[i].push(p);
        }
        count++;
      }
      return rows;
    },
  },
  watch: {
    slug() {
      this.currentPageIndex = 1
    }
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
              <v-col>
                <h1>{{ currentPage ? currentPage.name : "Všetky produkty" }}</h1>
              </v-col>
            </v-row>

            <v-row class="products-row">
              <v-col cols="3">
                <FilterComponent></FilterComponent>
              </v-col>
              <v-col>
                <v-container fluid>
                  <v-row v-if="currentProducts.length == 0">
                    <v-col>
                      <v-card text="Nenašli sa žiadne produkty">
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-pagination v-model="currentPageIndex" :length="totalPages"></v-pagination>
                    </v-col>
                  </v-row>

                  <v-row v-for="row in rowCount">
                    <v-col cols="3" v-for="product in row">
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