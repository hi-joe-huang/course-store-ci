<template>
  <div class="bg-global-background">
    <global-navbar/>
      <div class="container mx-auto px-4 min-h-screen">
        <Nuxt />
      </div>
    <global-footer/>
    <global-modal-login v-if="modalStore.isLoginModalOpen" />
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
</script>