import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RetreatsPage from '../views/RetreatsPage.vue';
import CommunityPage from '../views/CommunityPage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import EnrollPage from '../views/EnrollPage.vue';
import RetreatDetailsPage from '../views/RetreatDetailsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/retreats', name: 'Retreats', component: RetreatsPage },
    { path: '/community', name: 'Community', component: CommunityPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/enroll', name: 'Enroll', component: EnrollPage },
    { path: '/retreat-details', name: 'RetreatDetails', component: RetreatDetailsPage },
  ],
});

export default router;