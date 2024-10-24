<template>
    <div class="fixed top-0 right-0 w-full h-full z-20">
        <div class="blur w-full h-full" @click="$emit('closeModal')"></div>
        <div
            class="bg-yellow-100 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 py-3 px-5 rounded-xl w-1/3">
            <div class="flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 cursor-pointer" @click="$emit('closeModal')">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p>افزودن قسمت های دوره</p>
            </div>
            <div class="mt-3">
                <label for="episode">نام قسمت</label>
                <input type="text" id="episode" class="w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    placeholder="نام قسمت دوره را وارد کنید..." v-model="episodeName" @keyup.{keyAlias}.enter="addEpisodeFunc">
            </div>
            <button @click="addEpisodeFunc"
                class="w-full rounded-full transition bg-yellow-300 border-2 border-yellow-300 hover:bg-yellow-100 hover:border-yellow-300 mt-4 p-2">اضافه
                کردن قسمت</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['data'],
    setup(props, context) {
        let episodeName = ref("")

        function addEpisodeFunc() {
            context.emit('addEpisode', episodeName.value)
            episodeName.value = ''
        }
        return { episodeName, addEpisodeFunc }
    }
}
</script>

<style>
.blur {
    background: rgba(0, 0, 0, 0.3);
}
</style>