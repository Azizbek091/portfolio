<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__box">
                <router-link to="/" class="logo">
                    <h2>AR</h2>
                </router-link>
                <button class="nav__btn" @click="burger = true">
                    <img :src="btnIcon" alt="">
                </button>
                <ul class="nav__box-list" :class="{active: burger}">
                    <button class="nav__close" @click="burger = false">
                        <img :src="closeIcon" alt="">
                    </button>
                    <li v-for="page in pages" :key="page.name">
                        <router-link @click="burger = false" :to="page.url" class="nav__box-list-link">
                            {{ page.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import './Navbar.scss'
import { ref } from 'vue'
import btnIcon from '@/assets/images/menu.svg'
import closeIcon from '@/assets/images/close.svg'

const pages = ref([
    {name: 'Главная', url: '/'},
    {name: 'Обо мне', url: '/descriptions'},
    {name: 'Мои работы', url: '/myworks'},
    {name: 'Контакты', url: '/contacts'},
])

let burger = ref(false)


</script>