<template>
  <div class="bg-hikma-secondary">
    <div class="xl:container mx-auto text-white py-8 md:py-12 px-12 lg:px-40 text-center">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-20 justify-between">
        <div class="grid align-middle justify-between gap-2">
          <!-- <img
          src="../assets/media/cr7.png"
          alt=""
          class="t-0 w-1/2 lg:w-6/12 xl:w-2/5 mx-auto rounded-full shadow-black shadow-lg bg-hikma-primary"
        /> -->
          <img
            src="../assets/media/isologo.png"
            alt=""
            class="t-0 w-1/2 lg:w-6/12 xl:w-2/5 mx-auto mt-auto"
          />
          <div>
            <h3 class="text-2xl md:text-3xl font-montserratsb">دعنا نتواصل معك</h3>

            <p class="text-base md:text-xl">
              يكفيك الاستعانة بأحد من فريقنا لتبدأ مشوارك الأكاديمي بنجاح مهما كان استفسارك تأكد
              أننا نقدم لك الاستشارة مجاناً
            </p>
          </div>
        </div>

        <form action="https://formspree.io/f/xeqbqqno" method="POST" class="xl:pe-24">
          <div class="grid gap-2">
            <div class="grid grid-cols-1 gap-4">
              <div class="grid grid-cols-2 gap-8">
                <label class="flex flex-col gap-2">
                  <span class="">الاسم:</span>
                  <input
                    name="name"
                    class="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
                    required
                  />
                </label>
                <label class="flex flex-col gap-2">
                  <span class="">النسب:</span>
                  <input
                    name="surname"
                    class="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
                    required
                  />
                </label>
              </div>
              <label class="flex flex-col gap-2">
                <span class="">رقم الواتساب:</span>
                <input
                  type="tel"
                  name="tel"
                  class="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
                  required
                />
              </label>
              <label class="flex flex-col gap-2">
                <span class=""> الرسالة: (اختيارية) </span>
                <textarea
                  name="message"
                  class="px-4 py-2 bg-white text-black rounded-md h-16 focus:outline-none"
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              class="mt-6 px-4 py-2 rounded-md w-full text-center bg-hikma-primary text-white"
            >
              أرسل
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
