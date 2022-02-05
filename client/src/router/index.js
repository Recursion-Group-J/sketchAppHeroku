import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sketchpage from '../views/Sketchpage.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path:'/sketch',
    name: 'Sketchpage',
    component: Sketchpage
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp
  }

]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to,from, next)=> {
  const isLoggedIn = store.state.auth.isLoggedIn;
  const token = localStorage.getItem("access");
  console.log("to.path", to.path);
  console.log("isLoggedIn=", isLoggedIn);

  if (to.matched.some(record => record.meta.requireAuth)) {
    if(! isLoggedIn){
      console.log("User is not logged in");
      if(token != null){
        console.log("Try to renew user info");
        store
          .dispatch("auth/renew")
          .then( () => {
            console.log("Succeded to renew. So free to next");
            next();
          })
          .catch( () => {
            forceToLoginPage(to);
          });
      } else {
        forceToLoginPage(to);
      }
    } else {
      console.log("already logged in ");
      next();
    }
  } else {
    console.log("go to public page");
    next();
  }
})


function forceToLoginPage(to){
  console.log("Forc to login page");
  router.replace({
    path:"/login",
    query: {next: to.fullPath}
  });
}

export default router
