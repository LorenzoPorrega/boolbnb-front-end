import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  loggedUser: "",
  apartments: [],
  sponsoredApartmentsId: [],
  showedApartment: {},
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
  address.append(searchBoxHTML);
  ttSearchBox.on("tomtom.searchbox.resultselected", function (data) {
    // console.log('Funzione per prendere la città triggerata')

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

/* Questa funzione non la usiamo, usiamo il megafilter
di Islam */
/* export function fetchSponsoredApartments() {
  axios.get("http://127.0.0.1:8000/api/sponsoredApartments/")
    .then((response) => {
      store.sponsoredApartmentsId = response.data.sponsoredApartments;
      console.log(store.sponsoredApartmentsId)
    })
} */

export function createmap() {
  let long = parseFloat(store.showedApartment['longitude'])
  let lat = parseFloat(store.showedApartment['latitude']);
  let address = store.showedApartment['address']
  let stores = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            long,
            lat
          ]
        },
        "properties": {
          "address": address,
          "iconSize": [50, 75], // size of the icon
        }
      },
    ]
  }
  const apiKey = '9GGMAIWofgnTAUXbZTCGx0V0SDSxAx9I';
  const map = tt.map({
    key: apiKey,
    container: 'map',
    center: [long, lat],
    zoom: 10
  });

  stores.features.forEach(function (stores) {
    const address = stores.properties.address;
    const location = stores.geometry.coordinates;
    const marker = new tt.Marker().setLngLat(location).setPopup(new tt.Popup({
      offset: 35
    }).setHTML(address)).addTo(map);
  });
}

export function getFrontEndCostumerIP($slug) {
  // Chiave API del servizio terzi ipdata.co di Lorenzo
  let apiKey = 'dcbaf3e35d5120fc5dacec2ad095b3634d566544e59017c9aac320cf';
  $.getJSON('https://api.ipdata.co?api-key=' + apiKey, function (data) {
    console.log(`Indirizzo IP del visitatore (tu): ${JSON.stringify(data.ip, null, 2)}`);

    let ipAdress = data.ip;

    axios.post("http://127.0.0.1:8000/api/saveCostumerIpAdress/", {
      ipAdress: ipAdress,
      showedApartmentSlug: $slug,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      /* console.log(error); */
    });
  });
}

export function fetchLoggedUser(){
  
  axios.get("http://127.0.0.1:8000/api/fetchLoggedUser/")
  .then(response => {
    console.log(response.data);
    store.loggedUser = response.data;
  })
}