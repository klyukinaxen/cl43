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
@import "@/assets/variables";

.header {
    margin-left: $sideBarWidth;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo {
        background-image: url("~@/assets/logo.svg");
        width: 50px;
        height: 70px;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 20px;
    }
}

.dwyl {
    padding: 50px;
}

@media screen and (max-width: 1024px) {
    .header {
        margin-left: unset;

        .logo {
            // display: none;
            opacity: 0;
        }

        .dwyl {
            padding: 20px;
            font-size: 14px;
        }
    }
}
</style>
