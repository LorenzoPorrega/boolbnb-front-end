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
          store.push(results);
        })
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <h1>Appartamenti</h1>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;


</style>