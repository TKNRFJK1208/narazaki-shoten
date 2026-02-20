export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  // Directly fetch from microCMS API since we are on the server side
  const url = `https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blog`;

  try {
    const data = await $fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': config.microcmsApiKey
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts from CMS'
    });
  }
});
