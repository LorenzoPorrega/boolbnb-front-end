import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  apartments: [],
/*   apartmentFilter: {
    rooms_num,
    beds_num,
    bathroom_num,
  }, */
  selectedApartmentSlug: "",
})

export function onPageLoad(){
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};



export function saveSelectedApartmentSlug(slug){
  // I save in store the slug passed in the Card component
  store.selectedApartmentSlug = slug;
}
