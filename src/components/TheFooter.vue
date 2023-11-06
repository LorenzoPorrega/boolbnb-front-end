<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

  <footer class="border-top">
    <div class="container py-3">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between">
          <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h5 class="footer-heading">Support</h5>
            <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">AirCover</a>
              </li>
              <li>
                <a href="#">Anti-discrimination</a>
              </li>
              <li>
                <a href="#">Disability Support</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Report Neighborhood Concern</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h5 class="footer-heading">Hosting</h5>
            <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li>
                <a href="#">Airbnb Your Home</a>
              </li>
              <li>
                <a href="#">AirCover for Hosts</a>
              </li>
              <li>
                <a href="#">Hosting Resources</a>
              </li>
              <li>
                <a href="#">Community Forum</a>
              </li>
              <li>
                <a href="#">Hosting Responsibly</a>
              </li>
              <li>
                <a href="#">Boolbnb Friendly Apartments</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h5 class="footer-heading">Boolbnb</h5>
            <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">New Features</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Boolbnb.org Emergency Stays</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-3 border-top">
      <div class="row">
        <div class="col-md-12 d-flex flex-wrap justify-content-between align-items-center">
          <div class="col-md-4 mb-0 d-flex flex-nowrap justify-content-center">
            <span class="me-2">© 2023 Boolbnb, Inc.</span>
            <a href="#" class="me-2">· Terms</a>
            <a href="#">· Privacy</a>
          </div>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center">
            <img src="/public/images/boolbnb-logo-2.png" alt="footer-logo">
          </a>

          <div class="col-md-4 d-flex flex-nowrap justify-content-center">
            <div class="me-2">
              <a href="#" class="social-icon">
                <i class="fa-solid fa-globe"></i>
                <a href="#">
                  English (US)
                </a>
              </a>
            </div>
            <div class="me-2">
              <a href="#" class="social-icon">
                <i class="fa-solid fa-dollar-sign"></i>
              </a>
              <a href="#">
                USD
              </a>
            </div>
            <div class="me-2">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div class="me-2">
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div>
              <a href="#" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss" scoped>

footer img {
  width: 120px;
}

footer a {
  color: #252525;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover,
footer a.active {
  color: #858585;
}

</style>