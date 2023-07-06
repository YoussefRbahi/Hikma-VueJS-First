<template>
  <div>
    <div class="py-12 bg-[url('/src/assets/media/bg.png')] bg-contain bg-no-repeat px-12 lg:px-24">
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <!-- Content -->
        <div class="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
          <h2 class="text-4xl font-bold mb-4">How do I start studying in Turkey?</h2>
          <p class="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis neque eget
            sapien aliquet, nec congue nulla pellentesque. Aenean vel libero nec ex tempus
            ullamcorper non id lectus.
          </p>
          <div class="gap-x-4">
            <a
              href="#"
              class="inline-block px-6 py-3 text-white bg-hikma-primary rounded-md hover:bg-hikma-secondary"
              >Get Started</a
            >
          </div>
        </div>
        <!-- Image -->
        <div class="lg:w-1/2">
          <img src="../assets/media/galata.png" alt="Hero Image" class="w-full rounded-lg" />
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
