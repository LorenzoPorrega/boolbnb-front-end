import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  apartments: [],
  apartmentFilter: {
    bedrooms:"1",
    beds_number:"1",
    bath_number:"1",
  },
})

export function onPageLoad(){
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};

