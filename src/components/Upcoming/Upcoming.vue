<template>
    <section class="main__upcoming" v-if="true">
        <div class="main__upcoming-content">
            <h2 class="main__upcoming-content-text">
                Добро пожаловать
            </h2>
            <h1 class="main__upcoming-content-title">
                Я Расулматов Азизбек
            </h1>
            <BtnMore/>
        </div>
    </section>
    <Loader v-else/>
</template>

<script setup>
import './Upcoming.scss'

</script>