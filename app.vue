<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white font-sans antialiased">
    <TheHeader />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Narazaki Shoten - European Gyudon Project',
  description: 'Bringing the authentic taste of Japanese Gyudon to Europe (Amsterdam).',
  ogTitle: 'Narazaki Shoten - European Gyudon Project',
  ogDescription: 'Bringing the authentic taste of Japanese Gyudon to Europe (Amsterdam).',
  ogImage: '/assets/img/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
