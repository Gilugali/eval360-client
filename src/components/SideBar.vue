<template>
  <n-layout-sider
    :collapsed="isCollapsed"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :style="siderStyle"
    @update:collapsed="handleUpdateCollapsed"
    bordered
  >
    <div
      :style="{
        padding: '16px',
        display: 'flex',
        'align-items': 'center',
        'justify-content': isCollapsed ? 'flex-end' : 'flex-start',
      }"
    >
      <n-avatar
        :size="isCollapsed ? 'medium' : 'large'"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        class="collapsed-logo"
      />
      <n-text
        v-if="!isCollapsed"
        style="margin-left: 12px; font-size: 18px; font-weight: 500; color: #111827"
      >
        Company
      </n-text>
    </div>

    <n-divider style="margin: 0" />

    <div class="sidebar-menu-container">
      <template v-if="isCollapsed">
        <div class="collapsed-menu">
          <div
            v-for="item in navigation"
            :key="item.name"
            class="collapsed-menu-item"
            :class="{ active: item.current }"
            @click="handleMenuClick(item)"
          >
            <n-icon size="20" :class="{ 'active-icon': item.current }">
              <component :is="item.icon" />
            </n-icon>
          </div>
        </div>
      </template>
      <template v-else>
        <n-menu
          :collapsed="isCollapsed"
          :collapsed-width="64"
          :width="240"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :value="activeKey"
          :theme-overrides="menuOverrides"
          :indent="18"
        />
      </template>
    </div>
  </n-layout-sider>
</template>

<script setup>
import { computed, h, ref, onMounted, onUnmounted } from 'vue'
import { NLayoutSider, NMenu, NIcon, NAvatar, NText, NDivider } from 'naive-ui'
import {
  HomeOutline as HomeIcon,
  PeopleOutline as TeamIcon,
  FolderOpenOutline as ProjectsIcon,
  CalendarOutline as CalendarIcon,
  SettingsOutline as SettingsIcon,
  BarChartOutline as ReportsIcon,
} from '@vicons/ionicons5'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:collapsed'])

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
const mobileBreakpoint = 768

const isMobile = computed(() => windowWidth.value < mobileBreakpoint)

const isCollapsed = computed(() => {
  if (isMobile.value && props.collapsed === false) {
    return true
  }
  return props.collapsed
})

const handleResize = () => {
  windowWidth.value = window.innerWidth

  if (windowWidth.value < mobileBreakpoint && !props.collapsed) {
    emit('update:collapsed', true)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleMenuClick = (item) => {
  console.log(`Clicked menu item: ${item.name}`)

  if (isMobile.value) {
    emit('update:collapsed', true)
  }
}

const handleUpdateCollapsed = (value) => {
  emit('update:collapsed', value)
}

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: TeamIcon, href: '#', current: false },
  { name: 'Projects', icon: ProjectsIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Reports', icon: ReportsIcon, href: '#', current: false },
  { name: 'Settings', icon: SettingsIcon, href: '#', current: false },
]

const menuOptions = computed(() =>
  navigation.map((item) => ({
    label: item.name,
    key: item.name,
    icon: () => h(NIcon, null, { default: () => h(item.icon) }),
  })),
)

const activeKey = computed(() => {
  const currentItem = navigation.find((item) => item.current)
  return currentItem ? currentItem.name : null
})

const siderStyle = computed(() => ({
  backgroundColor: '#ffffff',
  color: '#374151',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  zIndex: isMobile.value ? 1050 : 1000,
  height: '100%',
}))

const menuOverrides = {
  itemTextColor: '#374151',
  itemTextColorHover: '#111827',
  itemTextColorActive: '#ffffff',
  itemColorActive: '#4f46e5',
  itemIconColor: '#6b7280',
  itemIconColorActive: '#ffffff',
  itemIconColorHover: '#111827',
  arrowColor: '#6b7280',
}
</script>

<style scoped>
.sidebar-menu-container {
  width: 100%;
  overflow-y: auto;
  height: calc(100% - 64px);
}

.collapsed-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  overflow: hidden;
}

.collapsed-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  height: 40px;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: #6b7280;
  text-align: center;
}

.collapsed-logo {
  text-align: right;
}

.collapsed-menu-item:hover {
  color: #111827;
  background-color: rgba(0, 0, 0, 0.06);
}

.collapsed-menu-item.active {
  background-color: #4f46e5;
}

.active-icon {
  color: white !important;
}

@media (max-width: 768px) {
  .sidebar-menu-container {
    height: calc(100vh - 64px);
  }
}
</style>
