import { createRouter, createWebHistory} from "vue-router";
import SignIn from "@/pages/signin/SignIn";
import SignUp from "@/pages/signup/SignUp";
import HelloWorld from "@/components/HelloWorld";
import store from "@/store/index";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/signin' },
        { path: '/signin', component: SignIn, meta: { requiresUnauth: true } },
        { path: '/signup', component: SignUp, meta: { requiresUnauth: true } },
        { path: '/suppliers', component: HelloWorld, meta: { requiresAuth: true } },
    ],
});

router.beforeEach(function(to, _, next) {
    if (to.meta?.requiresAuth && !store.getters["user/isAuthenticated"]) {
        next('/signin');
    } else if (to.meta?.requiresUnauth && store.getters["user/isAuthenticated"]) {
        next('/suppliers');
    } else {
        next();
    }
});

export default router;
