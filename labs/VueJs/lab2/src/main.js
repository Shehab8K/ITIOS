import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import homeComponent from './components/HomeComponent.vue';
import errorComponent from './components/ErrorComponent.vue';
import { createWebHistory,createRouter } from 'vue-router';
import formComponent from './components/FormComponent.vue';
import userDetailsComponent from './components/UserDetailsComponent.vue';
import updateComponent from './components/UpdateComponent.vue';
const routes = [
    {
        path:'/',component:homeComponent,
    },
    {
        path:'/user/create',component:formComponent,
    },
    {
        path:'/users/:id',component:userDetailsComponent
    },
    {
        path:'/users/update/:id',component:updateComponent
    },
    {
        path:'/:NotFound(.*)*',component:errorComponent,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')