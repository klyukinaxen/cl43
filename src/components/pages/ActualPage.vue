<template>
    <!-- страница актуальное -->
    <div class="actual-page">
        <h2> Актуальные инфоповоды</h2>
        <!-- блок с информацией по инфоповодам -->
        <div class="info-block">
            <a href="/">Акция на 14 февраля</a>
            <a href="/">Акция на 23 февраля</a>
            <a href="/">Официальное открытие Глобуса 5-6 февраля</a>
        </div>
        <!-- блок с полезными ссылками -->
        <h2>полезные ссылки</h2>
        <div class="useful-links-block">
            <div class="links-first-block">
                <button
                    class="u-link-button"
                    @click="buttonClickHandler"
                >
                    общая таблица <br>coffeelike
                    <div class="arrow" />
                </button>
            </div>
            <div class="links-second-block">
                <button
                    class="u-link-button"
                    @click="buttonClickHandler"
                >
                    пончики
                    <div class="arrow" />
                </button>
                <button
                    class="u-link-button"
                    @click="buttonClickHandler"
                >
                    заказ еды корал
                    <div class="arrow" />
                </button>
            </div>

            <div class="links-second-block">
                <button
                    class="u-link-button"
                    @click="buttonClickHandler"
                >
                    срез знаний
                    <div class="arrow" />
                </button>
                <button
                    class="u-link-button"
                    @click="buttonClickHandler"
                >
                    инвентаризация
                    <div class="arrow" />
                </button>
            </div>
        </div>
        <!-- блок с важными моментами -->
        <div class="info-block">
            <h3>Не забудь заказать маффины и сырники до 16:00</h3>
            <h3>Пончики заказываем до 20:00</h3>
        </div>
        <!-- блок с общими задачами на месяц -->
        <h2>общие задачи на февраль</h2>
        <div class="tasks-block">
            <div class="week-task-block">
                <button
                    class="task-link"
                    @click="buttonClickHandler"
                >
                    Инвентаризация хозки
                    <br>2 февраля
                    <div class="arrow" />
                </button>
                <button
                    class="task-link"
                    @click="buttonClickHandler"
                >
                    Сокращенная инвентаризация
                    <br> 16 февраля
                    <div class="arrow" />
                </button>
            </div>
            <div class="week-task-block">
                <button
                    class="task-link"
                    @click="buttonClickHandler"
                >
                    Итоговая инвентаризация
                    <br>28 февраля
                    <div class="arrow" />
                </button>
            </div>
            <div class="week-task-block">
                <button
                    class="task-link"
                    @click="buttonClickHandler"
                >
                    Итоговая инвентаризация
                    <br>28 февраля
                    <div class="arrow" />
                </button>
                <button
                    class="task-link"
                    @click="buttonClickHandler"
                >
                    Срез знаний
                    <br>(последняя неделя февраля)
                    <div class="arrow" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data () {
        return {}
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
.actual-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

// стили блока инфоповодов
.info-block {
    width: 100%;
    background-color: #00584d;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0 15px 0;
    padding: 15px 0 15px 0;

    a {
        text-decoration: underline;
        color: #fff;

        padding: 10px 0 10px 30px;
    }

    h3 {
        &:first-child {
            padding-bottom: 0px;
        }

        &:last-child {
            padding-top: 0px;
        }
    }
}

// стили для блока с полезными ссылками
.useful-links-block {
    .links-first-block {
        display: flex;
        justify-content: center;
    }

    .links-second-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .u-link-button {
        width: 230px;
        height: 50px;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        background-color: #fff;
        border: 2px solid #e39114;
        box-sizing: border-box;
        border-radius: 40px;
        color: #e39114;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;

        margin: 15px;

        .arrow {
            width: 35px;
            height: 35px;
            background-image: url("~@/assets/arrow-orange.svg");
        }
    }
}

// стили для блока с задачами на месяц
.tasks-block {
    .task-link {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        font-weight: 600;
        font-size: 13px;
        background-color: #fff;
        border: 2px solid #0e3d99;
        box-sizing: border-box;
        border-radius: 40px;
        color: #0e3d99;

        width: 280px;
        height: 50px;

        margin: 15px;

        .arrow {
            width: 35px;
            height: 35px;
            background-image: url("~@/assets/arrow.svg");
        }
    }
    .week-task-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
