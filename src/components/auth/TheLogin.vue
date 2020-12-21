<template>

	<v-layout>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title>
				Login
					</v-card-title>
					<v-card-text>
						  <v-form
    ref="form"
    lazy-validation
  >

    <v-text-field
      v-model="login.email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      label="Contraseña"
	  type="password"
      required
    ></v-text-field>


    <v-btn
      :disabled="!(this.login.password && this.login.email)"
      color="success"
      class="mr-4"
	  block
      @click="loginUser"
    >
      Login	
    </v-btn>


  </v-form>
					</v-card-text>
					<v-card-actions>

					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>			
	</v-layout>

</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';

export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email: '',
                password:''
            }
        }
	},
	beforeCreate(){
    this.$store.dispatch('autoLogin')? this.$router.push({path: '/segura'}) : false;
  },
    methods:{
        loginUser(){
			axios.post('http://localhost:3000/api/usuario/login', this.login)
			.then(response => {
				return response.data;
			})
			.then(data => {
				this.$store.dispatch('guardarToken', data.tokenReturn)
				this.$router.push({name: 'Segura'});
				swal("Éxito!!", "Login correcto!", "success");
				console.log(data);
			})
			.catch(error =>{
				swal("Oops!", "Algo salió mal!", "error");
				console.log(error);
				return error;
			})
        }
    }
}
</script>

<style scoped>
	/* Coded with love by Mutiullah Samim */
		body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: #60a3bc !important;
		}
		.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #10a724;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #60a3bc;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #60a3bc !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #60a3bc !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #60a3bc !important;
		}
</style>