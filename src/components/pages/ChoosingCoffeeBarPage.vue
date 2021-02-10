<template>
    <div class="choosing-coffee-bar">
        <a class="container-element">
            Администрация
        </a>
        <a class="container-element">
            Атлант
        </a>
        <a class="container-element">
            Глобус
        </a>
        <router-link :to="{ name: 'GreenHaus' }">
            ГринХаус
        </router-link>
        <a class="container-element">
            Джем
        </a>
        <a class="container-element">
            ЖД
        </a>
        <a class="container-element">
            Кейтеринг
        </a>
        <a class="container-element">
            Колизей
        </a>
        <a class="container-element">
            Макси
        </a>
        <a class="container-element">
            Малахит
        </a>
        <a class="container-element">
            Московская
        </a>
        <a class="container-element">
            Октябрь
        </a>
        <a class="container-element">
            Порошино
        </a>
        <a class="container-element">
            Простор
        </a>
        <a class="container-element">
            Спасская
        </a>
        <a class="container-element">
            Спортмастер
        </a>
        <a class="container-element">
            Театралка
        </a>
        <a class="container-element">
            Цирк
        </a>
        <a class="container-element">
            ЮЗ
        </a>
        <a class="container-element">
            Филармония
        </a>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.choosing-coffee-bar {
    display: flex;
    flex-direction: column;

    .container-element {
        padding: 5px 10px 5px 10px;
        color: #000;
        font-size: 20px;
        text-decoration: underline;
    }
}
</style>
