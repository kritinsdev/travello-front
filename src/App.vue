<template>
  <Navigation />
  <div class="flex flex-col flex-1 md:flex-row">
    <div class="md:w-2/5">
      <div class="max-h-screen grid grid-cols-2 p-2 overflow-y-scroll">
        <PlaceCard v-for="item in places" :key="item.id" :place="item" @card-click="zoomToPlace" />
      </div>
    </div>
    <div class="flex-auto h-full">
      <MapboxMap :accessToken="accessToken" :mapStyle.sync="mapStyle" :zoom.sync="zoom" :center.sync="center">
        <MapboxNavigationControl position="top-right" />
        <MapboxGeolocateControl />
        <MapboxMarker v-for="place in places" :key="place.id" :lngLat="[place.lng, place.lat]">
          <div class="markerWrap" @click="openModal(place)">
            <div class='marker'></div>
            <div class="markerIcon">
              {{ place.type[0] }}
            </div>
          </div>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </div>
  <Modal :show-modal="showModal" @close="closeModal">
    <div>
      <div class="font-bold text-3xl">{{ selectedPlace.name }}</div>
      <p>{{ selectedPlace.address }}</p>
      <p>Phone number : {{ selectedPlace.phone_number }}</p>
      <p>Website : {{ selectedPlace.website }}</p>
      <p>Rating : {{ selectedPlace.rating }}</p>
      <p>Total ratings : {{ selectedPlace.user_ratings_total }}</p>
      <p>Delivery : {{ selectedPlace.delivery }}</p>
      <p>Dine In : {{ selectedPlace.dine_in }}</p>
      <p>Takeout : {{ selectedPlace.takeout }}</p>
    </div>
  </Modal>
</template>

<script>
import axios from 'axios';
import Navigation from './components/Navigation.vue';
import PlaceCard from './components/PlaceCard.vue';
import Modal from './components/Modal.vue';
import { MapboxMap, MapboxMarker, MapboxNavigationControl, MapboxGeolocateControl } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  components: {
    Navigation,
    PlaceCard,
    Modal,
    MapboxMap,
    MapboxMarker,
    MapboxNavigationControl,
    MapboxGeolocateControl
  },
  data() {
    return {
      places: [],
      showModal: false,
      selectedPlace: null,
      accessToken: 'pk.eyJ1Ijoia3JpdGluc2RldiIsImEiOiJjbGkxbDgwazUwM24zM3VwbWJtdWJxYXZkIn0.DJfikKOno3KOITyHck6CrA',
      mapStyle: 'mapbox://styles/kritinsdev/clifogj6j000501qv09h3gwvy',
      center: [24.604618505142696, 56.81647910237139],
      zoom: 15,
    };
  },
  mounted() {
    this.fetchPlaces();
  },
  methods: {
    fetchPlaces() {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/places`)
        .then(response => {
          console.log(response.data);
          this.places = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    zoomToPlace(place) {
      this.center = [place.lng, place.lat];
      this.zoom = 20;

      setTimeout(() => {
        this.openModal(place);
      }, 500);
    },
    openModal(place) {
      this.selectedPlace = place;
      this.showModal = true;
    },
    closeModal() {
      this.selectedPlace = null;
      this.showModal = false;
    },
  },
};
</script>