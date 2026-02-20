<template>
  <div class="bg-background min-h-screen text-white pb-20">
    <div class="container mx-auto px-4 py-16 max-w-5xl">
      <h1 class="text-4xl font-serif text-center mb-4 text-primary">お品書き</h1>
      <p class="text-center text-gray-400 mb-16 font-serif">Menu</p>

      <!-- Gyudon Category -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
          <Icon name="mdi:bowl-mix" class="text-primary" />
          <span>牛丼 - Gyudon</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold group-hover:text-primary transition-colors">Narazaki Gyudon</h3>
              <span class="text-lg font-bold">€12.50</span>
            </div>
            <p class="text-sm text-gray-400 mb-4">
              Our signature beef bowl. Thinly sliced beef simmered in sweet soy sauce dashi, served over steamed rice.
            </p>
            <div class="flex gap-2 text-xs text-gray-500">
              <span class="px-2 py-1 bg-white/5 rounded">Beef</span>
              <span class="px-2 py-1 bg-white/5 rounded">Onion</span>
              <span class="px-2 py-1 bg-white/5 rounded">Rice</span>
            </div>
          </div>
          
          <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group">
             <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold group-hover:text-primary transition-colors">Onsen Tamago Gyudon</h3>
              <span class="text-lg font-bold">€14.00</span>
            </div>
            <p class="text-sm text-gray-400 mb-4">
              Signature Gyudon topped with a creamy soft-poached egg (Onsen Tamago) and scallions.
            </p>
            <div class="flex gap-2 text-xs text-gray-500">
              <span class="px-2 py-1 bg-white/5 rounded">Egg</span>
              <span class="px-2 py-1 bg-white/5 rounded">Beef</span>
            </div>
          </div>

          <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group">
             <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold group-hover:text-primary transition-colors">Kimchi Gyudon</h3>
              <span class="text-lg font-bold">€14.50</span>
            </div>
            <p class="text-sm text-gray-400 mb-4">
              Spicy kick. Gyudon topped with authentic fermented kimchi.
            </p>
            <div class="flex gap-2 text-xs text-gray-500">
              <span class="px-2 py-1 bg-white/5 rounded">Spicy</span>
              <span class="px-2 py-1 bg-white/5 rounded">Beef</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Sides Category -->
      <section class="mb-16">
         <h2 class="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
          <Icon name="mdi:food-variant" class="text-primary" />
          <span>副菜 - Sides</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 class="font-bold">Miso Soup</h3>
              <p class="text-xs text-gray-400">Traditional soup with tofu and wakame</p>
            </div>
            <span class="font-bold">€3.50</span>
          </div>
          <div class="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 class="font-bold">Edamame</h3>
              <p class="text-xs text-gray-400">Salted young soybeans</p>
            </div>
            <span class="font-bold">€4.00</span>
          </div>
          <div class="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 class="font-bold">Karaage (3pcs)</h3>
              <p class="text-xs text-gray-400">Japanese style fried chicken</p>
            </div>
            <span class="font-bold">€6.50</span>
          </div>
        </div>
      </section>

      <!-- Drinks Category -->
      <section>
         <h2 class="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
          <Icon name="mdi:glass-cocktail" class="text-primary" />
          <span>飲み物 - Drinks</span>
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
           <div class="text-center p-4 bg-surface rounded">
             <h3 class="font-bold mb-1">Asahi Super Dry</h3>
             <span class="text-primary text-sm">€5.00</span>
           </div>
           <div class="text-center p-4 bg-surface rounded">
             <h3 class="font-bold mb-1">Japanese Green Tea</h3>
             <span class="text-primary text-sm">€3.50</span>
           </div>
           <div class="text-center p-4 bg-surface rounded">
             <h3 class="font-bold mb-1">Ramune Soda</h3>
             <span class="text-primary text-sm">€4.00</span>
           </div>
        </div>
      </section>

      <div class="mt-20 text-center">
        <a href="https://example.com/order" target="_blank" class="inline-block bg-primary text-background px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-transform hover:scale-105 shadow-lg">
          Order Online
        </a>
        <p class="mt-4 text-sm text-gray-400">UberEats / Thuisbezorgd でも注文可能です</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Menu | Narazaki Shoten',
  meta: [
    { name: 'description', content: 'Explore our authentic Gyudon and Japanese side dishes.' }
  ]
})
</script>
