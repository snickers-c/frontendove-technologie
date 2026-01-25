<script lang="ts">
import { defineComponent } from 'vue';
import productsPages from '../products-pages.json';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
  name: 'NavigationComponent',
  data() {
    return {
      links: productsPages.pages,
      cart: useCartStore(),
    }
  },
  methods: {
    // hovered(event: any) {
    //   event.currentTarget.children[1].classList.remove("hide");
    // },
    // hide(event: any) {
    //   event.currentTarget.children[1].classList.add("hide");
    // }
  },
});
</script>

<template>
  <div class="nav">
    <div class="nav-main">
      <div class="nav-left">
        <div>
          <RouterLink :to="{ name: 'domov' }">
            <img class="nav-logo" src="/images/Logo.svg" alt="logo">
          </RouterLink>
        </div>

        <!-- <div class="nav-search">
          <img src="/images/Search.svg" alt="-O">
          <input type="text" placeholder="Vyhladať">
        </div> -->
      </div>

      <div class="nav-icons">
        <RouterLink :to="{ name: 'kosik' }">
          <v-badge class="badge" v-if="true" location="bottom left" color="primary" :content="cart.totalAmount">
            <img src="/images/Basket.svg" alt="košík">
          </v-badge>
        </RouterLink>
        <!-- <RouterLink to="">
          <img src="/images/Favorite.svg" alt="oblľúbené">
        </RouterLink>
        <RouterLink to="">
          <img id="profile-icon" src="/images/User-icon.png" alt="profil">
        </RouterLink> -->
      </div>
    </div>

    <div class="nav-links">
      <!-- @mouseover="hovered" @mouseleave="hide" -->
      <div v-for="link in links">
        <RouterLink :to="{ name: 'produkty', params: { slug: link.slug } }">{{ link.name }}</RouterLink>
        <!-- <div class="nav-dropdown hide">
          <div class="list">
            <RouterLink to="">Tričká</RouterLink>
            <div class="nav-dropdown-links">
              <RouterLink to="">a</RouterLink>
              <RouterLink to="">b</RouterLink>
              <RouterLink to="">c</RouterLink>
            </div>
          </div>

          <div class="list">
            <RouterLink to="">Tepláky</RouterLink>
            <div class="nav-dropdown-links">
              <RouterLink to="">a</RouterLink>
              <RouterLink to="">b</RouterLink>
              <RouterLink to="">c</RouterLink>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>