<template>
    <MainHeader v-if="!hideHeader"></MainHeader>
    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
import MainHeader from './components/AppComponent/MainHeader.vue';
import { computed, onMounted, provide, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        MainHeader
    },
    setup() {
        const route = useRoute()
        const hideHeader = computed(() => route.meta.hideHeader);

        let userDatas = ref("")
        let courses = ref('')
        function getuserDataFunc() {
            fetch("https://thermolearn-72bd8-default-rtdb.firebaseio.com/userdatas/-O9V3agRnwXBh6BSmtYc.json")
                .then(res => res.json())
                .then(data => {
                    userDatas.value = data
                })
                .catch(err => {
                    userDatas.value = "empty"
                })
        }
        function getCourses() {
            fetch(`https://thermolearn-72bd8-default-rtdb.firebaseio.com/courses.json`)
                .then(res => res.json())
                .then(data => {
                    courses.value = Object.entries(data)
                })
        }
        onMounted(() => {
            getuserDataFunc()
            getCourses()
        })

        provide("userDatas", userDatas)
        provide("getuserDataFunc", getuserDataFunc)
        provide("courses", courses)
        provide("getCourses", getCourses)
        return {
            hideHeader
        }
    }
}
</script>

<style>
.page-transition-enter-active,
.page-transition-leave-active {
    transition: opacity 0.5s ease;
}

.page-transition-enter,
.page-transition-leave-to {
    opacity: 0;
}
</style>