<template>
  <div>
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // fetchData() {
    //   fetch('http://localhost:1337/api/universities?populate=*')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const universities = data.data
    //       const programs = []
    //       universities.forEach((university) => {
    //         const universityId = university.id
    //         const programsData = university.attributes.Program
    //         programsData.forEach((program) => {
    //           const programObject = {
    //             name: program.Name,
    //             degreeType: program.Type,
    //             language: program.Language,
    //             universityId: universityId
    //           }
    //           programs.push(programObject)
    //         })
    //       })
    //       this.$store.commit('setUniversities', universities)
    //       this.$store.commit('setPrograms', programs)
    //     })
    //     .catch((error) => console.error(error))
    // }
  }
  // created() {
  //   this.fetchData()
  // }
}
</script>

<style lang="css"></style>
