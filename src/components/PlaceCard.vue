<template>
    <div class="placeCard flex flex-row p-2 gap-2 cursor-pointer transition-all hover:scale-105" @click="$emit('card-click', place)">
        <div class="flex rounded-lg overflow-hidden relative">
            <span
                class="rank absolute top-1 left-1 flex items-center justify-center text-md font-bold text-white rounded-full bg-red-700 text-center w-8 h-8 p-2">{{ rank }}</span>
            <div>
                <img v-if="place.photos && place.photos.length > 0" :src="parseUrl(place.photos[0])" :alt="place.name">
                <img v-else src="../assets/cafe.webp" alt="">
            </div>
            <div class="absolute py-2 pl-2 bg-black/70 w-full bottom-0 text-white">
                <div class="font-bold">{{ place.name }}</div>
                <div class="text-xs">{{ place.type[0] }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    },
    methods: {
        parseUrl(url) {
            return url.replace('localhost', 'localhost:8000');
        },
    },
    props: {
        place: {
            type: Object,
        },
        rank: Number
    },
};
</script>

<style scoped>
.placeCard:nth-of-type(1) .rank {
    background-color: #FFD700;
}

.placeCard:nth-of-type(2) .rank {
    background-color: #808080;
}

.placeCard:nth-of-type(3) .rank {
    background-color: #CD7F32;
}
</style>