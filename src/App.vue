<template>
    <div id="app">
        <!-- <Menu /> -->

        <!-- <router-view></router-view> -->

        <Header />

        <SideBar />

        <Content />
    </div>
</template>

<script>
// import Menu from "@/components/Menu.vue";

import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Content from '@/components/Content.vue'

export default {
    name: 'App',
    components: {
    // Menu,
        Header,
        SideBar,
        Content
    }
}
</script>

<style lang="scss">
@import "@/assets/global.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
