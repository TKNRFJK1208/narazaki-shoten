<template>
  <footer class="bg-surface py-12 mt-auto border-t border-white/10">
    <div class="container mx-auto px-4 text-center">
      <div class="mb-4">
        <Icon name="mdi:rice" class="w-8 h-8 text-white/20 mx-auto" />
      </div>

      <!-- Social Media Links -->
      <div class="flex justify-center gap-6 mb-6">
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors"
          aria-label="Instagram">
          <Icon name="mdi:instagram" class="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors"
          aria-label="TikTok">
          <Icon name="bi:tiktok" class="w-5 h-5" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors"
          aria-label="Facebook">
          <Icon name="mdi:facebook" class="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors"
          aria-label="X (Twitter)">
          <Icon name="fe:twitter" class="w-6 h-6" />
        </a>
      </div>

      <p class="text-text-muted text-sm">&copy; {{ new Date().getFullYear() }} Narazaki Shoten. All rights reserved.</p>
    </div>
  </footer>
</template>
