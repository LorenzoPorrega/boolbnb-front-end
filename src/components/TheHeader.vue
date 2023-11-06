<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>
  <header class="py-3 border-bottom">
    <div class="row">
      <div class="col-md-9 d-flex justify-content-center align-items-center justify-content-between mx-auto px-0">
        <a href="/">
          <img src="/public/images/boolbnb-logo-2.png" alt="boolbnb-logo-header">
        </a>
        <form class="w-50 mx-auto" role="search">
          <input type="search" class="form-control" placeholder="Where are you going?" aria-label="Search">
        </form>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

@use "../scss/partials/variables" as *;

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
  height: 5px;
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