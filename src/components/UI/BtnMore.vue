<template>
    <router-link to="/descriptions" class="btn__more">
        <img :src="moreIcon" alt="">
        <span class="btn__more-text">Узнать обо мне</span>
    </router-link>
</template>

<script setup>
import moreIcon from '@/assets/images/more.svg'
</script>

<style lang="scss">
@import '@/assets/styles/settings/common.scss';

.btn__more {
    z-index: 100;
    border-radius: 10px;
    background: green;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    gap: 10px;
    width: 250px;
    @include media(800) {
        width: 200px;
        padding: 5px;
    }
    @include media(420) {
        width: 150px;
        padding: 2px;
    }
    & img {
        @include media(800) {
            width: 14px;
        }
        @include media(420) {
            width: 8px;
        }
    }
    &-text {
        color: white;
        font-size: 20px;
        line-height: 150%;
        @include media(800) {
            font-size: 15px;
        }
        @include media(420) {
            font-size: 10px;
        }
    }
    &:hover {
        transition: all 300ms;
        background: rgb(0, 79, 0);
    }
}


</style>