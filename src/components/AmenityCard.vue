<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  props: {
    singleAmenity: Object,
  },
  methods: {
    //
  },
  mounted () {
    console.log(this.singleAmenity);
  }
};
</script>

<template>

  <div class="card h-100">
    <div class="card-body d-flex justify-content-start align-items-center">
      <div v-html="`${this.singleAmenity.icon}`"></div>
      <h5 class="card-title mb-0 ms-2">{{ this.singleAmenity.name }}</h5>
    </div>
  </div>

</template>

<style lang="scss" scoped>


</style>