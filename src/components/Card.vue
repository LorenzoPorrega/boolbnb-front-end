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
  methods: {
    // Function taken from store that saves the clicked card apartment's
    // slug on click
    saveSelectedApartmentSlug,
  },
};
</script>

<template>
  
  <a href="#" class="text-decoration-none card-link ">
    <router-link :to="{ name: 'show', params: { slug: singleApartment.slug } }" class="text-decoration-none"
      @click.native="saveSelectedApartmentSlug(singleApartment.slug)">
      <div class="card h-100 shadow-sm position-relative">
        <div class="image-cover">
          <img :src="`http://127.0.0.1:8000/storage/${singleApartment.images[0]}`" class="card-img-top" alt="..."
            loading="lazy">
        </div>
        <div class="position-absolute badge-container d-flex align-items-center justify-content-center" v-if=" singleApartment.name ">
          <span class="badge rounded-1">Featured</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ singleApartment.title }}</h5>
          <p class="card-text">{{ singleApartment.address }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <p class="text-muted me-2">Bedrooms:</p>
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
              <p class="text-muted me-2">Daily price:</p>
              <p class="text-primary">${{ singleApartment.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </a>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.image-cover{
  height: 250px;
  .card-img-top{
    height: 100%;
    object-fit: cover;
  }
}
.card-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}

// 
.card{
  box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}

.badge-container{
  right: 10px;
  top: 10px;
  .badge{
    background-color: $palette-primary;
  }
}
</style>