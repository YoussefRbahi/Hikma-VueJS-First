<template>
  <div>
    <div class="grid my-20 lg:mx-40 border bg-hikma-secondary rounded-3xl">
      <div class="grid lg:grid-flow-col my-12 mx-12 gap-4 p-4 bg-white rounded-3xl">
        <div class="flex items-center gap-4">
          <img
            :src="strapiLink + uni.data.attributes.Image.data.attributes.url"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square inline-block"
          />
          <h1 class="inline-block text-4xl">{{ uni.data.attributes.title }}</h1>
        </div>
        <div
          class="grid grid-cols-2 gap-4 outline outline-2 rounded-3xl p-4 px-12 bg-hikma-secondary text-white font-mono font-bold"
        >
          <div>
            <p>Location</p>
            <p>{{ uni.data.attributes.City }}</p>
          </div>
          <div>
            <p>Established</p>
            <p>{{ uni.data.attributes.Established }}</p>
          </div>
          <div>
            <p>Type</p>
            <p>{{ uni.data.attributes.Type }}</p>
          </div>
          <div>
            <p>Admission</p>
            <p>{{ uni.data.attributes.Admission }}</p>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 text-white justify-between mx-12 gap-4 mb-12">
        <div class="text-justify">
          <h2 class="text-3xl mb-4">About</h2>
          <p class="pe-8">{{ uni.data.attributes.Description }}</p>
        </div>
        <div class="">
          <h2 class="text-3xl mb-4">Programs</h2>
          <div class="grid gap-4 p-8 bg-white rounded-3xl text-black text-lg text-justify">
            <div
              v-for="program in uni.data.attributes.Program"
              :key="program"
              class="grid grid-cols-4 gap-2 bg-hikma-secondary rounded-lg text-white py-2 px-4"
            >
              <h3 class="col-span-2">{{ program.Name }}</h3>
              <p class="col-span-1 text-center">{{ program.Language }}</p>
              <p class="col-span-1 text-center">{{ program.Type }}</p>
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
      uni: {
        data: {
          id: 3,
          attributes: {
            title: 'Karakoy University',
            Description:
              'Pretty cool university. Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young. Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
            createdAt: '2023-06-30T14:03:41.026Z',
            updatedAt: '2023-07-05T15:07:05.962Z',
            publishedAt: '2023-06-30T14:03:43.714Z',
            locale: 'en',
            City: 'Istanbul',
            Established: 1998,
            Type: 'Private',
            Admission: 'Open',
            Program: [
              {
                id: 4,
                __component: 'program.program',
                Name: 'Computer Science',
                Language: 'English',
                Type: 'Bachelor'
              },
              {
                id: 5,
                __component: 'program.program',
                Name: 'Gastronomy',
                Language: 'English',
                Type: 'Bachelor'
              },
              {
                id: 6,
                __component: 'program.program',
                Name: 'Medecine',
                Language: 'English',
                Type: 'Bachelor'
              },
              {
                id: 30,
                __component: 'program.program',
                Name: 'Geography',
                Language: 'English',
                Type: 'Master'
              },
              {
                id: 31,
                __component: 'program.program',
                Name: 'History',
                Language: 'Turkish',
                Type: 'Bachelor'
              },
              {
                id: 32,
                __component: 'program.program',
                Name: 'Sports Science',
                Language: 'English',
                Type: 'Associate'
              },
              {
                id: 33,
                __component: 'program.program',
                Name: 'Pharmacy',
                Language: 'English',
                Type: 'Bachelor'
              }
            ],
            Image: {
              data: {
                id: 5,
                attributes: {
                  name: 'Fenerbahçe_SK.png',
                  alternativeText: null,
                  caption: null,
                  width: 450,
                  height: 450,
                  formats: {
                    thumbnail: {
                      name: 'thumbnail_Fenerbahçe_SK.png',
                      hash: 'thumbnail_Fenerbahce_SK_edeb7ba083',
                      ext: '.png',
                      mime: 'image/png',
                      path: null,
                      width: 156,
                      height: 156,
                      size: 29.92,
                      url: '/uploads/thumbnail_Fenerbahce_SK_edeb7ba083.png'
                    }
                  },
                  hash: 'Fenerbahce_SK_edeb7ba083',
                  ext: '.png',
                  mime: 'image/png',
                  size: 23.98,
                  url: '/uploads/Fenerbahce_SK_edeb7ba083.png',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2023-07-04T07:11:05.555Z',
                  updatedAt: '2023-07-04T16:45:02.136Z'
                }
              }
            },
            localizations: {
              data: []
            }
          }
        },
        meta: {}
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
