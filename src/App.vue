<template>
    <div id="app">
        <Header />

        <SideBar />

        <Content />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Content from '@/components/Content.vue'

export default {
    name: 'App',
    components: {
        Header,
        SideBar,
        Content
    },
    data () {
        return {
            // description: 'Делай что нравится вместе с CoffeeLike'
        }
    },
    metaInfo () {
        return {
            // title: 'Coffee Like 43',
            // meta: [
            //     {
            //         vmid: 'description',
            //         name: 'description',
            //         content: this.description
            //     }
            // ]
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/global.scss";

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
