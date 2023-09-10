
<template>
    <div class="wrapper" v-if="loading">
        <Navbar />
        <router-view />
    </div>
    <Loading v-else />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from "./components/Navbar/Navbar.vue";
import Loading from "./components/UI/Loader.vue";

const loading = ref(false);

setTimeout(() => {
    loading.value = true;
}, 1000);
</script>
