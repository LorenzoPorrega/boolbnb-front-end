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
                    const results = response
                    console.log(results)
                })
            },
        },
        mounted(){
            this.fetchData();
        }

}
</script>

<template>

<h1>Appartamenti</h1>
</template>

<style scoped>


</style>