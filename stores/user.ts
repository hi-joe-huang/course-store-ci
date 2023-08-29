import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage  } from '@vueuse/core'
import { useModalStore } from '@/stores/modal'

export const useUserStore = defineStore('user', () => {
  const modalStore = useModalStore()
  const profile = ref({})
  const authToken = ref('')

  onMounted(() => {
    authToken.value = useLocalStorage('authToken', '')
    profile.value = useLocalStorage('profile', {})
  })  

  const isLogined = computed(() => {
    return Object.keys(profile.value).length !== 0
  })

  interface Login {
    access_token: string
    token_type: string
    expires_in: number
  }

  async function login(account: { account: string, password: string, confirm: boolean }) {
    try {
      const {access_token: token} = await $fetch<Login>('https://api.hiskio.com/v2/auth/login', {
        method: 'POST',
        body: JSON.stringify(account),
      });
      authToken.value = token;
      getProfile(token);
      modalStore.toggleLoginModal();
    } catch (err) {
      alert(JSON.stringify(err.data));
    }
  }

   async function getProfile(token: string) {
    try {

      profile.value = await $fetch('https://api.hiskio.com/v2/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (err) {
      console.error(err);
    }
  }


  function resetProfile() {
    profile.value = {}
    authToken.value = ''
  }

  return { profile, authToken, isLogined, getProfile, resetProfile, login}
  
})