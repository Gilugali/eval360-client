<!-- Input.vue -->
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    :class="[
      'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900',
      'border border-gray-300 placeholder:text-gray-400',
      'sm:text-sm/6',
    ]"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['update:modelValue'])
</script>
