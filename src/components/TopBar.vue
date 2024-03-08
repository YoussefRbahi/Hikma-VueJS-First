<template>
  <div class="pb-12 z-20 bg-hikma-secondary">
    <div
      class="fixed w-full flex justify-between bg-hikma-secondary text-white px-4 md:px-12 h-12 items-center z-20 text-xs md:text-base"
    >
      <SocialIcons class="flex gap-x-4 md:gap-x-8 text-xl md:text-2xl"> </SocialIcons>
      <ul class="flex min-[700px]:gap-4 max-[700px]:flex-col" style="direction: ltr">
        <li>
          <a href="#" class="hover:text-hikma-primary"
            ><i class="fa fa-phone"></i> +212-615-574856</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-hikma-primary"
            ><i class="fa fa-envelope"></i> info@hikmaeducation.com</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import SocialIcons from './SocialIcons.vue'
</script>

<style lang="scss" scoped></style>
