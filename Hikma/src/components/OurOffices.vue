<template>
  <div class="md:px-16 lg:px-24 text-center">
    <h3 class="text-3xl pb-4 font-montserratsb text-hikma-secondary">مكاتبنا</h3>
    <div class="">
      <p class="text-center text-xl px-2 md:px-0 text-white pb-12 font-montserratsb">
        تتواجد مكاتب مؤسسة حكمة للخدمات الطلابية في إسطنبول بتركيا و في الرباط بالمغرب
      </p>

      <div class="grid gap-10 text-center px-2">
        <div class="w-full">
          <h4 class="">الرباط</h4>
          <div
            class="grid md:grid-cols-2 shadow-2xl shadow-gray-800 overflow-hidden rounded-md bg-white"
          >
            <div class="w-full">
              <img src="../assets/media/rabat.jpg" alt="" class="h-80 object-cover w-full" />
            </div>
            <div class="grid md:px-8 py-8 mx-0 text-xl">
              <p class="my-auto">
                شارع فال ولد عمير رقم 46<br />
                أكدال، الرباط 10090<br />
                المغرب
              </p>
              <a href="tel:+212615574856" class="my-auto"
                ><p style="direction: ltr">06 15 57 48 56</p></a
              >
              <a href="mailto:info@hikmaeducation.com" class="my-auto"
                ><p>info@hikmaeducation.com</p></a
              >
            </div>
          </div>
        </div>
        <div class="w-full" style="direction: ltr">
          <h4 class="">Istanbul</h4>
          <div
            class="grid md:grid-cols-2 shadow-2xl shadow-gray-800 overflow-hidden rounded-md bg-white"
          >
            <div class="w-full">
              <img src="../assets/media/istanbul.jpg" alt="" class="h-80 object-cover w-full" />
            </div>
            <div class="grid md:px-8 py-8 mx-0 text-xl">
              <p class="my-auto">
                Ataköy 7-8-9-10.<br />
                Kısım Mah. Çobançeşme E-5 Yan Yol Cad.<br />A-B Blok No: 18 /2 İç Kapı No: 220<br />
                Bakırköy/ İstanbul
              </p>
              <a href="tel:+9050632866" class="my-auto"><p>+90 506 328 66 30</p></a>
              <a href="mailto:info@hikmaeducation.com" class="my-auto"
                ><p>info@hikmaeducation.com</p></a
              >
            </div>
          </div>
        </div>
        <!-- <div>
          <h4 class="w-full md:me-auto mb-4 md:ms-2 mx-auto" style="direction: ltr">Istanbul</h4>
          <div class="grid md:grid-cols-2 border-4 rounded-md" style="direction: ltr">
            <div class="w-full">
              <img
                src="../assets/media/istanbul.jpg"
                alt=""
                class="h-80 object-cover w-full rounded-md"
              />
            </div>
            <div class="grid md:px-8 py-8 mx-0">
              <p class="my-auto">
                Ataköy 7-8-9-10.<br />
                Kısım Mah. Çobançeşme E-5 Yan Yol Cad.<br />A-B Blok No: 18 /2 İç Kapı No: 220<br />
                Bakırköy/ İstanbul
              </p>
              <a href="tel:+9050632866" class="my-auto"><p>+90 506 328 66 30</p></a>
              <a href="mailto:info@hikmaeducation.com" class="my-auto"
                ><p>info@hikmaeducation.com</p></a
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin-inline: auto;
  box-sizing: border-box;
}
h4 {
  font-weight: bold;
  color: white;
  font-size: x-large;
  margin-bottom: 1.5rem;
}
a {
  color: #ef3637;
}
a:hover {
  color: #263a79;
}
</style>
