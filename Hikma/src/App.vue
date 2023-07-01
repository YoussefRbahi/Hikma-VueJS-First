<template>
  <div>
    <Header></Header>
    <Main></Main>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss" scoped></style>
