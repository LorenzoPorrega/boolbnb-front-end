<script>
import ApartmentsPage from "./pages/ApartmentsPage.vue";

export default {
  components:{
    ApartmentsPage
  },
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="container-fluid p-0 m-0 main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/partials/_variables.scss" as *;

</style>
