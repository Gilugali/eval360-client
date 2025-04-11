import api from './axios'

export const health = () => {
  return api.get('/health')
}
