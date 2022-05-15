import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DBHtml from '../views/DataBindingHtml.vue'
import DBIT from '../views/DataBindingInputText.vue'
import DBIN from '../views/DataBindingInputNumber.vue'
import DBTextarea from '../views/DataBindingTextarea.vue'
import DBSelect from '../views/DataBindingSelect.vue'
import DBCheckbox from '../views/DataBindingCheckbox.vue'
import DBRadio from '../views/DataBindingRadio.vue'
import DBImage from '../views/DataBindingAttribue.vue'
import DBButton from '../views/DataBindingButton.vue'
import DBClass from '../views/DataBindingClass.vue'
import DBClass2 from '../views/DataBindingClass2.vue'
import DBList from '../views/DataBindingList.vue'
import DBList2 from '../views/DataBindingList2.vue'
import RIF from '../views/RenderingVIf.vue'
import DBStyle1 from '../views/DataBindingStyle.vue'
import DBStyle2 from '../views/DataBindingStyle2.vue'
import eventClick from '../views/EventClick.vue'
import eventChange from '../views/EventChange.vue'
import oneComputed from '../views/oneComputed.vue'
import twoComputed from '../views/twoComputed.vue'
import nestedComponent from '../views/NestedComponent.vue'
import parentComponent from '../views/ParentComponent.vue'
import parentComponent2 from '../views/ParentComponent2.vue'
import parentComponent3 from '../views/ParentComponent3.vue'
import parentComponent4 from '../views/ParentComponent4.vue'
import parentComponent5 from '../views/ParentComponent5.vue'
import slot from '../views/SlotUseModalLayout.vue'
import inject from '../views/ProvideInject.vue'
import mixins from '../views/viewMixins.vue'
import customDirective from '../views/CustomDirective.vue'
import viewPlugin from '../views/viewPlugins.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DBHtml
  },
  {
    path: '/dbInputText',
    name: 'DBInputText',
    component: DBIT
  },
  {
    path: '/dbInputNumber',
    name: 'DBInputNumber',
    component: DBIN
  },
  {
    path: '/dbTextarea',
    name: 'DBTextarea',
    component: DBTextarea
  },
  {
    path: '/dbSelect',
    name: 'DBSelect',
    component: DBSelect
  },
  {
    path: '/dbCheckbox',
    name: 'DBCheckbox',
    component: DBCheckbox
  },
  {
    path: '/dbRadio',
    name: 'DBRadio',
    component: DBRadio
  },
  {
    path: '/dbImage',
    name: 'DBImage',
    component: DBImage
  },
  {
    path: '/dbButton',
    name: 'DBButton',
    component: DBButton
  },
  {
    path: '/dbClass',
    name: 'DBClass',
    component: DBClass
  },
  {
    path: '/dbClass2',
    name: 'DBClass2',
    component: DBClass2
  },
  {
    path: '/dbList',
    name: 'DBList',
    component: DBList
  },
  {
    path: '/dbList2',
    name: 'DBList2',
    component: DBList2
  },
  {
    path: '/RenderingIF',
    name: 'RIF',
    component: RIF
  },
  {
    path: '/dbStyle1',
    name: 'DBStyle1',
    component: DBStyle1
  },
  {
    path: '/dbStyle2',
    name: 'DBStyle2',
    component: DBStyle2
  },
  {
    path: '/eventClick',
    name: 'eventClick',
    component: eventClick
  },
  {
    path: '/eventChange',
    name: 'eventChange',
    component: eventChange
  },
  {
    path: '/oneComputed',
    name: 'oneComputed',
    component: oneComputed
  },
  {
    path: '/twoComputed',
    name: 'twoComputed',
    component: twoComputed
  },
  {
    path: '/nestedComponent',
    name: 'nestedComponent',
    component: nestedComponent
  },
  {
    path: '/parentComponent',
    name: 'parentComponent',
    component: parentComponent
  },
  {
    path: '/parentComponent2',
    name: 'parentComponent2',
    component: parentComponent2
  },
  {
    path: '/parentComponent3',
    name: 'parentComponent3',
    component: parentComponent3
  },
  {
    path: '/parentComponent4',
    name: 'parentComponent4',
    component: parentComponent4
  },
  {
    path: '/parentComponent5',
    name: 'parentComponent5',
    component: parentComponent5
  }
  ,
  {
    path: '/slot',
    name: 'slot',
    component: slot
  }
  ,
  {
    path: '/inject',
    name: 'inject',
    component: inject
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: mixins
  }
  ,
  {
    path: '/customDirective',
    name: 'customDirective',
    component: customDirective
  },
  {
    path: '/plugin',
    name: 'plugin',
    component: viewPlugin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
