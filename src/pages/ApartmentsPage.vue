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
                    this.apartments = response.data
                    console.log(this.apartments);

                })
        },
    },
    mounted() {
        this.fetchData();
    }

}
</script>

<template>
    <h1>Appartamenti</h1>

    <div class="container">
        <div class="row-cols-4">
            <div class="col-3" v-for="singleApartment in this.apartments" :key="singleApartment.id">
                <div class="card h-100">
                    <img :src="singleApartment.imageURL" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ singleApartment.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>