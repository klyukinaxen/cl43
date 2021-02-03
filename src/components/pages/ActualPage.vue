<template>
    <div class="actual-page">
        <div>actual</div>

        <button @click="buttonClickHandler">
            btn
        </button>
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
