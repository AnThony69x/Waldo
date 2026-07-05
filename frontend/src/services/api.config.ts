import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 30000, // Alto timeout para LLM
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para reintentos automáticos (Retries)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    
    // Solo reintentar peticiones que han fallado por timeout o red, max 3 veces
    if (!config || (config.__retryCount && config.__retryCount >= 3)) {
      return Promise.reject(error);
    }
    
    config.__retryCount = config.__retryCount || 0;
    config.__retryCount += 1;
    
    // Exponential backoff
    const delay = new Promise((resolve) => setTimeout(resolve, 1000 * config.__retryCount));
    await delay;
    
    return api(config);
  }
);

export default api;
