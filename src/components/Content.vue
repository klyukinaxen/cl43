<template>
    <div class="content">
        <!-- <h1>Content</h1> -->

        <router-view />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.content {
    margin-left: $sideBarWidth;
}

@media screen and (max-width: 1024px) {
    .content {
        margin-left: unset;
    }
}
</style>
