<template>
  <div class="py-12 md:px-4 lg:px-60 text-center grid gap-8">
    <h2 class="text-4xl font-montserratsb text-hikma-secondary">فريقنا</h2>
    <!-- <div class="grid md:grid-flow-col gap-y-8 md:grid-cols-3 mt-20 text-2xl justify-around"> -->
    <AnimatedCarousel total="5" shown="3">
      <div class="flex flex-col items-center text-center">
        <img
          src="../assets/media/mohamed.png"
          alt=""
          class="w-28 md:w-40 h-28 md:h-40 object-cover aspect-square rounded-full shadow-2xl bg-gray-200 border mb-4"
        />
        <span class="text-gray-800">محمد مليم</span>
        <p class="text-lg text-hikma-secondary">المدير التنفيذي</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="../assets/media/anass.png"
          alt=""
          class="w-28 md:w-40 h-28 md:h-40 object-cover aspect-square rounded-full shadow-2xl bg-gray-200 border mb-4"
        />
        <span class="text-gray-800">أنس ابن كيران</span>
        <p class="text-lg text-hikma-secondary">مسوق رقمي</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="../assets/media/chaimae.png"
          alt=""
          class="w-28 md:w-40 h-28 md:h-40 object-cover aspect-square rounded-full shadow-2xl bg-gray-200 border mb-4"
        />
        <span class="text-gray-800">شيماء دراز</span>
        <p class="text-lg text-hikma-secondary">مستشارة تعليمية</p>
      </div>

      <div class="flex flex-col items-center text-center">
        <img
          src="../assets/media/youssef.png"
          alt=""
          class="w-28 md:w-40 h-28 md:h-40 object-cover aspect-square rounded-full shadow-2xl bg-gray-200 border mb-4"
        />
        <span class="text-gray-800">يوسف الرباحي</span>
        <p class="text-lg text-hikma-secondary">مطور ويب</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="../assets/media/loubna.png"
          alt=""
          class="w-28 md:w-40 h-28 md:h-40 object-cover aspect-square rounded-full shadow-2xl bg-gray-200 border mb-4"
        />
        <span class="text-gray-800">لبنى العلوي </span>
        <p class="text-lg text-hikma-secondary">موجهة تعليمية</p>
      </div>
    </AnimatedCarousel>
    <!-- </div> -->
    <div v-if="showMore">
      <RouterLink
        to="/about-us"
        class="inline-block text-lg px-6 py-3 text-white hover:bg-hikma-primary rounded-md bg-hikma-secondary"
        >تعرف على فريقنا</RouterLink
      >
    </div>
  </div>
</template>

<script>
import AnimatedCarousel from './AnimatedCarousel.vue'

export default {
  setup() {
    return {}
  },
  props: {
    showMore: {
      type: Boolean,
      default: false
    }
  },
  components: { AnimatedCarousel }
}
</script>

<style lang="scss" scoped></style>
