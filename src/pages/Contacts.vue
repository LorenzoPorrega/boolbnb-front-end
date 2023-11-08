<script>
import axios from 'axios';

export default {
  data() {
    return {
    // formData: {
    //   name: "",
    //   email: "",
    //   message: "",
    // },
    // errors: null,
    // success: null,
    // loading: false,
    };
  },
  methods: {
  // onFormSubmit() {
  //   axios
  //     .post("http://localhost:8000/api/contacts", this.formData)
  //     .then(resp => {
  //       this.success = true;
  //       this.errors = null;
  //     })
  //     .catch(e => {
  //       this.errors = e.response?.data?.message ?? e.message;
  //     });
  // }
  }
};
</script>

<template>

  <div class="container py-5 text-center" style="margin-top: 81px;">
    <div class="row">
      <div class="col-7 mx-auto">
        <div class="my-3">
          <h1>Welcome to the CONTACTS section!</h1>
          <h3>Here's how you can contact me.</h3>
        </div>
        
        <div class="my-5">
          <!-- prevent per evitare il ricaricamento della pagina -->
          <!-- <form @submit.prevent="onFormSubmit" v-if="!success"> -->
          <form>
            <div class="mb-3">
              <label>Name</label>
              <!-- <input type="text" class="form-control" v-model="formData.name"> -->
              <input type="text" class="form-control">
            </div>
            
            <div class="mb-3">
              <label>Email</label>
              <!-- <input type="text" class="form-control" v-model="formData.email"> -->
              <input type="text" class="form-control">
            </div>

            <div class="mb-3">
              <label>Message</label>
              <!-- <textarea type="text" class="form-control" v-model="formData.message"></textarea> -->
              <textarea type="text" class="form-control"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
          
          <!-- <div class="alert altert-success" v-else>
            Grazie per avermi contattato, risponderò asap!
          </div>

          <div class="alert altert-danger" v-if="errors">
          <div class="alert altert-danger">
            Sembra che qualcosa sia andato storto: {{ errors }}
          </div> -->

        </div>

      </div>
    </div>
    
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

</style>