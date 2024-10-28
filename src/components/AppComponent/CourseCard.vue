<template>
    <div class="bg-base-100 rounded-xl relative">
        <router-link to="/">
            <img :src=data[1].img class="rounded-tl-xl rounded-tr-xl" alt="">
        </router-link>
        <div class="p-3 mb-7">
            <h4 class="text-xl font-bold"> {{ data[1].courseName }}</h4>
            <p class="line-clamp-2 mt-1">{{ data[1].courseDes }}</p>
        </div>
        <div class="px-3 py-1 flex justify-between absolute bottom-0 w-full border-t border-base-300 gap-3">
            <div class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <h4>{{ data[1].courseTeach }}</h4>
            </div>
            <span class="text-green-500"> {{ data[1].coursePrice.toLocaleString() }} ت </span>
        </div>
    </div>
</template>

<script>
import { inject, ref } from 'vue';
export default {
    props: ['data'],
    setup(props) {
        console.log(props.data);

    }
}
</script>