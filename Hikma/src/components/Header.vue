<template>
  <div>
    <header class="pb-24 relative font-semi">
      <nav
        class="fixed w-full bg-white mx-auto flex items-center justify-between md:justify-between py-4 px-12 lg:px-24 shadow z-20"
      >
        <!-- Logo -->
        <a href="/">
          <div>
            <img src="../assets/media/logo.jpg" alt="Logo" class="w-16 h-16" /></div
        ></a>

        <!-- Mobile Menu Toggle -->
        <div class="flex md:hidden gap-4 order-last">
          <!-- <div><LocaleSelect></LocaleSelect></div> -->
          <div>
            <button @click="toggleMobileMenu" class="text-gray-800 text-2xl focus:outline-none">
              <i v-if="!mobileMenuOpen" class="fas fa-bars"></i>
              <i v-else class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <!-- Navigation Menu -->
        <div>
          <NavigationMenu
            class="hidden md:flex items-center gap-x-4 font-semibold text-lg"
          ></NavigationMenu>
        </div>

        <ul class="flex gap-4 absolute md:static start-1/2 translate-x-1/2">
          <li>
            <a
              href="#"
              class="inline-block bg-hikma-secondary hover:bg-hikma-primary text-white p-4 rounded-md"
              >سجل الان</a
            >
          </li>
          <!-- <li><LocaleSelect></LocaleSelect></li> -->
        </ul>

        <!-- Mobile Menu -->
      </nav>
      <transition name="fade">
        <NavigationMenu
          id="mobile-menu"
          v-if="mobileMenuOpen"
          class="fixed top-0 left-0 w-full h-full bg-white shadow py-32 px-6 mt-32 md:hidden grid justify-center text-3xl z-20 text-center"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
        </NavigationMenu>
        <!-- </div> -->
      </transition>
    </header>
  </div>
</template>

<script setup></script>
<script>
import { RouterLink } from 'vue-router'
import LocaleSelect from './LocaleSelect.vue'
import NavigationMenu from './NavigationMenu.vue'
export default {
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  },
  components: { RouterLink, LocaleSelect, NavigationMenu }
}
</script>

<style>
#mobile-menu > li {
  transform: translate(0, -4rem);
}
</style>
