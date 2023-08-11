import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBinding2 from '../views/DataBinding2.vue'
import Nested from '../components/NestedComponent.vue'
import Child from '../views/ChildComponent.vue'
import Parent from '../views/ParentComponent.vue'
import Child2 from '../views/ChildComponet2.vue'
import Parent2 from '../views/ParentComponent2.vue'
import Child3 from '../views/ChildComponent3.vue'
import Parent3 from '../views/ParentComponent3.vue'
import Child4 from '../views/ChildComponent4.vue'
import Parent4 from '../views/ParentComponent4.vue'
import Child5 from '../views/ChildComponent5.vue'
import Parent5 from '../views/ParentComponent5.vue'
import Composition from '../views/CompositionAPI.vue'
import Provid from '../views/CompositionAPIProvide.vue'
import Inject from '../views/CompostionAPIInject.vue'
import Inject1 from '../views/CompositionAPIInject1.vue'
import NaverLogin1 from '../views/NaverLogin1.vue'
import Vuelogin from '../views/Vuelogin.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'databinding',
    component:DataBinding
  },
  {
    path: '/databinding2',
    name: 'databinding2',
    component:DataBinding2
  },
  {
    path: '/nested',
    name: 'nested',
    component:Nested
  },
  {
    path: '/child',
    name: 'child',
    component:Child
  },
  {
    path: '/parent',
    name: 'parent',
    component:Parent
  },
  {
    path: '/child2',
    name: 'child2',
    component:Child2
  },
  {
    path: '/parent2',
    name: 'parent2',
    component:Parent2
  },
  {
    path: '/child3',
    name: 'child3',
    component:Child3
  },
  {
    path: '/parent3',
    name: 'parent3',
    component:Parent3
  },
  {
    path: '/child4',
    name: 'child4',
    component:Child4
  },
  {
    path: '/parent4',
    name: 'parent4',
    component:Parent4
  },
  {
    path: '/child5',
    name: 'child5',
    component:Child5
  },
  {
    path: '/parent5',
    name: 'parent5',
    component:Parent5
  },
  {
    path: '/composition',
    name: 'composition',
    component:Composition
  }
  ,
  {
    path: '/provid',
    name: 'provid',
    component:Provid
  }
  ,
  {
    path: '/inject',
    name: 'inject',
    component:Inject
  }
  ,
  {
    path: '/inject1',
    name: 'inject1',
    component:Inject1
  },
  {
    path: '/naverlogin1',
    name: 'naverlogin1',
    component:NaverLogin1
  }
  ,
  {
    path: '/vuelogin',
    name: 'vuelogin',
    component:Vuelogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
