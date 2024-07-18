<script>
import ProjectCard from './components/ProjectCard.vue';

export default{
  name: 'App',

  components:{
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
<h1>Welcome</h1>

<div class="container">
  <div class="row d-flex nowrap row-cols-1 row-cols-md-2 row-cols-lg-3">

    <ProjectCard/>

  </div>
</div>

</template>

<style scoped>

</style>
