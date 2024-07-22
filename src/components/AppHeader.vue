<script>

export default{
  name: 'AppHeader',

  data(){
    return{
    
    }
  },
  methods: {


  },


mounted(){
  
}

}
</script>

<template>
<div class="header_container w-100 mb-3">
    <div class="row">
        <div class="col-12">

            <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
                            <router-link :to="{ name: 'projectList'}" class="nav-link">Projects List</router-link>
                            <router-link :to="{ name: 'techList' }" class="nav-link">Tech List</router-link>
                            <router-link :to="{ name: 'aboutMe' }" class="nav-link">About me</router-link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </div>
</div>

</template>

<style scoped>

</style>
