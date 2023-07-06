<template>
  <div>
    <div class="grid my-20 lg:mx-40 border bg-hikma-secondary rounded-3xl">
      <div class="grid lg:grid-flow-col my-12 mx-12 gap-4 p-4 bg-white rounded-3xl">
        <div class="flex items-center gap-4">
          <img
            v-if="uni.Image"
            :src="strapiLink + uni.Image.data.attributes.url"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square inline-block object-contain rounded"
          />
          <img
            v-else
            :src="strapiLink + '/uploads/large_image_not_found_scaled_1150x647_ada8db2920.png'"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square in line-block object-cover"
          />

          <h1 class="inline-block text-4xl">{{ uni.title }}</h1>
        </div>
        <div
          class="grid grid-cols-2 gap-4 outline outline-2 rounded-3xl p-4 px-12 bg-hikma-secondary text-center text-white font-mono font-bold"
        >
          <div>
            <p>Location</p>
            <p>{{ uni.City }}</p>
          </div>
          <div>
            <p>Established</p>
            <p>{{ uni.Established }}</p>
          </div>
          <div>
            <p>Type</p>
            <p>{{ uni.Type }}</p>
          </div>
          <div>
            <p>Admission</p>
            <p v-if="uni.Admission == 'Open'" class="text-green-400">
              {{ uni.Admission }}
            </p>
            <p v-if="uni.Admission == 'Closed'" class="text-red-400">
              {{ uni.Admission }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 text-white mx-12 gap-4 mb-12">
        <div class="text-justify">
          <h2 class="text-3xl mb-4">About</h2>
          <p class="pe-8">{{ uni.Description }}</p>
        </div>
        <div class="">
          <h2 class="text-3xl mb-4">Programs</h2>
          <div class="grid gap-4 p-8 bg-white rounded-3xl text-black text-lg text-justify">
            <div
              v-for="program in uni.Program"
              :key="program"
              class="grid grid-cols-4 gap-2 bg-hikma-secondary rounded-lg text-white py-2 px-4"
            >
              <h3 class="col-span-2">{{ program.Name }}</h3>
              <p class="col-span-1">{{ program.Language }}</p>
              <p class="col-span-1">{{ program.Type }}</p>
            </div>
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
      uni: {}
    }
  },
  methods: {
    fetchUniData() {
      const url = this.strapiLink + '/api/universities/' + this.$route.params.id + '?populate=*' // Replace with your actual API endpoint
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.uni = data.data.attributes // Set the fetched data to the "uni" property
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  },
  mounted() {
    this.fetchUniData()
  },
  created() {
    // const selectedUniversity = this.$store.getters.getUniversities.find(
    //   (university) => university.id == this.$route.params.id
    // )
    // this.uni = selectedUniversity
  }
}
</script>

<style lang="scss" scoped></style>
