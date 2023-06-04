<template>
    <div class="w-full h-full">
        <div id="map"></div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
    name: 'PlacesMap',
    props: {
        places: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            accessToken: 'pk.eyJ1Ijoia3JpdGluc2RldiIsImEiOiJjbGkxbDgwazUwM24zM3VwbWJtdWJxYXZkIn0.DJfikKOno3KOITyHck6CrA',
        }
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/kritinsdev/clieisi3n005301r149j2anuk",
            center: [24.604618505142696, 56.81647910237139],
            zoom: 15,
        });

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });

        const nav = new mapboxgl.NavigationControl();

        this.places.forEach(place => {
            new mapboxgl.Marker()
                .setLngLat([place.lng, place.lat])
                .addTo(map);
        });

        map.addControl(geolocate, "top-left")
        map.addControl(nav, "top-right");
    },
}
</script>

<style lang="scss" scoped></style>