import { defineStore } from 'pinia'
import { useMutation } from '@tanstack/vue-query'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('auth') || '{}'),
    retutnUrl: null,
  }),
  actions: {
    useLogin() {},
    useLogout() {},
  },
})
