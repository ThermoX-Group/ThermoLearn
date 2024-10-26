<template>
    <div class="bg-base-200 rounded-2xl flex flex-col justify-between relative overflow-hidden">
        <div>
            <router-link to="/">
                <img class="rounded-2xl mb-2" :src=data[1].img :alt=data[1].courseName>
            </router-link>
            <div class="px-3">
                <router-link to="/">
                    <h4 class="text-lg font-bold">{{ data[1].courseName }}</h4>
                </router-link>
                <p class="des line-clamp-2 mt-1 ">{{ data[1].courseDes }}</p>
            </div>
        </div>
        <div class="p-3 pt-0 flex flex-col  justify-between">
            <div>
                <div class="flex justify-between items-center mt-2 mb-1 border-b-2 border-gray-300 pb-2">
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h4>{{ data[1].courseTeach }}</h4>
                    </div>
                    <span class="text-green-500">{{ data[1].coursePrice.toLocaleString() }} ت</span>
                </div>
            </div>
            <div class="flex justify-between items-center mt-2">
                <span>{{ data[1].courseTime }} ساعت</span>
                <div class="flex gap-2">
                    <div class="tooltip tooltip-right" data-tip="حذف دوره">
                        <svg @click="deleteMode = true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-6 text-red-500 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                    <div @click="$emit('openModalReq', data)" class="tooltip tooltip-right" data-tip="ویرایش اطلاعات">
                        <svg @click="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute right-3 px-3 py-1 bg-glass opacity-90 text-white rounded-lg w-2/3 transition-all duration-300"
            :class="{ 'bottom-2': deleteMode, '-bottom-16': !deleteMode }">
            <button @click="$emit('deleteReq', data), btnText = 'درحال حذف کردن...'" class="block w-full text-right">{{
                btnText }}</button>
            <button @click="deleteMode = false" class="block w-full text-right mt-1">لغو</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['data'],
    setup() {
        let btnText = ref('حذف کردن دوره')
        let deleteMode = ref(false)
        return {
            deleteMode,
            btnText
        }
    }
}
</script>
<style>
.bg-glass {
    backdrop-filter: blur(5px) saturate(180%);
    background-color: rgba(32, 32, 32, 0.42);
}
</style>