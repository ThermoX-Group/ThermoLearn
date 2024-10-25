<template>
    <div class=" relative">
        <SidebarDashboard></SidebarDashboard>
        <router-view v-slot="{ Component }"
            class="absolute left-0 w-4/5 mr-10 p-5 h-screen overflow-y-auto overflow-x-hidden">
            <transition>
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import SidebarDashboard from '../SidebarDashboard.vue';
export default {
    components: {
        SidebarDashboard
    },
    setup() {

        return {

        }
    }
}
</script>