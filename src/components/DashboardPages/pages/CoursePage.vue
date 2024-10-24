<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h1 class="text-4xl font-extrabold">دوره ها</h1>
                <p v-if="courses !== ''"> دوره های موجود : {{ displayedCourse.length }} دوره</p>
            </div>
            <input v-if="courses !== ''" type="search" class="border-2 rounded-full w-10/12 p-3 outline-yellow-300"
                placeholder="جست جوی دوره ها..." v-model="searchValue">
        </div>
        <transition-group name="slide" tag="div" class="grid grid-cols-4 mt-10 gap-5">
            <DashboardCard v-for="item in displayedCourse" :key="item[0]" :data="item" @openModalReq="openModalFunc"
                @deleteReq="acceptDeleteFunc">
            </DashboardCard>
        </transition-group>
        <Transition>
                <EditDataModal @updateReq="updateDataFunc" :course="targetCourse" @closeModal="showModal = false"
                    v-if="showModal">
                    {{ btnText }}
                </EditDataModal>
        </Transition>
    </div>
</template>

<script>
import { computed, inject, ref } from 'vue';
import DashboardCard from '../DashboardCard.vue';
import EditDataModal from '../EditDataModal.vue';
export default {
    components: {
        DashboardCard,
        EditDataModal
    },
    setup() {
        let courses = inject('courses')
        let getCourses = inject('getCourses')
        let showModal = ref(false)
        let targetCourse = ref('')
        let btnText = ref('بروزرسانی کردن دوره')
        let searchValue = ref('')

        let displayedCourse = computed(() => {
            if (!searchValue.value) {
                return courses.value
            } else {
                return courses.value.filter(course => course[1].courseName.toLowerCase().includes(searchValue.value.toLowerCase()))
            }
        })

        function acceptDeleteFunc(course) {
            console.log(course);
            fetch(`https://thermolearn-72bd8-default-rtdb.firebaseio.com/courses/${course[0]}.json`, {
                method: "DELETE",
            })
                .then(res => getCourses())
                .catch(err => alert('دوره  پاک نشد!'))
        }

        function openModalFunc(course) {
            showModal.value = true
            targetCourse.value = course
        }

        function updateDataFunc(course) {
            btnText.value = 'درحال بروزرسانی...'
            fetch(`https://thermolearn-72bd8-default-rtdb.firebaseio.com/courses/${targetCourse.value[0]}.json`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(course)
            }).then(res => {
                btnText.value = 'بروزرسانی کردن دوره'
                getCourses()
                showModal.value = false
            })
        }

        return {
            courses,
            acceptDeleteFunc,
            showModal,
            openModalFunc,
            targetCourse,
            updateDataFunc,
            btnText,
            searchValue,
            displayedCourse
        }
    }
}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.slide-move {
    transition: transform 0.3s ease;
}
</style>