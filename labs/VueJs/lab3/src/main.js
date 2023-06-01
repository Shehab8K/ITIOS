import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createWebHistory,createRouter } from 'vue-router';
import homeComponent from './components/HomeComponent.vue';
import userDetailsComponent from './components/UserDetailsComponent.vue';

const routes = [
    {
        path:'/',component:homeComponent,
    },
    {
        path:'/users/:id',component:userDetailsComponent
    },

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


const app =createApp(App).use(router)
app.directive("theme",{
    mounted(el,binding){
        if(binding.value === 'primary'){
            el.style.color = 'blue'
        }else if(binding.value === 'warning'){
            el.style.color = 'yellow'
        }else if(binding.value === 'danger'){
            el.style.color = 'red'
        }else{
            el.style.color = 'purple'
        }
    }
})
app.use(router).mount('#app')
