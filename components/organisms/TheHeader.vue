<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-white/10">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/assets/img/logo-dummy.png" alt="Narazaki Logo" class="h-8 w-auto mix-blend-lighten" />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <NuxtLink to="/menu" class="hover:text-primary transition-colors">Menu</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary transition-colors">About</NuxtLink>
        <NuxtLink to="/location" class="hover:text-primary transition-colors">Location</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
      </nav>

      <a :href="externalLinks.ORDER_ONLINE" target="_blank"
        class="bg-primary text-background px-4 py-2 rounded font-bold hover:bg-yellow-500 transition-colors text-sm">
        Order Online
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { EXTERNAL_LINKS } from '~/constants'
const externalLinks = EXTERNAL_LINKS
</script>
