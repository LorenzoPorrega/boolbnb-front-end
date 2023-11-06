<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data;
          console.log(results);
        })
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="container-fluid text-center">

    <!-- Jumbo Section -->
    <div class="text-center jumbotron">
      <div class="d-flex justify-content-center align-items-center h-100 bg-transparent">
        <div class="text-white bg-transparent">
          <h1 class="mb-3 bg-transparent">Welcome to Boolbnb</h1>
          <h4 class="mb-3 bg-transparent">Team 3</h4>
        </div>
      </div>
    </div>

    <!-- Featured Apartments Section -->
    <div class="border-top border-bottom">
      <div class="container-fluid pt-5 px-5">
        <h2 class="border-bottom">Featured Apartments</h2>

        <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-3 py-3">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Regular Apartments Section -->
      <div class="container-fluid py-5 px-5">
        <h2 class="border-bottom">Apartments</h2>

        <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-3 py-3">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden rounded-4 shadow" style="background-image: url('unsplash-photo-1.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h4>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Trending destinations Section -->
    <div class="container-fluid pt-5 pb-3">
      <div class="row">
        <h3>Trending destinations</h3>
        <div class="col-md-10 mx-auto">
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <!-- Carousel indicators -->
            <ul class="carousel-indicators list-unstyled">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ul>
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/london.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>London</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/new-york.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>New York</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/paris.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Paris</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/kuala-lumpur.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Kuala Lumpur</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/agra.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Agra</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/dubai.avif" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Dubai</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/rio-de-janeiro.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Rio De Janeiro</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/giza.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Giza</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="/public/images/sydney.jpg" class="img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Sydney</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,varius quam.
                        </p>
                        <a href="#" class="btn btn-primary">More 
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Carousel controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="container-fluid p-3 justify-content-center border-top">
      <div class="row my-3 justify-content-center">
        <div class="col text-center">
          <div class="card border-0">
            <div class="card-body">
                <div class="card-title">
                  <h4 class="mb-3">News & Discounts</h4>
                </div> 
                <div class="row justify-content-center">
                  <div class="col-md-4">
                    <p class="small color-text">
                      Find your coziest escape ever & Get instant discounts. 
                      Discover cabins, vacation homes, and more!
                    </p>
                    <button type="button" class="btn btn-primary border-0 my-3">
                      Get in Touch
                    </button><br>
                    <img src="https://i.imgur.com/pC6AgYC.jpg" class="img-fluid" width="300">
                  </div>
                </div>
            </div>                       
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.color-text{
  color:#757575 !important;
}

.container{
  height: calc(100vh - 300px);
}

button {
  background-color: #3535ec !important;
}

.jumbotron {
  background-image: url('/public/images/jumbo-img.jpeg');
  height: 450px;
  margin-top: 90px; // header height
  background-size: cover;
  background-position: center;
}

.carousel {
	margin: 30px 90px 60px;
	padding: 0 80px;
}
.carousel .carousel-item {
	text-align: center;
	overflow: hidden;
}
.carousel .carousel-item img {
	width: 100%;
  height: 210px;
	display: inline-block;
}
.carousel .carousel-item .btn {
	border-radius: 0;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	background: #3535ec;
	padding: 6px 15px;
	margin-top: 5px;
}
.carousel .carousel-item .btn:hover {
	background: #0606ca;
}
.carousel .carousel-item .btn i {
	font-size: 14px;
	font-weight: bold;
	margin-left: 5px;
}
.carousel .thumb-wrapper {
	margin: 5px;
	text-align: left;
	background: #fff;
	box-shadow: 0px 2px 2px rgba(0,0,0,0.1);   
}
.carousel .thumb-content {
	padding: 15px;
	font-size: 13px;
}
.carousel-control-prev, .carousel-control-next {
	height: 44px;
	width: 44px;
	margin: auto 0;
	border-radius: 50%;
	border: 3px solid rgba(0, 0, 0, 0.8);
}

.carousel-control-prev i {
	margin-left: -3px;
}
.carousel-control-next i {
	margin-right: -3px;
}
.carousel-indicators {
	bottom: -50px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 4px;
	border: none;
}
.carousel-indicators li {	
	background: #555;
}
.carousel-indicators li.active {	
	background: #ababab;
}

</style>