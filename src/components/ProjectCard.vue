<script>
import axios from 'axios';

export default{
  name: 'ProjectCard',

  data(){
    return{
      base_url: 'http://127.0.0.1:8000',
      projects: '',
      currentPage: 1,
    }
  },
  methods: {

    apiConnection(){
      axios
      .get(this.base_url+ '/api/projects?page='+this.currentPage)
      .then(response=> {
      console.log(response);
      this.projects = response.data.projects;
    })
    },

    nextPage() {
      // DA FIXARE NEI CASI MIN MAX PAGES
      this.currentPage = this.currentPage + 1;  
      this.apiConnection();
    },
    prevPage() {
      // DA FIXARE NEI CASI MIN MAX PAGES
      this.currentPage = this.currentPage - 1;
      this.apiConnection();
    },
    labelPage(page){
      // console.log(this.projects.links[this.projects.links[2].label].label);
      this.currentPage = this.projects.links[page.label].label;
      this.apiConnection();
    }
    //OPPURE:
  //   labelPage(label) {
  //     this.projects.links.forEach(link => {
  //     if (link.label === label) {
  //     this.currentPage = link.url.split('?page=')[1];
  //     this.apiConnection();
  //   }
  // });
  // }
  },


mounted(){
  this.apiConnection();
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
      <div class="pagination_container w-100 my-3">
        <nav aria-label="Page navigation">
          <ul class="pagination    ">
            <li v-for="page in projects.links" class="page-item active" aria-current="page">
              <button v-if="page.label.startsWith('&')" @click="prevPage" class="page-link">Previous</button>
              <button v-else-if="page.label.startsWith('Next')" @click="nextPage" class="page-link">Next</button>
              <button v-else @click="labelPage(page)" class="page-link">{{ page.label }}</button>
            </li>
          </ul>
        </nav>
      </div>

</div>


</template>

<style scoped>
.card_img{
  height: 400px;
  object-fit: cover;
}

/* AAAAA   JUST FOR TEST VIEW FIRST PROJECT(CAT STRAY) IMAGE  */
.card_img:first-child{
    object-position: right;
}
</style>
