import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/Pages/MainPages/MainPage.vue"

// dashboard
import DashboardPage from "./components/DashboardPages/pages/DashboardPage.vue";
import EditProfile from "./components/DashboardPages/pages/EditProfile.vue";
import CounterPage from "./components/DashboardPages/pages/CounterPage.vue";
import AddCourse from "./components/DashboardPages/pages/AddCourse.vue";
import CoursePage from "./components/DashboardPages/pages/CoursePage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainPage },
        {
            path: '/dashboard', meta: { hideHeader: true }, component: DashboardPage, children: [
                {path:"",component:EditProfile},
                {path:"counterPage",component:CounterPage},
                {path:"editProfile",component:EditProfile},
                {path:"AddCourse",component:AddCourse},
                {path:"CoursePage",component:CoursePage},
            ]
        }
    ]
})

export default router