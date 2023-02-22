import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ResultsView from "@/views/ResultsView.vue";
import MovieView from "@/views/MovieView.vue";
import AccountView from "@/views/AccountModule/AccountView.vue";
import BookmarksView from "@/views/AccountModule/BookmarksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: HomeView,
    },
    {
      path: "/search",
      component: ResultsView,
    },
    {
      path: "/search/:id",
      component: MovieView,
    },
    {
      path: "/account",
      component: AccountView,
      children: [
        {
          path: "bookmarks",
          component: BookmarksView,
        },
      ],
    },
  ],
});

export default router;
