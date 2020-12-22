<template>
<div>
    <the-menu></the-menu>
    <the-login></the-login>
</div>
</template>

<script>
import TheLogin from '../components/auth/TheLogin.vue'
import TheMenu from '../components/TheMenu.vue'
export default {
  components: { TheLogin, TheMenu },
    
}
</script>