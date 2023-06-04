<template>
    <div class="flex flex-row p-2 gap-2 cursor-pointer" @click="$emit('card-click', place)">
        <div class="flex rounded-lg overflow-hidden relative">
            <span
                class="absolute top-1 left-1 flex items-center justify-center text-sm font-bold text-white rounded-full bg-red-700 text-center w-7 h-7 p-2">1</span>
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
            required: true,
        },
    },
};
</script>