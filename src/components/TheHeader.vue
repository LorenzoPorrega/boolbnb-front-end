<script>
import Search from "../components/Search.vue";
import { store } from "../store"

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Search,
  }
};
</script>

<template>
  <header class="py-3 border-bottom fixed-top" style="z-index: 3; transition: z-index 1s ease;">
    <div class="row">
      <div class="col-md-9 d-flex justify-content-center align-items-center justify-content-between mx-auto px-0">
        <a href="/" class="d-none d-md-block">
          <img src="../assets/boolbnb-logo-2.png" class="big-logo" alt="boolbnb-logo-header">
        </a>
        <a href="/" class="d-block d-md-none">
          <img src="../assets/boolbnb-logo-favicon.png" class="ms-3 small-logo" alt="boolbnb-logo">
        </a>
        <Search></Search>
        <ul class="nav nav-pills me-2">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item text-center">
            <!-- visualizzare solo se non loggati -->
            <a class="nav-link" href="http://127.0.0.1:8000/">Private area</a>
            <!--  -->
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.user-p{
  font-size: .7rem;
  margin-top: -.5rem;
}

header {
  background-color: white;
}

.big-logo {
  width: 150px;
}

.small-logo{
  width: 45px;
}

header .nav-link {
  color: #252525;
}

li {
  position: relative;

}

li::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1rem;
  height: 3px;
  width: 100%;
  background-color: #3535ec;
  scale: 0 1;
  transition: scale 250ms;
}

li:hover::after {
  scale: 1 1;
}

a:hover,
a:focus-visible {
  color: #3535ec;
}

input {
  text-align: center;
}

// for Chrome, Opera, and Safari
::-webkit-input-placeholder {
  text-align: center;
}

// for Firefox 18-
:-moz-placeholder {
  text-align: center;
}
</style>