<template>
  <section id="menu" class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-2">Our Menu</h2>
        <p class="text-text-muted">Authentic Japanese flavors</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Main Dish -->
        <div>
          <h3 class="text-2xl font-semibold text-white mb-6 border-b border-primary/30 pb-2">Gyu-don</h3>
          <ul class="space-y-6">
            <li v-for="item in menu.main" :key="item.name" class="flex justify-between items-baseline group hover:bg-white/5 p-2 rounded transition-colors -mx-2">
              <div>
                <h4 class="text-lg font-medium text-white group-hover:text-primary transition-colors">{{ item.name }}</h4>
                <p class="text-sm text-text-muted">{{ item.desc }}</p>
              </div>
              <span class="text-primary font-mono ml-4">{{ item.price }}</span>
            </li>
          </ul>
        </div>

        <!-- Sides -->
        <div>
          <h3 class="text-2xl font-semibold text-white mb-6 border-b border-primary/30 pb-2">Sides & Desserts</h3>
          <ul class="space-y-6">
             <li v-for="item in menu.sides" :key="item.name" class="flex justify-between items-baseline group hover:bg-white/5 p-2 rounded transition-colors -mx-2">
              <div>
                <h4 class="text-lg font-medium text-white group-hover:text-primary transition-colors">{{ item.name }}</h4>
                <p class="text-sm text-text-muted">{{ item.desc }}</p>
              </div>
              <span class="text-primary font-mono ml-4">{{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const menu = {
  main: [
    { name: 'Regular Gyu-don', desc: 'Simmered beef and onions over rice', price: '€12.50' },
    { name: 'Large Gyu-don', desc: 'More beef, more rice', price: '€15.00' },
    { name: 'Veggie Don', desc: 'Plant-based alternative with dashi', price: '€13.00' },
  ],
  sides: [
    { name: 'Miso Soup', desc: 'Traditional soybean paste soup', price: '€3.50' },
    { name: 'Tsukemono', desc: 'Assorted Japanese pickles', price: '€4.00' },
    { name: 'Dorayaki', desc: 'Red bean pancake', price: '€5.00' },
    { name: 'Matcha Yogurt', desc: 'Homemade yogurt with matcha sauce', price: '€4.50' }
  ]
}
</script>
