<template>
    <section class="main__description">
        <div class="main__description-content">
            <img :src="heroImg" alt="" class="main__description-content-img">
            <div class="main__description-content-box">
                <p class="main__description-content-text">
                    Меня зовут Азизбек Расулматов, я Fronted разработчик, разрабатываю веб-приложения (любые сайты, в которых есть элементы интерактива), то есть фактически большую часть интернет-ресурсов: поисковики, интернет-магазины, соцсети, видеохостинги, сервисы заказа и бронирования, онлайн-калькуляторы и т.д.
                </p>
                <p class="main__description-content-text">
                    Специалист, который создает и поддерживает сайты и приложения, работаю как над внешним видом сайта, так и над его внутренней, серверной частью. Тестирование и поиск багов — хоть и не основная, но тоже одна из задач веб-программирования.
                </p>
            </div>
        </div>
    </section>
    <router-link to="/myworks" class="next">
        <div class="next__box">
        <a href="" class="next__box-click">
            <h2 class="next__box-click-text">Cмотреть проекты</h2>
        </a>
        </div>
    </router-link>
</template>

<script setup>
import './Description.scss'
import heroImg from '@/assets/images/man.jpg'

</script>
