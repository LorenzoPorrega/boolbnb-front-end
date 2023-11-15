<script>
import ApartmentsPage from "./pages/ApartmentsPage.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { store, fetchAllAmenities } from './store.js';

export default {
  components:{
    ApartmentsPage,
    TheHeader,
    TheFooter,
  },
  data(){
    return{
      store,
    }
  },
  mounted(){
    /* fetchLoggedUser() */
    fetchAllAmenities()
  }
}
</script>


<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<style lang="scss" scoped>
@use "./scss/partials/_variables.scss" as *;


</style>