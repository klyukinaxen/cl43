<template>
    <div class="side-bar">
        <!-- menu -->

        <router-link to="/">
            actual
        </router-link>

        <router-link :to="{ name: 'ChoosingCoffeeBarPage' }">
            choosing-coffee-bar
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
        padding: 10px;
        width: 100%;
        text-align: left;

        &.router-link-exact-active {
            font-weight: 700;
        }
    }
}
</style>
