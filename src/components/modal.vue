<template>
    <div>
        <div class="modal-bg" :class="isModelShow?'on':''"></div>
        <div class="sign-up modal" :class="isModelShow?'on':''">
            <slot name="con"></slot>
        </div>
    </div>
</template>

<script>
export default {
    porps:[isModelShow],
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>
</style>