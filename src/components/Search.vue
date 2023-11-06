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
  },
}
</script>

<template>
  <div class="search-box border rounded-5 border-danger p-2 d-flex justify-content-center">
    <button class="btn btn-offcanva p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
      aria-controls="offcanvasTop">Ricerca..</button>
    <div class="offcanvas offcanvas-top border rounded-5" tabindex="-1" id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header border rounded-top">
        <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body border rounded-bottom">
        <form action="">
          <div class="container">
            <div class="row d-flex">
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Address</label>
                <div id="input">
                  <input type="text" class="form-control" value="" name="address" id="address">
                </div>
              </div>
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Address</label>
                <div id="input">
                  <input type="text" class="form-control" value="" name="address" id="address">
                </div>
              </div>
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Address</label>
                <div id="input">
                  <input type="text" class="form-control" value="" name="address" id="address">
                </div>
              </div>
              <div class="mb-3 col-6">
                <label class="form-label fw-bold fs-5">Address</label>
                <div id="input">
                  <input type="text" class="form-control" value="" name="address" id="address">
                </div>
              </div>
            </div>
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
    width: 70vw;
    height: 50vh;
    top: calc(50% - 25vh);
    left: calc(50% - 35vw);
  }
}
</style>