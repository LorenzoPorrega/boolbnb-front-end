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
                    const rislutati = response.data.results
                    console.log(rislutati)
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
h1{
    color: white;
}

</style>