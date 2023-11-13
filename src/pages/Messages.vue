<script>
import axios from 'axios';

export default {
  data() {
    return {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    errors: null,
    success: null,
    loading: false,
    };
  },
  methods: {
  onFormSubmit() {
    
    this.loading = true;

    const url = `http://localhost:8000/api/apartments/${this.$route.params.slug}/messages`;
    axios
      .post(url, this.formData)
      .then((resp) => {
        this.success = resp.data.message;
        this.errors = null;
      })
      .catch((e) => {
        this.errors = e.response?.data?.message ?? e.message;
      })
      .finally(() => {
        // Imposta loading su false dopo che l'operazione è completata (con successo o errore)
        this.loading = false;
      });
    }
  }
};
</script>

<template>

  <div class="container py-5 text-center border-bottom" style="margin-top: 120px;">
    <div class="row">
      <div class="col-7 mx-auto">
        <div class="my-3">
          <h1>Welcome to the CONTACTS section!</h1>
          <h3>Here's how you can contact me.</h3>
        </div>

        <!-- Loader -->
        <section  class="loader">
          <div>
            <div>
              <span class="one h6"></span>
              <span class="two h3"></span>
            </div>
          </div>

          <div>
            <div>
              <span class="one h1"></span>
            </div>
          </div>

          <div>
            <div>
              <span class="two h2"></span>
            </div>
          </div>
          <div>
            <div>
              <span class="one h4"></span>
            </div>
          </div>
        </section>

        <div class="my-5">
          <div class="alert alert-danger" v-if="errors && !loading">
            <div class="alert alert-danger">
              Seems like something went wrong: {{ errors }}
            </div>
          </div>
          
          <!-- prevent per evitare il ricaricamento della pagina -->
          <form @submit.prevent="onFormSubmit" v-if="!success && !loading">
            <div class="mb-3">
              <label class="mb-2">Name</label>
              <input type="text" class="form-control" v-model="formData.name">
            </div>
            
            <div class="mb-3">
              <label class="mb-2">Email</label>
              <input type="text" class="form-control" v-model="formData.email">
            </div>

            <div class="mb-3">
              <label class="mb-2">Message</label>
              <textarea class="form-control" v-model="formData.message"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
          </form>

          <div class="alert alert-success" v-else-if="success && !loading">
            Thanks for contacting me, i will reply asap!
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;

// Styles per Loader
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add these properties to position the loader properly */
  width: 180px;
  height: 190px;
  /* Adjust the height to accommodate the "h4" span */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15); 
  z-index: 9999;
}

.loader div {
  position: absolute;
  width: 120px;
  height: 70px;
}

.rot {
  transform: rotate(150deg);
}

.rot2 {
  transform: rotate(20deg);
}

.loader div:nth-of-type(2) {
  transform: rotate(60deg);
}

.loader div:nth-of-type(3) {
  transform: rotate(-60deg);
}

.loader div div {
  width: 100%;
  height: 100%;
  position: relative;
}

.loader div div span {
  position: absolute;
  width: 6px;
  height: 0%;
  background: $palette-primary;
  z-index: 999999;
}

.h1 {
  left: 0;
  animation: load1 3.2s ease infinite;
}

.h2 {
  right: 0;
  animation: load2 3.2s ease 0.4s infinite;
}

.h3 {
  right: 0;
  animation: load3 3.2s ease 0.8s infinite;
}

.h4 {
  top: 15px;
  left: 15px;
  animation: load4 3.2s ease 1s infinite;
  transform: rotate(90deg);
}

.h5 {
  bottom: 0;
  animation: load5 3.2s ease 1.2s infinite;
}

.h6 {
  left: 0;
  animation: load6 3.2s ease 1.3s infinite;
}

@keyframes load1 {
  0% {
    bottom: 0;
    height: 0;
  }

  6.944444444% {
    bottom: 0;
    height: 100%;
  }

  50% {
    top: 0;
    height: 100%;
  }

  59.944444433% {
    top: 0;
    height: 0;
  }
}

@keyframes load2 {
  0% {
    top: 0;
    height: 0;
  }

  6.944444444% {
    top: 0;
    height: 100%;
  }

  50% {
    bottom: 0;
    height: 100%;
  }

  59.944444433% {
    bottom: 0;
    height: 0;
  }
}

@keyframes load3 {
  0% {
    top: 0;
    height: 0;
  }

  6.944444444% {
    top: 0;
    height: 100%;
  }

  50% {
    bottom: 0;
    height: 100%;
  }

  59.94444443% {
    bottom: 0;
    height: 0;
  }
}

@keyframes load4 {
  0% {
    top: 37px;
    left: 86px;
    height: 134%;
  }

  6.944444444% {
    top: 10px;
    height: 134%;
  }

  50% {
    bottom: 10px;
    height: 134%;
  }

  59.94444443% {
    bottom: 0;
    height: 0;
  }
}

@keyframes load5 {
  0% {
    bottom: 0;
    height: 0;
  }

  6.944444444% {
    bottom: 0;
    height: 100%;
  }

  50% {
    top: 0;
    height: 100%;
  }

  59.94444443% {
    top: 0;
    height: 0;
  }
}

@keyframes load6 {
  0% {
    bottom: 0;
    height: 0;
  }

  6.944444444% {
    bottom: 0;
    height: 100%;
  }

  50% {
    top: 0;
    height: 100%;
  }

  59.94444443% {
    top: 0;
    height: 0;
  }
}

</style>