<script>
import axios from 'axios';

export default{
  name: 'AppAboutMe',

  data(){
    return{
      name:'',
      email:'',
      message:'',
      errors: {}, /*se ci sono errori di validazione, ritorneremo indietro con una risposta che li indicherà all'utente all'interno del form  */
      loading: false, /*quando il form sta caricando (quando invia la richiesta e torna indietro), ritornerà true quando la risposta viene inviata e false quando ritorna */
      success: false,
    }
  },
  methods: {
    sendMessage(){

      //prepare the request payLoad
      const data = {
        'name':this.name,
        'email':this.email,
        'message':this.message
      }
      console.log(data);

      //send axios post request
      axios.post('http://127.0.0.1:8000/api/lead', data)
      .then(response=>{
        console.log(response);

        if(response.data.success){
          this.success = true;
          this.errors = {};

          this.name='';
          this.email='';
          this.message='';
        }
        else{
          this.success = false;
          this.errors = response.data.errors;
        }
      })
    }

  },


mounted(){
  
}

}
</script>

<template>
  <div class="container-fluid">

    <template v-if="success">
      <div class="alert alert-success" role="alert"><strong>Message received - </strong>We will get back to you as soon as possible.</div>
    </template>

    <div class="row justify-content-center">
      <div class="col-md-8">
       <h1>About Me</h1>

       <form class="py-5" @submit.prevent="sendMessage()">
          <div class="mb-3">
            <label for="InputName" class="form-label">Name</label>
            <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" id="InputName" aria-describedby="nameHelp" v-model="name">

            <p v-for="(error, index) in errors.name" :key="'name-error-' + index" class="text-danger">
              {{ error }}
            </p>
          </div>

          <div class="mb-3">
            <label for="InputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" :class="{'is-invalid' : errors.email}" id="InputEmail" aria-describedby="emailHelp" v-model="email">
            <p v-for="(error, index) in errors.email" :key="'email-error-' + index" class="text-danger">
              {{ error }}
            </p>

            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label class="form-label" for="InputMessage">Message</label>
            <textarea type="textarea" class="form-control" :class="{'is-invalid' : errors.message}" id="InputMessage" rows="8" aria-describedby="messageHelp" v-model="message"></textarea>

            <p v-for="(error, index) in errors.message" :key="'message-error-' + index" class="text-danger">
              {{ error }}
            </p>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>


</template>


<style scoped>

</style>
