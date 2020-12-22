<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TheMenu></TheMenu>
    <HelloWorld/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheMenu from '@/components/TheMenu.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheMenu
  }
}
</script>
