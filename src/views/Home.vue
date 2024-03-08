<template>
  <section>
    <Hero></Hero>
  </section>

  <section class="relative top-0.5 fade-in">
    <Services id="services" class=""></Services>
  </section>
  <section class="translate-y-0.5 fade-in">
    <PartnerUniversities></PartnerUniversities>
  </section>
  <section class="m-0 box-border fade-in">
    <SearchBar maxResults="4"></SearchBar>
  </section>

  <section class="fade-in">
    <Tower></Tower>
  </section>
  <section class="fade-in">
    <StatsBar></StatsBar>
  </section>
  <section class="fade-in">
    <TeamMembers id="about" showMore="1"></TeamMembers>
  </section>
  <div class="bg-hikma-secondary">
    <section class="fade-in">
      <ContactForm id="contact"></ContactForm>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import StatsBar from '../components/StatsBar.vue'
import Services from '../components/Services.vue'
import Tower from '../components/Tower.vue'
import ContactForm from '../components/ContactForm.vue'
import TeamMembers from '../components/TeamMembers.vue'
import PartnerUniversities from '../components/PartnerUniversities.vue'
//
</script>
<script>
export default {
  data() {
    return {
      observer: null
    }
  },
  created() {
    this.$store.commit('setFilteredUniversities', [])
  },
  mounted() {
    // Create an observer instance
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.3 // Adjust threshold as needed
    })

    // Observe sections with the "fade-in" class
    const sections = document.querySelectorAll('.fade-in')
    sections.forEach((section) => this.observer.observe(section))
  },

  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('active')) {
          entry.target.classList.add('active')
        }
      })
    }
  }
}
</script>
<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 1s, transform 0.5s;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
