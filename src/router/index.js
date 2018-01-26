import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Table from '@/components/table/Table';
import VEvent from '@/components/event/VEvent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/v-event',
      name: 'Event',
      component: VEvent
    }
  ]
})
