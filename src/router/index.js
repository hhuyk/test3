import Vue from 'vue'
import router from 'vue-router'
import login from './components/login'

Vue.use(router)

const router =new router(
    { path:'/',redirect:'/login' },
    { path :'/login',name:'Login' , component :login}
)


export default router