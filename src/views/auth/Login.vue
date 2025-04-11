<template>
  <div class="flex h-screen">
    <div
      class="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col justify-center items-center text-white p-12"
    >
      <div class="max-w-md">
        <svg class="h-12 w-12 mb-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p class="text-xl mb-6">
          Login to access your dashboard and manage your projects efficiently.
        </p>
        <p class="text-lg">
          Streamline your workflow and boost productivity with our powerful tools.
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-sm">
        <div class="text-center mb-10">
          <svg
            class="h-10 w-10 mx-auto mb-4 text-indigo-600 lg:hidden"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <h2 class="text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <Input v-model="form.email" type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <Input
                v-model="form.password"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div>
            <Button type="submit" variant="primary" fullWidth :loading="loading">
              {{ loading ? 'Signing in...' : 'Sign in' }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

const loading = ref(false)
const rememberMe = ref(false)

const form = ref({
  email: '',
  password: '',
})

const handleLogin = () => {
  loading.value = true

  console.log('Logging in with:', form.value, 'Remember me:', rememberMe.value)

  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>
