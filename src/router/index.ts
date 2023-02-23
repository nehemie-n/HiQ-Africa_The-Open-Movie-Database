import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ResultsView from "@/views/ResultsView.vue";
import MovieView from "@/views/MovieViewModule/MovieView.vue";
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
      path: "/search/:q",
      name: "Results",
      component: ResultsView,
    },
    {
      path: "/movie/:id",
      name: "Movie",
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
