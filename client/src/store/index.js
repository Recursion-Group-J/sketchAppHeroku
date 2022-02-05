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
    login(context,payload) {
      let data = {
      username: payload.username,
      password: payload.password
      };
      console.log(JSON.stringify(data))
      return apiService("http://127.0.0.1:8000/api/auth/jwt/create/","POST",JSON.stringify(data))
      .then(response => {
        console.log(response)
        localStorage.setItem("access",response.data.access);
        return context.dispatch("renew");
      });
    },
    logout(context){
      localStorage.removeItem("access");
      context.commit("clear");
    },
    renew(context){
      return apiService("http://127.0.0.1:8000/api/auth/users/me/","GET").then(response => {
        const user = response.data;
        context.commit("set",{user: user})
      });
    }
  }
};

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
