<template>
  <div>
    <div class="grid my-20 lg:mx-40 border bg-hikma-secondary rounded-md">
      <div class="grid lg:grid-flow-col my-12 mx-2 md:mx-12 gap-4 p-4 bg-white rounded-md">
        <div class="flex items-center gap-4">
          <img
            v-if="uni.Image?.data"
            :src="strapiLink + uni.Image.data.attributes.url"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square inline-block object-contain rounded-md"
          />
          <img
            v-else
            :src="strapiLink + '/uploads/large_image_not_found_scaled_1150x647_ada8db2920.png'"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square in line-block object-cover"
          />

          <h1 class="inline-block text-3xl md:text-4xl font-montserratsb">{{ uni.title }}</h1>
        </div>
        <div
          class="grid grid-cols-2 gap-6 outline outline-2 rounded-md p-4 bg-hikma-secondary text-center text-white"
        >
          <div>
            <p>المدينة</p>
            <p>{{ uni.City }}</p>
          </div>
          <div>
            <p>تأسست</p>
            <p>{{ uni.Established }}</p>
          </div>
          <div>
            <p>جامعة</p>
            <p>{{ uni.Type }}</p>
          </div>
          <div>
            <p>التسجيل</p>
            <p v-if="uni.Admission == false" class="text-red-400">مغلق</p>
            <p v-else class="text-green-400">مفتوح</p>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 text-white mx-2 md:mx-12 gap-4 mb-12">
        <div class="text-justify">
          <h2 class="text-3xl mb-4 ms-4">حول الجامعة</h2>
          <p class="px-2 md:pe-8">{{ uni.Description }}</p>
        </div>
        <div class="">
          <h2 class="text-3xl mb-4 ms-4">التخصصات</h2>
          <div class="grid gap-4 p-4 md:p-8 bg-white rounded-md text-black md:text-lg text-justify">
            <div
              v-for="program in uni.Program"
              :key="program"
              class="grid grid-cols-4 lg:grid-cols-5 gap-2 bg-hikma-secondary rounded-md text-white py-2 px-4"
            >
              <h3 class="col-span-1 lg:col-span-2">{{ program.Name }}</h3>
              <p class="col-span-1">{{ program.Language }}</p>
              <p class="col-span-1">{{ program.Type }}</p>
              <p class="col-span-1">{{ program.Price }}</p>
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
      strapiLink: '',
      uni: {},
      universities: []
    }
  },
  methods: {
    getUniversityById(id) {
      console.log(this.universities)
      return this.universities.find((university) => university.id == id)
    },
    async fetchUniData() {
      const url = this.strapiLink + '/strapiData.json'
      await fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.universities = data.data
          this.uni = this.universities.find((uni) => uni.id == this.$route.params.id).attributes
          console.log(this.uni)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  },
  computed: {
    specificUni() {
      return this.getUniversityById(this.$route.params.id)
    }
  },
  mounted() {
    this.fetchUniData()
  }
}
</script>

<style lang="scss" scoped></style>
