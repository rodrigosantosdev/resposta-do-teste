import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro'
import Lista from '../views/Lista'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'cadastro',
      component: Cadastro 
   },
   {
      path: '/lista',
      name: 'lista',
      component: Lista
   }
]

export default new VueRouter ({
   routes
})
