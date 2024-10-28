<template>
    <div class="bg-base-200 pt-1 px-3 pb-5 rounded-xl">
        <h2 class="text-3xl my-3">آخرین دوره های تماشا شده:</h2>
        <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <CourseCard :data="item" v-for="item in lastCourse" :key="item[0]"></CourseCard>
        </div>
    </div>
</template>

<script>
import CourseCard from '../AppComponent/CourseCard.vue';
import { computed, inject, ref } from 'vue';
export default {
    components: {
        CourseCard
    },
    setup() {
        let courses = inject('courses')
        let lastCourse = computed(() => courses.value.slice(courses.value.length - 4, courses.value.length))
        return { lastCourse }
    }
}
</script>