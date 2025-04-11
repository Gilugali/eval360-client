<template>
  <n-config-provider>
    <n-layout has-sider style="height: 100vh">
      <SideBar v-model:collapsed="sidebarCollapsed" />

      <n-layout :style="contentStyle">
        <NavBar v-model:collapsed="sidebarCollapsed" />

        <n-layout-content
          :style="{
            padding: '24px',
            backgroundColor: '#f9fafb',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }"
        >
          <slot>
            <router-view />
          </slot>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script>
export default {}
</script>

<style></style>
