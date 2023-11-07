<script>
import axios from 'axios';
import Card from "../components/Card.vue";
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
      apartments: []
    }
  },
  components: {
    Card,
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data
          const dati = results['results']['data']
          this.apartments = dati
          console.log(results)
        })
    },
    filtersData() {
      let listFiltered = []
      if (store.minprice === "" && store.maxprice === "") {
        return this.apartments
      }
      else if (store.maxprice !== "") {
        //forse è l'ora tarda ma cosi riesco a filtrare gli appartamenti per il massimo
        for (let i = 0; i < this.apartments.length; i++) {
          if ((parseInt(this.apartments[i].price)) <= parseInt(store.maxprice)) {
            listFiltered.push(this.apartments[i])
          }
        }
        // listFiltered = this.apartments.filter((appartamento) => appartamento['price'] < parseFloat(store.maxprice))
        return listFiltered
      } else if (store.minprice !== "") {
        for (let i = 0; i < this.apartments.length; i++) {
          if ((parseInt(this.apartments[i].price)) >= parseInt(store.minprice)) {
            listFiltered.push(this.apartments[i])

          }
        }
        return listFiltered
      } else if (store.minprice !== "" && store.maxprice !== "") {
        for (let i = 0; i < this.apartments.length; i++) {
          if (this.apartments[i]['price'] < store.maxprice) {
            if (this.apartments[i]['price'] > store.minprice) {
              listFiltered.push(this.apartments[i])
            }
          }
          else {
            listFiltered = this.apartments.filter(apartment => apartment['price'] >= store.minprice && apartment['price'] <= store.maxprice);
          }
        }
      }
      else if (store.bedNum !== '') {
        for (let i = 0; i < this.apartments.length; i++) {
          if (this.apartments[i].beds_num >= store.bedNum) {
            listFiltered.push(this.apartments[i]);

          }
          return listFiltered
        }
      }
    }

  },
  mounted() {

    //store.loadData()
    this.fetchData();
  }
}

</script>

<template>
  <div class="container">
    <div class="row-cols-4 d-flex">
      <div class="col-3" v-for="singleApartment in filtersData() " :key="singleApartment.id">
        <Card :singleApartment="singleApartment"></Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

.container {
  height: calc(100vh - 300px);
}
</style>