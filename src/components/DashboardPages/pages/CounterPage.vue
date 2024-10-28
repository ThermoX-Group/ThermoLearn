<template>
    <div class="bg-base-300">
        <Teleport to="title">ThermoLearnDash | پیشخوان</Teleport>
        <h1 class="font-extrabold text-4xl">پیشخوان</h1>
        <p class="text-2xl font-semibold mb-5 mt-3">{{ userDatas.username }} عزیز،خوش اومدی😊</p>
        <div>
            <h2 class="text-3xl mb-3">اطلاعات کاربری شما:</h2>
            <div class="grid grid-cols-1 gap-10 text-white font-bold md:grid-cols-2 xl:grid-cols-4">
                <InformationCard v-for="card in cardsData" :class="card.bgColor" :key="card.title">
                    <template #icon>
                        <i
                            :class="`fa-solid ${card.icon} ${card.iconBg} text-2xl h-full w-14 flex justify-center items-center rounded-lg`"></i>
                    </template>
                    <template #text>
                        <p class="text-sm">{{ card.title }}</p>
                        <p class="text-xl">{{ card.amount }}</p>
                    </template>
                </InformationCard>
            </div>
            <div class="grid grid-cols-1 items-start gap-5 mt-5 place-content-center md:grid-cols-2">
                <LastCourses></LastCourses>
                <LastQuestions></LastQuestions>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';
import InformationCard from '../InformationCard.vue';
import LastCourses from '../LastCourses.vue';
import LastQuestions from '../LastQuestions.vue';

export default {
    components: {
        InformationCard,
        LastCourses,
        LastQuestions
    },
    setup() {
        let userDatas = inject("userDatas")

        const cardsData = ref([
            { bgColor: 'bg-yellow-400', icon: 'fa-money-bill',iconBg:"bg-yellow-300", title: 'مجموعه پرداخت‌ها', amount: '400,000 تومان' },
            { bgColor: 'bg-blue-400', icon: 'fa-rocket',iconBg:"bg-blue-300", title: 'دوره‌های من', amount: '10 دوره' },
            { bgColor: 'bg-red-400', icon: 'fa-ticket',iconBg:"bg-red-300", title: 'مجموع تیکت‌ها', amount: '0 تیکت' },
            { bgColor: 'bg-green-400', icon: 'fa-bitcoin-sign',iconBg:"bg-green-300", title: 'موجودی حساب', amount: '0 تومان' },
        ]);

        return {
            userDatas,
            cardsData
        }
    }
}
</script>