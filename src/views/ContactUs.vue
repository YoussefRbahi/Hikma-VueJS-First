<template>
  <div class="">
    <div>
      <div class="lg:container mx-auto">
        <div class="py-12 w-7/8 mx-auto px-2 md:px-16 lg:px-24 text-center">
          <div class="grid justify-center mx-auto gap-4 lg:gap-12">
            <div class="m-auto w-full">
              <img
                src="../assets/media/office.jpeg"
                alt="Hero Image"
                class="rounded-md mx-auto w-full"
              />
            </div>
            <div class="my-auto">
              <h2 class="text-4xl font-montserratsb mb-4 text-hikma-secondary">
                {{ $t('hero-tagline') }}
              </h2>
              <p class="text-lg mb-8 font-bold box-border">
                الموقع والشركة الأولى و الوكيل المغربي المعتمد للجامعات التركية الحكومية والخاصة
                لجميع الطلاب المغاربة للدراسة في تركيا . بدأ تأسيس الشركة منذ عام 2019 م ، وبدأت
                رحلة البحث عن أخصائيين تعليميين و مستشارين أكاديميين لنكون الأوائل في مجال
                الإستشارات التعليمية للتقديم على أقوى الجامعات التركية ، ونحن لسنا الوحيدين في هذا
                المجال ولكن ما يميزنا عن الشركات الأخرى : السرعة في الرد والتواصل الخبرة الطويلة
                العمل الجاد والإحترافي المصداقية والشفافية تجربة تحصيل العديد من القبولات الجامعية
                السرية وضمان الحفاظ على معلومات الطالب
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-hikma-secondary py-12 md:pb-24">
        <h2 class="text-center pb-4 text-4xl font-montserratsb text-white">مكاتبنا</h2>
        <OurOffices class="lg:container"></OurOffices>
      </div>
    </div>
    <div class="py-12">
      <h2 class="text-center pb-4 text-4xl font-montserratsb text-hikma-secondary">شركاؤنا</h2>
      <PartnerUniversities></PartnerUniversities>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
import OurOffices from '../components/OurOffices.vue'
import PartnerUniversities from '../components/PartnerUniversities.vue'
</script>
<script>
export default {}
</script>

<style scoped></style>
