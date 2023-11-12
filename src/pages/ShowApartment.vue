<script>
import axios from 'axios';
import { store, saveSelectedApartmentSlug, filterApartment } from '../store.js';

export default {
  data() {
    return {
      store,
      singleApartment: {},
      user:{}
    };
  },
  methods: {
    createmap() {
      let long = parseFloat(this.singleApartment['longitude'])
      let lat = parseFloat(this.singleApartment['latitude'])
      let address = this.singleApartment['address']
      console.log(long)
      console.log(this.singleApartment)
      let stores = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              long,
              lat
              ]
            },
            "properties": {
              "address": address,
              "city": address,
              "iconSize": [50, 75], // size of the icon
            }
          },
        ]
      }
      const apiKey = '9GGMAIWofgnTAUXbZTCGx0V0SDSxAx9I';
      const map = tt.map({
        key: apiKey,
        container: 'map',
        center: [long, lat],
        zoom: 10
      });

      const markersCity = [];
      const list = document.getElementById('store-list');

      stores.features.forEach(function (stores, index) {
        const city = stores.properties.city;
        const address = stores.properties.address;
        const location = stores.geometry.coordinates;
        const marker = new tt.Marker().setLngLat(location).setPopup(new tt.Popup({
          offset: 35
        }).setHTML(address)).addTo(map);
        markersCity[index] = {
          marker,
          city
        };

        let cityStoresList = document.getElementById(city);
        if (cityStoresList === null) {
          const cityStoresListHeading = list.appendChild(document.createElement('h3'));
          cityStoresListHeading.innerHTML = city;
          cityStoresList = list.appendChild(document.createElement('div'));
          cityStoresList.id = city;
          cityStoresList.className = 'list-entries-container';
          cityStoresListHeading.addEventListener('click', function (e) {
            map.fitBounds(getMarkersBoundsForCity(e.target.innerText), {
              padding: 50
            });
          });
        }

        const details = buildLocation(cityStoresList, address);

        marker.getElement().addEventListener('click', function () {
          const activeItem = document.getElementsByClassName('selected');
          if (activeItem[0]) {
            activeItem[0].classList.remove('selected');
          }
          details.classList.add('selected');
          openCityTab(city);
        });

        details.addEventListener('click', function () {
          const activeItem = document.getElementsByClassName('selected');
          if (activeItem[0]) {
            activeItem[0].classList.remove('selected');
          }
          details.classList.add('selected');
          map.easeTo({
            center: marker.getLngLat(),
            zoom: 18
          });
          closeAllPopups();
          marker.togglePopup();

        });

        function buildLocation(htmlParent, text) {
          const details = htmlParent.appendChild(document.createElement('a'));
          details.href = '#';
          details.className = 'list-entry';
          details.innerHTML = text;
          return details;
        }

        function closeAllPopups() {
          markersCity.forEach(markerCity => {
            if (markerCity.marker.getPopup().isOpen()) {
              markerCity.marker.togglePopup();
            }
          });
        }

        function getMarkersBoundsForCity(city) {
          const bounds = new tt.LngLatBounds();
          markersCity.forEach(markerCity => {
            if (markerCity.city === city) {
              bounds.extend(markerCity.marker.getLngLat());
            }
          });
          return bounds;
        }

        function openCityTab(selected_id) {
          const storeListElement = $('#store-list');
          const citiesListDiv = storeListElement.find('div.list-entries-container');
          for (let activeCityIndex = 0; activeCityIndex < citiesListDiv.length; activeCityIndex++) {
            if (citiesListDiv[activeCityIndex].id === selected_id) {
              storeListElement.accordion('option', {
                'active': activeCityIndex
              });
            }
          }
        }
      });

      $('#store-list').accordion({
        'icons': {
          'header': 'ui-icon-plus',
          'activeHeader': 'ui-icon-minus'
        },
        'heightStyle': 'content',
        'collapsible': true,
        'active': false
      });
    },

    fetchShowedApartment() {
      // Throws the call only if the object singleApartment is empty
      if (!this.singleApartment.value) {
        axios.get("http://127.0.0.1:8000/api/selected/" + this.$route.params.slug)
          .then(response => {
            // Saves the response in the local singleApartment object
            console.log(response)
            this.singleApartment = response.data.singleApartment[0];
            this.user = response.data.utente

            this.createmap()
            // console.log("Dati appartamento in show salvati");
          }
          );
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }

  },
  mounted() {
    /* filterApartment(); */
    this.fetchShowedApartment();
    //this.createmap()
    this.scrollToTop();
  }
};
</script>

<template>
  <div class="container-fluid py-3" style="margin-top: 81px;">
    <h2><strong>Title: </strong>{{ singleApartment.title }}</h2>
    <div class="container-img-show" v-for="singleApartmentImage in singleApartment.images">
      <img class="img-show" :src="`http://127.0.0.1:8000/storage/${singleApartmentImage}`" alt="">
    </div>
    <h5><strong>Price per night: </strong>{{ singleApartment.price }} $</h5>
    <h5><strong>Rooms number: </strong>{{ singleApartment.rooms_num }}</h5>
    <h5><strong>Beds number: </strong>{{ singleApartment.beds_num }}</h5>
    <h5><strong>Bathrooms number: </strong>{{ singleApartment.bathroom_num }}</h5>
    <h5><strong>Square meters: </strong>{{ singleApartment.square_meters }} m<sup>2</sup></h5>
    <h5><strong>Created at: </strong>{{ singleApartment.created_at }}</h5>
    <h5><strong>Address: </strong>{{ singleApartment.address }}</h5>

    <div class="container-map position-relative">
      <div class="container">
        <div class='control-panel'>
          <div id='store-list'></div>
        </div>
        <div class='map' id='map'></div>
      </div>
    </div>
  </div>

  <!-- Host Section with contact redirect -->
  <div class="container py-5 border-bottom" style="margin-top: 81px;">
    <div class="row">
      <div class="col-3 d-flex justify-content-center align-items-start">
        <img src="/images/lporrega.JPG" alt="Host-Avatar" class="host-avatar">
      </div>
      <div class="col-9 host-info d-flex">
        <div class="col-7">
          <h3>Hosted by {{ this.user.name }}</h3>
          <ul>
            <li>Joined in May 2023</li>
            <li><span class="icon"><i class="fa-solid fa-star"></i></span>164 Reviews</li>
            <li><span class="icon"><i class="fa-solid fa-user-check"></i></span>Identity verified</li>
            <li><span class="icon"><i class="fa-solid fa-medal"></i></span> Superhost</li>
          </ul>
          <p>Hello everyone! I’m Lorenzo. <br>I really enjoy travelling and I work in real estate!</p>
          <p class="superhost-badge">Lorenzo is a Superhost</p>
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

.container-img-show {
  width: 30%;
}

.img-show {
  width: 300px;
}

a {
  text-decoration: none;
}

.input-none {
  display: none;
}

.container-map {
  height: 50vh;
  width: 50%;
  margin: 3rem 0;
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


/* Stili personalizzati per la sezione dell'host */

.host-avatar {
  max-width: 180px;
  border-radius: 50%;
}

.host-info {
  padding-left: 20px;
}

.host-info h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.host-info p {
  font-size: 16px;
  margin-bottom: 15px;
}

.host-info ul {
  list-style: none;
  padding: 0;
}

.host-info ul li {
  font-size: 1rem;
  margin-bottom: 5px;
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