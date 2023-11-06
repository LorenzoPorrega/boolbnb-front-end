<script>
export default {
  props: {
    singleApartment: Object,
  }
};
</script>

<template>
  <div class="card h-100">
    <img :src="`http://127.0.0.1:8000/storage/${singleApartment.images[0]}`" class="card-img-top" alt="...">

    <div class="card-body">
      <h5 class="card-title">{{ singleApartment.title }}</h5>
      <p>{{ singleApartment.address }}</p>
      <p>Price: ${{ singleApartment.price }}</p>
      <p>Rooms: {{ singleApartment.rooms_num }}</p>
      <p>Beds: {{ singleApartment.beds_num }}</p>
      <p>Bathrooms: {{ singleApartment.bathroom_num }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>