import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home');
const Buycar = () => import('views/Buycar');
const Category = () => import('views/Category');
const Profile = () => import('views/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/buycar',
    name: 'buycar',
    component: Buycar
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
