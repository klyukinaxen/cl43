<template>
    <div class="header">
        <div class="logo" />

        <div>Делай что нравится! (:</div>
    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-left: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        background-image: url("~@/assets/logo.svg");
        width: 50px;
        height: 70px;
        background-size: contain;
    }
}
</style>
