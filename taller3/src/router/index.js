import { createRouter, createWebHashHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import ReviewsView from "../views/ReviewsView.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/:id/reviews",
    name: "reviews",
    component: ReviewsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
