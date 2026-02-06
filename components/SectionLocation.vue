<template>
  <section id="location" class="py-20 bg-background">
    <div class="container mx-auto px-4">
       <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-2">Visit Us</h2>
        <p class="text-text-muted">In the heart of Amsterdam</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div class="bg-surface p-8 rounded-lg border border-white/5">
          <h3 class="text-2xl font-bold text-white mb-6">Narazaki Shoten</h3>
          <div class="space-y-4 text-gray-300">
             <div class="flex items-start gap-3">
               <Icon name="mdi:map-marker" class="w-6 h-6 text-primary shrink-0" />
               <p>Spuistraat 123<br>1012 VA Amsterdam<br>The Netherlands</p>
             </div>
             <div class="flex items-start gap-3">
               <Icon name="mdi:clock" class="w-6 h-6 text-primary shrink-0" />
               <div>
                 <p><span class="text-white font-medium">Mon - Sat:</span> 11:30 - 22:00</p>
                 <p><span class="text-white font-medium">Sun:</span> 12:00 - 21:00</p>
               </div>
             </div>
             <div class="flex items-start gap-3">
               <Icon name="mdi:phone" class="w-6 h-6 text-primary shrink-0" />
               <p>+31 20 123 4567</p>
             </div>
          </div>
        </div>

        <div class="h-full min-h-[300px] rounded-lg overflow-hidden bg-surface relative">
           <!-- Google Map Placeholder -->
           <a :href="externalLinks.MAP_LOCATION" target="_blank" class="block w-full h-full relative group">
             <img src="/images/location-interior.png" alt="Map Location" class="w-full h-full object-cover" />
             <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span class="text-white font-bold bg-primary px-4 py-2 rounded text-black">Open in Google Maps</span>
             </div>
           </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EXTERNAL_LINKS } from '~/constants'
const externalLinks = EXTERNAL_LINKS
</script>
