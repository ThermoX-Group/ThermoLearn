<template>
    <div class="drawer lg:container m-auto w-full">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="navbar w-full">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="mx-2 flex-1 px-2 flex justify-between">
                    <div class="flex items-center">
                        <p class="text-2xl font-extrabold">Thermo<span class="text-yellow-400">Learn</span></p>
                        <div class="hidden flex-none lg:block">
                            <ul class="menu menu-horizontal text-xl">
                                <!-- Navbar menu content here -->
                                <li><router-link to="/" class="hover:bg-yellow-400 hover:text-white ml-1">فرانت
                                        اند</router-link></li>
                                <li><router-link to="/" class="hover:bg-yellow-400 hover:text-white ml-1">بک
                                        اند</router-link></li>
                                <li><router-link to="/" class="hover:bg-yellow-400 hover:text-white ml-1">زبان برنامه
                                        نویسی</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center gap-5">
                        <label class="input input-bordered h-14 items-center rounded-full gap-2 hidden xl:flex">
                            <input type="text" class="grow rounded-full" placeholder="جست و جو دوره ها..." />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path fill-rule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </label>
                        <button @click="toggleTheme" class="outline-none dark-light"></button>
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
                                class="dropdown-content menu rounded-box z-[1] w-72 p-3 bg-base-100 shadow-2xl border border-base-300">
                                <div class="flex items-center gap-4 mb-2 border-b border-base-300 pb-2">
                                    <img src="https://secure.gravatar.com/avatar/3b3c0692f559018fd28befadf7ca88ed?s=256&d=mm&r=g"
                                        class="w-20 h-20 rounded-full" v-if="userDatas == 'empty'" alt="">
                                    <img :src=userDatas.profile class="rounded-full w-20 h-20" v-else
                                        :alt=userDatas.username>
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
                                                to="/dashboard/counterPage"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>پیشخوان</router-link>
                                        </li>
                                        <li>
                                            <router-link class="hover:bg-yellow-400 hover:text-white transition"
                                                to="/dashboard/addCourse"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                افزودن دوره</router-link>
                                        </li>
                                        <li class="border-b border-base-300 pb-1">
                                            <router-link class="hover:bg-yellow-400 hover:text-white transition"
                                                to="/dashboard/editProfile"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>جزییات حساب</router-link>
                                        </li>
                                        <li>
                                            <router-link class="text-xl mt-1 hover:bg-red-500 hover:text-white"
                                                to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    class="size-6">
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
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-2xl min-h-full w-80 p-4">
                <li class="">
                    <label class="input input-bordered h-14 items-center rounded-full gap-2 flex mb-5">
                        <input type="text" class="grow rounded-full" placeholder="جست و جو دوره ها..." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                </li>
                <li><router-link to="/">فرانت اند</router-link></li>
                <li><router-link to="/">بک اند</router-link></li>
                <li><router-link to="/">زبان برنامه نویسی</router-link></li>
            </ul>
        </div>

    </div>

</template>
<script>
import { inject, onMounted, ref } from 'vue';

export default {
    setup() {
        let userDatas = inject("userDatas")

        const currentTheme = ref(localStorage.getItem("theme") || "light");

        const toggleTheme = () => {
            if (currentTheme.value === 'light') {
                currentTheme.value = 'dark';
                document.querySelector('.dark-light').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>`;
            } else {
                currentTheme.value = 'light';
                document.querySelector('.dark-light').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>`;
            }
            document.documentElement.setAttribute("data-theme", currentTheme.value);
            localStorage.setItem("theme", currentTheme.value);
        };

        onMounted(() => {
            document.documentElement.setAttribute("data-theme", currentTheme.value);

            // افزودن آیکون مناسب در زمان بارگذاری
            const icon = currentTheme.value === 'light'
                ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>`;

            document.querySelector('.dark-light').innerHTML = icon;
        });

        return { userDatas, toggleTheme };
    }
};
</script>