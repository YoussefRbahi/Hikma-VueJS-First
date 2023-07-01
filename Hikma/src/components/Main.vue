<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <!-- Image -->
      <div class="lg:w-1/2">
        <img src="../assets/media/students.png" alt="Hero Image" class="w-full rounded-lg" />
      </div>

      <!-- Content -->
      <div class="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
        <h2 class="text-4xl font-bold mb-4">Welcome to our Agency</h2>
        <p class="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis neque eget
          sapien aliquet, nec congue nulla pellentesque. Aenean vel libero nec ex tempus ullamcorper
          non id lectus.
        </p>
        <div class="space-x-4">
          <a
            href="#"
            class="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >Get Started</a
          >
          <a
            href="#"
            class="inline-block px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-md hover:text-white hover:bg-blue-600"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </section>
  <section class="py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="text-center">
            <i class="fas fa-cogs text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl font-bold text-center mt-4">Service 1</h3>
          <p class="text-gray-700 mt-2">Description of Service 1 goes here.</p>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="text-center">
            <i class="fas fa-users text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl font-bold text-center mt-4">Service 2</h3>
          <p class="text-gray-700 mt-2">Description of Service 2 goes here.</p>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="text-center">
            <i class="fas fa-book text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl font-bold text-center mt-4">Service 3</h3>
          <p class="text-gray-700 mt-2">Description of Service 3 goes here.</p>
        </div>

        <!-- Service Card 4 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="text-center">
            <i class="fas fa-globe text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl font-bold text-center mt-4">Service 4</h3>
          <p class="text-gray-700 mt-2">Description of Service 4 goes here.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="flex justify-center items-center">
    <div class="flex space-x-4">
      <select
        class="px-2 py-1 border border-gray-300 rounded"
        v-model="selectedDegreeType"
        @change="onDegreeTypeChange"
      >
        <option value="" disabled selected>Select Degree Type</option>
        <option v-for="degreeType in degreeTypes" :value="degreeType" :key="degreeType">
          {{ degreeType }}
        </option>
      </select>

      <select
        class="px-2 py-1 border border-gray-300 rounded"
        v-model="selectedLanguage"
        :disabled="!selectedDegreeType"
        @change="onLanguageChange"
      >
        <option value="" disabled selected>Select Language</option>
        <option v-for="language in filteredLanguages" :value="language.value" :key="language.value">
          {{ language.label }}
        </option>
      </select>

      <select
        class="px-2 py-1 border border-gray-300 rounded"
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
        class="px-4 py-2 rounded disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
        :class="{
          'bg-blue-500 text-white': selectedProgram,
          'bg-gray-300 text-gray-500': !selectedProgram
        }"
        @click="onSearch"
        :disabled="!selectedProgram"
      >
        Search
      </button>
    </div>
  </section>

  <section>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid row-gap-8 sm:grid-cols-3">
        <div class="text-center">
          <h6 class="text-5xl font-bold text-deep-purple-accent-400">99%</h6>
          <p class="font-bold">Acceptance rate</p>
        </div>
        <div class="text-center">
          <h6 class="text-5xl font-bold text-deep-purple-accent-400">1500+</h6>
          <p class="font-bold">Admissions</p>
        </div>
        <div class="text-center">
          <h6 class="text-5xl font-bold text-deep-purple-accent-400">10+</h6>
          <p class="font-bold">Years of Experience</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedDegreeType: '',
      selectedLanguage: '',
      selectedProgram: '',
      programs: [],
      universities: []
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
        label: `${program} (${programs[program]} programs)`
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
      const universityIds = this.getUniversityIds(
        this.selectedDegreeType,
        this.selectedLanguage,
        this.selectedProgram
      )
      console.log(universityIds)
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
            const universityName = university.attributes.title
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
