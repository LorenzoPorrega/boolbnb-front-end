<script>

export default {

}
</script>

<template>

<div class="page-not-found pt-5">
  <div class="bg-light shadow">
    <h2>4<i class="fa-solid fa-bug"></i>4</h2>
    <h3 class="mt-4">Page Not Found</h3>
    <p>OOPS! It seems like you are lost.</p>
    <div class="mt-5">
      <a class="btn btn-outline-primary">
        <router-link :to="{name: 'home'}">
          <i class="fa-solid fa-house-chimney"> Back Home</i>
        </router-link>
      </a>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.page-not-found {
  background-color: #3f51b5;
  height: 100vh;
}
.page-not-found h2 {
  font-size: 130px;
  color: $palette-primary;
}
.page-not-found h3 {
  font-size: 42px;
}
.page-not-found .bg-light {
  width: 50%;
  padding: 50px;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>