<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';


export default{
  name: 'App',

  components:{
    AppHeader,
    ProjectCard,
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
  <!-- <ProjectCard/> -->

  </div>

</template>

<style scoped>

</style>
