<script>
import axios from 'axios';
import Card from "../components/Card.vue";
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    Card,
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data
          console.log(results)
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>

<template>
  <div class="container">
    <div class="row-cols-4 d-flex">
      <div class="col-3" v-for="singleApartment in this.apartments" :key="singleApartment.id">
        <Card :singleApartment="singleApartment"></Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.container {
  height: calc(100vh - 300px);
}
</style>