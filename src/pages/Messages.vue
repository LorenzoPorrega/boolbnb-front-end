<script>
import axios from 'axios';

export default {
  data() {
    return {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    errors: null,
    success: false
    // loading: false,
    };
  },
  methods: {
  onFormSubmit() {
    const url = `http://localhost:8000/api/apartments/${this.$route.params.slug}/messages`;
    axios
      .post(url, this.formData)
      .then(resp => {
        this.success = true;
        this.errors = null;
      })
      .catch(e => {
        this.errors = e.message;
      });
    }
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
          <div class="alert alert-danger" v-if="errors">
            <div class="alert alert-danger">
              Seems like something went wrong: {{ errors }}
            </div>
          </div>
          
          <!-- prevent per evitare il ricaricamento della pagina -->
          <form @submit.prevent="onFormSubmit" v-if="!success">
            <div class="mb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model="formData.name">
            </div>
            
            <div class="mb-3">
              <label>Email</label>
              <input type="text" class="form-control" v-model="formData.email">
            </div>

            <div class="mb-3">
              <label>Message</label>
              <textarea class="form-control" v-model="formData.message"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
          
          <div class="alert alert-success" v-else>
            Thanks for contacting me, i will reply asap!
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

</style>