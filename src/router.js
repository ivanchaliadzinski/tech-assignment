import { createRouter, createWebHistory} from "vue-router";
import SignIn from "@/pages/signin/SignIn";
import SignUp from "@/pages/signup/SignUp";
// import HelloWorld from "@/components/HelloWorld";
import store from "@/store/index";
import SupplieresList from "@/pages/suppliers/SupplieresList";
import HelloWorld from "@/components/HelloWorld";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/signin' },
        { path: '/signin', component: SignIn, meta: { unauthorised: true } },
        { path: '/signup', component: SignUp, meta: { unauthorised: true } },
        { path: '/suppliers', component: SupplieresList, meta: { authorised: true } },
        {
            path: '/suppliers/:id',
            component: HelloWorld,
            meta: { authorised: true },
            props: true,
        },
    ],
});

router.beforeEach(function(to, _, next) {
    if (to.meta?.authorised && !store.getters["user/isAuthenticated"]) {
        next('/signin');
    } else if (to.meta?.unauthorised && store.getters["user/isAuthenticated"]) {
        next('/suppliers');
    } else {
        next();
    }
});

export default router;
