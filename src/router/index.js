import { createWebHistory, createRouter } from "vue-router";
import ContactBook from '@/views/ContactBook.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true 
  },
    
];

const router = createRouter({
  history: createWebHistory(import.meta.env.baseURL),
  routes,
});

export default router;