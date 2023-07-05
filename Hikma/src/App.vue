<template>
  <div>
    <Header></Header>
    <!-- <Home></Home> -->
    <!-- <Universities></Universities> -->
    <!-- <UniversityPage></UniversityPage> -->
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import Home from './components/Home.vue'
// import UniversityPage from './components/UniversityPage.vue'
import Footer from './components/Footer.vue'
// import Universities from './components/Universities.vue'
</script>

<style lang="css"></style>
