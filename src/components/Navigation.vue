<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      links: ["Oblečenie", "Obuv", "Závažia", "Konštrukcie", "Stroje", "Pomôcky"],
      dropdown: false,
      count: 1
    }
  },
  methods: {
    hovered(event: any) {
      event.currentTarget.children[1].classList.remove("hide");
      this.dropdown = true;
    },
    hide(event: any) {
      event.currentTarget.children[1].classList.add("hide");
      this.dropdown = false;
    }
  },
  mounted() { },
})
</script>

<template>
  <div class="nav">
    <div class="nav-main">
      <div class="nav-left">
        <div class="nav-logo">
          <img src="/images/Logo.svg" alt="logo">
        </div>

        <div class="nav-search">
          <img src="/images/Search.svg" alt="-O">
          <input type="text" placeholder="Vyhladať">
        </div>
      </div>

      <div class="nav-icons">
        <img src="/images/Basket.svg" alt="košík">
        <img src="/images/Favorite.svg" alt="oblľúbené">
        <img id="profile-icon" src="/images/User-icon.png" alt="profil">
      </div>
    </div>

    <div class="nav-links">
      <div @mouseover="hovered" @mouseleave="hide" v-for="link in links">
        <RouterLink to="">{{ link }}</RouterLink>
        <div class="nav-dropdown hide">
          <div class="list">
            <p>Tričká</p>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>

          <div class="list">
            <p>Tepláky</p>
            <ul>
              <li>d</li>
              <li>e</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>