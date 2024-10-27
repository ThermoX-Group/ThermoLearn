<template>
    <div class=" relative">
        <SidebarDashboard></SidebarDashboard>
        <DashHeader></DashHeader>
        <router-view v-slot="{ Component }"
            class="absolute left-0 w-full mr-10 p-5 h-screen overflow-y-auto overflow-x-hidden lg:w-3/4 xl:w-4/5">
            <transition>
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import DashHeader from '../DashHeader.vue';
import SidebarDashboard from '../SidebarDashboard.vue';

export default {
    components: {
        SidebarDashboard,
        DashHeader
    },
    setup() {

        return {

        }
    }
}
</script>