<script>
import axios from 'axios';

export default{
  name: 'AppTechList',

  data(){
    return{
      base_url: 'http://127.0.0.1:8000',
      techs: '',
      currentPage: 1,
    }
  },
  methods: {
    apiConnection(){
      axios
      .get(this.base_url+ '/api/technologies?page='+this.currentPage)
      .then(response=> {
      console.log(response);
      this.techs = response.data.techs;
    })
    },

    nextPage() {
      if(this.currentPage < this.techs.last_page){
        this.currentPage++;  
      }
      this.apiConnection();
    },
    prevPage() {
      if(this.currentPage > 1){
        this.currentPage--;
      }
      this.apiConnection();
    },
    labelPage(page){
      this.currentPage = this.projects.links[page.label].label;
      this.apiConnection();
    }

  },


mounted(){
  this.apiConnection();
}

}
</script>

<template>
  <div class="container">
    <div class="row d-flex nowrap row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-4" v-for="tech in techs.data">
        <div class="card h-100">
          <div class="card-body">

            <h3 class="card-title">{{tech.name}}</h3>
            <h6 class="card-subtitle mb-2 text-body-secondary"> <i :class=tech.icon></i></h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul v-for="proj in tech.projects">
              <li>
                <h5> {{ proj.titolo }} </h5>
                <img :src="base_url + '/storage/'+ proj.immagine" alt="" loading="lazy" class="card_img card-img-bottom" >
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

        <!-- PAGINATION  -->
        <div class="pagination_container w-100 my-3">
        <nav aria-label="Page navigation">
          <ul class="pagination    ">
            <li v-for="page in techs.links" class="page-item active" aria-current="page">
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
  img{
    width: 200px;
    height: 100px;
  }
</style>
