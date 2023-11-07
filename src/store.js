import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  apartments: [],
  minprice: '',
  maxprice: '',
  bedNum:'',
  loadData() {
    if (this.maxprice === '' && this.minprice == '') {
      axios.get("http://127.0.0.1:8000/api/apartments/")
        .then((response) => {
          const results = response.data
          const dati = results['results']['data']
          this.apartments = dati
          console.log(results)
          return dati
        })
    }else{
      store.apartments = []
    }
  }

})

export function onPageLoad() {
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};