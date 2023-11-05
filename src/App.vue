<script>
import ApartmentsPage from "./pages/ApartmentsPage.vue";
import { store } from './store.js';

export default {
  components:{
    ApartmentsPage
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="container-fluid p-0 m-0 main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@use "./scss/partials/_variables.scss" as *;

</style>