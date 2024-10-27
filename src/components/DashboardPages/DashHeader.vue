<template>
    <div>
            <div class="drawer border-b-2 border-yellow-300 relative lg:hidden z-10">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <!-- Page content here -->
                    <label for="my-drawer" class="drawer-button btn btn-circle border-none h-14 w-14 m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    </label>
                    <button @click="toggleTheme" class="btn btn-circle outline-none dark-light h-14 w-14"></button>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class=" bg-yellow-300 text-basecontent h-screen w-64 p-4 pl-0 relative text-black">
                        <!-- Sidebar content here -->
                        <li class="text-center text-xl mb-5">
                            <router-link to="/">Thermolearn</router-link>
                        </li>
                        <li class=" mb-2">
                            <router-link
                                class="hover:bg-yellow-200 py-3 px-5 transition flex items-center gap-2 rounded-tr-full rounded-br-full"
                                to="/dashboard/counterPage"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                پیشخوان من</router-link>
                        </li>
                        <li class=" mb-2">
                            <router-link
                                class="hover:bg-yellow-200 py-3 px-5 transition flex items-center gap-2  rounded-tr-full rounded-br-full"
                                to="/dashboard/addCourse"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                افزودن دوره </router-link>
                        </li>
                        <li class=" mb-2">
                            <router-link
                                class="hover:bg-yellow-200 py-3 px-5 transition flex items-center gap-2  rounded-tr-full rounded-br-full"
                                to="/dashboard/CoursePage"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                                دوره ها </router-link>
                        </li>
                        <li class=" mb-5">
                            <router-link
                                class="hover:bg-yellow-200 py-3 px-5 transition flex items-center gap-2  rounded-tr-full rounded-br-full"
                                to="/dashboard/editProfile"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                                ویرایش اطلاعات
                                کاربری</router-link>
                        </li>
                        <li class="flex justify-center bottom-0 absolute left-1/2 -translate-x-1/2">
                            <p v-if="userDatas === ''" class="text-center mb-10 text-xl">در حال بارگذاری...</p>
                            <p v-else-if="userDatas == null" class="text-center mb-10 text-xl">اطلاعات از پایگاه داده
                                دریافت
                                نشد!</p>
                            <div class="flex flex-col items-center ml-3 text-md mb-3 rounded-tr-xl rounded-tl-xl"
                                v-else-if="userDatas">
                                <img src="https://secure.gravatar.com/avatar/3b3c0692f559018fd28befadf7ca88ed?s=256&d=mm&r=g"
                                    v-if="!userDatas.profile" class="w-24 h-24 rounded-full" alt="">
                                <img :src=userDatas.profile class="w-24 h-24 rounded-full" alt="" v-else>
                                <h2 class="mb-1 mt-3 text-center">{{ userDatas.username }}</h2>
                                <p>{{ userDatas.email }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>

</template>

<script>
import { inject, onMounted,ref } from 'vue';
export default {
    setup() {
        let userDatas = inject("userDatas")
        let getuserDataFunc = inject("getuserDataFunc")
        onMounted(() => getuserDataFunc())
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
        return { userDatas, toggleTheme }
    }
}
</script>
<style scoped>
.router-link-active {
    background: white;
    transition: all .3s;
}

.router-link-active:hover {
    background: white;
}

.header {
    backdrop-filter: blur(5px) saturate(180%);
    /* background-color: rgba(253, 224, 71, 0.34); */
}
</style>