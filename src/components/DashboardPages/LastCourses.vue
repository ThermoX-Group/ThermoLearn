<template>
        <div class="bg-base-200 w-1/2 pt-1 px-3 pb-5 rounded-xl">
            <h2 class="text-3xl my-3">آخرین دوره های تماشا شده:</h2>
            <div class="grid grid-cols-2 gap-5">
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>
        </div>
</template>

<script>
import CourseCard from '../AppComponent/CourseCard.vue';
export default {
    components: {
        CourseCard
    },
    setup() {

    }
}
</script>