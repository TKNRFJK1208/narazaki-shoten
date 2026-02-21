<template>
  <div class="container mx-auto px-4 py-12">
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Article not found</div>
    <article v-else class="max-w-3xl mx-auto bg-surface rounded-lg p-8 shadow-lg">
      <div v-if="data?.eyecatch" class="mb-8 rounded-lg overflow-hidden">
        <img :src="data.eyecatch.url" :alt="data.title" class="w-full h-auto" />
      </div>
      <div v-else class="mb-8 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
        <img src="https://placehold.jp/800x450.png?text=Narazaki" alt="Narazaki Shoten"
          class="w-full h-auto opacity-50" />
      </div>
      <h1 class="text-4xl font-bold mb-4 text-primary">{{ data?.title }}</h1>
      <p class="text-gray-400 mb-8">{{ new Date(data?.publishedAt).toLocaleDateString() }}</p>
      <div class="prose prose-invert max-w-none" v-html="data?.content"></div>
      <div class="mt-12 text-center">
        <NuxtLink to="/blog" class="text-primary hover:underline">Back to Blog</NuxtLink>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog';

const route = useRoute();

const { data, pending, error } = await useFetch<BlogPost>(`/api/blog/${route.params.id}`);

if (error.value || !data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article Not Found' });
}

useServerSeoMeta({
  title: () => `${data.value?.title} | Narazaki Shoten`,
  ogTitle: () => data.value?.title,
  description: () => data.value?.content?.substring(0, 100).replace(/<[^>]*>?/gm, '') + '...',
  ogDescription: () => data.value?.content?.substring(0, 100).replace(/<[^>]*>?/gm, '') + '...',
  ogImage: () => data.value?.eyecatch?.url || '/assets/img/og-image.jpg',
  twitterCard: 'summary_large_image',
});
</script>
