<template>
  <div>
    <div class="grid md:mx-40">
      <div class="grid md:grid-flow-col my-12 mx-12 gap-4 justify-items-between">
        <div class="flex items-center gap-4">
          <img
            :src="strapiLink + uni.data.attributes.Image.data.attributes.url"
            alt=""
            class="w-24 h-24 md:w-36 md:h-36 aspect-square inline-block"
          />
          <h1 class="inline-block text-4xl">{{ uni.data.attributes.title }}</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1>Location</h1>
            <p>{{ uni.data.attributes.City }}</p>
          </div>
          <div>
            <h1>Established</h1>
            <p>{{ uni.data.attributes.Established }}</p>
          </div>
          <div>
            <h1>Type</h1>
            <p>{{ uni.data.attributes.Type }}</p>
          </div>
          <div>
            <h1>Admission</h1>
            <p>{{ uni.data.attributes.Admission }}</p>
          </div>
        </div>
      </div>
      <div class="m-12 text-justify">
        <p>{{ uni.data.attributes.Description }}</p>
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
              'Bold**JOIJEF; oiejqwf;o iejf; iqwejf;o iqejf lorem impsum, What is Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some?There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            createdAt: '2023-06-30T14:03:41.026Z',
            updatedAt: '2023-07-04T07:58:13.054Z',
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
                  updatedAt: '2023-07-04T07:11:05.555Z'
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
