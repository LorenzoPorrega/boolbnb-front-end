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
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <router-link class="navbar-brand d-md-none d-block" :to="{ name : 'home' }">
        <img src="../assets/boolbnb-logo-favicon.png" alt="" class="favicon">
      </router-link>

      <router-link class="navbar-brand d-none d-md-block" :to="{ name : 'home' }">
        <img src="../assets/boolbnb-logo-2.png" alt="" class="icon">
      </router-link>
      <Search></Search>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-md-0">
          <li class="nav-item text-center mb-2">
            <router-link :to="{ name: 'home' }" class="nav-link py-0">Home</router-link>
          </li>
          <li class="nav-item text-center mb-2">
            <a class="nav-link py-0" href="http://127.0.0.1:8000/">Your property list</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>






  <!-- <nav class="navbar navbar-expand-md bg-light fixed-top" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Bootstrap
      </a>


      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav> -->

  <!-- <header class="py-3 border-bottom fixed-top" style="z-index: 3; transition: z-index 1s ease;">
    <div class="row">
      <div class="col-md-9 d-flex justify-content-center align-items-center justify-content-between mx-auto px-0">
        <a href="/">
          <img src="/images/boolbnb-logo-2.png" alt="boolbnb-logo-header">
        </a>
        <Search></Search>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link" href="http://127.0.0.1:8000/">Log in</a>
          </li>
        </ul>
      </div>
    </div>
  </header> -->
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.user-p {
  font-size: .7rem;
  margin-top: -.5rem;
}

header {
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

li::after {
  content: "";
  position: absolute;
  left: 25%;
  bottom: -0.25rem;
  height: 3px;
  width: 50%;
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

.favicon {
  width: 45px;
}

.icon {
  width: 150px;
}
</style>