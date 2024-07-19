<script>
import AppHeader from './components/AppHeader.vue';
import AppProjectList from './views/AppProjectList.vue';
import AppTechList from './views/AppTechList.vue';


export default{
  name: 'App',

  components:{
    AppHeader,
    AppProjectList,
    AppTechList
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
