import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home');
const Notes = () => import('@/views/notes/Notes');
const RandomNotes = () => import('@/views/randomnotes/RandomNotes');
const Introduce = () => import('@/views/introduce/Introduce');
const Projects = () => import('@/views/projects/Projects');

const Detail = () => import('@/views/detail/Detail');
const routes = [
  {
    path: '/',
    redirect: {name: "home"}
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: {title: "萧逸博客"}
  },
  {
    path: "/notes",
    component: Notes,
    meta: {title: "萧逸博客 | 笔记"},
  },
  {
    path: "/randomnotes",
    component: RandomNotes,
    meta: {title: "萧逸博客 | 随记"}
  },
  {
    path: "/introduce",
    component: Introduce,
    meta: {title: "萧逸博客 | 简介"}
  },
  {
    path: "/projects",
    component: Projects,
    meta: {title: "萧逸博客 | 项目"}
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "*",
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  // console.log(to);
  //在子组件中meta属性在matched数组中
  document.title = to.matched[0].meta.title || to.query.name
  //console.log(to)
  //必要命令 next()
  next()
});


export default router
