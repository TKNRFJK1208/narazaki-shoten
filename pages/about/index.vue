<template>
  <div class="bg-background min-h-screen text-white pb-20">
    <!-- Hero Section -->
    <div class="relative h-[50vh] overflow-hidden">
      <img src="/images/about-kitchen.png" alt="Narazaki Kitchen" class="object-cover w-full h-full opacity-60" />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-serif tracking-widest text-primary">私たちの想い</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-16 max-w-4xl">
      <!-- Story Section -->
      <section class="mb-24">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">アムステルダムでの再解釈</h2>
            <p class="leading-relaxed text-gray-300 mb-6">
              2024年、私たちはここアムステルダムで「Narazaki Shoten」を始めました。
              日本の国民食である「牛丼」を、単なるファストフードとしてではなく、ひとつの料理として再定義したい。
              そんな想いから、私たちの挑戦は始まりました。
            </p>
            <p class="leading-relaxed text-gray-300">
              現地の新鮮な食材と、日本から取り寄せた厳選された調味料。
              二つの文化が交わる場所で、新しい「GYU-DON」のスタンダードを提案します。
            </p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0">
            <div
              class="writing-vertical-rl text-lg leading-loose tracking-widest h-64 border-r border-white/20 pr-8 hidden md:block text-gray-200">
              伝統を守りながら、<br>
              新しい風を吹き込む。<br>
              一杯の丼に込めた、<br>
              日々の感謝と情熱。
            </div>
          </div>
        </div>
      </section>

      <!-- Commitment Section -->
      <section class="mb-24 bg-surface p-10 rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold mb-10 text-center">三つのこだわり</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Icon name="mdi:pot-steam" size="32" />
            </div>
            <h3 class="text-xl font-bold mb-3">出汁</h3>
            <p class="text-sm text-gray-400">
              毎日店内で引く、昆布と鰹の合わせ出汁。化学調味料に頼らず、素材本来の旨味を最大限に引き出します。
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Icon name="mdi:rice" size="32" />
            </div>
            <h3 class="text-xl font-bold mb-3">米</h3>
            <p class="text-sm text-gray-400">
              欧州で手に入る最高品質の短粒種を使用。ガス釜でふっくらと炊き上げ、タレとの相性を追求しました。
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Icon name="mdi:cow" size="32" />
            </div>
            <h3 class="text-xl font-bold mb-3">肉</h3>
            <p class="text-sm text-gray-400">
              オランダ産の放牧牛を薄切りにし、低温でじっくり煮込むことで、とろけるような食感を実現しています。
            </p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section>
        <h2 class="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">チーム</h2>
        <div class="flex items-center gap-6">
          <div class="w-24 h-24 rounded-full bg-gray-600 overflow-hidden">
            <!-- Placeholder for team member -->
            <div class="w-full h-full bg-gray-500 flex items-center justify-center text-xs">Photo</div>
          </div>
          <div>
            <h3 class="text-lg font-bold">Kenji Narazaki</h3>
            <p class="text-sm text-primary mb-2">Founder / Head Chef</p>
            <p class="text-sm text-gray-400">
              東京の料亭で10年間の修行を経て渡蘭。「食を通じて人々を幸せにする」をモットーに、日々厨房に立つ。
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us | Narazaki Shoten',
  meta: [
    { name: 'description', content: 'The story and philosophy behind Narazaki Shoten.' }
  ]
})
</script>

<style scoped>
.writing-vertical-rl {
  writing-mode: vertical-rl;
}
</style>
