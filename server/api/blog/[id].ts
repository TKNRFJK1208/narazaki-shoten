export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = event.context.params?.id;

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Blog ID is required' });
  }

  const url = `https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blog/${id}`;

  try {
    const data = await $fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': config.microcmsApiKey
      }
    });
    return data;
  } catch (error: any) {
    console.error(`Error fetching blog post ${id}:`, error);
    if (error.response?.status === 404) {
      throw createError({ statusCode: 404, statusMessage: 'Article Not Found' });
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog post from CMS'
    });
  }
});
