<template>
    <div class="choosing-coffee-bar">
        <pre
            v-for="coffeeBar in сoffeeBars"
            :key="coffeeBar.name"
        >
                {{ coffeeBar.name }}
            </pre>
    </div>
</template>

<script>
export default {
    data () {
        return {
            сoffeeBars: [
                { name: 'Администрация' },
                { name: 'Атлант' },
                { name: 'Глобус' },
                { name: 'ГринХаус' },
                { name: 'Джем' },
                { name: 'ЖД' },
                { name: 'Кейтеринг' },
                { name: 'Колизей' },
                { name: 'Макси' },
                { name: 'Малахит' },
                { name: 'Московская' },
                { name: 'Октябрь' },
                { name: 'Порошино' },
                { name: 'Простор' },
                { name: 'Спасская' },
                { name: 'Спортмастер' },
                { name: 'Театралка' },
                { name: 'Цирк' },
                { name: 'Филармония' },
                { name: 'ЮЗ' }
            ]
        }
    }
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
