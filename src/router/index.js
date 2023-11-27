import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ListUsers from '../views/ListUsers.vue';
import FindUser from '../views/FindUser.vue';
import UpdateUser from '../views/UpdateUser.vue';
import DeleteUser from '../views/DeleteUser.vue';
import CreateUser from '../views/CreateUser.vue';
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage
  },
  {
    path: '/list-users',
    name: 'ListUsers',
    component: ListUsers
  },
  {
    path: '/find-user',
    name: 'FindUser',
    component: FindUser
  },
  {
    path: '/update-user',
    name: 'UpdateUser',
    component: UpdateUser
  },
  {
    path: '/delete-user',
    name: 'DeleteUser',
    component: DeleteUser
  },
  {
    path:'/Create-user',
    name: 'CreateUser',
    component: CreateUser
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  });

export default router
