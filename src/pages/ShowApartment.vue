<script>
import axios from 'axios';
import { store, saveSelectedApartmentSlug } from '../store.js';

export default {
  data() {
    return {
      store,
      showedSlug: "",
      singleApartment: {},
    };
  },
  methods:{
    fetchShowedApartment(){
      // Establish a variable that will be used in the query in Axios 
      // representing the slug saved from the Card component via store.js
      const slug = this.store.selectedApartmentSlug;
      // Check if there is already a slug
      if(!this.showedSlug){
        // assign the showedSlug to be the current slug to prevent
        // losing it on reload | DOESN'T WORK |
        this.showedSlug = slug;
      }
      console.log(this.showedSlug);
      // Throws the call only if the object singleApartment is empty
      if(!this.singleApartment.value){
        axios.get(`http://127.0.0.1:8000/api/selected/${this.showedSlug}`)
          .then(response => {
            console.log("Chiamata attivata");
            // Saves the response in the local singleApartment object
            this.singleApartment = response.data.singleApartment[0];
          }
        );
      }
    },
  },
  mounted() {
    /* filterApartment() */
    this.fetchShowedApartment();
  }
};
</script>

<template>

  <div class="container-fluid py-3">
    <h2><strong>Title: </strong>{{ singleApartment.title }}</h2>
    <div class="container-img-show">
      <!-- <img class="img-show" :src="`http://127.0.0.1:8000/storage/${singleApartment.images[0]}`" alt=""> -->
    </div>
    <h5><strong>Price per night: </strong>{{ singleApartment.price }} $</h5>
    <h5><strong>Rooms number: </strong>{{ singleApartment.rooms_num }}</h5>
    <h5><strong>Beds number: </strong>{{ singleApartment.beds_num }}</h5>
    <h5><strong>Bathrooms number: </strong>{{ singleApartment.bathroom_num }}</h5>
    <h5><strong>Square meters: </strong>{{ singleApartment.square_meters }} m<sup>2</sup></h5>
    <h5><strong>Created at: </strong>{{ singleApartment.created_at }}</h5>
    <h5><strong>Address: </strong>{{ singleApartment.address }}</h5>

    <!-- Aggiungi qui altri dettagli dell'appartamento se necessario -->

    <div class="container-map position-relative">
      <div class='control-panel' style="display: none">
        <div class='heading'>
          <img src='/images/boolbnb-logo.png'>
        </div>
        <div id='store-list'></div>
      </div>
      <div class='map' id='map'></div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.container-fluid {
  margin-top: 80px;
}
.container-img-show{
  width: 30%;
}
.img-show{
  width: 300px;
}

a {
  text-decoration: none;
}
.input-none{
  display: none;
}
.container-map{
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

.heading > img {
  height: auto;
  margin: 10px 0 8px 0;
  width: 150px;
}

</style>