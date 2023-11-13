<script>
import axios from 'axios';
import AmenityCard from "../components/AmenityCard.vue";
import { store, createmap, getFrontEndCostumerIP } from '../store.js';

export default {
  data() {
    return {
      store,
      host: {},
      amenities: []
    };
  },
  components: {
    AmenityCard,
  },  
  methods: {
    fetchShowedApartment() {
      // Throws the call only if the object showedApartment is empty
      if (!store.showedApartment.value) {
        axios.get("http://127.0.0.1:8000/api/selected/" + this.$route.params.slug)
          .then(response => {
            // Saves the response in the local showedApartment object
            // console.log("Funzione per prendere dati appartamento visionato in show startata, oggetto singleApartmanet:");
            // console.log(response);
            store.showedApartment = response.data.showedApartment[0];
            this.host = response.data.host
            createmap()
            getFrontEndCostumerIP(store.showedApartment.slug)
          });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }

  },
  mounted() {
    this.scrollToTop();
    this.fetchShowedApartment();
    // Funzione per creare la mappa nello show front-office spostata in store.js e richiamata in fetchShowedApartment
  }
};
</script>

<template>
  <div class="container-fluid py-3 border-bottom" style="margin-top: 150px;">
    <h2 class="pt-2"><strong>{{ store.showedApartment.title }}</strong></h2>
    <div class="d-flex">
      <i class="fa-solid fa-location-dot me-2" style="color: #3737ec;"></i>
      <h6>{{ store.showedApartment.address }}</h6>
    </div>
    <div class="w-30" v-for="showedApartmentImage in store.showedApartment.images">
      <img class="img-show" :src="`http://127.0.0.1:8000/storage/${showedApartmentImage}`" alt="">
    </div>
    <h5><strong>Price per night: </strong>{{ store.showedApartment.price }} $</h5>
    <h5><strong>Rooms number: </strong>{{ store.showedApartment.rooms_num }}</h5>
    <h5><strong>Beds number: </strong>{{ store.showedApartment.beds_num }}</h5>
    <h5><strong>Bathrooms number: </strong>{{ store.showedApartment.bathroom_num }}</h5>
    <h5><strong>Square meters: </strong>{{ store.showedApartment.square_meters }} m<sup>2</sup></h5>
    <h5><strong>Created at: </strong>{{ store.showedApartment.created_at }}</h5>

    <!-- Amenities Section -->
    <div class="container py-5 border-bottom">
      <div class="my-4">
        <h3 class="fw-bold fs-4">What this place offers</h3>
      </div>
      <div class="row row-cols-3 row-cols-md-6 g-3">
        <div class="col" v-for="singleAmenity in store.showedApartment.amenities " :key="singleAmenity.id">
          <AmenityCard :singleAmenity="singleAmenity"></AmenityCard>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-4">
      <h3 class="fw-bold fs-4">Where you'll be</h3>
      <h5>{{ store.showedApartment.address }}</h5>
    </div>
    <div class="container-map position-relative mt-3 mb-5">
      <div class="container">
        <div class='control-panel'>
          <div id='store-list'></div>
        </div>
        <div class='map' id='map'></div>
      </div>
    </div>
  </div>

  <!-- Host Section with contact redirect -->
  <div class="py-5 border-bottom">
    <div class="row py-3">
      <div class="col-3 d-flex justify-content-center align-items-start">
        <img src="/images/lporrega.JPG" alt="Host-Avatar" class="host-avatar">
      </div>
      <div class="col-9 host-info d-flex">
        <div class="col-7">
          <h3>Hosted by {{ this.host.name }}</h3>
          <ul>
            <li>Joined in May 2023</li>
            <li><span class="icon"><i class="fa-solid fa-star"></i></span>164 Reviews</li>
            <li><span class="icon"><i class="fa-solid fa-user-check"></i></span>Identity verified</li>
            <li><span class="icon"><i class="fa-solid fa-medal"></i></span> Superhost</li>
          </ul>
          <p>Hello everyone! I’m Lorenzo. <br>I really enjoy travelling and I work in real estate!</p>
          <p class="superhost-badge"><strong>{{ this.host.name }}</strong> is a Superhost</p>
          <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
        </div>
        <div class="col-5">
          <ul>
            <li>Language: Italiano</li>
            <li>Response rate: 100%</li>
            <li>Response time: within an hour</li>
          </ul>
          <router-link :to="{ name: 'messages' }" class="btn btn-primary contact-host-btn text-decoration-none">
            Contact Host
          </router-link>
          <div class="payment-warning d-flex mt-4">
            <div class="icon">⚠️</div>
            <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;



.img-show {
  width: 300px;
}

.container-map {
  height: 75vh;
  width: 100%;
}

.map {
  border: 2px solid brown;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  /* z-index: -1; */
  /* ho tolto questo per modificare la mappa*/
}

.control-panel {
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
  height: 100%;
  left: 0;
  overflow: hidden;
  /* position: absolute; */
  top: 0;
  width: 25%;
}

.heading {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 1;
}

.heading>img {
  height: auto;
  margin: 10px 0 8px 0;
  width: 150px;
}


/* Stili per la sezione dell'host */

.host-avatar {
  max-width: 180px;
  border-radius: 50%;
}

.host-info {
  padding-left: 20px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      margin-bottom: 5px;
    }
  }
}

.host-description {
  font-size: 1rem;
  margin-bottom: 30px;
}

.superhost-badge {
  color: $palette-primary;
  font-size: 1rem;
  font-weight: bold;
}

.contact-host-btn {
  background-color: $palette-primary;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.contact-host-btn:hover {
  background-color: $palette-primary-dark;
}

.payment-warning {
  font-size: 15px;
  color: rgb(178, 61, 18);
}

.payment-warning p {
  font-size: 0.8rem;
}

/* Stili per le icone */
.icon {
  margin-right: 10px;
  color: $palette-primary;
}
</style>