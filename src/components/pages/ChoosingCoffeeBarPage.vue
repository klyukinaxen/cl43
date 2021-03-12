<template>
    <div class="choosing-coffee-bar">
        <ul>
            <li
                v-for="coffeeBar in сoffeeBars"
                :key="coffeeBar.name"
                @click="createCookies(coffeeBar.id)"
            >
                {{ coffeeBar.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
// import coffeeBarData from '@/components/CoffeeBarInfo.json'
export default {
    data () {
        return {
            сoffeeBars: [
                { name: 'Администрация', id: '1' },
                { name: 'Атлант', id: '2' },
                { name: 'Глобус', id: '3' },
                { name: 'ГринХаус', id: '4' },
                { name: 'Джем', id: '5' },
                { name: 'ЖД', id: '6' },
                { name: 'Кейтеринг', id: '7' },
                { name: 'Колизей', id: '8' },
                { name: 'Макси', id: '9' },
                { name: 'Малахит', id: '10' },
                { name: 'Московская', id: '11' },
                { name: 'Октябрь', id: '12' },
                { name: 'Простор', id: '13' },
                { name: 'Спасская', id: '14' },
                { name: 'Спортмастер', id: '15' },
                { name: 'Театралка', id: '16' },
                { name: 'Цирк', id: '17' },
                { name: 'Филармония', id: '18' },
                { name: 'Фудтрак', id: '19' },
                { name: 'ЮЗ', id: '20' }
            ]
        }
    },
    methods: {
        createCookies (barId) {
            Cookies.set('coffeeBar', barId, { expires: 7 })
            this.$router.push({ name: 'CoffeeBarPage' })
        }
    }
}
</script>

<style lang="scss" scoped>
.choosing-coffee-bar {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 20px 0 20px;

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        li {
            width: 175px;
            list-style: none;
            margin: 20px;
            font-size: 18px;
            text-decoration: underline;
            cursor: pointer;
        }
        li:hover {
            font-weight: 600;
        }
    }
}
</style>
