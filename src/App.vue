<script>
import AppHeader from './components/AppHeader.vue';




export default{
  name: 'App',

  components:{
    AppHeader,
 
  },

  data(){
    return{

    }
  },


mounted(){

}

}
</script>

<template>

  <div class="app_Container w-100">

    <AppHeader />
    <router-view></router-view>

  </div>

</template>

<style scoped>

</style>
