<template>
  <div class="bg-hikma-secondary mt-8 py-10 lg:px-24">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">Find Your University</h2>
      <div class="flex justify-center items-center">
        <div
          class="flex flex-col mb-4 rounded-lg gap-x-2 gap-y-4 md:flex-row md:space-y-0 md:space-x-4 p-5 md:rounded-full lg:rounded-full"
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
          v-for="university in universityIds"
          :key="university"
          :set="(uni = universities[university - 1].attributes)"
          class="p-5 grid gap-4 h-full text-center justify-center"
        >
          <img
            v-if="uni.Image.data"
            :src="strapiLink + uni.Image.data.attributes.formats.large.url"
            alt=""
            class="university-image rounded-3xl mx-auto aspect-square"
          />
          <img
            v-else
            :src="strapiLink + '/uploads/large_image_not_found_scaled_1150x647_ada8db2920.png'"
            alt=""
            class="university-image rounded-3xl mx-auto aspect-square"
          />

          <h4 class="text-2xl font-bold">{{ uni.title }}</h4>

          <div class="text-lg rounded bg-white text-hikma-primary self-end max-w-sm py-1">
            <span class="">City: </span><span class="font-bold">{{ uni.City }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strapiLink: 'http://localhost:1337',
      selectedDegreeType: '',
      selectedLanguage: '',
      selectedProgram: '',
      programs: [],
      universities: [],
      universityIds: []
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
      console.log(this.universityIds)
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
      fetch('http://localhost:1337/api/universities?populate=*')
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
        .catch((error) => console.error(error))
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="css" scoped>
.university-image {
  width: 200px; /* Adjust the desired width */
  height: 200px; /* Adjust the desired height */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
</style>
