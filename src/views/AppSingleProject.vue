<script>

import axios from 'axios';

export default{
  name: 'AppSingleProject',

  data(){
    return{
      base_url: 'http://127.0.0.1:8000/',
      project: null,
    }
  },
  methods: {


  },


mounted(){

    axios
      .get(this.base_url + 'api/projects/' + this.$route.params.id)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          // save the response into the vue instance

          console.log(response.data.project);
          this.project = response.data.project

        } else {
          console.log(response.data.message);
          // redirect to a 404 
          this.$router.push({ name: 'not-found' });
        }

      })
  
}

}
</script>


<template>
    <div v-if="project" class="singleProject_container">
      <div class="row justify-content-center">
        <div class="card p-2" style="width: 50rem;">
          <div v-if="!project.immagine.startsWith('http')">
            <img :src="base_url + 'storage/'+ project.immagine" alt="" loading="lazy" class="card_img card-img-top" >
          </div>
          <div v-else>
            <img :src="project.immagine" alt="" loading="lazy" class="card_img card-img-top"  >
          </div>
          <div class="card-body">
            <h5 class="card-title">{{project.titolo}}</h5>
            <p class="card-text">{{project.descrizione}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>