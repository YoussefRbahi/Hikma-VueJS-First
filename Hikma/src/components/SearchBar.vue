<template>
  <div class="bg-hikma-secondary py-10 lg:px-24">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">Find Your University</h2>
      <div class="flex justify-center items-center">
        <div
          class="flex flex-col mb-4 rounded-lg gap-x-2 gap-y-4 md:flex-row md:gap-y-0 md:gap-x-4 p-5 md:rounded-full lg:rounded-full"
        >
          <select
            class="px-2 py-1 text-lg border border-gray-300 rounded-full w-full md:w-40 lg:w-52 md:text-center"
            v-model="selectedDegreeType"
            @change="onDegreeTypeChange"
          >
            <option value="" disabled selected>Select Degree Type</option>
            <option v-for="degreeType in degreeTypes" :value="degreeType" :key="degreeType">
              {{ degreeType }}
            </option>
          </select>

          <select
            class="px-2 py-1 text-lg border border-gray-300 rounded-full w-full md:w-40 lg:w-64 md:text-center"
            v-model="selectedLanguage"
            :disabled="!selectedDegreeType"
            @change="onLanguageChange"
          >
            <option value="" disabled selected>Select Language</option>
            <option
              v-for="language in filteredLanguages"
              :value="language.value"
              :key="language.value"
            >
              {{ language.label }}
            </option>
          </select>

          <select
            class="px-2 py-1 text-lg border border-gray-300 rounded-full w-full md:w-40 lg:w-64 md:text-center"
            v-model="selectedProgram"
            :disabled="!selectedLanguage"
            @change="onProgramChange"
          >
            <option value="" disabled selected>Select Program</option>
            <option v-for="program in filteredPrograms" :value="program.value" :key="program.value">
              {{ program.label }}
            </option>
          </select>

          <button
            class="px-4 py-2 text-xl font-bold rounded-full disabled:bg-gray-400 w-full md:w-40 lg:w-48 text-center disabled:text-gray-600 disabled:cursor-not-allowed"
            :class="{
              'bg-hikma-primary text-white': selectedProgram,
              'bg-gray-300 text-gray-500': !selectedProgram
            }"
            @click="onSearch"
            :disabled="!selectedProgram"
          >
            Search
          </button>
        </div>
      </div>
      <div
        class="mx-auto text-center grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white"
      >
        <div
          v-for="university in universityIds.slice(0, maxResults)"
          :key="university"
          :set="(uni = getUniversityById(university))"
        >
          <a :href="'/universities/' + university">
            <div class="p-5 grid gap-4 h-full text-center justify-center">
              <img
                v-if="uni.attributes.Image.data"
                :src="uniImg(uni)"
                alt=""
                class="university-image rounded-3xl mx-auto aspect-square"
              />
              <img
                v-else
                :src="strapiLink + '/uploads/large_image_not_found_scaled_1150x647_ada8db2920.png'"
                alt=""
                class="not-found-image rounded-3xl mx-auto aspect-square"
              />

              <h4 class="text-2xl font-bold">{{ uni.attributes.title }}</h4>

              <div
                v-if="uni.attributes.City"
                class="block w-52 text-lg rounded-xl bg-white justify-self-center justify-items-center text-hikma-primary self-end py-1/2 font-mono"
              >
                <p>
                  <span class="">City: </span
                  ><span class="font-bold">{{ uni.attributes.City }}</span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div v-if="universityIds.length > maxResults" class="flex justify-center">
        <RouterLink
          to="/universities"
          class="mt-2 mx-2 px-2 py-3 text-xl font-bold rounded-xl w-full w-72 md:w-60 lg:w-48 text-center bg-hikma-primary text-white"
        >
          Show All
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
<script>
export default {
  data() {
    return {
      strapiLink: 'http://localhost:1337',
      selectedDegreeType: '',
      selectedLanguage: '',
      selectedProgram: '',
      programs: [],
      universityIds: []
    }
  },
  props: {
    maxResults: {
      type: Number,
      default: 1024
    }
  },
  computed: {
    degreeTypes() {
      const degreeTypesSet = new Set()
      this.programs.forEach((program) => {
        degreeTypesSet.add(program.degreeType)
      })
      return Array.from(degreeTypesSet)
    },
    filteredLanguages() {
      const languages = {}
      this.programs
        .filter((program) => program.degreeType === this.selectedDegreeType)
        .forEach((program) => {
          if (!languages[program.language]) {
            languages[program.language] = 1
          } else {
            languages[program.language]++
          }
        })
      return Object.keys(languages).map((language) => ({
        value: language,
        label: `${language} (${languages[language]} programs)`
      }))
    },
    filteredPrograms() {
      const programs = {}
      this.programs
        .filter(
          (program) =>
            program.degreeType === this.selectedDegreeType &&
            program.language === this.selectedLanguage
        )
        .forEach((program) => {
          if (!programs[program.name]) {
            programs[program.name] = 1
          } else {
            programs[program.name]++
          }
        })
      return Object.keys(programs).map((program) => ({
        value: program,
        label: `${program} (${programs[program]} universities)`
      }))
    }
  },
  methods: {
    uniImg(uni) {
      return this.strapiLink + uni.attributes.Image.data.attributes.url
    },
    getUniversityById(id) {
      return this.universities.find((university) => university.id === id)
    },
    onDegreeTypeChange() {
      this.selectedLanguage = ''
      this.selectedProgram = ''
    },
    onLanguageChange() {
      this.selectedProgram = ''
    },
    onProgramChange() {
      // Do something when program changes
    },
    onSearch() {
      // Perform search based on selected options
      this.universityIds = this.getUniversityIds(
        this.selectedDegreeType,
        this.selectedLanguage,
        this.selectedProgram
      )
      this.$store.commit('setFilteredUniversities', this.universityIds)
      console.log(this.$store.getters.getFilteredUniversities)
      console.log(this.$store.getters.getPrograms)
    },
    getUniversityIds(selectedDegreeType, selectedLanguage, selectedProgram) {
      const filteredPrograms = this.programs.filter(
        (program) =>
          program.degreeType === selectedDegreeType &&
          program.language === selectedLanguage &&
          program.name === selectedProgram
      )
      return filteredPrograms.map((program) => program.universityId)
    }
    // fetchData() {
    //   fetch('http://localhost:1337/api/universities?populate=*')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.universities = data.data
    //       this.universities.forEach((university) => {
    //         const universityId = university.id
    //         const programsData = university.attributes.Program
    //         programsData.forEach((program) => {
    //           const programObject = {
    //             name: program.Name,
    //             degreeType: program.Type,
    //             language: program.Language,
    //             universityId: universityId
    //           }
    //           this.programs.push(programObject)
    //         })
    //       })
    //     })
    //     .catch((error) => console.error(error))
    // }
  },
  mounted() {
    // this.fetchData()
    this.universityIds = this.$store.getters.getFilteredUniversities
    this.programs = this.$store.getters.getPrograms
    this.universities = this.$store.getters.getUniversities
  },
  created() {
    console.log('haha' + this.$store.getters.getUniversities)
  },
  components: { RouterLink }
}
</script>

<style lang="css" scoped>
.university-image {
  width: 200px; /* Adjust the desired width */
  height: 200px; /* Adjust the desired height */
  object-fit: contain; /* Maintain aspect ratio and cover the entire container */
}
.not-found-image {
  width: 200px; /* Adjust the desired width */
  height: 200px; /* Adjust the desired height */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
</style>
