<script>
import axios from 'axios';

    export default {
        data() {
            return {
                apartments: []
            }
        },
        methods: {
            fetchData(url) {
                axios.getAdapter(url ?? "http:/127.0.0.1:8000/api/ inserire nome file")
                .then((response) => {
                    const results = response.data;
                    this.apartments = results.data;
                })
            },
        },
        mounted(){
            this.fetchData();
        }

};
</script>
<template>


</template>
<style scoped>


</style>