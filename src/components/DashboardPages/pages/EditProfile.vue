<template>
    <div>
        <Teleport to="title">ThermoLearnDash | ویرایش پروفایل</Teleport>
        <h1 class="text-4xl font-bold">ویرایش پروفایل</h1>
        <div class=" items-center justiy-start lg:flex">
            <div class="relative">
                <img src="https://secure.gravatar.com/avatar/3b3c0692f559018fd28befadf7ca88ed?s=256&d=mm&r=g"
                    class="w-40 h-40 rounded-full my-5" alt="" v-if="!datas.profile">
                <img :src=datas.profile class="w-40 h-40 rounded-full my-5" alt="" v-else>
                <svg @click="showInp = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor"
                    class="size-12 p-1.5 absolute -bottom-2 border-4 border-white right-3 bg-yellow-300  flex items-center justify-center text-lg cursor-pointer rounded-full transition hover:bg-yellow-400 lg:bottom-3">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                </svg>

            </div>
            <Transition>
                <div class="mb-5 lg:mr-20 lg:mb-0" v-if="showInp">
                    <label for="img">لینک عکس</label>
                    <div>
                        <input type="text" id="img" class="border-2 outline-yellow-300 rounded-full w-96 mt-3 p-2"
                            placeholder="لینک عکس را وارد کنید..." v-model="datas.profile">
                        <span class="text-2xl mr-3 cursor-pointer" @click="showInp = false">x</span>
                    </div>
                </div>
            </Transition>
        </div>
        <form action="">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                    <label for="username" class="block mb-3">نام کاربری</label>
                    <input type="text" id="username"
                        class="border-2 outline-yellow-300 transition-all p-2 rounded-full w-full"
                        placeholder="نام کاربری را وارد کنید..." v-model="datas.username">
                </div>
                <div>
                    <label for="email" class="block mb-3">ایمیل</label>
                    <input type="email" id="email"
                        class="border-2 outline-yellow-300 transition-all p-2 rounded-full w-full"
                        placeholder="example@gmail.com" v-model="datas.email">
                </div>
            </div>
        </form>
        <button
            class="w-full bg-yellow-300 mt-5 p-2 rounded-full cursor-pointer transition hover:bg-yellow-400 outline-none"
            @click="sendData">{{ btnText }}</button>
        <p class="text-3xl text-center mt-5" v-if="showUpdateText">{{ updateText }}</p>
        <LoadingComp class="fixed bottom-2 left-4 text-yellow-300" v-if="userDatas == ''"></LoadingComp>
    </div>
</template>

<script>
import { inject, onMounted, reactive, ref, watch } from 'vue';
import LoadingComp from '../../AppComponent/LoadingComp.vue';

export default {
    components: {
        LoadingComp
    },
    setup() {
        let showInp = ref(false)
        let userDatas = inject("userDatas")
        let getuserDataFunc = inject("getuserDataFunc")

        let datas = reactive({
            username: userDatas.value.username,
            email: userDatas.value.email,
            profile: userDatas.value.profile
        })

        let btnText = ref("ویرایش اطلاعات")
        let updateText = ref("اطلاعات بروزرسانی شد!")
        let showUpdateText = ref(false)

        let loading = ref(true)
        watch(userDatas, (newVal) => {
            datas.username = newVal.username
            datas.email = newVal.email
            datas.profile = newVal.profile
        });

        onMounted(() => {
            getuserDataFunc()
        })

        function sendData() {
            btnText.value = "لطفا کمی صبر کنید..."
            fetch("https://thermolearn-72bd8-default-rtdb.firebaseio.com/userdatas/-O9V3agRnwXBh6BSmtYc.json", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(datas)
            })
                .then(res => res.json())
                .then(data => {
                    btnText.value = "ویرایش اطلاعات"
                    showUpdateText.value = true
                    setTimeout(() => {
                        showUpdateText.value = false
                    }, 3000)
                    getuserDataFunc()
                })
        }

        return {
            showInp,
            datas,
            btnText,
            sendData,
            updateText,
            showUpdateText,
            loading,
            userDatas
        }
    }
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>