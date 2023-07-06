<template>
  <div class="bg-hikma-secondary text-white py-16 px-12 md:px-36">
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-5xl text-bold">Contact Us</h3>
        <p>
          Want to know more? what are you waiting for! Contact us now. The quick fox jumped over the
          brow road.
        </p>
      </div>
      <form action="https://formspree.io/f/xeqbqqno" method="POST">
        <div>
          <div class="grid grid-cols-1 gap-6">
            <div class="grid grid-cols-2 gap-12">
              <label class="flex flex-col gap-2">
                <span class="text-lg font-bold">Name:</span>
                <input
                  name="name"
                  class="px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
                  required
                />
              </label>
              <label class="flex flex-col gap-2">
                <span class="text-lg font-bold">Surname:</span>
                <input
                  name="surname"
                  class="px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
                  required
                />
              </label>
            </div>
            <label class="flex flex-col gap-2">
              <span class="text-lg font-bold">Whatsapp Number:</span>
              <input
                type="tel"
                name="tel"
                class="px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
                required
              />
            </label>
            <label class="flex flex-col gap-2">
              <span class="text-lg font-bold">Message: (Optional)</span>
              <textarea
                name="message"
                class="px-4 py-2 bg-white text-black rounded-lg h-32 focus:outline-none"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            class="mt-6 px-4 py-2 text-lg font-bold rounded-full w-full text-center bg-hikma-primary text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
