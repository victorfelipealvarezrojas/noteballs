<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-4">
      <div class="navbar-brand">
        <div
          class="navbar-item is-size-4 is-family-monospace"
          style="color: #fff; font-weight: 700"
        >
          NoteBall
        </div>

        <a
          role="button"
          class="navbar-burger"
          v-bind:class="{ 'is-active': showMobileMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileMenu }">
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item is-active"
            style="color: #fff"
            active-class="is-active"
            >Notes</RouterLink
          >
          <RouterLink to="/stats" class="navbar-item" style="color: #fff" active-class="is-active"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleMenu = (event) => {
  event.stopPropagation()
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
