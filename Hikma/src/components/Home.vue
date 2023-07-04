<template>
  <section>
    <Hero></Hero>
  </section>
  <section>
    <Services></Services>
  </section>
  <section>
    <Search></Search>
  </section>
  <section>
    <Tower></Tower>
  </section>
  <section>
    <Stats></Stats>
  </section>
</template>

<script setup>
import Hero from './Hero.vue'
import Search from './Search.vue'
import Stats from './Stats.vue'
import Services from './Services.vue'
import Tower from './Tower.vue'
</script>
<script>
export default {
  data() {
    return {}
  }
}
</script>
