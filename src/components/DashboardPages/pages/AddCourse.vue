<template>
    <div>
        <Teleport to="title">ThermoLearnDash | اضافه کردن دوره</Teleport>
        <Transition>
            <AddEpisodeModal @addEpisode="addEpisodeFunc" @closeModal="showModal = false"
                :data="courseData.courseSeasons[indexArrayVar]" v-if="showModal">
            </AddEpisodeModal>
        </Transition>
        <h1 class="font-extrabold text-4xl">اضافه کردن دوره</h1>
        <div class="grid grid-cols-1 mt-5 gap-5 md:grid-cols-2">
            <div>
                <label for="name" class="text-2xl">نام دوره</label>
                <input type="text" id="name" placeholder="نام دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    v-model="courseData.courseName">
            </div>
            <div>
                <label for="des" class="text-2xl">توضیحات دوره</label>
                <textarea id="des" placeholder="توضیحات دوره را وارد کنید..."
                    class="block w-full border-2 rounded-xl p-2 outline-yellow-300 mt-2"
                    v-model="courseData.courseDes"></textarea>
            </div>
            <div>
                <label for="reprerequisite" class="text-2xl">پیش نیاز دوره</label>
                <input type="text" id="reprerequisite" placeholder="پیش نیاز دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    v-model="courseData.courseReprerequisite">
            </div>
            <div>
                <label for="time" class="text-2xl">مدت زمان تقریبی دوره</label>
                <input type="number" id="time" placeholder=" مدت زمان دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    v-model="courseData.courseTime">
            </div>
            <div>
                <label for="price" class="text-2xl"> قیمت دوره</label>
                <input type="number" id="price" placeholder="قیمت دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    v-model="courseData.coursePrice">
            </div>
            <div>
                <label for="teacher" class="text-2xl"> مدرس دوره</label>
                <input type="text" id="teacher" placeholder="مدرس دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2 cursor-not-allowed" disabled
                    :value=userDatas.username>
            </div>
            <div>
                <label for="img" class="text-2xl"> کاور دوره</label>
                <input type="text" id="img" placeholder="مدرس دوره را وارد کنید..."
                    class="block w-full border-2 rounded-full p-2 outline-yellow-300 mt-2"
                    v-model=courseData.img>
            </div>
        </div>
        <div class="mt-5">
            <div>
                <label for="seasons">سرفصل های دوره:</label>
                <div class="flex items-end gap-5">
                    <input type="text" id="seasons" placeholder="سرفصل های دوره را وارد کنید..."
                        class="w-3/5 border-2 rounded-full p-2 outline-yellow-300 mt-2 lg:w-3/4" v-model="courseSeasonsText"
                        @keyup.enter="addSeason">
                    <button @click="addSeason"
                        class="bg-yellow-300 text-black w-2/5 h-full p-2.5 rounded-full transition hover:bg-yellow-400 lg:w-1/4">اضافه
                        کردن سرفصل</button>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-5 gap-5">
                <AccordionComp v-for="(item, index) in courseData.courseSeasons" :data="item" :index="index"
                    :indexCourse="index" :key="index" @deleteSeason="courseData.courseSeasons.splice(index, 1)"
                    @openModal="findSeason"></AccordionComp>
            </div>
        </div>
        <button @click="addCourse" class="bg-yellow-300 text-black transition hover:bg-yellow-400 w-full rounded-full p-2 mt-5">
            {{ btnText }}
        </button>
    </div>
</template>

<script>
import { inject, reactive, ref } from 'vue';
import AccordionComp from '../AccordionCompDash.vue';
import AddEpisodeModal from '../AddEpisodeModal.vue';
export default {
    components: {
        AccordionComp,
        AddEpisodeModal
    },
    setup() {
        let userDatas = inject("userDatas")

        let courseData = reactive({
            courseName: '',
            courseTeach: userDatas.value.username,
            courseDes: '',
            courseReprerequisite: '',
            courseTime: '',
            coursePrice: '',
            img: '',
            courseSeasons: []
        })

        let indexArrayVar = ref('')
        let courseSeasonsText = ref('')
        let btnText = ref('اضافه کردن دوره')
        let showModal = ref(false)

        function addSeason() {
            if (!courseSeasonsText.value) {
                alert("یک چیزی در ورودی وارد کنید!")
            } else {
                courseData.courseSeasons.push({ courseSeasonsText: courseSeasonsText.value, episodes: [] })
                courseSeasonsText.value = ''
            }
        }

        function deleteSeason(index) {
            courseData.courseSeasons.splice(index, 1);
        }

        function addCourse() {
            if (!courseData.courseName || !courseData.courseDes || !courseData.courseReprerequisite || !courseData.courseTime || !courseData.coursePrice || courseData.courseSeasons.length < 1) {
                alert("اطلاعات را کامل وارد کنید!")
            } else {
                btnText.value = "درحال اضافه کردن..."
                fetch("https://thermolearn-72bd8-default-rtdb.firebaseio.com/courses.json", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(courseData)
                }).then(res => {
                    alert("دوره اضافه شد!")
                    btnText.value='اضافه کردن دوره'
                    courseData.courseName = ""
                    courseData.courseDes = ""
                    courseData.courseReprerequisite = ""
                    courseData.courseTime = ""
                    courseData.coursePrice = ""
                    courseData.courseSeasons = []
                    btnText.value = "اضافه کردن دوره"
                })
            }
        }

        function findSeason(indexArray) {
            indexArrayVar.value = indexArray
            showModal.value = true
        }

        function addEpisodeFunc(text) {
            courseData.courseSeasons[indexArrayVar.value].episodes.push(text)
        }
        return {
            courseSeasonsText,
            courseData,
            addSeason,
            deleteSeason,
            addCourse,
            btnText,
            showModal,
            findSeason,
            userDatas,
            indexArrayVar,
            addEpisodeFunc
        }
    }
}
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>