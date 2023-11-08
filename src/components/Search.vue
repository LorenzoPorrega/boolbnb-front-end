<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
      apartmentFilter:{
        rooms_num: "",
        beds_num: "",
        bathroom_num: "",
      },
    }
  },
  methods: {
    filterApartment(){
      const baseURL = "http://127.0.0.1:8000/api/apartments/";
      const params = this.apartmentFilter;
      const url = new URL(baseURL);
      url.search = new URLSearchParams(params).toString();
      console.log("Generated URL:", url.toString());

      axios.get("http://127.0.0.1:8000/api/apartments/", {params:this.apartmentFilter})
        .then((response) => {
          store.apartments = response.data.apartments 
          console.log(store.apartments);
        }
      )
    }
  },
}
</script>

<template>
  <div class="search-box border rounded-5 border-danger p-2 d-flex justify-content-center">
    <button class="btn btn-offcanva p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
      aria-controls="offcanvasTop">Ricerca..</button>
    <div class="offcanvas offcanvas-top border rounded-5" tabindex="-1" id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header border rounded-bottom rounded-5">
        <div class="w-100 d-flex justify-content-center">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">Filter</h5>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body border rounded-top rounded-5">

        <!-- form -->
        <form method="POST" @submit.prevent="filterApartment()">
          <div class="container">
            <div class="row d-flex">

              <!-- city -->
              <div class="mb-3 col-12">
                <label class="form-label fw-bold fs-5">City</label>
                <div id="input">
                  <input type="text" class="form-control" value="" name="address" id="address">
                </div>
              </div>

              <!-- rooms_num -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Bedrooms</label>
                <div class="box-rooms_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="rooms_num" value="1" v-model="rooms_num" class="form-check-input mx-1"
                      checked>1
                  </div>
                  <div>
                    <input type="radio" name="rooms_num" value="2" v-model="rooms_num"
                      class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="rooms_num" value="3" v-model="rooms_num"
                      class="form-check-input mx-1">3+
                  </div>
                </div>
              </div>

              <!-- beds_num number -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Beds</label>
                <div class="box-beds_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="beds_num" value="1" v-model="beds_num" class="form-check-input mx-1"
                      checked>1
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="2" v-model="beds_num" class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="3" v-model="beds_num" class="form-check-input mx-1">3
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="4" v-model="beds_num"
                      class="form-check-input mx-1">4+
                  </div>
                </div>
              </div>
              <!-- bath number -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Bathrooms</label>
                <div class="box-bathroom_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="bathroom_num" value="1" v-model="bathroom_num"
                      class="form-check-input mx-1" checked>1
                  </div>
                  <div>
                    <input type="radio" name="bathroom_num" value="2" v-model="bathroom_num"
                      class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="bathroom_num" value="3" v-model="bathroom_num"
                      class="form-check-input mx-1">3+
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-info" type="submit">Filtra</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.search-box {
  width: 50%;
  height: 40px;

  .btn-offcanva {
    height: 100%;
  }

  .offcanvas {
    width: 44vw;
    height: 65vh;
    top: calc(50% - 25vh);
    left: calc(50% - 22vw);
  }
}</style>