<template>
  <li class="bg-white p-3 md:p-0 rounded-lg overflow-hidden list-none group relative">
    <a class="grid gap-2 grid-row-3 grid-cols-2" href="#">

      <!-- Thumbnail -->
      <div class="static md:relative col-span-1 md:col-span-2">
        <img width="300" height="169" class="md:w-full rounded-lg md:rounded-bl-none md:rounded-br-none" :src="data.thumbnails.w300" :alt="data.title">
        <div class="group-hover:opacity-100 opacity-0 absolute flex gap-3 pb-4 pr-4 bottom-0 right-0 transition-opacity text-black md:text-white">
          <button type="button">
            <svg fill="currentColor" width="18" height="23" viewBox="0 0 18 23" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.199 0.00015751H2.53353C1.87282 -0.00694167 1.23628 0.248359 0.763589 0.710039C0.290898 1.17172 0.0206656 1.80206 0.0121913 2.46276L0 22.1658L8.86624 18.4719L17.7325 22.1658V2.46276C17.7211 1.80087 17.4483 1.17037 16.9736 0.708964C16.4989 0.24756 15.8609 -0.0072599 15.199 0.00015751ZM15.199 18.4719L8.86624 15.7865L2.53353 18.4719V2.46276H15.199V18.4719Z"/>
            </svg>
          </button>
          <button v-if="isInCart" type="button" @click.prevent="handleDeleteFromCart(data.id)">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"/></svg>
          </button>
          <button v-else type="button" @click.prevent="handleAddToCart(data.id)">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
          </button>
        </div>
      </div>

      <!-- Title -->
      <h3 class="font-medium text-xl text-gray-700 col-span-2 px-0 md:px-3">{{ data.title }}</h3>
      <div class="flex flex-col gap-2 p-0 md:p-3 col-start-2 row-start-1 md:row-start-3 md:col-span-2">

        <!-- Lecturers -->
        <div class="flex gap-2 items-center">
          <img class="rounded-full absolute md:static top-3 right-3" width="40" height="40" :src="data.lecturers[0].avatar" :alt="`${data.lecturers[0].username}講師的頭貼`">
          <span class="text-gray-500 hidden md:inline">{{ data.lecturers[0].username }}</span>
        </div>

        <!-- Progress -->
        <div>
          <div class="flex justify-between text-gray-500">
            <span class="hidden md:inline">剩 3 天</span>
            <span>已募資 {{ progress }}%</span>
          </div>
          <progress style="height: 10px;" class="max-w-[75px] md:max-w-none w-full rounded-full " :value="progress" max="100"></progress>
        </div>

        <!-- Price -->
        <div class="flex gap-2 items-center">
          <span class="font-medium md:text-2xl text-sm">
            {{ currencyFormatter(data.price) }}
          </span>
          <del class="text-gray-400 decoration-current text-sm md:text-base">
            {{ currencyFormatter(data.fixed_price) }}
          </del>
        </div>
      </div>
    </a>
  </li>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { PropType, computed } from 'vue';
import currencyFormatter from '@/helper/currencyFormatter'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user';
import { useModalStore } from '@/stores/modal'

const cartStore = useCartStore()
const userStore = useUserStore()
const modalStore = useModalStore()
const { carts } = storeToRefs(cartStore)
const { isLogined } = storeToRefs(userStore)

interface Fundraising {
  id: number
  title: string
  price: number
  fixed_price: number
  consumers: number
  fundraising_tickets: number
  thumbnails: {
    w300: string
  }
  lecturers: {
    username: string
    avatar: string
  }[]
}

const props = defineProps({
  data: {
    type: Object as PropType<Fundraising>,
    required: true
  }
})

const progress = computed(() => {
  return Math.floor(props.data.consumers * 100 / props.data.fundraising_tickets)
})

const isInCart = computed(() => {
  return carts.value.data?.some(cart => cart.id === props.data.id.toString())
}) 

function handleAddToCart(id: number) {
  if (!isLogined.value) {
    modalStore.toggleLoginModal()
    return
  }
  cartStore.getCarts(id)
}

function handleDeleteFromCart(id: string) {
  cartStore.deleteCart(id.toString())
}
</script>

<style scoped>
progress[value] {
  --color: hsl(var(--color-accent)); /* the progress color */
  --background: lightgrey; /* the background color */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  border-radius: 10em;
  background: var(--background);
}
progress[value]::-webkit-progress-bar {
  border-radius: 10em;
  background: var(--background);
}
progress[value]::-webkit-progress-value {
  border-radius: 10em;
  background: var(--color);
}
progress[value]::-moz-progress-bar {
  border-radius: 10em;
  background: var(--color);
}
</style>