<template>
  <div class="z-50 fixed inset-0 flex items-center justify-center bg-black/70" @keydown.esc="modalStore.toggleLoginModal()" @click="modalStore.toggleLoginModal()">
  <div style="max-width: 450px;" class="login-bg -z-10 relative bg-white px-16 py-10 flex flex-col gap-8 pt-16 max-h-screen overflow-y-auto overflow-x-hidden rounded-lg" @click.stop>

      <!-- Close Button -->
      <button class="absolute top-5 right-5" type="button" @click="modalStore.toggleLoginModal()">
        <img width="16" height="16" src="assets/image/close.svg" alt="關閉符號">
      </button>

      <!-- Action -->
      <div style="min-width: 320px;" class="flex">
        <button type="button" class="flex-1 font-medium text-3xl text-primary">
          <span style="width: 80px;" class="inline-block border-b-4 border-primary pb-2">
            登入
          </span>
        </button>
        <button type="button" class="flex-1 font-medium text-3xl border-b-4 border-transparent text-gray-300 pb-2">註冊</button>
      </div>

      <!-- Social Login -->
      <div class="flex flex-col gap-3 whitespace-nowrap">
        <global-button class="flex gap-3 justify-center items-center" variant="outline" to="#">
          <img width="28" height="28" src="/assets/image/facebook.svg" alt="Facebook Logo">
          <span class="">使用 Facebook 登入</span>
        </global-button>
        <global-button class="flex gap-3 justify-center items-center" variant="outline" to="#">
          <img width="28" height="28" src="/assets/image/google.svg" alt="Google Logo">
          <span class="">使用 Google 登入</span>
        </global-button>
        <global-button class="flex gap-3 justify-center items-center" variant="outline" to="#">
          <img width="28" height="28" src="/assets/image/github.svg" alt="GitHub Logo">
          <span class="">使用 GitHub 登入</span>
        </global-button>
        <global-button class="flex gap-3 justify-center items-center" variant="outline" to="#">
          <img width="28" height="28" src="/assets/image/linkedin.svg" alt="LinkedIn Logo">
          <span class="">使用 LinkedIn 登入</span>
        </global-button>
      </div>

      <p class="text-center text-gray-600 font-medium">使用 HiSKIO ID 登入</p>
      <form @submit.prevent="handleLogin">
        <div class="flex flex-col gap-2 mb-5">
          <div class="flex gap-2 pl-3 bg-primary-light rounded">
            <img width="20" height="20" src="assets/image/account.svg" alt="帳號圖示">
            <label class="sr-only" for="hiskioId">HiSKIO ID</label>
            <input id="hiskioId" ref="idInput" class="bg-transparent py-2.5 w-full outline-primary pl-2" type="input" placeholder="請輸入 HiSKIO ID" required>
          </div>
          <div class="flex gap-2 pl-3 bg-primary-light rounded">
            <img width="20" height="20" src="assets/image/lock.svg" alt="密碼鎖頭圖示">
            <label class="sr-only" for="password">密碼</label>
            <input id="password" class="bg-transparent py-2.5 w-full outline-primary pl-2" type="password" placeholder="請輸入登入密碼" required>
          </div>
        </div>

        <!-- Terms and condition -->
        <label for="confirm" class="text-gray-500 inline-block mb-6">
          <div class="flex items-center mb-4">
              <input id="confirm" type="checkbox" class="w-4 h-4 text-primary bg-primary border-gray-600 rounded focus:ring-primary dark:focus:ring-primary focus:ring-2 ">
              <label for="confirm" class="ml-2 text-sm font-medium">登入註冊即代表您同意
          <NuxtLink class="underline" to="#">
            使用者及隱私權政策
          </NuxtLink></label>
          </div>
         
        </label>
        <global-button variant="primary" size="block">
          登入
        </global-button>
      </form>
      <div class="mx-auto divide-x-2 text-gray-400">
        <NuxtLink class="px-2" to="#">忘記密碼</NuxtLink>
        <NuxtLink class="px-2" to="#">帳號查詢</NuxtLink>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
const userStore = useUserStore()
const idInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  idInput.value?.focus()  
})

function handleLogin(event: Event) {
  const form = event.target as HTMLFormElement
  if (!form.confirm.checked) return
  const loginInfo = {
    account: form.hiskioId.value,
    password: form.password.value,
    confirm: form.confirm.checked
  }

  userStore.login(loginInfo)
}
</script>

<style scoped>
.login-bg::before {
  z-index: -1;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('~assets/bg-login.png');
  background-repeat: no-repeat;
}
</style>