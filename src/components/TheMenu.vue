<template>
    <v-flex
    class="text-center mb-5">



    <div id="nav">
    <v-row
    justify="end"
    class="mx-auto">

        <router-link :to="{name: 'Home'}" class="mr-5 ml-5" exact>Inicio</router-link>

        <!-- <template v-if="!this.$store.state.usuario"> -->
        <template>    
            <router-link :to="{name: 'Login'}" class="mr-5 ml-5 " exact>Login</router-link>    
        </template>

        <!-- <template v-else>
            <router-link :to="{name: 'Segura'}" class="mr-5 ml-5 " exact>Área de gestión</router-link>    
        </template> -->

    </v-row>
    </div>
    </v-flex>  

</template>

<script>
export default {
    name: 'TheMenu',
}
</script>

<style scoped>
#nav a.router-link-exact-active{
    color: #42b983;
}

</style>