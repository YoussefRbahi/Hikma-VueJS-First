<template>
  <footer class="relative bg-gray-800">
    <div class="xl:container mx-auto text-white pt-10 px-2 md:px-8 lg:px-24 grid md:gap-12">
      <div
        id="footer-all"
        class="grid md:grid-cols-2 items-center justify-center md:justify-evenly gap-y-12 mb-8 md:mb-0"
      >
        <div class="flex mx-auto md:mx-0 md:me-auto">
          <div class="grid gap-y-2">
            <div class="grid grid-flow-col me-auto gap-2">
              <div class="h-28 aspect-square mx-auto">
                <img id="footer-logo" src="../assets/media/white-logo.png" alt="" />
              </div>
              <div class="my-auto font-montserratsb text-2xl leading-relaxed">
                <p>
                  مؤسسة حكمة<br />
                  للدراسة في تركيا
                </p>
              </div>
            </div>
            <div class="hidden">
              <SocialIcons class="flex text-3xl gap-12 mx-auto add-shadow"></SocialIcons>
            </div>
          </div>
        </div>

        <div class="add-shadow">
          <NavigationMenu
            class="grid grid-flow-col gap-x-4 mx-auto text-sm md:text-base lg:text-lg font-semibold text-end"
          ></NavigationMenu>
        </div>
      </div>

      <div
        class="grid md:w-full md:grid-cols-3 justify-between border-t border-t-gray-600 py-4 text-center mx-auto gap-y-2"
      >
        <p class="font-bold text-sm my-auto">
          كافة الحقوق محفوظة لمؤسسة حكمة التعليمية <br class="hidden" /><span
            class="whitespace-nowrap"
            >&copy; 2023</span
          >
        </p>
        <div class="flex">
          <SocialIcons class="flex text-2xl gap-12 mx-auto add-shadow my-auto"></SocialIcons>
        </div>
        <p class="hidden md:text-end my-auto text-lg add-shadow">
          <a href="#">سياسة الخصوصية</a>
        </p>
        <div class="md:text-end my-auto gap-4 text-lg built-by-container">
          <div>
            <span class="text-base">Built by </span
            ><a
              href="https://rbahi.com"
              target="_blank"
              rel="noreferrer noopener"
              class="built-by bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-400 whitespace-nowrap hover:bg-gradient-to-l"
              >Youssef Rbahi
            </a>
          </div>
        </div>
      </div>
    </div>
    <DeveloperTag class="hidden"></DeveloperTag>
  </footer>
</template>
<script setup>
import NavigationMenu from './NavigationMenu.vue'
import SocialIcons from './SocialIcons.vue'
import DeveloperTag from './DeveloperTag.vue'
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Borel&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap');

p,
span,
#footer-logo,
.add-shadow {
  filter: drop-shadow(0.1rem 0.1rem rgb(38 58 121));
}
.built-by {
  /* text-shadow: 0.1rem 0.1rem rgb(38 58 121); */
  filter: drop-shadow(0.1rem 0.1rem rgb(38 58 121));

  /* font-family: 'teko'; */
  letter-spacing: 0.01rem;
}
.built-by-container {
  word-spacing: 0.03rem;
}
SocialIcons li {
  padding-right: 4rem;
}
</style>
