<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
            /* fetchSponsoredApartments(); */
            //console.log(fetchSponsoredApartments);
        },
};
</script>
<template>
    <div class="py-5 px-5 border-bottom">
        <h2>Sponsored Apartments</h2>

        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 align-items-stretch g-5 py-3">
            <div class="col" v-for="appartamento in store.sponsoredList"  >
                <Card :singleApartment="appartamento" ></Card>
            </div>
                
        </div>
    </div>
</template>
<style scoped></style>