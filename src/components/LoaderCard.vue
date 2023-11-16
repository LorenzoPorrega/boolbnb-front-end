<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
  },
};
</script>

<template>
  
  <a href="#" class="text-decoration-none">
    <div class="text-decoration-none">
      <div class="card h-100 shadow-sm">
        <div class="image-cover shimmering-component">
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center flex-column">
            <h5 class="card-title shimmering-component"></h5>
            <p class="card-text shimmering-component"></p>
          </div>

          <div class="d-flex justify-content-between align-items-center pt-3">
            <div class="d-flex">
              <p class="text-muted me-2 shimmering-component shimmering-title left-up"></p>
              <p class="text-primary shimmering-component shimmering-text"></p>
            </div>
            <div class="d-flex">
              <p class="text-muted me-2 shimmering-component shimmering-title right-up"></p>
              <p class="text-primary shimmering-component shimmering-text"></p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <p class="text-muted me-2 shimmering-component shimmering-title left-down"></p>
              <p class="text-primary shimmering-component shimmering-text"></p>
            </div>
            <div class="d-flex fw-bold">
              <p class="text-muted me-2 shimmering-component shimmering-title right-down"></p>
              <p class="text-primary shimmering-component shimmering-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

</template>

<style lang="scss" scoped>

.card-title{
  display: block;
  width: 275px;
  height: 25px;
}

.card-text{
  display: block;
  width: 175px;
  height: 22.5px;
}

.shimmering-title{
  height: 22.5px;
}

.left-up{
  width: 75px;
}
.left-down{
  width: 110px;
}
.right-up{
  width: 60px;
}
.right-down{
  width: 125px;
}

.shimmering-component{
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1.5s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

.image-cover{
  height: 250px;
  .card-img-top{
    height: 100%;
    object-fit: cover;
  }
}
.card-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}

// 
.card{
  box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)
}
</style>