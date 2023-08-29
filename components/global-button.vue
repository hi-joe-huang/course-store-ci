<template>
  <component 
  :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
  :to="to"
  :class="`${variantStyle[props.variant]} ${sizeStyle[props.size]}`"
  >
    <slot/>
  </component>
</template>

<script lang="ts" setup>


  const props = defineProps({
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'accent', 'outline', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value: string) => ['md', 'block'].includes(value)
    }
  })

interface StringByString {
  [key: string]: string;
}

const sizeStyle: StringByString = {
  md: 'px-4 py-2',
  block: 'inline-block w-full px-4 py-2 text-center'
}

const variantStyle: StringByString = {
  primary: 'bg-primary text-white rounded',
  accent: 'bg-accent text-white rounded',
  outline: 'border text-gray-600 border-gray-400 rounded',
  ghost: 'bg-transparent rounded'
}
</script>