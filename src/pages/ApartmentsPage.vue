<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data;
          console.log(results);
        })
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="container-fluid text-center">
    <h1>Apartments</h1>

    <!-- CTA section -->
    <div class="container-fluid p-3 justify-content-center border-top">
      <div class="row my-3 justify-content-center">
        <div class="col text-center">
          <div class="card border-0">
            <div class="card-body">
                <div class="card-title">
                  <h4 class="mb-3">News & Discounts</h4>
                </div> 
                <div class="row justify-content-center">
                  <div class="col-md-4">
                    <p class="small color-text">
                      Find your coziest escape ever & Get instant discounts. 
                      Discover cabins, vacation homes, and more!
                    </p>
                    <button type="button" class="btn btn-primary border-0 my-3">
                      Get in Touch
                    </button><br>
                    <img src="https://i.imgur.com/pC6AgYC.jpg" class="img-fluid" width="300">
                  </div>
                </div>
            </div>                       
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.color-text{
    color:#757575 !important;
}

button {
  background-color: #3535ec !important;
}

</style>