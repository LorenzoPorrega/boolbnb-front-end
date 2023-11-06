<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

  <div class="container-fluid pt-5 pb-3">
    <div class="row">
      <h3>Trending destinations</h3>
      <div class="col-md-10 mx-auto">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
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
                      <img src="/images/london.jpg" class="img-fluid" alt="">
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
                      <img src="/images/new-york.jpg" class="img-fluid" alt="">
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
                      <img src="/images/paris.jpg" class="img-fluid" alt="">
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
                      <img src="/images/kuala-lumpur.jpg" class="img-fluid" alt="">
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
                      <img src="/images/agra.jpg" class="img-fluid" alt="">
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
                      <img src="/images/dubai.avif" class="img-fluid" alt="">
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
                      <img src="/images/rio-de-janeiro.jpg" class="img-fluid" alt="">
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
                      <img src="/images/giza.jpg" class="img-fluid" alt="">
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
                      <img src="/images/sydney.jpg" class="img-fluid" alt="">
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
            <span class="carousel-control-prev-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

@use "../scss/partials/variables" as *;

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
	height: 48px;
	width: 48px;
	margin: auto 0;
	border-radius: 50%;
	border: 3px solid rgba(6, 6, 203, 0.8);
}

.carousel-control-prev i {
  margin-top: 6px;
  font-size: 1.2rem;
  color: #0606ca;
}
.carousel-control-next i {
  margin-top: 6px;
  font-size: 1.2rem;
  color: #0606ca;
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
	background: #0606cb
}

</style>