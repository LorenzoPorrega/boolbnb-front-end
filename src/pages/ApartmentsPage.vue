<script>
import axios from 'axios';
import Card from "../components/Card.vue";
import DestinationsCarousel from "../components/DestinationsCarousel.vue";
import FeaturedApartments from "../components/FeaturedApartments.vue";
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
      apartments: []
    }
  },
  components: {
    Card,
    DestinationsCarousel,
    FeaturedApartments
  },
  mounted() {
/*     filterApartment();
 */  }
}

</script>

<template>
  <div class="container-fluid px-0 text-center">

    <!-- Jumbo Section -->
    <div class="text-center jumbotron">
      <div class="d-flex justify-content-center align-items-center h-100 bg-transparent">
        <div class="text-white bg-transparent">
          <h1 class="mb-3 bg-transparent">Welcome to Boolbnb</h1>
          <h4 class="mb-3 bg-transparent">Team 3</h4>
        </div>
      </div>
    </div>

    <!-- Featured Apartments Section -->
    <!-- <FeaturedApartments></FeaturedApartments> -->

    <!-- Regular Apartments Section -->
    <div class="container-fluid py-5 px-5 border-bottom">
      <h2>Apartments</h2>

      <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-5 py-3">
        <div class="col" v-for="singleApartment in store.apartments" :key="singleApartment.id">
          <Card :singleApartment="singleApartment"></Card>
        </div>
      </div>
    </div>

    <!-- Trending destinations Section -->
    <DestinationsCarousel></DestinationsCarousel>

    <!-- CTA Section -->
    <div class="container-fluid p-3 justify-content-center border-top">
      <div class="row my-3 justify-content-center">
        <div class="col text-center">
          <div class="card border-0">
            <div class="card-body">
                <div class="card-title">
                  <h3 class="mb-3">News & Discounts</h3>
                </div> 
                <div class="row justify-content-center">
                  <div class="col-md-4">
                    <p class="small color-text">
                      Find your coziest escape ever & Get instant discounts. 
                      Discover cabins, vacation homes, and more!
                    </p>
                    <button type="button" class="btn btn-primary border-0 mt-2 mb-3">
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

.container{
  height: calc(100vh - 300px);
}

button {
  background-color: #3535ec !important;
}

.jumbotron {
  background-image: url('/images/jumbo-img.jpeg');
  height: 450px;
  margin-top: 79px; // header height
  background-size: cover;
  background-position: center;
}

</style>