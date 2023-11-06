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
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data;
          console.log(results);
        })
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="container text-center border border-danger" style="height: 300px;">
    <h1>Apartments</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;


</style>