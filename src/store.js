import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  user: "",
  pageLoading: false,
  apartments: [],
  sponsoredApartmentsId: [],
  apartmentFilter: {
    rooms_num: "",
    beds_num: "",
    bathroom_num: "",
    geopoints: "",
    freeformAddress: "",
    distance: 20,    
    latitude:'',
    longitude:'',
  },
})

export function fetchUser(){
  axios.get("http://127.0.0.1:8000/api/apartments")
  .then((response) => { 
  store.user = response.data.user
      console.log(store.user);
  })
}

export function onPageLoad() {
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};

export function saveSelectedApartmentSlug(slug) {
  // I save in store the slug passed in the Card component
  store.selectedApartmentSlug = slug;
}

export function filterApartment() {

  const baseURL = "http://127.0.0.1:8000/api/apartments/";
  const params = store.apartmentFilter;
  const url = new URL(baseURL);
  url.search = new URLSearchParams(params).toString();
  // console.log("URL generato per la chiamata:", url.toString());
  
  axios.get("http://127.0.0.1:8000/api/apartments/", {params: store.apartmentFilter})
  .then((response) => {      
      store.apartments= response.data.apartments
      if(response.data.funzione.length !== 0){
        store.apartments = response.data.funzione
        store.apartmentFilter.latitude =''
        store.apartmentFilter.longitude=''
      }
      console.log(response)
    }
      
     
      /* console.log(store.apartments); */
      // console.log("Ricerca con filtri input avviata")
      // console.log(store.apartmentFilter)
      // console.log(store.apartments)
  )
}

/* export function searchApartment(){
  if (store.indirizzoFilter == ''){
    alert('Inserire un indirizzo')
  }
  else{
    axios.post("http://127.0.0.1:8000/api/searchApartament/",{params:store.indirizzoFilter})
    .then((response) =>{
        const appartamento = response.data
        console.log(appartamento['data'])
        store.apartments = appartamento
    })
  }
} */

export function searchBar() {
  let options = {
    searchOptions: {
      key: "9GGMAIWofgnTAUXbZTCGx0V0SDSxAx9I",
      language: "it-It",
      limit: 5,
    },
  }
  let ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
  let searchBoxHTML = ttSearchBox.getSearchBoxHTML()
  const address = document.getElementById('input')
  let newIndirizzo = ''
  address.append(searchBoxHTML);
  ttSearchBox.on("tomtom.searchbox.resultselected", function (data) {
    // console.log('Funzione per prendere la città triggerata')

    newIndirizzo = JSON.stringify(data)
    let objectGeopoints = data['data']['result']['position']
    store.apartmentFilter.latitude = objectGeopoints['lat']
    store.apartmentFilter.longitude = objectGeopoints['lng']
    console.log(store.apartmentFilter.latitude)
    console.log(store.apartmentFilter.longitude)

  })
}

export function rangeSlider() {
  const rangeSlider = document.getElementById("multi22");
  const sliderValue = document.getElementById("sliderValue");

  rangeSlider.addEventListener("input", () => {
    sliderValue.textContent = rangeSlider.value;
  });

}


export function fetchSponsoredApartments() {
  axios.get("http://127.0.0.1:8000/api/sponsoredApartments/")
    .then((response) => {
      store.sponsoredApartmentsId = response.data.sponsoredApartments;
      console.log(store.sponsoredApartmentsId)
    })
}


