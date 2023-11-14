<script>
import axios from 'axios';
import { store, filterApartment, searchBar, rangeSlider } from '../store.js';

export default {
  data() {
    return {
      store,
      indirizzo: '',
  }
  },
  methods: {
    filterApartment,
    rangeSlider
  },
  mounted() {
    searchBar()
  }
}
</script>

<template>
  <div class="search-box rounded-5 p-2 d-flex justify-content-center">
    <button class="btn btn-offcanva p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
      aria-controls="offcanvasTop">Search your next destination</button>
    <div class="offcanvas offcanvas-top border rounded-5" tabindex="-1" id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header border rounded-bottom rounded-5">
        <div class="w-100 d-flex justify-content-center">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">Filtri avanzati</h5>
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
                  <input type="text" class="form-control d-none" value="" name="address" id="address">
                </div>
              </div>

              <div class="mb-3 col-12 my-3">
                <label class="form-label fw-bold fs-5">Distance Range</label>
                <div id="input">
                  <form class="multi-range-field">
                    <input id="multi22" class="multi-range w-100" type="range" multiple="multiple" min="1" max="20"
                      v-model="store.apartmentFilter.distance" />
                  </form>
                  <div id="sliderValue">{{ store.apartmentFilter.distance }} km</div>
                </div>
              </div>


              <div class="accordion pt-3" id="accordionFilter">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Apply more filters
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFilter">
                    <div class="accordion-body">
                      <!-- rooms_num -->
                      <div class="mb-3 col-6">
                        <label class="form-label fw-bold fs-5">Bedrooms</label>
                        <div class="box-rooms_num-buttons d-flex gap-5">
                          <div>
                            <input type="radio" name="rooms_num" value="1" v-model="store.apartmentFilter.rooms_num"
                              class="form-check-input mx-1">1
                          </div>
                          <div>
                            <input type="radio" name="rooms_num" value="2" v-model="store.apartmentFilter.rooms_num"
                              class="form-check-input mx-1">2
                          </div>
                          <div>
                            <input type="radio" name="rooms_num" value="3" v-model="store.apartmentFilter.rooms_num"
                              class="form-check-input mx-1">3+
                          </div>
                        </div>
                      </div>
                      <!-- beds_num number -->
                      <div class="mb-3 col-6">
                        <label class="form-label fw-bold fs-5">Beds</label>
                        <div class="box-beds_num-buttons d-flex gap-5">
                          <div>
                            <input type="radio" name="beds_num" value="1" v-model="store.apartmentFilter.beds_num"
                              class="form-check-input mx-1">1
                          </div>
                          <div>
                            <input type="radio" name="beds_num" value="2" v-model="store.apartmentFilter.beds_num"
                              class="form-check-input mx-1">2
                          </div>
                          <div>
                            <input type="radio" name="beds_num" value="3" v-model="store.apartmentFilter.beds_num"
                              class="form-check-input mx-1">3
                          </div>
                          <div>
                            <input type="radio" name="beds_num" value="4" v-model="store.apartmentFilter.beds_num"
                              class="form-check-input mx-1">4+
                          </div>
                        </div>
                      </div>
                      <!-- bath number -->
                      <div class="mb-3 col-6">
                        <label class="form-label fw-bold fs-5">Bathrooms</label>
                        <div class="box-bathroom_num-buttons d-flex gap-5">
                          <div>
                            <input type="radio" name="bathroom_num" value="1" v-model="store.apartmentFilter.bathroom_num"
                              class="form-check-input mx-1">1
                          </div>
                          <div>
                            <input type="radio" name="bathroom_num" value="2" v-model="store.apartmentFilter.bathroom_num"
                              class="form-check-input mx-1">2
                          </div>
                          <div>
                            <input type="radio" name="bathroom_num" value="3" v-model="store.apartmentFilter.bathroom_num"
                              class="form-check-input mx-1">3+
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-6">
                        <label class="form-label fw-bold fs-5">Amenities</label>
                        <!-- <div class="box-bathroom_num-buttons d-flex gap-5">
                          <div>
                            <input type="checkbox" name="bathroom_num">1
                          </div>
                        </div> -->

                        <div v-for="singleAmenity in store.allAmenities">
                          <input class="form-check-input" type="checkbox" id="flexCheckDefault"
                          :value="singleAmenity.id"
                          v-model="store.apartmentFilter.filteredAmenitiesId">
                          
                          <span class="form-check-label ps-2" for="flexCheckDefault">
                            {{ singleAmenity.name }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center py-5">
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
  border: 1px solid $palette-primary;

  .btn-offcanva {
    height: 100%;
  }

  .offcanvas {
    width: 44vw;
    height: 65vh;
    top: calc(50% - 25vh);
    left: calc(50% - 22vw);
  }

  #sliderValue {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>