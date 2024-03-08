<template>
  <div>
    <div
      class="py-12 bg-[url('/src/assets/media/bg.png')] bg-contain bg-no-repeat px-12 lg:px-24 text-center md:text-start"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <!-- Content -->
        <div class="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
          <h2 class="text-4xl font-montserratsb mb-4 text-hikma-secondary">
            كيف تسجل للحصول على قبولك الجامعي بدون مصاريف المكتب ؟
          </h2>
          <p class="text-gray-700 mb-8">
            هل تريد الدراسة في تركيا؟ هل تبحث عن جامعة لاستكمال رحلتك الجامعية بمصروفات مخفضة وعروض
            حصرية؟<br />
            مؤسسة حكمة ، متمثلة في فريقها المتميز والحائز على عدة شهادات في الاستشارات التعليمية
            تقدم خدماتها للطلاب الراغبين في الدراسة بالخارج وتحديدا في تركيا. تعد مؤسستنا الوكيل
            المغربي المعتمد لأكثر من 50 جامعة في تركيا، ولهذا السبب...
          </p>
          <div class="gap-x-4">
            <RouterLink
              to="/how-to"
              class="inline-block px-6 py-3 text-white bg-hikma-primary rounded-md hover:bg-hikma-secondary"
              >اقرإ المزيد</RouterLink
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
