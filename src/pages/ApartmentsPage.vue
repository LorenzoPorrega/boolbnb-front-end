<script>
import axios from 'axios';
import Card from "../components/Card.vue";
import DestinationsCarousel from "../components/DestinationsCarousel.vue";
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    Card,
    DestinationsCarousel,
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          this.store.apartments = response.data.apartments
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchData();
  }

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
    <div class="container-fluid py-5 px-5 border-bottom">
      <h2>Featured Apartments</h2>

      <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-5 py-3">
        <div class="col">
          <a href="#" class="text-decoration-none">
            <div class="card">
              <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&amp;o=" 
                class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">Numa I Vita Apartments</h5>
                <p class="card-text">Fortezza da Basso, Italy, Florence</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Rooms:</p>
                    <p class="text-primary">2</p>
                  </div>
                  <div class="d-flex">
                    <p class="text-muted me-2">Beds:</p>
                    <p class="text-primary">3</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Bathrooms:</p>
                    <p class="text-primary">3</p>
                  </div>
                  <div class="d-flex fw-bold">
                    <p class="text-muted me-2">Price:</p>
                    <p class="text-primary">$185</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a href="#" class="text-decoration-none">
            <div class="card">
              <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" 
                class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">Aparhotel Stare Miasto</h5>
                <p class="card-text">Old Town, Poland, Krakóv</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Rooms:</p>
                    <p class="text-primary">2</p>
                  </div>
                  <div class="d-flex">
                    <p class="text-muted me-2">Beds:</p>
                    <p class="text-primary">3</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Bathrooms:</p>
                    <p class="text-primary">3</p>
                  </div>
                  <div class="d-flex fw-bold">
                    <p class="text-muted me-2">Price:</p>
                    <p class="text-primary">$111</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a href="#" class="text-decoration-none">
            <div class="card">
              <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=a137138b895d53d9c0cd31f99f272b833b605441d0670a40c24007fdbb45bb70&o=" 
                class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">P&J Luxury Apartments</h5>
                <p class="card-text">Old Town, Poland, Krakóv</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Rooms:</p>
                    <p class="text-primary">2</p>
                  </div>
                  <div class="d-flex">
                    <p class="text-muted me-2">Beds:</p>
                    <p class="text-primary">3</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Bathrooms:</p>
                    <p class="text-primary">3</p>
                  </div>
                  <div class="d-flex fw-bold">
                    <p class="text-muted me-2">Price:</p>
                    <p class="text-primary">$66</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a href="#" class="text-decoration-none">
            <div class="card">
              <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=" 
                class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">Casa Portuguesa Prata</h5>
                <p class="card-text">Santa Maria Maior, Portugal, Lisboa</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Rooms:</p>
                    <p class="text-primary">2</p>
                  </div>
                  <div class="d-flex">
                    <p class="text-muted me-2">Beds:</p>
                    <p class="text-primary">3</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex">
                    <p class="text-muted me-2">Bathrooms:</p>
                    <p class="text-primary">3</p>
                  </div>
                  <div class="d-flex fw-bold">
                    <p class="text-muted me-2">Price:</p>
                    <p class="text-primary">$371</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

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
  margin-top: 90px; // header height
  background-size: cover;
  background-position: center;
}

</style>