import { ref, watch, computed, onMounted } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useLocalStorage  } from '@vueuse/core'
import { useUserStore } from '@/stores/user'
import currencyFormatter from '@/helper/currencyFormatter'

export const useCartStore = defineStore('cart', () => {
  const carts = ref([])
  const userStore = useUserStore()
  const { isLogined } = storeToRefs(userStore)

  watch(isLogined, () => {
    getCarts()
  })

  onMounted(() => {
    carts.value = useLocalStorage('carts', [])
  })

  const isCartsHasItem = computed(() => {
    return carts.value.data?.length > 0
  })

  const totalPrice = computed(() => {
    return currencyFormatter(carts.value.data?.reduce((acc: number, item: any) => acc + item.total, 0))
  })

  async function getCarts(id?: number) {
    try {
      const emptyBody = {
        "items": [],
        "coupons": []
      }
      const containIDBody = {
        "items": [
          {
            id,
            "coupon": ""
          }
        ],
        "coupons": []
      }
  
      carts.value = await $fetch('https://api.hiskio.com/v2/carts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userStore.authToken}`
        },
        body: JSON.stringify(id ? containIDBody : emptyBody)
      })
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteCart(id: number) {
    try {
      const res = await $fetch('https://api.hiskio.com/v2/carts', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userStore.authToken}`
        },
        body: JSON.stringify(
          {
            "items": [
              {
                id,
                "coupon": ""
              }
            ],
            "coupons": []
          }
        )
      })
      carts.value = {data: [...carts.value.data.filter((item: any) => item.id !== id)]}
    } catch (error) {
      console.error(error);
    }
  }


  return { carts, getCarts, deleteCart, isCartsHasItem, totalPrice}
})