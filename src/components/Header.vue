<template>
    <div class="header">
        <div class="logo"></div>

        <Menu />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
    components: {
        Menu,
    },
};
</script>

<style lang="scss" scoped>
.logo {
    background-image: url("~@/assets/logo.svg");
    width: 50px;
    height: 70px;
    background-size: contain;
}
</style>
