<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Etch a Sketch</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/"> Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/sketch">Sketch</router-link>        
      </li>
    </ul>
    <ul v-if="isLoggedin" class="navbar-nav ml-auto">
        <li  class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
      
    </ul>
    <ul v-else class="navbar-nav ml-auto">
        <li  class="nav-item"><a href="#"> Welcome!! {{username}} </a></li>
        <li  class="nav-item"><router-link @click="logout" to="/" class="nav-link">Logout</router-link></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data(){
      return  {
          
      };
  },
  computed : {
      isLoggedin : function (){
          return !this.$store.state.auth.isLoggedIn;
      },
      username : function(){
          console.log(this.$store.state.auth.username);
          return this.$store.state.auth.username;
      }
  },
  methods : {
      logout : function(){
          this.$store.dispatch("auth/logout");
      }
  }

}
</script>


<style scoped>
 nav{
  position: relative;
 }
</style>