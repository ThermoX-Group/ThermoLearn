<template>
    <div class="container m-auto mt-3">
        <div class="navbar bg-base-100 p-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </div>
                <a class="text-4xl font-bold">Thermo<span class="text-yellow-400">Learn</span></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="flex gap-3">
                    <li class="text-xl hover:bg-yellow-400 hover:text-white transition rounded-md px-3 py-1">
                        <router-link to="/">فرانت اند</router-link>
                    </li>
                    <li class="text-xl hover:bg-yellow-400 hover:text-white transition rounded-md px-3 py-1">
                        <router-link to="/">بک اند</router-link>
                    </li>
                    <li class="text-xl hover:bg-yellow-400 hover:text-white transition rounded-md px-3 py-1">
                        <router-link to="/">زبان برنامه نویسی</router-link>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="جست و جوی دوره ها..."
                        class="border-2 h-14 rounded-full p-3 w-60 ml-5 mr-2 outline-yellow-300">
                </div>
                <div class="dropdown dropdown-bottom dropdown-end">
                    <div tabindex="0" role="button" class="m-1">
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                                <img src="https://secure.gravatar.com/avatar/3b3c0692f559018fd28befadf7ca88ed?s=256&d=mm&r=g"
                                    v-if="!userDatas.profile" alt="">
                                <img v-else :src=userDatas.profile />
                            </div>
                        </div>
                    </div>
                    <div tabindex="0"
                        class="dropdown-content menu rounded-box z-[1] w-72 bg-white p-3 shadow-2xl border border-base-300">
                        <div class="flex items-center gap-4 mb-2 border-b border-base-300 pb-2">
                            <img src="https://secure.gravatar.com/avatar/3b3c0692f559018fd28befadf7ca88ed?s=256&d=mm&r=g"
                                class="w-20 h-20 rounded-full" v-if="userDatas == 'empty'" alt="">
                            <img :src=userDatas.profile class="rounded-full w-20 h-20" v-else :alt=userDatas.username>
                            <div v-if="userDatas == 'empty'">اتصال با پایگاه داده برقرار نیست!</div>
                            <div class="text-lg" v-else>
                                <h4 class="mb-1">{{ userDatas.username }}</h4>
                                <p class="text-yellow-400">موجودی : 0 ریال</p>
                            </div>
                        </div>
                        <div class="">
                            <ul class="text-xl" v-if="userDatas !== 'empty'">
                                <li>
                                    <router-link class="hover:bg-yellow-400 hover:text-white transition"
                                        to="/dashboard/counterPage"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>پیشخوان</router-link>
                                </li>
                                <li>
                                    <router-link class="hover:bg-yellow-400 hover:text-white transition"
                                        to="/dashboard/addCourse"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        افزودن دوره</router-link>
                                </li>
                                <li class="border-b border-base-300 pb-1">
                                    <router-link class="hover:bg-yellow-400 hover:text-white transition"
                                        to="/dashboard/editProfile"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>جزییات حساب</router-link>
                                </li>
                                <li>
                                    <router-link class="text-xl mt-1 hover:bg-red-500 hover:text-white" to="/"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                        </svg>خروج</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';

export default {
    setup() {
        let userDatas = inject("userDatas")
        return { userDatas }
    }
}
</script>