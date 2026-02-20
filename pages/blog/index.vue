<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8 text-primary">Blog</h1>
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error loading articles</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="article in data?.contents" :key="article.id" class="bg-surface rounded-lg overflow-hidden shadow-lg">
        <NuxtLink :to="`/blog/${article.id}`">
          <div class="aspect-video relative bg-gray-800">
            <template v-if="article.eyecatch">
              <NuxtImg 
                :src="article.eyecatch.url" 
                :alt="article.title" 
                :width="article.eyecatch.width" 
                :height="article.eyecatch.height" 
                class="object-cover w-full h-full" 
              />
            </template>
            <div v-else class="flex items-center justify-center h-full text-gray-500">
              <Icon name="mdi:image-off" class="w-12 h-12" />
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2 text-white">{{ article.title }}</h2>
            <p class="text-gray-400 text-sm mb-4">{{ new Date(article.publishedAt).toLocaleDateString() }}</p>
            <div class="text-gray-300 line-clamp-3" v-html="article.content"></div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogResponse } from '~/types/blog';

const client = useMicroCMS();
const { data, pending, error } = await useAsyncData<BlogResponse>('blog-list', () =>
  client.get({ endpoint: 'blog' })
);

useHead({
  title: 'Blog | Narazaki Shoten',
  meta: [
    { name: 'description', content: 'Latest news and updates from Narazaki Shoten.' }
  ]
});
</script>
