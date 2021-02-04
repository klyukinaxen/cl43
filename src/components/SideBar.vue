<template>
    <div class="side-bar">
        <!-- menu -->

        <router-link :to="{ name: 'ChoosingCoffeeBarPage' }">
            выбор точки
        </router-link>

        <router-link to="/">
            актуальное
        </router-link>

        <router-link :to="{ name: 'FAQPage' }">
            faq
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.side-bar {
    position: fixed;
    width: 250px;
    height: 879px;
    left: 0px;
    top: 0px;

    background: rgba(196, 196, 196, 0.3);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        padding: 13px 20px 13px 40px;
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

    a:first-child{
        padding: 50px 20px 13px 40px;
    }
}
</style>
