import { createStore } from 'vuex'
import { apiService } from '../util/api.service';

const authModule = {
  namespaced : true,
  state : {
    username: "",
    isLoggedIn: false
  },
  mutations : {
    set(state,payload){
      state.username = payload.user.username;
      state.isLoggedIn = true;
    },
    clear(state){
      state.username = "";
      state.isLoggedIn = false;
    }
  },
  actions : {
    async login(context,payload) {
      let data = {
      username: payload.username,
      password: payload.password
      };
      console.log(JSON.stringify(data))
      let response = await apiService("http://127.0.0.1:8000/api/auth/jwt/create/","POST",data);
      console.log(response)
      localStorage.setItem("access",response.access);
      return context.dispatch("renew");
    },
    logout(context){
      localStorage.removeItem("access");
      context.commit("clear");
    },
    async renew(context){
      let response = await apiService("http://127.0.0.1:8000/api/auth/users/me/","GET");
      console.log(response);
      const user = response; 
      console.log(user);
      console.log(user.username);
      context.commit("set",{user: user})
    },
    async register(context,payload) {
      console.log("payload ",payload)
      let data = {
        username : payload.username,
        password : payload.password
      }
      let response = await apiService("http://127.0.0.1:8000/api/user/register/","POST",data);
      console.log(response)
    }
  }
}

const workModule = {
  state: {
    work:{},
  },
  mutations: {
    updateWorkCoordinate(state,payload){
      state.work = payload;
    }
  },
}

export default createStore({
  modules: {
    auth : authModule,
    work : workModule
  }
})
