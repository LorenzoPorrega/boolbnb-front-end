<script>
import { store, fetchSponsoredApartments } from '../store.js';

export default {
    data() {
        return {
            store,            
        };
    },    
    mounted() {
            fetchSponsoredApartments();
            console.log(fetchSponsoredApartments);
        },
};
</script>
<template>
    <div class="container-fluid py-5 px-5 border-bottom">
        <h2>Sponsored Apartments</h2>

        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 align-items-stretch g-5 py-3">
            <div class="col">
                <a href="#" class="text-decoration-none">
                    <div class="card">
                        <div>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&amp;o="
                                class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Numa I Vita Apartments</h5>
                            <p class="card-text">Fortezza da Basso, Italy, Florence</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <p class="text-muted me-2">Rooms:</p>
                                    <p class="text-primary">2</p>
                                </div>
                                <div class="d-flex">
                                    <p class="text-muted me-2">Beds:</p>
                                    <p class="text-primary">3</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <p class="text-muted me-2">Bathrooms:</p>
                                    <p class="text-primary">3</p>
                                </div>
                                <div class="d-flex fw-bold">
                                    <p class="text-muted me-2">Price:</p>
                                    <p class="text-primary">$185</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="text-decoration-none">Details</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped></style>