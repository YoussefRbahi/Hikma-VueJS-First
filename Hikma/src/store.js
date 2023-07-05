import { createStore } from 'vuex'

export default createStore({
  state: {
    filteredUniversities: [],
    universities: [
      {
        id: 1,
        attributes: {
          title: 'Sefakoy University',
          Description: 'Not too bad',
          createdAt: '2023-06-29T20:57:51.041Z',
          updatedAt: '2023-07-04T08:27:20.672Z',
          publishedAt: '2023-06-29T22:06:05.791Z',
          locale: 'en',
          City: 'Istanbul',
          Established: null,
          Type: null,
          Admission: null,
          Program: [
            {
              id: 7,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'English',
              Type: 'Bachelor'
            }
          ],
          Image: {
            data: {
              id: 2,
              attributes: {
                name: 'Logo.png',
                alternativeText: null,
                caption: null,
                width: 1654,
                height: 1654,
                formats: {
                  thumbnail: {
                    name: 'thumbnail_Logo.png',
                    hash: 'thumbnail_Logo_76d63292df',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 156,
                    height: 156,
                    size: 4.67,
                    url: '/uploads/thumbnail_Logo_76d63292df.png'
                  },
                  large: {
                    name: 'large_Logo.png',
                    hash: 'large_Logo_76d63292df',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 1000,
                    height: 1000,
                    size: 45.65,
                    url: '/uploads/large_Logo_76d63292df.png'
                  },
                  medium: {
                    name: 'medium_Logo.png',
                    hash: 'medium_Logo_76d63292df',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 750,
                    height: 750,
                    size: 31.3,
                    url: '/uploads/medium_Logo_76d63292df.png'
                  },
                  small: {
                    name: 'small_Logo.png',
                    hash: 'small_Logo_76d63292df',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 500,
                    height: 500,
                    size: 18.37,
                    url: '/uploads/small_Logo_76d63292df.png'
                  }
                },
                hash: 'Logo_76d63292df',
                ext: '.png',
                mime: 'image/png',
                size: 14.53,
                url: '/uploads/Logo_76d63292df.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-07-03T19:48:00.507Z',
                updatedAt: '2023-07-03T22:39:35.067Z'
              }
            }
          },
          localizations: {
            data: []
          }
        }
      },
      {
        id: 2,
        attributes: {
          title: 'Yenibosna University',
          Description:
            'OJ :OEIJF: OWEJF:O WIEJF:O IWEJF:O j \nq oe;jfqw\n fo;J \n kf;o qewjf\n  qweo;f qw\n  ef qwef\n   qwj\n   ef ',
          createdAt: '2023-06-29T23:00:24.703Z',
          updatedAt: '2023-07-04T16:44:36.354Z',
          publishedAt: '2023-06-29T23:00:52.988Z',
          locale: 'en',
          City: 'Istanbul',
          Established: null,
          Type: null,
          Admission: null,
          Program: [
            {
              id: 1,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'Turkish',
              Type: 'Bachelor'
            },
            {
              id: 2,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'English',
              Type: 'Master'
            },
            {
              id: 3,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'Turkish',
              Type: 'Master'
            }
          ],
          Image: {
            data: null
          },
          localizations: {
            data: []
          }
        }
      },
      {
        id: 3,
        attributes: {
          title: 'Karakoy University',
          Description: 'Pretty cool university.',
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
      {
        id: 4,
        attributes: {
          title: 'Metrobus International University',
          Description: 'Nice university',
          createdAt: '2023-07-03T22:39:38.957Z',
          updatedAt: '2023-07-04T17:15:12.173Z',
          publishedAt: '2023-07-03T22:39:55.844Z',
          locale: 'en',
          City: 'Ankara',
          Established: null,
          Type: null,
          Admission: null,
          Program: [
            {
              id: 8,
              __component: 'program.program',
              Name: 'Computer Science',
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
      {
        id: 13,
        attributes: {
          title: 'Sabanci University',
          Description: null,
          createdAt: '2023-07-04T15:00:13.966Z',
          updatedAt: '2023-07-04T15:08:10.365Z',
          publishedAt: '2023-07-04T15:01:04.913Z',
          locale: 'en',
          City: 'Istanbul',
          Established: 1999,
          Type: 'Private',
          Admission: 'Open',
          Program: [
            {
              id: 25,
              __component: 'program.program',
              Name: 'Business Administration',
              Language: 'English',
              Type: 'Master'
            },
            {
              id: 26,
              __component: 'program.program',
              Name: 'Digital Marketing',
              Language: 'English',
              Type: 'Master'
            }
          ],
          Image: {
            data: {
              id: 7,
              attributes: {
                name: 'Sabancı_University_logo.svg.png',
                alternativeText: null,
                caption: null,
                width: 1024,
                height: 442,
                formats: {
                  thumbnail: {
                    name: 'thumbnail_Sabancı_University_logo.svg.png',
                    hash: 'thumbnail_Sabanci_University_logo_svg_3ce77d1931',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 245,
                    height: 106,
                    size: 13.94,
                    url: '/uploads/thumbnail_Sabanci_University_logo_svg_3ce77d1931.png'
                  },
                  medium: {
                    name: 'medium_Sabancı_University_logo.svg.png',
                    hash: 'medium_Sabanci_University_logo_svg_3ce77d1931',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 750,
                    height: 324,
                    size: 52.96,
                    url: '/uploads/medium_Sabanci_University_logo_svg_3ce77d1931.png'
                  },
                  small: {
                    name: 'small_Sabancı_University_logo.svg.png',
                    hash: 'small_Sabanci_University_logo_svg_3ce77d1931',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 500,
                    height: 216,
                    size: 31.91,
                    url: '/uploads/small_Sabanci_University_logo_svg_3ce77d1931.png'
                  },
                  large: {
                    name: 'large_Sabancı_University_logo.svg.png',
                    hash: 'large_Sabanci_University_logo_svg_3ce77d1931',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 1000,
                    height: 432,
                    size: 81.26,
                    url: '/uploads/large_Sabanci_University_logo_svg_3ce77d1931.png'
                  }
                },
                hash: 'Sabanci_University_logo_svg_3ce77d1931',
                ext: '.png',
                mime: 'image/png',
                size: 11.59,
                url: '/uploads/Sabanci_University_logo_svg_3ce77d1931.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-07-04T15:08:06.399Z',
                updatedAt: '2023-07-04T15:08:06.399Z'
              }
            }
          },
          localizations: {
            data: []
          }
        }
      },
      {
        id: 14,
        attributes: {
          title: 'Tuzla University',
          Description: null,
          createdAt: '2023-07-05T01:22:44.506Z',
          updatedAt: '2023-07-05T01:22:48.221Z',
          publishedAt: '2023-07-05T01:22:48.211Z',
          locale: 'en',
          City: 'Istanbul',
          Established: null,
          Type: null,
          Admission: 'Open',
          Program: [
            {
              id: 27,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'English',
              Type: 'Bachelor'
            }
          ],
          Image: {
            data: null
          },
          localizations: {
            data: []
          }
        }
      },
      {
        id: 15,
        attributes: {
          title: 'Istanbul Technical University',
          Description: null,
          createdAt: '2023-07-05T01:23:33.519Z',
          updatedAt: '2023-07-05T10:35:25.802Z',
          publishedAt: '2023-07-05T01:23:36.608Z',
          locale: 'en',
          City: 'Istanbul',
          Established: null,
          Type: null,
          Admission: 'Open',
          Program: [
            {
              id: 28,
              __component: 'program.program',
              Name: 'Computer Science',
              Language: 'English',
              Type: 'Bachelor'
            },
            {
              id: 29,
              __component: 'program.program',
              Name: 'Zoology',
              Language: 'English',
              Type: 'Master'
            }
          ],
          Image: {
            data: null
          },
          localizations: {
            data: []
          }
        }
      }
    ]
  },
  mutations: {
    setUniversities(state, universities) {
      state.universities = universities
    },
    setFilteredUniversities(state, universities) {
      state.filteredUniversities = universities
    }
  },
  actions: {},
  getters: {
    getUniversities(state) {
      return state.universities
    },
    getFilteredUniversities(state) {
      return state.filteredUniversities
    }
  }
})
