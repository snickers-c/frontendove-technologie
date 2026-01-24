<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationComponent',
  data() {
    return {
      links: [
        { "name": "Oblečenie", "slug": "oblecenie" },
        { "name": "Obuv", "slug": "obuv" },
        { "name": "Závažia", "slug": "zavazia" },
        { "name": "Konštrukcie", "slug": "konstrukcie" },
        { "name": "Stroje", "slug": "stroje" },
        { "name": "Pomôcky", "slug": "pomocky" }
      ]
    }
  },
  methods: {
    hovered(event: any) {
      event.currentTarget.children[1].classList.remove("hide");
    },
    hide(event: any) {
      event.currentTarget.children[1].classList.add("hide");
    }
  },
  mounted() {

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

        <div class="nav-search">
          <img src="/images/Search.svg" alt="-O">
          <input type="text" placeholder="Vyhladať">
        </div>
      </div>

      <div class="nav-icons">
        <RouterLink to="">
          <v-badge class="badge" v-if="true" location="bottom left" color="primary" content="0">
            <img src="/images/Basket.svg" alt="košík">
          </v-badge>
        </RouterLink>
        <RouterLink to="">
          <img src="/images/Favorite.svg" alt="oblľúbené">
        </RouterLink>
        <RouterLink to="">
          <img id="profile-icon" src="/images/User-icon.png" alt="profil">
        </RouterLink>
      </div>
    </div>

    <div class="nav-links">
      <div @mouseover="hovered" @mouseleave="hide" v-for="link in links">
        <RouterLink :to="{ name: 'produkty', params: { slug: link.slug } }">{{ link.name }}</RouterLink>
        <div class="nav-dropdown hide">
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
        </div>
      </div>
    </div>
  </div>
</template>