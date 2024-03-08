<template>
  <div class="absolute top-0 h-full">
    <div class="flex h-full">
      <div class="sticky bottom-0 pb-8 ps-8 mt-auto">
        <button
          class="px-6 py-5 rounded-full bg-green-500 hover:bg-white text-white hover:text-green-500 shadow-2xl text-6xl z-10 opacity-50 hover:opacity-100"
          @click="openWhatsApp"
        >
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
    <!-- <button
      class="fixed bottom-8 start-12 px-6 py-5 rounded-full bg-green-500 hover:bg-white text-white hover:text-green-500 shadow-2xl text-6xl z-10 opacity-50 hover:opacity-100"
      @click="openWhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
    </button> -->
  </div>
</template>

<script>
export default {
  methods: {
    openWhatsApp() {
      window.open('https://wa.me/3333', '_blank')
    }
  }
}
</script>
