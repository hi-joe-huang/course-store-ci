<template>
  <section class="py-5">
    <h2 class="text-2xl pb-5 font-medium text-gray-700">小計</h2>
    <div v-if="userStore.isLogined" class="flex flex-col gap-5 bg-white shadow-md rounded-lg p-4">
      
      <!-- Coupon -->
      <div class="border-b border-gray-300 pb-5">
        <form class="flex gap-3 mb-5" @submit.prevent>
          <label class="inline-flex flex-col gap-3 w-full" >
            <span class="text-gray-500">折扣代碼</span>
            <input class="p-2 w-full border border-gray-400 rounded" placeholder="請輸入折扣代碼" type="text" />
          </label>
          <button style="max-width: 76px" class="w-full px-5 py-2 bg-accent-light text-accent rounded-md self-end" type="submit">確定</button>
        </form>
        
        <span class="text-gray-600 inline-flex items-center gap-1">
          <NuxtLink class="underline inline-flex items-center gap-1" to="/">
            <span>選擇抵用券</span>
            <svg class="inline-block" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.189 4.71176L17.14 9.66274L17.14 11.049L12.189 16L10.7829 14.6137L14.0308 11.3461L3 11.3461L3 9.36569L14.0308 9.36569L10.7631 6.09804L12.189 4.71176Z"/>
            </svg>
          </NuxtLink>
        </span>
      </div>
      
      <!-- Total Price -->
      <div class="flex flex-col gap-2">
          <div class="flex flex-col mb-5">
            <div class="flex justify-between mb-12 md:mb-0 text-gray-600">
              <span>金額</span>
              <span>{{ cartStore.totalPrice }}</span>
            </div>
            <div class="text-4xl ml-auto">{{ cartStore.totalPrice }}</div>
          </div>
        <global-button to="#" variant="accent" size="block">
            前往結帳
        </global-button>
        <p class="text-xs text-gray-500 text-center">點擊上方按鈕即表示您已閱讀並同意<a href="#" class="underline">「HiSKIO購買與退費政策」</a></p>
      </div>
    </div>
    <div v-else>尚未登入</div>
  </section>
</template>
<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
const cartStore = useCartStore()
const userStore = useUserStore()
</script>