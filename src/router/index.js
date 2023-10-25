import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfigurateurView from '../views/ConfigurateurView.vue'
import LoginView from '../views/LoginView.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'home',                   component: HomeView,               },
    { path: '/configurateur',           name: 'configurateur',          component: ConfigurateurView,      },
    { path: '/login',                   name: 'login',                  component: LoginView,              },
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
router.beforeEach( (to, from, next) =>{
  if(to.name == "home" || to.name === "login"){ // Si page d'accueil demandée, on autorise
    next()
  }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
    if(pb.authStore.model != null){ // Utilisateur connecté => OK
      next()
    }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
      router.push({name:"home"})
    }
  }
})

export default router
