<template>
  <div class="bg-background min-h-screen text-white pb-20">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-serif text-center mb-4 text-primary">店舗情報</h1>
      <p class="text-center text-gray-400 mb-16 font-serif">Location & Access</p>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Info Column -->
        <div class="space-y-12">
           <!-- Address -->
           <section>
             <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
               <Icon name="mdi:map-marker" /> 住所
             </h2>
             <p class="text-lg leading-relaxed">
               Ceintuurbaan 123,<br>
               1072 GB Amsterdam,<br>
               Netherlands
             </p>
             <p class="text-sm text-gray-400 mt-2">
               De Pijp エリア、Sarphatipark から徒歩3分
             </p>
           </section>

           <!-- Hours -->
           <section>
             <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
               <Icon name="mdi:clock-outline" /> 営業時間
             </h2>
             <div class="bg-surface p-6 rounded-lg border border-white/5">
                <div class="flex justify-between mb-2 border-b border-white/10 pb-2">
                  <span>Monday - Friday</span>
                  <span class="font-mono">11:30 - 21:00</span>
                </div>
                <div class="flex justify-between mb-2 border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span class="font-mono">12:00 - 22:00</span>
                </div>
                <div class="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
             </div>
           </section>

           <!-- Contact -->
           <section>
             <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
               <Icon name="mdi:phone" /> お問い合わせ
             </h2>
             <p class="text-lg font-mono">020-123-4567</p>
             <p class="text-sm text-gray-400">info@narazaki-shoten.nl</p>
             <div class="mt-4 p-4 bg-primary/10 rounded text-sm text-primary">
               ※ 予約は承っておりません。直接ご来店ください。<br>
               ※ 完全キャッシュレス決済（Card Only）となります。
             </div>
           </section>
        </div>

        <!-- Map Column -->
        <div class="h-[500px] bg-surface rounded-xl overflow-hidden shadow-2xl relative border border-white/10 group">
          <!-- Placeholder for Google Maps -->
          <div class="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div class="text-center">
               <Icon name="mdi:map" class="text-gray-600 w-16 h-16 mb-2" />
               <p class="text-gray-400">Google Maps Embed Placeholder</p>
            </div>
          </div>
          <!-- Real map would go here -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.596857905753!2d4.8909!3d52.3508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIxJzAyLjkiTiA0wrA1MycyNy4yIkU!5e0!3m2!1sen!2snl!4v1625667000000!5m2!1sen!2snl" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Location | Narazaki Shoten',
  meta: [
    { name: 'description', content: 'Visit us in De Pijp, Amsterdam. Opening hours and directions.' }
  ]
})
</script>
