<template>
    <div class="main__background">
    </div>
    <div class="main__works-box">
            <h2 class="main__works-box-title">Мои навыки</h2>
        <div class="main__works-box-front">
            <div class="main-works-box-front-item">
                <img :src="htmlSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">85%</p>
            </div>
            <div class="main-works-box-front-item">
                <img :src="cssSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">80%</p>
            </div>
            <div class="main-works-box-front-item">
                <img :src="jsSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">75%</p>
            </div>
            <div class="main-works-box-front-item">
                <img :src="vueSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">60%</p>
            </div>
            <div class="main-works-box-front-item">
                <img :src="vuexSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">60%</p>
            </div>
            <div class="main-works-box-front-item">
                <img :src="sassSvg" alt="" class="main__works-box-front-item-img">
                <p class="main__works-box-front-item-text">85%</p>
            </div>
        </div>
        <div class="main__works-footer">
            <div class="main__works-box-footer">
                <p class="main__works-box-footer-text">
                    Соответственно все уроки, образования и навыки было образовано от учебного центра 
                </p>
                <a target="_blank" href="https://proweb.uz/" class="main__works-box-footer-link">
                    <img :src="prowebSvg" alt="">
                </a>
            </div>
        </div>
    </div>
    <footer class="project">
            <h2 class="project-title">Мои проекты</h2>
        <div class="project__box">
            <a target="_blank" href="https://azizbek091.github.io/go-trip" class="project__box-item">
                <img :src="goTrip" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">Go Trip</h2>
            </a>
            <a target="_blank" href="https://azizbek091.github.io/airpods" class="project__box-item">
                <img :src="airPods" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">Airpods</h2>
            </a>
            <a target="_blank" href="https://azizbek091.github.io/nike-original" class="project__box-item">
                <img :src="nike" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">Nike</h2>
            </a>
            <a target="_blank" href="https://azizbek091.github.io/grayson18" class="project__box-item">
                <img :src="grayson" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">Grayson</h2>
            </a>
            <a target="_blank" href="https://azizbek091.github.io/TOTEMBO" class="project__box-item">
                <img :src="totembo" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">TOTEMBO</h2>
            </a>
            <a target="_blank" href="https://weather-tan-nine.vercel.app/" class="project__box-item">
                <img :src="weather" alt="" class="project__box-item-img">
                <h2 class="project__box-item-text">Weather</h2>
            </a>
        </div>
    </footer>
    <router-link to="/contacts" class="page">
        <div class="page__box">
        <h2 class="page__box-title">Есть вопросы? </h2>
        <a href="" class="page__box-click">
            <img :src="callSvg" alt="" class="page__box-click-img">
            <h2 class="page__box-click-text">Связаться со мной</h2>
        </a>
        </div>
    </router-link>
</template>
<script setup>
import './Myworks.scss'

// Картинки с файлом SVG
import htmlSvg from '@/assets/images/html.svg'
import cssSvg from '@/assets/images/css.svg'
import jsSvg from '@/assets/images/js.svg'
import vueSvg from '@/assets/images/vueJs.svg'
import sassSvg from '@/assets/images/sass.svg'
import prowebSvg from '@/assets/images/proweb.svg'
import vuexSvg from '@/assets/images/vueX.jpg'
import callSvg from '@/assets/images/call.svg'

// Картинки с файлом PNG
import goTrip from '@/assets/images/gotrip.jpg'
import airPods from '@/assets/images/airpods.jpg'
import nike from '@/assets/images/nike.jpg'
import grayson from '@/assets/images/grayson.jpg'
import totembo from '@/assets/images/totembo.jpg'
import weather from '@/assets/images/weather.jpg'


</script>