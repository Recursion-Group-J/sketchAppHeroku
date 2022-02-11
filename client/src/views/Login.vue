<template>
    <div id="outer-container" class="vh-100 d-flex justify-content-center">
        <div id="title-container" class="mt-5">
            <h1>Etch a Sketch</h1>
        </div>
        <div id="login-modal" class="col-11 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div id="modal-inner" class="col-12 col-md-10 px-0">
                <div id="login-container" class="my-3">
                    <h2 class="text-center">Login</h2>
                </div>
                <form @submit.prevent="submitLogin" class="col-12 my-3 px-0">
                    <table class="col-12">
                        <tr>
                            <td class="text-right" nowrap="nowrap">
                                <label for="user-name">User Name :</label>
                            </td>
                            <td>
                                <input v-model="form.username" class="col-12" type="text" id="user-name" name="user-name" required>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right" nowrap="nowrap">
                                <label for="password">Password :</label>
                            </td>
                            <td>
                                <input v-model="form.password" class="col-12" type="password" id="password" name="password" required>
                            </td>
                        </tr>
                    </table>
                    <div id="submit-container" class="col-12 my-3">
                        <div class="d-flex justify-content-center">
                            <button class="col-6 btn btn-lg btn-secondary" type="submit">Login</button>
                        </div>
                    </div>
                    <div id="register-route-container">
                        <p>If you have not registered yet, please 
                            <span class="text-primary"><router-link to="/signup">Sign up here</router-link></span
                        ></p>
                    </div>
                </form>
             </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Login',
  data(){
      return  {
          form : {
              username : "",
              password : ""
          }
      };
  },
  methods : {
      submitLogin : function (){
          this.$store
            .dispatch("auth/login", {
                username : this.form.username,
                password : this.form.password
            })
            .then( ()=> {
                console.log("Login succedes");
                const next = this.$route.query.next || "/";
                this.$router.replace(next);
            })
      }
  }

}
</script>

<style scoped>
    #login-modal {
        background-color:rgba(255,255,255,0.95);
        box-shadow: 12px 12px 2px 1px rgba(46, 46, 59, 0.2);
        border-radius: 1rem;
        position: fixed;
        top: 25%;
        left: auto;
    }
    #outer-container {
        background-color: #F5B0CB;   
    }
    #title-container h1{
        font-size: 3rem;
        color: ghostwhite;
        font-family: 'Indie Flower', cursive;
    }
</style>