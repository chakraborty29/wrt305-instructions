import { createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Instructions from '../views/Instructions.vue';
import UsabilityReport from '../views/UsabilityReport.vue';
import Design from '../views/DesignMemo.vue';
import Team from '../views/Team.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions,
  },
  {
    path: '/usability',
    name: 'UsabilityReport',
    component: UsabilityReport,
  },
  {
    path: '/design',
    name: 'design',
    component: Design,
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
