import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import AddStudent from '../views/AddStudent.vue'
import StudentList from '../views/StudentList.vue'
import StudentDetail from '../views/StudentDetail.vue'

import { auth } from '@/middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kayit-ol',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
  },
  {
    path: '/giris',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/profilim',
    name: 'profile',
    component: Profile,
    meta: {
      middleware: [ auth ]
    }
  },
  {
    path: '/admin/ogrenci-ekle',
    name: 'AddStudent',
    component: AddStudent,
    meta: {
      middleware: [ auth ]
    }
  },
  {
    path: '/admin/ogrenci-listesi',
    name: 'studentList',
    component: StudentList
  },
  {
    path: '/admin/ogrenci-listesi/:id',
    name: 'studentDetail',
    component: StudentDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    next,
    router
  }
  return middleware[0]({
    ...context
  })
})

export default router
