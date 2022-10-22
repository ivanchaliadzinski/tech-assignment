import { createRouter, createWebHistory} from "vue-router";
import SignIn from "@/pages/signin/SignIn";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/signin' },
        { path: '/signin', component: SignIn, meta: { authorised: false } },
    ],
});
//
// router.beforeEach(function (to, _ , next) {
//
// })

export default router;
