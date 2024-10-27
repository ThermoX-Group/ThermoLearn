<template>
    <div class="fixed top-0 right-0 w-full h-full z-20">
        <div class="blur w-full h-full" @click="$emit('closeModal')"></div>
        <div
            class="bg-base-300 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 py-3 px-5 rounded-xl w-4/5 h-4/5 overflow-scroll lg:w-1/2 lg:h-auto lg:overflow-visible">
            <div class="flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 cursor-pointer" @click="$emit('closeModal')">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p>افزودن قسمت های دوره</p>
            </div>
            <div class="mt-3 grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div class="flex  flex-col justify-between">
                    <div>
                        <label for="name">نام دوره</label>
                        <input type="text" id="name" class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                            placeholder="نام قسمت دوره را وارد کنید..." v-model="courseData.courseName">
                    </div>
                    <div>
                        <label for="reprerequisite">پیش نیاز دوره</label>
                        <input type="text" id="reprerequisite"
                            class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                            placeholder="پیش نیاز دوره را وارد کنید..." v-model="courseData.courseReprerequisite">
                    </div>
                    <div>
                        <label for="cover">کاور دوره</label>
                        <input type="text" id="cover" class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                            placeholder="کاور دوره را وارد کنید..." v-model="courseData.img">
                    </div>
                </div>
                <div>
                    <label for="des">توضیحات دوره</label>
                    <textarea id="des" placeholder="توضیحات دوره را وارد کنید..."
                        class="block w-full border-2 rounded-xl p-2 outline-yellow-300 bg-base-100 mt-2"
                        v-model="courseData.courseDes" rows="8"></textarea>
                </div>
                <div>
                    <label for="price">قیمت دوره</label>
                    <input type="number" id="price" class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                        placeholder="قیمت دوره را وارد کنید..." v-model="courseData.coursePrice">
                </div>
                <div>
                    <label for="time">مدت زمان تقریبی دوره</label>
                    <input type="number" id="time" class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                        placeholder="مدرس دوره را وارد کنید..." v-model="courseData.courseTime">
                </div>
            </div>
            <div>
                <label for="teacher" class="mt-3 block">مدرس دوره</label>
                <input type="text" id="teacher"
                    class="w-full border-2 rounded-full p-2 outline-yellow-300 bg-base-100 mt-2"
                    placeholder="مدرس دوره را وارد کنید..." v-model="courseData.courseTeach">
            </div>
            <button @click="updateReqFunc"
                class="w-full text-black rounded-full transition bg-yellow-300 border-2 border-yellow-300 hover:bg-yellow-100 hover:border-yellow-300 mt-4 p-2">
                <slot></slot>
            </button>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    props: ['course'],
    setup(props, context) {
        let courseData = reactive({
            courseName: props.course[1].courseName,
            courseTeach: props.course[1].courseTeach,
            courseDes: props.course[1].courseDes,
            courseReprerequisite: props.course[1].courseReprerequisite,
            courseTime: props.course[1].courseTime,
            coursePrice: props.course[1].coursePrice,
            img: props.course[1].img,
            courseSeasons: props.course[1].courseSeasons
        })

        function updateReqFunc() {
            if (!courseData.courseName || !courseData.courseTeach || !courseData.courseDes || !courseData.courseReprerequisite || !courseData.courseTime || !courseData.coursePrice ||!courseData.img){
                alert('اطلاعات را کامل وارد کنید!')
            }else{
                context.emit('updateReq', courseData)
            }
        }

        return {
            courseData,
            updateReqFunc
        }
    }
}
</script>

<style>
.blur {
    background: rgba(0, 0, 0, 0.3);
}
</style>