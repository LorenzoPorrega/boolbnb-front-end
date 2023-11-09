<script>
import { store, saveSelectedApartmentSlug } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  props: {
    singleApartment: Object,
  },
  methods:{
    // Function taken from store that saves the clicked card apartment's
    // slug on click
    saveSelectedApartmentSlug,
  }
};
</script>

<template>
  <a href="#" class="text-decoration-none">
    <div class="card">
      <div>
        <img :src="`http://127.0.0.1:8000/storage/${singleApartment.images[0]}`" class="card-img-top" alt="..." loading="lazy">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ singleApartment.title }}</h5>
        <p class="card-text">{{ singleApartment.address }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <p class="text-muted me-2">Rooms:</p>
            <p class="text-primary">{{ singleApartment.rooms_num }}</p>
          </div>
          <div class="d-flex">
            <p class="text-muted me-2">Beds:</p>
            <p class="text-primary">{{ singleApartment.beds_num }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <p class="text-muted me-2">Bathrooms:</p>
            <p class="text-primary">{{ singleApartment.bathroom_num }}</p>
          </div>
          <div class="d-flex fw-bold">
            <p class="text-muted me-2">Price:</p>
            <p class="text-primary">${{ singleApartment.price }}</p>
          </div>
        </div>
        <div class="card-footer">
          <router-link :to="{name: 'show', params: {slug: singleApartment.slug}}" class="text-decoration-none"
          @click.native="saveSelectedApartmentSlug(singleApartment.slug)">
            Details
          </router-link>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
</style>