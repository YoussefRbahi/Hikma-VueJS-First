<template>
  <div>
    <section class="pt-12">
      <ServicesComponent></ServicesComponent>
      <p class="text-center text-xl text-hikma-secondary py-12 font-montserratsb">
        لا تتردد في زيارتنا أو الاتصال بنا لنوافيك بكل التفاصيل خطوة بخطوة لتحقيق هدفك بالدراسة في
        تركيا
      </p>
    </section>

    <ContactForm></ContactForm>
  </div>
</template>

<script setup>
import ServicesComponent from '../components/ServicesComponent.vue'
import ContactForm from '../components/ContactForm.vue'
</script>
<script>
export default {}
</script>

<style scoped></style>
