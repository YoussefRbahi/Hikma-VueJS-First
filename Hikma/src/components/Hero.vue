<template>
  <div>
    <div
      class="py-12 bg-[url('/src/assets/media/bg.png')] bg-cover bg-center bg-no-repeat px-12 lg:px-24"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <!-- Image -->
        <div class="lg:w-1/2">
          <img src="../assets/media/students.png" alt="Hero Image" class="w-full rounded-lg" />
        </div>

        <!-- Content -->
        <div class="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
          <h2 class="text-4xl font-extrabold mb-4 text-hikma-secondary font-mono">
            The #1 Website for Studying in Turkey
          </h2>
          <p class="text-gray-700 text-lg mb-8 font-mono font-bold box-border">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis neque eget
            sapien aliquet, nec congue nulla pellentesque. Aenean vel libero nec ex tempus
            ullamcorper non id lectus.
          </p>
          <div class="flex flex-col md:flex-row space-4 gap-4">
            <a
              href="#"
              class="inline-block text-lg px-6 py-3 text-white bg-hikma-primary rounded-md hover:bg-hikma-secondary"
              >Get Started</a
            >
            <a
              href="#"
              class="inline-block text-lg px-6 py-3 text-hikma-secondary bg-white border border-hikma-secondary rounded-md hover:text-white hover:bg-hikma-secondary"
              >Learn More</a
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
