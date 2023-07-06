<template>
  <section>
    <Hero></Hero>
  </section>
  <section class="mb-12">
    <Services></Services>
  </section>
  <section>
    <SearchBar maxResults="4"></SearchBar>
  </section>
  <section>
    <Tower></Tower>
  </section>
  <section>
    <Stats></Stats>
  </section>
  <section>
    <ContactForm></ContactForm>
  </section>
</template>

<script setup>
import Hero from './Hero.vue'
import SearchBar from './SearchBar.vue'
import Stats from './Stats.vue'
import Services from './Services.vue'
import Tower from './Tower.vue'
import ContactForm from './ContactForm.vue'
</script>
<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.commit('setFilteredUniversities', [])
  }
}
</script>
