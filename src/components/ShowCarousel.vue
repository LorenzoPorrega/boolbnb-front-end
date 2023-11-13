<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
            images: "",
        }
    },
    props: {
        showedApartment: Object
    },
    methods: {
        imagesList() {
            console.log(store.showedApartment);
        }
    },
    mounted() {
        this.imagesList()
    }

}
</script>
<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button v-for="(showedApartmentImage, index) in showedApartment.images" :key="index" type="button"
                    data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === 0 }"
                    aria-label="Slide {{ index + 1 }}"></button>
            </div>

            <div class="carousel-inner">
                <div v-for="(showedApartmentImage, index) in showedApartment.images" :key="index" class="carousel-item"
                    :class="{ active: index === 0 }">
                    <img :src="`http://127.0.0.1:8000/storage/${showedApartmentImage}`" class="d-block img-show" alt="" />
                </div>
            </div>

            <button v-if="showedApartment && showedApartment.images && showedApartment.images.length > 1" class="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button v-if="showedApartment && showedApartment.images && showedApartment.images.length > 1" class="carousel-control-next" type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<style  lang="scss" scoped>
.carousel {
    width: 700px;
    height: 500px;
    border: 3px solid yellow;
    border-radius: 2rem;
    overflow: hidden;

    .carousel-inner {
        height: 494px;
    }

    img {
        height: 500px;
        width: 700px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 2rem;
    }
}</style>