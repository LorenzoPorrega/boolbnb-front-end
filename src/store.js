import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  apartments: [],
  apartmentFilter: {
    rooms_num:"",
    beds_num:"",
    bathroom_num:"",
  },
  selectedApartmentSlug: "",
})

export function onPageLoad() {
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};

export function filterApartment(){
  axios.get("http://127.0.0.1:8000/api/apartments/", {params:store.apartmentFilter})
  .then((response) => {
      store.apartments = response.data.apartments 
      /* console.log(store.apartments); */
    })}

export function saveSelectedApartmentSlug(slug){
  // I save in store the slug passed in the Card component
  store.selectedApartmentSlug = slug;
}