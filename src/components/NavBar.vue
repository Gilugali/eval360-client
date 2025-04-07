<script setup>
import { NLayoutHeader, NButton, NIcon, NDropdown, NAvatar } from 'naive-ui'
import {
  MenuOutline as MenuIcon,
  NotificationsOutline as BellIcon,
  ChevronBackOutline as ChevronBackIcon,
} from '@vicons/ionicons5'

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:collapsed'])

const toggleSidebar = () => {
  emit('update:collapsed', !props.collapsed)
}

const userMenuOptions = [
  {
    label: 'Your Profile',
    key: 'profile',
  },
  {
    label: 'Sign out',
    key: 'signout',
  },
]

const headerStyle = {
  width: '100%',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
}
</script>

<template>
  <n-layout-header :style="headerStyle">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        padding: 0 16px;
      "
    >
      <div style="display: flex; align-items: center; gap: 12px">
        <n-button quaternary circle @click="toggleSidebar">
          <template #icon>
            <n-icon size="24">
              <MenuIcon v-if="collapsed" />
              <ChevronBackIcon v-else />
            </n-icon>
          </template>
        </n-button>

        <!-- <img
          style="height: 32px; width: auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        /> -->
      </div>

      <div style="display: flex; align-items: center; gap: 12px">
        <n-button quaternary circle>
          <template #icon>
            <n-icon size="24">
              <BellIcon />
            </n-icon>
          </template>
        </n-button>

        <n-dropdown trigger="click" :options="userMenuOptions" placement="bottom-end">
          <n-avatar
            round
            size="medium"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </n-dropdown>
      </div>
    </div>
  </n-layout-header>
</template>
