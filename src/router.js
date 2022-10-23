import { createRouter, createWebHistory} from "vue-router";
import SignIn from "@/pages/signin/SignIn";
import SignUp from "@/pages/signup/SignUp";
import store from "@/store/index";
import SuppliersList from "@/pages/suppliers/SuppliersList";
import SupplierDetails from "@/pages/suppliers/SupplierDetails";
import QuotesList from "@/pages/quotes/QuotesList";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/signin' },
        { path: '/tech-assignment/', redirect: '/signin' },
        { path: '/signin', component: SignIn, meta: { unauthorised: true } },
        { path: '/signup', component: SignUp, meta: { unauthorised: true } },
        { path: '/suppliers', component: SuppliersList, meta: { authorised: true } },
        { path: '/quotes', component: QuotesList, meta: { authorised: true } },
        {
            path: '/suppliers/:id',
            component: SupplierDetails,
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
