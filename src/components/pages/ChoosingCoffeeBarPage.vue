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

import coffeeBarData from '@/components/CoffeeBarInfo.json'

export default {
    data () {
        return {
            сoffeeBars: coffeeBarData.coffeeBars
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
