<template>
    <div
        :class="['side-bar', { show: menuIsShow }]"
        @click="menuIsShow = !menuIsShow"
    >
        <!-- menu -->
        <!-- TODO:сделать чтобы меню скрывалось по тапу на экран -->
        <router-link :to="{ name: 'ChoosingCoffeeBarPage' }">
            выбор точки
        </router-link>

        <router-link to="/">
            актуальное
        </router-link>

        <router-link :to="{ name: 'FAQPage' }">
            faq
        </router-link>

        <div class="hamburger">
            <div />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data () {
        return {
            menuIsShow: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.side-bar {
    position: fixed;
    width: $sideBarWidth;
    height: 879px;
    left: 0px;
    top: 0px;

    background: #e9e9e9;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        padding: 10px 20px;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
        font-size: 16px;

        text-decoration: none;
        color: #000;

        &.router-link-exact-active {
            font-weight: 700;
            font-size: 22px;
        }
    }

    a:first-child {
        padding-top: 50px;
    }

    .hamburger {
        width: 30px;
        margin: calc(0px + 10px) calc(5px + 10px);
        position: absolute;
        left: 100%;
        display: none;

        &::before,
        &::after,
        & div {
            background: var(--green);
            content: "";
            display: block;
            height: 4px;
            border-radius: 3px;
            margin: 5px 0;
            transition: 0.5s;
        }
    }
}

@media screen and (max-width: 1024px) {
    .side-bar {
        left: -$sideBarWidth;
        transition: left 0.3s ease;

        &.show {
            left: 0;
        }

        .hamburger {
            display: unset;
        }
    }
}
</style>
