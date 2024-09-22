import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portofolio from '../views/Portofolio.vue'
import Contact from '../views/Contact.vue'  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: Portofolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router
