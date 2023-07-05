<template>
  <div>
    <header class="bg-white shadow">
      <nav class="container mx-auto flex items-center justify-between py-4 px-12 lg:px-24">
        <!-- Logo -->
        <div>
          <img src="../assets/media/logo.jpg" alt="Logo" class="w-24 h-24" />
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="flex md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                v-if="!mobileMenuOpen"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 5h16v2H2V5zm0 6h16v-2H2v2zm0 6h16v-2H2v2z"
              />
              <path
                v-else
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6h12V5H4v1zm0 4h12v-1H4v1zm0 4h12v-1H4v1z"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Menu -->
        <ul class="hidden md:flex items-center gap-x-4">
          <li>
            <a href="#" class="text-lg text-gray-800 hover:text-hikma-primary">Home</a>
          </li>
          <li>
            <a href="#" class="text-lg text-gray-800 hover:text-hikma-primary">Universities</a>
          </li>
          <li>
            <a href="#" class="text-lg text-gray-800 hover:text-hikma-primary">Services</a>
          </li>
          <li>
            <a href="#" class="text-lg text-gray-800 hover:text-hikma-primary">About Us</a>
          </li>
          <li>
            <a href="#" class="text-lg text-gray-800 hover:text-hikma-primary">Contact</a>
          </li>
        </ul>

        <!-- Mobile Menu -->
        <transition name="fade">
          <ul
            v-if="mobileMenuOpen"
            class="absolute top-0 left-0 w-full bg-white shadow py-4 px-6 mt-12 md:hidden"
          >
            <li>
              <a href="#" class="block text-gray-800 hover:text-hikma-primary">Home</a>
            </li>
            <li>
              <a href="#" class="block text-gray-800 hover:text-hikma-primary">Universities</a>
            </li>
            <li>
              <a href="#" class="block text-gray-800 hover:text-hikma-primary">Services</a>
            </li>
            <li>
              <a href="#" class="block text-gray-800 hover:text-hikma-primary">About Us</a>
            </li>
            <li>
              <a href="#" class="block text-gray-800 hover:text-hikma-primary">Contact</a>
            </li>
          </ul>
        </transition>
      </nav>
    </header>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
