<template>
  <div class="text-gray-800">
    <TopBar></TopBar>
    <Header></Header>
    <div class="relative">
      <RouterView></RouterView> <WhatsappButton class="hidden md:block"></WhatsappButton>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue'
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import WhatsappButton from './components/WhatsappButton.vue'
</script>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css"></style>
