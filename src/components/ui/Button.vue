<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
      'transition-colors duration-200',
      variant === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : '',
      variant === 'secondary'
        ? 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
        : '',
      variant === 'ghost' ? 'bg-transparent text-indigo-600 hover:bg-indigo-50' : '',
      variant === 'danger' ? 'bg-red-600 text-white hover:bg-red-500' : '',
      size === 'sm' ? 'px-2 py-1 text-xs' : '',
      size === 'md' ? 'px-3 py-1.5 text-sm' : '',
      size === 'lg' ? 'px-4 py-2 text-base' : '',
      fullWidth ? 'w-full flex justify-center' : 'inline-flex items-center',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className,
    ]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="mr-2">
      <svg
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})

defineEmits(['click'])
</script>
