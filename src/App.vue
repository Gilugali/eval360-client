<template>
  <n-config-provider>
    <template v-if="isAuthPage">
      <router-view />
    </template>
    <template v-else>
      <n-layout has-sider style="height: 100vh">
        <SideBar v-model:collapsed="sidebarCollapsed" v-if="!isAuthPage" />

        <n-layout :style="contentStyle">
          <NavBar v-model:collapsed="sidebarCollapsed" v-if="!isAuthPage" />

          <n-layout-content
            :style="{
              padding: '24px',
              backgroundColor: '#f9fafb',
              height: 'calc(100vh - 64px)',
              overflowY: 'auto',
            }"
          >
            <template>
              <router-view />
            </template>
          </n-layout-content>
        </n-layout>
      </n-layout>
    </template>
  </n-config-provider>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { NConfigProvider, NLayout, NLayoutContent } from 'naive-ui'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router'

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
const mobileBreakpoint = 768

const sidebarCollapsed = ref(windowWidth.value < mobileBreakpoint)

const isMobile = computed(() => windowWidth.value < mobileBreakpoint)

const contentStyle = computed(() => ({
  transition: 'margin-left 0.3s ease',
}))

const handleResize = () => {
  windowWidth.value = window.innerWidth

  if (windowWidth.value < mobileBreakpoint) {
    sidebarCollapsed.value = true
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
const route = useRoute()
const isAuthPage = computed(() => route.path === '/login')
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
}
</style>
