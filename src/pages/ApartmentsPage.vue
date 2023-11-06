<script>
import axios from 'axios';
import Card from "../components/Card.vue"
export default {
    data() {
        return {
            apartments: []
        }
    },
    components:{
        Card,
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
    <div class="row-cols-4 d-flex">
        <div class="col-3" v-for="singleApartment in this.apartments" :key="singleApartment.id">
            <Card :singleApartment="singleApartment"></Card>
        </div>
    </div>
</div>

</template>

<style scoped></style>