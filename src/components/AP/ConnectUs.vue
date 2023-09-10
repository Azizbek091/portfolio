<template>
    <contact class="contact">
        <div class="contact__header">
        <h1 class="contact__title">Социальные сети</h1>
        <div class="contact__page">
            <a href="tel:+998946405705" class="contact__page-links">
                <img :src="tellSvg" alt="" class="contact__page-links-img">
                <h2 class="contact__page-links-text">+998946405705</h2>
            </a>
            <a href="https://t.me/therealkabulovich" class="contact__page-links">
                <img :src="tgSvg" class="contact__page-links-img" alt="">
                <h2 class="contact__page-links-text">@therealkabulovich</h2>
            </a>
            <a target="_blank" href="mailto:azizbekrasilmatov.com@gmail.com" class="contact__page-links">
                <img :src="gmailSvg" alt="" class="contact__page-links-img">
                <h2 class="contact__page-links-text">azizbekrasilmatov.com@gmail.com</h2>
            </a>
        </div>
    </div>
    </contact>
</template>

<script setup>
import './ConnectUs.scss'

import tellSvg from '@/assets/images/call.svg'
import tgSvg from '@/assets/images/telegram.svg'
import gmailSvg from '@/assets/images/gmail.svg'


</script>
