import { createClient } from 'microcms-js-sdk';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const client = createClient({
    serviceDomain: config.public.microcmsServiceDomain || 'YOUR_DOMAIN', 
    apiKey: config.microcmsApiKey || 'YOUR_API_KEY', // from private runtimeConfig
  });

  return {
    provide: {
      microcms: client,
    },
  };
});
