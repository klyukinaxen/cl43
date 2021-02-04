<template>
    <div class="header">
        <div class="logo" />

        <div class="dwyl">
            Делай что нравится! (:
        </div>
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
        margin: 30px;
    }
}

.dwyl{
    padding: 50px;
}
</style>
