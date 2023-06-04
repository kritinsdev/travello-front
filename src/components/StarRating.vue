<template>
    <div>
        <span class="cursor-pointer" v-for="n in 5" :key="n">
            <v-icon :name="getStarType(n)" fill="#ffd055" />
        </span>
    </div>
</template>
  
  
<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            rating: this.value
        }
    },
    methods: {
        getStarType(n) {
            if (n <= this.rating) {
                return 'bi-star-fill';
            } else if (n - 0.5 < this.rating) {
                return 'bi-star-half';
            } else {
                return 'bi-star';
            }
        }
    },
    watch: {
        value(newVal) {
            this.rating = newVal;
        }
    }
}
</script>