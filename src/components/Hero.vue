<template>
  <div>
    <div
      class="py-12 bg-[url('/src/assets/media/bg.png')] bg-cover bg-center bg-no-repeat px-12 lg:px-24 text-center md:text-start"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <!-- Image -->
        <div class="lg:w-1/2">
          <img src="../assets/media/students.png" alt="Hero Image" class="w-full rounded-lg" />
        </div>

        <!-- Content -->
        <div class="lg:w-1/2 lg:me-12 mt-8 lg:mt-0">
          <h2 class="text-4xl font-montserratsb mb-4 text-hikma-secondary leading-relaxed">
            {{ $t('hero-tagline') }}
          </h2>
          <p class="text-gray-800 text-lg mb-8 font-bold box-border">
            ساعدنا أكثر من 1000 طالب مغربي بتحقيق أحلامهم للدراسة في تركيا
          </p>
          <div class="flex flex-col md:flex-row space-4 gap-4">
            <a
              href="#"
              class="inline-block text-lg px-6 py-3 text-white hover:bg-hikma-primary rounded-md bg-hikma-secondary"
              >{{ $t('hero-sign-up') }}</a
            >
            <a
              href="#"
              class="inline-block text-lg px-6 py-3 text-hikma-secondary bg-white border border-hikma-secondary rounded-md hover:text-white hover:bg-hikma-secondary"
              >{{ $t('hero-learn-more') }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
