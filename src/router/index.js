// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",

        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/HrDashboard",
        name: "HrDashboard",
        component: () => import("@/views/HrDashboard.vue"),
        // children: [
        //   {
        //     path: "allorders",
        //     name: "allorders",
        //     component: () => import("@/views/AllOrders.vue"), // Create this component
        //   },
        //   {
        //     path: "allusers",
        //     name: "allusers",
        //     component: () => import("@/views/AllUsers.vue"), // Create this component
        //   },
        //   {
        //     path: "AddBook",
        //     name: "AddBook",
        //     component: () => import("@/views/AddBook.vue"), // Create this component
        //   },
        //   {
        //     path: "alladminbooks",
        //     name: "alladminbooks",
        //     component: () => import("@/views/alladminbooks.vue"), // Create this component
        //   },
        // ],
      },
      {
        path: "/CanidateDashboard",
        name: "CanidateDashboard",
        component: () => import("@/views/CanidateDashboard.vue"),
        // children: [
        //   {
        //     path: "userprofile",
        //     name: "UserProfile",
        //     component: () => import("@/views/UserProfile.vue"),
        //   },
        //   {
        //     path: "myorders",
        //     name: "myorders",
        //     component: () => import("@/views/MyOrders.vue"),
        //   },
        //   {
        //     path: "ReviewComponent/::order_id/:productName",
        //     name: "ReviewComponent",
        //     component: () => import("@/views/ReviewComponent.vue"),
        //   },
        //   {
        //     path: "trackorder",
        //     name: "trackorder",
        //     component: () => import("@/views/TrackOrder.vue"),
        //   },
        // ],
      },
    ],
  },
  {
    path: '/signup', 
    name: 'signup',
    component: () => import('@/views/auth/SignUp.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
