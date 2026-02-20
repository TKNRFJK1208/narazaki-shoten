<template>
  <div>
    <SectionHero />
    
    <!-- Menu Teaser -->
    <section class="py-20 bg-background text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-serif text-primary mb-6">お品書き</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          日本の伝統的な牛丼を、アムステルダムの感性で。<br>
          出汁、米、そして肉。すべてにこだわった一杯です。
        </p>
        <NuxtLink to="/menu" class="inline-block border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-background transition-colors">
          View Menu
        </NuxtLink>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="py-20 bg-surface relative overflow-hidden">
      <!-- Background decoration could go here -->
      <div class="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
           <NuxtImg src="/images/about_kitchen.png" alt="Kitchen" class="rounded-lg shadow-xl opacity-80" />
        </div>
        <div class="md:w-1/2 text-left">
          <h2 class="text-3xl font-serif text-primary mb-6">私たちの想い</h2>
          <p class="text-gray-300 mb-8 leading-relaxed">
            2024年、ここアムステルダムで始まった小さな挑戦。<br>
            それは、「GYU-DON」を世界へ届けること。
          </p>
          <NuxtLink to="/about" class="text-white border-b border-primary pb-1 hover:text-primary transition-colors">
            Read Our Story &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Location Teaser -->
    <section class="py-20 bg-background text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-serif text-primary mb-6">店舗情報</h2>
        <p class="text-gray-400 mb-8">
          デ・パイプ地区の中心で、皆様をお待ちしております。
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink to="/location" class="inline-block bg-white/10 px-8 py-3 rounded hover:bg-white/20 transition-colors">
            Access & Hours
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Narazaki Shoten | Authentic Gyu-don in Amsterdam',
})
</script>
