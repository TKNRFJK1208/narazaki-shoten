<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <!-- Background Image Placeholder (Darkened) -->
    <div class="absolute inset-0 bg-[#000] z-0">
       <div class="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
       <!-- Replace with actual image -->
       <img src="/images/hero-gyudon.png" alt="Hero Background" class="w-full h-full object-cover opacity-60" />
    </div>

    <div class="relative z-20 text-center px-4">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
        <span class="text-primary">Healthy</span> & Fast
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
        Experience the authentic Dashi-based Gyu-don.
      </p>
      <a href="#menu" class="inline-block border border-primary text-primary hover:bg-primary hover:text-black px-8 py-3 rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
        View Menu
      </a>
    </div>
  </section>
</template>
