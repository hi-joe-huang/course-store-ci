<template>
    <section class="py-5 bleed-bg bleed-gray-100 ">
        <h2 class="text-2xl pb-5 font-medium text-gray-700">募資課程</h2>
        <ul v-for="course in courses" :key="course.id" class="block md:grid grid-cols-4">
            <fundraising-card :data="course" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { data: courses} = useLazyAsyncData('fundraising', () => $fetch('https://api.hiskio.com/v2/courses/fundraising').catch(err => console.error(err)))
</script>