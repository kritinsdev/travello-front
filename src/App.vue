<template>
  <Navigation />
  <div class="flex flex-col flex-1 md:flex-row">
    <div class="md:w-1/3">
      <div class="max-h-screen grid grid-cols-2 p-2 overflow-y-scroll">
        <PlaceCard v-for="item in places" :key="item.id" :place="item" @card-click="zoomToPlace" />

        <PlaceDescription />
      </div>
    </div>
    <div class="flex-auto h-full">
      <MapboxMap :accessToken="accessToken" :mapStyle.sync="mapStyle" :zoom.sync="zoom" :center.sync="center">
        <MapboxNavigationControl position="top-right" />
        <MapboxGeolocateControl />
        <MapboxMarker v-for="place in places" :key="place.id" :lngLat="[place.lng, place.lat]">
          <div class="markerWrap">
            <div class='marker'></div>
            <div class="markerIcon">
              <v-icon :name="getIconName(place.type[0])" fill="white" scale="1" />
            </div>
          </div>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navigation from './components/Navigation.vue';
import PlaceCard from './components/PlaceCard.vue';
import { MapboxMap, MapboxMarker, MapboxNavigationControl, MapboxGeolocateControl } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  components: {
    Navigation,
    PlaceCard,
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
      accessToken: `${import.meta.env.VITE_MAPBOX_API_TOKEN}`,
      mapStyle: `${import.meta.env.VITE_MABOX_MAP_STYLE}`,
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
    getIconName(type) {
      if (type === 'Restaurant') {
        return 'md-restaurant-round';
      } else if (type === 'Cafe') {
        return 'md-localcafe-outlined';
      } else if (type === 'Bar') {
        return 'md-sportsbar-outlined';
      } else if (type === 'Fast Food') {
        return 'md-fastfood-round';
      } else if (type === 'Bistro') {
        return 'gi-hot-meal';
      } else if (type === 'Pizzeria') {
        return 'fa-pizza-slice';
      } else if (type === 'Bakery') {
        return 'md-bakerydining-round'; 
      } else if (type === 'Food Truck') {
        return 'gi-food-truck';
      } else if (type === 'Gas Station') {
        return 'md-localgasstation-round';
      }  
      return 'md-restaurant-round';
    },
  },
};
</script>