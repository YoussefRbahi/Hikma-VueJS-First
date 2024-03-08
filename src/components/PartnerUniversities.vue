<template>
  <div class="gap-8 pt-6 pb-8 text-center bg-white">
    <!-- <h2 class="flex text-4xl md:text-4xl mb-4 justify-center py-4 md:py-0 md:my-auto">شركاؤنا</h2> -->
    <!-- <div class="grid md:grid-flow-col gap-y-8 md:grid-cols-3 mt-20 text-2xl justify-around"> -->
    <AnimatedCarousel
      v-if="smallScreen"
      total="13"
      shown="3"
      interval="2500"
      class="unis-carousel py-4"
    >
      <div v-for="item in 13" :key="item" class="flex justify-center small-img">
        <img :src="'./unis/' + item + '.png'" alt="" class="h-24" />
      </div>
    </AnimatedCarousel>
    <!-- <AnimatedCarousel
      v-else-if="smallerScreen"
      total="13"
      shown="3"
      interval="2500"
      class="unis-carousel py-4"
    >
      <div v-for="item in 13" :key="item" class="flex justify-center small-img">
        <img :src="'./unis/' + item + '.png'" alt="" class="w-auto" />
      </div>
    </AnimatedCarousel> -->
    <AnimatedCarousel v-else total="13" shown="5" interval="2500" class="unis-carousel py-4">
      <div v-for="item in 13" :key="item" class="flex justify-center">
        <img :src="'./unis/' + item + '.png'" alt="" class="h-28 md:h-32" />
      </div>
    </AnimatedCarousel>
    <!-- </div> -->
  </div>
</template>

<script>
import AnimatedCarousel from './AnimatedCarousel.vue'

export default {
  setup() {
    return {}
  },
  mounted() {},
  components: { AnimatedCarousel },
  computed: {
    smallScreen() {
      return window.innerWidth < 580
    },
    smallerScreen() {
      return window.innerWidth < 400
    }
  }
}
</script>

<style lang="css" scoped>
/* @media (width <= 400px) {
  .small-img {
    height: 5rem;
  }
}
@media (width > 400px) {
  .small-img {
    height: 5rem;
  }
}
@media (width > 460px) {
  .small-img {
    height: 6rem;
  }
}
@media (width > 460px) {
  .small-img {
    height: 6rem;
  }
} */
.unis-carousel {
  /* box-shadow: inset 0.5rem 0.5rem 1rem 0rem grey; */
  background-color: white;
}

/* desktop contained md:flex md:py-10 md:px-4 lg:px-32 */
</style>
