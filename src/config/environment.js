export default {
  baseUrl: import.meta.env.VITE_ACCOUNTING_API_BASE_URL || 'http://localhost:5000',
  maxAttemps: import.meta.env.VITE_MAX_ATTEMPTS || 3,
  retryDelay: import.meta.env.VITE_RETRY_DELAY || 1000,
  defaultPageSize: 10,

}
