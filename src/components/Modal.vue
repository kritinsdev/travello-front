<template>
    <div class="custom-modal" v-if="showModal">
        <div class="custom-modal-overlay" @click="closeModal"></div>
        <div class="custom-modal-content rounded">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        showModal: Boolean, // Controls the visibility of the modal
    },
    methods: {
        closeModal() {
            this.$emit('close'); // Emit a custom event to close the modal
        },
    },
};
</script>
  
<style scoped>
/* Styles for the custom modal */
.custom-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.custom-modal-content {
    background-color: #fff;
    padding: 20px;
    z-index: 100;
}
</style>
  