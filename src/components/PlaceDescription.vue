<template>
    <div class="pl-6 flex flex-col gap-2">
        <div @click="backClicked" class="cursor-pointer text-red-800 uppercase font-bold mb-2">
            <v-icon name="fa-angle-left" />
            Back to the list
        </div>

        <div class="flex gap-4">
            <div class="w-1/3 rounded overflow-hidden">
                <img v-if="place.photos && place.photos.length > 0" :src="parseUrl(place.photos[0])" :alt="place.name">
                <img v-else src="../assets/cafe.webp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <div class="font-extrabold text-3xl">{{ place.name }}</div>
                <div class="text-sm text-slate-400">
                    <v-icon name="oi-location" fill="#b91c1c" />
                    {{ place.address }}
                </div>
                <div class="text-sm text-slate-400">
                    <v-icon name="gi-fork-knife-spoon" fill="#b91c1c" />
                    {{ place.type[0] }}
                </div>
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio vitae quibusdam accusantium tenetur
            consectetur dolores ex odit, quis sit id culpa magnam ducimus eveniet quae iure error voluptas corrupti.</p>

        <div class="flex gap-2 items-center">
            <StarRating :value="place.rating" />
            <div class="font-bold text-xl">{{ place.rating }}</div>
        </div>
        
        <div>Total user ratings - {{ place.user_ratings_total }}</div>

        <div>Cuisines : {{ place.cuisines[0] }}</div>

        <div>Delivery : {{ place.delivery }}</div>
        <div>Dine In : {{ place.dine_in }}</div>
        <div>Takeout : {{ place.takeout }}</div>


        <div class="bg-red-400">Phone : {{ place.phone_number }}</div>
        <div class="bg-blue-400">Website : {{ place.website }}</div>
    </div>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
    components: {
        StarRating,
    },
    props: {
        place: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        backClicked() {
            this.$emit('back-clicked');
        },
        generateDirectionsLink(lat, lng) {

        },
        parseUrl(url) {
            return url.replace('localhost', 'localhost:8000');
        },
    }
}
</script>
