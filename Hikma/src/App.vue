<template>
  <div>
    <Header></Header>
    <!-- <Home></Home> -->
    <University></University>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import Home from './components/Home.vue'
import University from './components/University.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="css"></style>
