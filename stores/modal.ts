import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isLoginModalOpen = ref(false)
  
  function toggleLoginModal() {
    isLoginModalOpen.value = !isLoginModalOpen.value
    document.body.classList.toggle('overflow-y-hidden')
  }

  return {isLoginModalOpen, toggleLoginModal}
})