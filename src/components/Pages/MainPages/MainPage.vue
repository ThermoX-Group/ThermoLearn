<template>
    <div class="container m-auto">
        <Teleport to="title">ThermoLearn | صفحه اصلی</Teleport>
        <TopBanner></TopBanner>
    </div>
</template>

<script>
import TopBanner from '../../AppComponent/TopBanner.vue';

export default {
    components: {
        TopBanner
    },
    setup() {
        return {

        }
    }
}
</script>