<script>
import axios from 'axios';

import { store, filterApartment } from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    filterApartment,
    addressControl() {
      let options = {
        searchOptions: {
          key: "9GGMAIWofgnTAUXbZTCGx0V0SDSxAx9I",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "9GGMAIWofgnTAUXbZTCGx0V0SDSxAx9I",
          language: "it-IT",
        },
      }
      let ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
      let searchBoxHTML = ttSearchBox.getSearchBoxHTML()
      const input = document.getElementById('input')
      searchBoxHTML.classList.add("form-control");


      input.append(searchBoxHTML);
      ttSearchBox.on("tomtom.searchbox.resultselected", function (data) {
        //recupero l'input
        const adderessInput = document.getElementById("address")
        // assegno tutto il valore della via 
        // posizione paese ecc.....
        //converto il data in ujna stringa che verra poi ri convertito in php
        adderessInput.value = JSON.stringify(data);
        console.log(adderessInput.value)
        console.log(adderessInput.getAttribute("value"))
        console.log(data)
        console.log(data["data"]["result"])
      })
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
              <div class="mb-3 col-12">
                <label class="form-label fw-bold fs-5">Price range</label>
                <div>

                  <form class="multi-range-field my-5 pb-5">
                    <input id="multi22" class="multi-range w-100" type="range" multiple="multiple" />
                  </form>

                  <!-- Example -->
                  <!-- <div class="row">
                    <div class="col-5">
                      <label for="ex3">Minimum</label>
                      <input type="text" id="ex3" class="form-control">
                    </div>
                    <div class="col-2">
                      <div class=w-100>

                      </div>
                    </div>
                    <div class="col-5">
                      <label for="ex4">Maximum</label>
                      <input type="text" id="ex4" class="form-control">
                    </div>
                  </div> -->

                </div>
              </div>

              <!-- rooms_num -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Bedrooms</label>
                <div class="box-rooms_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="rooms_num" value="1" v-model="store.rooms_num" class="form-check-input mx-1"
                      checked>1
                  </div>
                  <div>
                    <input type="radio" name="rooms_num" value="2" v-model="store.rooms_num"
                      class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="rooms_num" value="3" v-model="store.rooms_num"
                      class="form-check-input mx-1">3+
                  </div>
                </div>
              </div>

              <!-- beds_num number -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Beds</label>
                <div class="box-beds_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="beds_num" value="1" v-model="store.beds_num" class="form-check-input mx-1"
                      checked>1
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="2" v-model="store.beds_num" class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="3" v-model="store.beds_num" class="form-check-input mx-1">3
                  </div>
                  <div>
                    <input type="radio" name="beds_num" value="4" v-model="store.beds_num"
                      class="form-check-input mx-1">4+
                  </div>
                </div>
              </div>
              <!-- bath number -->
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Bathrooms</label>
                <div class="box-bathroom_num-buttons d-flex justify-content-around">
                  <div>
                    <input type="radio" name="bathroom_num" value="1" v-model="store.bathroom_num"
                      class="form-check-input mx-1" checked>1
                  </div>
                  <div>
                    <input type="radio" name="bathroom_num" value="2" v-model="store.bathroom_num"
                      class="form-check-input mx-1">2
                  </div>
                  <div>
                    <input type="radio" name="bathroom_num" value="3" v-model="store.bathroom_num"
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
}
</style>