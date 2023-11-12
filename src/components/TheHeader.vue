<script>
import Search from "../components/Search.vue";
import { store, fetchUser } from "../store"

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Search,
  },
  mounted:{
    fetchUser
  }
};
</script>

<template>
  <header class="py-3 border-bottom fixed-top" style="z-index: 3; transition: z-index 1s ease;">
    <div class="row">
      <div class="col-md-9 d-flex justify-content-center align-items-center justify-content-between mx-auto px-0">
        <a href="/">
          <img src="/images/boolbnb-logo-2.png" alt="boolbnb-logo-header">
        </a>
        <Search></Search>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:8000/">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

@use "../scss/partials/variables" as *;

header{
  background-color: white;
}

header img {
  width: 150px;
}

header .nav-link {
  color: #252525;
}

li {
  position: relative;

}

li::after{
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

li:hover::after{
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