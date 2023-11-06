<script>
import ApartmentsPage from "./pages/ApartmentsPage.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { store } from './store.js';

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
  }
}
</script>

<template>
  <div class="container-fluid p-0 m-0">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<style lang="scss" scoped>
@use "./scss/partials/_variables.scss" as *;

</style>