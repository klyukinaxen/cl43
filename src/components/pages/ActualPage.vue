<template>
    <div class="actual-page">
        <h2> Актуальные инфоповоды</h2>

        <div class="info-box">
            <a href="/">Акция на 14 февраля</a>
            <a href="/">Акция на 23 февраля</a>
            <a href="/">Официальное открытие Глобуса 5-6 февраля</a>
        </div>

        <h2>полезные ссылки</h2>
        <div class="useful-links">
            <button @click="buttonClickHandler">
                Общий график
            </button>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    props: {},
    data () {
        return {

        }
    },
    methods: {
        buttonClickHandler () {
            console.log('buttonClickHandler', this.$router)
            // this.$router.push({ name: "About" });
        }
    }
}
</script>

<style lang="scss" scoped>
    .info-box{
        width: 100%;
        background-color:#00584D;
        color:white;
        display: flex;
        flex-direction: column;

        a{
            text-decoration: underline;
            color: #fff;
            padding: 10px 10px 10px 20px;
        }

        a:first-child{
            padding-top:20px;
        }
        a:last-child{
            padding-bottom:20px;
        }
    }
</style>
