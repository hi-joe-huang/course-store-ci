<template>
  <header class="flex justify-center shadow-md h-[var(--navbar-height)] relative">
    <div class="container px-4 mx-auto flex justify-between items-center">
      <div class="flex gap-2 h-full">

      <!-- Logo -->
      <NuxtLink class="inline-flex" to="/">
        <img width="100" height="15" src="/assets/image/hiskio.svg" alt="HiSKIO LOGO">
      </NuxtLink>

      <!-- Recruitment -->
      <NuxtLink v-if="!isLogined" class="hidden md:inline-flex items-center" to="/">
        <img width="80" height="40" src="/assets/image/recruitment-ad.jpg" alt="HiSKIO 徵才中！">
      </NuxtLink>
     
      <!-- All Course -->
      <NuxtLink v-if="!isLogined" to="#" class="hidden md:inline-flex items-center gap-1 text-gray-600 whitespace-nowrap">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.71429C0 1.25963 0.180612 0.823594 0.502103 0.502103C0.823594 0.180612 1.25963 0 1.71429 0H5.14286C5.59751 0 6.03355 0.180612 6.35504 0.502103C6.67653 0.823594 6.85714 1.25963 6.85714 1.71429V5.14286C6.85714 5.59751 6.67653 6.03355 6.35504 6.35504C6.03355 6.67653 5.59751 6.85714 5.14286 6.85714H1.71429C1.25963 6.85714 0.823594 6.67653 0.502103 6.35504C0.180612 6.03355 0 5.59751 0 5.14286V1.71429ZM9.14286 1.71429C9.14286 1.25963 9.32347 0.823594 9.64496 0.502103C9.96645 0.180612 10.4025 0 10.8571 0H14.2857C14.7404 0 15.1764 0.180612 15.4979 0.502103C15.8194 0.823594 16 1.25963 16 1.71429V5.14286C16 5.59751 15.8194 6.03355 15.4979 6.35504C15.1764 6.67653 14.7404 6.85714 14.2857 6.85714H10.8571C10.4025 6.85714 9.96645 6.67653 9.64496 6.35504C9.32347 6.03355 9.14286 5.59751 9.14286 5.14286V1.71429ZM0 10.8571C0 10.4025 0.180612 9.96645 0.502103 9.64496C0.823594 9.32347 1.25963 9.14286 1.71429 9.14286H5.14286C5.59751 9.14286 6.03355 9.32347 6.35504 9.64496C6.67653 9.96645 6.85714 10.4025 6.85714 10.8571V14.2857C6.85714 14.7404 6.67653 15.1764 6.35504 15.4979C6.03355 15.8194 5.59751 16 5.14286 16H1.71429C1.25963 16 0.823594 15.8194 0.502103 15.4979C0.180612 15.1764 0 14.7404 0 14.2857V10.8571ZM9.14286 10.8571C9.14286 10.4025 9.32347 9.96645 9.64496 9.64496C9.96645 9.32347 10.4025 9.14286 10.8571 9.14286H14.2857C14.7404 9.14286 15.1764 9.32347 15.4979 9.64496C15.8194 9.96645 16 10.4025 16 10.8571V14.2857C16 14.7404 15.8194 15.1764 15.4979 15.4979C15.1764 15.8194 14.7404 16 14.2857 16H10.8571C10.4025 16 9.96645 15.8194 9.64496 15.4979C9.32347 15.1764 9.14286 14.7404 9.14286 14.2857V10.8571Z"/>
        </svg>
        課程
      </NuxtLink>

      <!-- Search -->
      <div class="flex gap-1 text-gray-500">
        <button type="button">
          <svg style="margin-top: 3px;" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7847 15.8371L14.668 12.7221C14.5982 12.6525 14.5153 12.5973 14.4242 12.5597C14.333 12.5221 14.2353 12.5029 14.1367 12.5031H13.6274C14.6471 11.1994 15.1309 9.55592 14.9801 7.90794C14.8293 6.25996 14.0552 4.73152 12.8158 3.63426C11.5763 2.53701 9.96475 1.95356 8.30972 2.00289C6.65468 2.05222 5.08079 2.7306 3.90894 3.89973C2.73709 5.06885 2.05554 6.64068 2.00325 8.29471C1.95095 9.94875 2.53185 11.5604 3.62751 12.8012C4.72317 14.0419 6.25107 14.8183 7.89968 14.9719C9.5483 15.1256 11.1935 14.645 12.4998 13.6281V14.1371C12.4996 14.2357 12.5188 14.3333 12.5564 14.4245C12.594 14.5156 12.6492 14.5984 12.7189 14.6681L15.8366 17.7841C15.9061 17.8539 15.9886 17.9092 16.0795 17.947C16.1705 17.9848 16.268 18.0042 16.3664 18.0042C16.4649 18.0042 16.5624 17.9848 16.6533 17.947C16.7442 17.9092 16.8268 17.8539 16.8962 17.7841L17.7807 16.9001C17.9212 16.7589 18 16.5678 18 16.3686C18 16.1695 17.9212 15.9784 17.7807 15.8371H17.7847ZM8.4976 12.5021C7.70604 12.5021 6.93225 12.2675 6.2741 11.828C5.61594 11.3885 5.10297 10.7638 4.80005 10.0329C4.49713 9.30196 4.41788 8.4977 4.5723 7.72177C4.72673 6.94585 5.1079 6.23312 5.66762 5.67371C6.22733 5.1143 6.94046 4.73333 7.71681 4.57899C8.49316 4.42465 9.29787 4.50387 10.0292 4.80662C10.7605 5.10937 11.3855 5.62206 11.8253 6.27985C12.2651 6.93765 12.4998 7.71101 12.4998 8.50213C12.4998 9.563 12.0781 10.5804 11.3276 11.3306C10.577 12.0807 9.55905 12.5021 8.4976 12.5021Z"/>
          </svg>
        </button>
        <input class="bg-transparent outline-none" type="text" placeholder="搜尋"/>
      </div>
      </div>
      <nav>
        <ul class="flex items-center gap-4 text-gray-500">
          <!-- Start a course -->
          <li class="hidden md:inline">
            <NuxtLink to="#">
              我想開課
            </NuxtLink>
          </li>
          <!-- My course -->
          <li v-if="isLogined" class="hidden md:inline">
            <NuxtLink to="#">
              我的學習
            </NuxtLink>
          </li>
          <!-- My Cart -->
          <li class="inline-flex items-center">
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#D9D9D9" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.67 10.8277L16.9831 4.73396C17.0779 4.29397 16.7609 3.875 16.3331 3.875H5.42245L5.16783 2.56221C5.10439 2.23499 4.83139 2 4.5147 2H1.66667C1.29847 2 1 2.31479 1 2.70312V3.17188C1 3.56021 1.29847 3.875 1.66667 3.875H3.60786L5.5592 13.9366C5.09236 14.2197 4.77778 14.7506 4.77778 15.3594C4.77778 16.2655 5.47422 17 6.33333 17C7.19245 17 7.88889 16.2655 7.88889 15.3594C7.88889 14.9002 7.70981 14.4853 7.42156 14.1875H13.2451C12.9569 14.4853 12.7778 14.9002 12.7778 15.3594C12.7778 16.2655 13.4742 17 14.3333 17C15.1924 17 15.8889 16.2655 15.8889 15.3594C15.8889 14.7098 15.5309 14.1485 15.0117 13.8827L15.1649 13.1715C15.2598 12.7315 14.9427 12.3125 14.5149 12.3125H7.05881L6.877 11.375H15.0199C15.3312 11.375 15.601 11.1478 15.67 10.8277Z"/>
              </svg>
            </button>
          </li>

          <!-- My Profile -->
          <li v-if="isLogined" class="hidden md:inline relative group">
            <img class="rounded-full" width="32" height="32" :src="`${profile.avatar}`" :alt="`${profile.username} 的頭貼`">
            <div class="absolute bg-white right-0 bottm-0 p-4 whitespace-nowrap shadow-lg rounded-lg group-hover:block hidden">
              <button type="button" @click="handleLogout">登出</button>
            </div>
          </li>
          <li v-else class="hidden md:inline-flex gap-3 ml-10">
            <button type="button" class="border text-primary border-primary py-1 px-4 rounded-md" @click="handleLogin">登入</button>
            <NuxtLink class="border bg-primary text-white border-primary py-1 px-4 rounded-md" to="#">註冊</NuxtLink>
          </li>

          <!-- Hamburger -->
          <li class="inline md:hidden">
            <button @click="toggleSidebar">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H15C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0Z" fill="#8C8C8C"/>
                <path d="M15 6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6Z" fill="#8C8C8C"/>
                <path d="M15 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12Z" fill="#8C8C8C"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Sidebar -->
    <div ref="sidebar" class="bg-global-background fixed z-10 h-full top-[var(--navbar-height)] left-0 w-full hidden md:hidden overflow-auto">
      <!-- Profile -->
      <div v-if="isLogined" class="bg-primary-light">
        <div class="flex items-center py-10 px-4 gap-5">
          <img class="rounded-full" width="40" height="40" :src="profile.avatar" :alt="`${profile.username}的頭貼`">
          <span class="text-gray-700">{{ profile.username }}</span>
        </div>
        <hr class="text-gray-300 mx-4">
        <ul class="text-gray-700">
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">我的課程</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">我的抵用券</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">任務板</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">訂單紀錄</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">帳戶設定</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary hover:bg-white w-full inline-block py-4 px-4">我開設的課</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Other -->
      <ul class="text-gray-700">
        <li>
          <NuxtLink to="#" class="hover:bg-gray-100 hover:text-black w-full inline-block py-4 px-4">探索課程</NuxtLink>
        </li>
        <li v-if="!isLogined">
          <NuxtLink to="#" class="hover:bg-gray-100 hover:text-black w-full inline-block py-4 px-4">企業方案</NuxtLink>
        </li>
      </ul>
      <hr class="text-gray-300 mx-4">
      <!-- Account action -->
      <ul class="text-gray-700">
        <li v-if="!isLogined">
          <button type="button" class="hover:bg-gray-100 hover:text-black w-full inline-block py-4 px-4 text-left" @click="handleLogin">登入</button>
        </li>
        <li v-else>
          <button class="hover:bg-gray-100 hover:text-black w-full inline-block py-4 px-4 text-left" @click="handleLogout">登出</button>
        </li>
        <li>
          <NuxtLink to="#" class="hover:bg-gray-100 w-full inline-block py-4 px-4 text-primary font-medium">註冊</NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'

const userStore = useUserStore()
const modalStore = useModalStore()
const { isLogined, profile } = storeToRefs(userStore)

const sidebar = ref<HTMLElement | null>(null)


function handleLogin() {
  modalStore.toggleLoginModal()
}

function handleLogout() {
  userStore.resetProfile()
}

function toggleSidebar() {
  sidebar.value!.classList.toggle('hidden')
  document.body.classList.toggle('overflow-y-hidden')
}
</script>
