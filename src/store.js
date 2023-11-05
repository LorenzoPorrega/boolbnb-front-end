import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
})

export function onPageLoad(){
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};