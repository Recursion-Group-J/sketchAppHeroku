<template>
    <div id="outer-container" class="vh-100 d-flex justify-content-center">
        <div id="title-container" class="mt-5">
            <h1>Etch a Sketch</h1>
        </div>
        <div id="login-modal" class="col-11 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div id="modal-inner" class="col-12 col-md-10 px-0">
                <div id="login-container" class="my-3">
                    <h2 class="text-center">Sign Up</h2>
                </div>
                <form action="" class="col-12 my-3 px-0">
                    <table class="col-12">
                        <tr>
                            <td class="text-right" nowrap="nowrap">
                                <label for="id">Your Id :</label>
                            </td>
                            <td>
                                <input class="col-12" type="text" id="id" name="id">
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right" nowrap="nowrap">
                                <label for="email">E-mail :</label>
                            </td>
                            <td>
                                <input class="col-12" type="email" id="email" name="email">
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right" nowrap="nowrap">
                                <label for="password">Password :</label>
                            </td>
                            <td>
                                <input class="col-12" type="password" id="password" name="password">
                            </td>
                        </tr>
                    </table>
                    <div id="submit-container" class="col-12 my-3">
                        <div class="d-flex justify-content-center">
                            <button class="col-6 btn btn-lg btn-secondary" type="submit">Sign Up</button>
                        </div>
                    </div>
                    <div id="register-route-container">
                        <p>If you already have an account  
                            <span class="text-primary"><router-link to="/login">Login here</router-link></span
                        ></p>
                    </div>
                </form>
             </div>
            </div>
              
    </div>
</template>

<style scoped>
    #login-modal {
        /* border: dimgray px solid; */
        background-color:rgba(255,255,255,0.95);
        box-shadow: 12px 12px 2px 1px rgba(46, 46, 59, 0.2);
        border-radius: 1rem;
        position: fixed;
        top: 25%;
        left: auto;
        /* color: white; */
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