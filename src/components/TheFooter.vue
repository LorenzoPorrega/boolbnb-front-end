<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

  <footer class="">
    <div class="py-3">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h5 class="footer-heading fw-bold">Support</h5>
          <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">BoolCover</a>
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
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h5 class="footer-heading fw-bold">Hosting</h5>
          <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
            <li>
              <a href="#">Boolbnb Your Home</a>
            </li>
            <li>
              <a href="#">BoolCover for Hosts</a>
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
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h5 class="footer-heading fw-bold">Boolbnb</h5>
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

    <div class="py-3 border-top">
      <div class="row flex-wrap justify-content-between align-items-center g-3">
        <div class="col-12 col-md-4 mb-0 d-flex flex-nowrap justify-content-center">
          <span class="me-2">© 2023 Boolbnb, Inc.</span>
          <a href="#" class="me-2">· Terms</a>
          <a href="#">· Privacy</a>
        </div>

        <a href="/" class="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <img src="/images/boolbnb-logo-2.png" alt="footer-logo">
        </a>

        <div class="col-12 col-md-4 d-flex flex-nowrap justify-content-center">
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
  </footer>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

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

.footer-heading {
  color: $palette-primary-dark;
}

</style>