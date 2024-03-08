<template>
  <div class="bg-hikma-secondary pt-16 pb-8 lg:px-24">
    <div class="container mx-auto">
      <h2 class="text-3xl font-montserratsb text-center mb-12 text-white px-8">
        ابحث عن التخصص الذي تريده
      </h2>
      <div class="flex justify-center items-center">
        <div
          class="flex flex-col mb-4 rounded-md gap-x-2 gap-y-4 justify-center md:flex-row w-full px-12 md:gap-y-0 md:gap-x-4 p-5 md:rounded-md lg:rounded-md"
        >
          <select
            class="px-2 py-4 border border-gray-300 rounded-md w-full md:w-40 lg:w-52 text-center"
            v-model="selectedDegreeType"
            @change="onDegreeTypeChange"
          >
            <option value="" disabled selected>اختر الدرجة</option>
            <option v-for="degreeType in degreeTypes" :value="degreeType" :key="degreeType">
              {{ degreeType }}
            </option>
          </select>

          <select
            class="px-2 py-4 border border-gray-300 rounded-md w-full md:w-40 lg:w-64 text-center"
            v-model="selectedLanguage"
            :disabled="!selectedDegreeType"
            @change="onLanguageChange"
          >
            <option value="" disabled selected>اختر اللغة</option>
            <option
              v-for="language in filteredLanguages"
              :value="language.value"
              :key="language.value"
            >
              {{ language.label }}
            </option>
          </select>

          <select
            class="px-2 py-4 border border-gray-300 rounded-md w-full md:w-40 lg:w-64 text-center"
            v-model="selectedProgram"
            :disabled="!selectedLanguage"
            @change="onProgramChange"
          >
            <option value="" disabled selected>اختر التخصص</option>
            <option v-for="program in filteredPrograms" :value="program.value" :key="program.value">
              {{ program.label }}
            </option>
          </select>

          <button
            class="px-4 py-4 font-bold rounded-md disabled:bg-gray-400 w-full md:w-40 lg:w-48 text-center disabled:text-gray-600 disabled:cursor-not-allowed"
            :class="{
              'bg-hikma-primary text-white': selectedProgram,
              'bg-gray-300 text-gray-500': !selectedProgram
            }"
            @click="onSearch"
            :disabled="!selectedProgram"
          >
            ابحث
          </button>
        </div>
      </div>

      <div
        class="mx-auto px-32 lg:px-0 xl:px-28 text-center grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white"
      >
        <div
          v-for="university in universityIds.slice(0, maxResults)"
          :key="university"
          :set="(uni = getUniversityById(university))"
        >
          <RouterLink :to="'/universities/' + university">
            <div class="p-5 grid gap-4 h-full text-center justify-center">
              <img
                v-if="getUniversityById(university).attributes.Image.data"
                :src="uniImg(getUniversityById(university))"
                alt=""
                class="university-image rounded-full mx-auto aspect-square bg-white shadow-3xl"
              />
              <img
                v-else
                :src="strapiLink + '/uploads/large_image_not_found_scaled_1150x647_ada8db2920.png'"
                alt=""
                class="not-found-image rounded-md mx-auto aspect-square"
              />

              <h4 class="text-2xl font-bold">
                {{ getUniversityById(university).attributes.title }}
              </h4>

              <div
                v-if="getUniversityById(university).attributes.City"
                class="block w-52 text-lg rounded-md bg-white justify-self-center justify-items-center text-hikma-primary self-end py-1/2 font-mono"
              >
                <p>
                  <span class="">المدينة: </span
                  ><span class="font-bold">{{
                    getUniversityById(university).attributes.City
                  }}</span>
                </p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div v-if="universityIds.length > maxResults" class="flex justify-center">
        <RouterLink
          to="/universities/results"
          class="mt-2 mx-2 px-2 py-3 text-xl font-bold rounded-md w-full md:w-60 lg:w-48 text-center bg-hikma-primary text-white"
        >
          أظهر المزيد
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
      strapiLink: '',
      selectedDegreeType: '',
      selectedLanguage: '',
      selectedProgram: '',
      programs: [],
      universityIds: []
    }
  },
  props: {
    maxResults: {
      type: String,
      default: '1024'
    },
    loadAllUniversities: {
      type: Boolean,
      default: false
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
        label: `${language} (${languages[language]} تخصصات)`
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
        label: `${program} (${programs[program]} جامعات)`
      }))
    }
  },
  methods: {
    loadAllUniversitiesData() {
      fetch('/strapiData.json')
        .then((response) => response.json())
        .then((data) => {
          this.universityIds = data.data.map((university) => university.id)
        })
        .catch((error) => console.error(error))
    },
    uniImg(uni) {
      return this.strapiLink + uni.attributes.Image.data.attributes.url
    },
    getUniversityById(id) {
      return this.universities.find((university) => university.id == id)
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
    },
    fetchData() {
      fetch('/strapiData.json')
        .then((response) => response.json())
        .then((data) => {
          this.universities = data.data
          this.universities.forEach((university) => {
            const universityId = university.id
            const programsData = university.attributes.Program
            programsData.forEach((program) => {
              const programObject = {
                name: program.Name,
                degreeType: program.Type,
                language: program.Language,
                universityId: universityId
              }
              this.programs.push(programObject)
            })
          })
        })
    }
  },
  mounted() {
    this.fetchData()
    if (this.loadAllUniversities) {
      this.loadAllUniversitiesData()
    }
    if (!this.loadAllUniversities) {
      this.universityIds = this.$store.getters.getFilteredUniversities
    }
  },
  created() {},
  components: { RouterLink }
}
</script>

<style lang="css" scoped>
.university-image {
  width: 200px; /* Adjust the desired width */
  height: 200px;
  object-fit: contain;
}
.not-found-image {
  width: 200px; /* Adjust the desired width */
  height: 200px;
  object-fit: cover;
}
</style>
