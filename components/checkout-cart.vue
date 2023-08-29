<template>
  <section class="py-5">
    <h2 class="text-2xl pb-5 font-medium text-gray-700">購物車</h2>
    <div v-if="isCartsHasItem">
      <div class="hidden md:grid grid-cols-4 text-gray-500 bg-white p-4 border-b">
        <div class="pl-3 col-span-2">項目</div>
        <div>售價</div>
        <div>結帳金額</div>
        <div class="sr-only">行為</div>
      </div>
      
      <ul class="flex flex-col gap-4 bg-white overflow-hidden rounded-lg shadow-md">
        <li v-for="cart in carts.data" :key="cart.id" class="border-b last:border-0 relative">
          <div class="static md:grid grid-cols-4 p-4 md:mr-8 lg:mr-0 mr-0 ">
            <div class="flex mb-3 md:mb-0 flex-nowrap md:flex-wrap gap-2 mr-8 md:mr-0 col-span-2">
              <img class="rounded-lg md:max-w-none h-fit" width="120" height="68" :src="cart.thumbnails.w300" :alt="cart.name">
              <h3 class="text-gray-600">{{ cart.name }}</h3>
            </div>
            <button class="float-right col-start-4 absolute top-0 right-0 p-4" style="min-width: 24px;" type="button" @click="handleDeleteCart(cart.id)">
              <img width="24" height="24" src="/assets/image/trash.svg" alt="刪除">
            </button>
     
            <span class="text-gray-500">
              {{ currencyFormatter(cart.subtotal)  }}
            </span>
            <span class="text-md md:text-xl float-right inline-block">
              {{ currencyFormatter(cart.total) }}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <p v-else-if="!isLogined">尚未登入</p>
    <p v-else>沒有東西在購物車內</p>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import currencyFormatter from '@/helper/currencyFormatter'
import { useUserStore } from '@/stores/user'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const userStore = useUserStore()
const { isLogined } = storeToRefs(userStore)
const { carts, isCartsHasItem } = storeToRefs(cartStore)

function handleDeleteCart(id: number) {
  cartStore.deleteCart(id)
}
</script>