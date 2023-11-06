<script>
import axios from 'axios';

export default {
    data() {
        return {
            apartments: []
        }
    },
    methods: {
        fetchData() {
            axios.get("http://127.0.0.1:8000/api/apartments/")
                .then((response) => {
                    this.apartments = response.data.results;
                    console.log(this.apartments);
                })
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>
    <h1>APPARTAMENTI</h1>

    <div class="container">
    <div class="row-cols-4">
        <div class="col-3" v-for="singleApartment in this.apartments" :key="singleApartment.id">
            <div class="card h-100">
                <!-- <img :src="getFullImageUrl(singleApartment.images[0])" class="card-img-top" alt="..."> Utilizzo la funzione getFullImageUrl -->
                <img :src="`http://127.0.0.1:8000/storage/${singleApartment.images[0]}`" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">{{ singleApartment.title }}</h5>
                    <p>{{ singleApartment.address }}</p>
                    <p>Price: ${{ singleApartment.price }}</p>
                    <p>Rooms: {{ singleApartment.rooms_num }}</p>
                    <p>Beds: {{ singleApartment.beds_num }}</p>
                    <p>Bathrooms: {{ singleApartment.bathroom_num }}</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>