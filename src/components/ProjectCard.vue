<script>
import axios from 'axios';

export default{
  name: 'ProjectCard',

  data(){
    return{
      base_url: 'http://127.0.0.1:8000',
      projects: '',
    }
  },


mounted(){
  axios
  .get(this.base_url+ '/api/projects')
  .then(response=> {
    console.log(response);
    this.projects = response.data.projects;
  })
}

}
</script>

<template>

<div class="row d-flex nowrap row-cols-1 row-cols-md-2 row-cols-lg-3">

    <!-- CARD -->
    <div class="col my-2" v-for="project in projects.data">
        <div class="card h-100">

        <template v-if="!project.immagine.startsWith('http')">
        <img :src="base_url + '/storage/'+ project.immagine" alt="" loading="lazy" class="card_img card-img-top" >
        </template>
        <template v-else>
            <img :src="project.immagine" alt="" loading="lazy" class="card_img card-img-top"  >
        </template>

        <div class="card-body">
            <h5 class="card-title"> {{ project.titolo }}</h5>
            <p class="card-text">Tecnologie: <span v-for="tech in project.technologies">{{ tech.name }} - </span>
            </p>
            <p class="card-text">
            Descrizione:
            {{ project.descrizione }}
            </p>
            
        </div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>


    <!-- PAGINATION  -->
      <nav aria-label="Page navigation">
      <ul class="pagination    ">
        <li v-for="page in projects.links" class="page-item active" aria-current="page">
          <a v-if="page.label.startsWith('&')" class="page-link" href="#">Previous</a>
          <a v-else-if="page.label.startsWith('Next')" class="page-link" href="#">Next</a>
          <a v-else class="page-link" href="#">{{ page.label }}</a>
        </li>
      </ul>
    </nav>

</div>


</template>

<style scoped>
.card_img{
  height: 400px;
  object-fit: cover;
}
</style>
