<template>
  <div class="bg-hikma-secondary text-white">
    <div class="px-12 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20">
      <div
        class="grid grid-cols-2 md:grid-cols-4 md:flex-row justify-between justify-items-center items-center gap-8"
      >
        <div class="grid justify-center text-center gap-2 md:gap-4">
          <i class="fa fa-check-square text-6xl"></i>
          <h6 class="text-4xl md:text-5xl font-bold">
            <AnimatedNumber target="100" duration="1000"></AnimatedNumber>%
          </h6>
          <p class="text-sm md:text-base font-bold">نسبة القبول</p>
        </div>
        <div class="grid justify-center text-center gap-2 md:gap-4">
          <i class="fas fa-university text-6xl"></i>
          <h6 class="text-4xl md:text-5xl font-bold">
            <AnimatedNumber target="50" duration="2000"></AnimatedNumber>
          </h6>
          <p class="text-sm md:text-base font-bold">شراكة جامعية</p>
        </div>
        <div class="grid justify-center text-center gap-2 md:gap-4">
          <i class="fas fa-award text-6xl"></i>
          <h6 class="text-4xl md:text-5xl font-bold">
            <AnimatedNumber target="6" duration="3000"></AnimatedNumber>
          </h6>
          <p class="text-sm md:text-base font-bold">سنوات الخبرة</p>
        </div>
        <div class="grid justify-center text-center gap-2 md:gap-4">
          <i class="fas fa-user-graduate text-6xl"></i>
          <h6 class="text-4xl md:text-5xl font-bold">
            <AnimatedNumber target="1000" duration="4000"></AnimatedNumber>+
          </h6>
          <p class="text-sm md:text-base font-bold">قبول جامعي</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedNumber from './AnimatedNumber.vue'
</script>

<style lang="css" scoped>
i,
p,
h6 {
  color: white;
  text-shadow: 0.05rem 0.05rem rgb(239 54 55);
}
p {
}
</style>
