<template>
    <!-- страница актуальное -->
    <div class="actual-page">
        <h2> Актуальные инфоповоды</h2>
        <!-- блок с информацией по инфоповодам -->
        <div class="info-block">
            <a href="https://vk.com/likefamily43?w=wall-91816128_6610"> Что за кофеварка Вилфа и как с ней обращаться</a>
            <a href="https://vk.com/likefamily43?w=wall-91816128_6609"> Пост с 15.03 по 1.05. Что можно предложить постящимся гостям?</a>
            <a href="https://vk.com/likefamily43?w=wall-91816128_6605"> Новое весеннее меню </a>
        </div>
        <!-- блок с полезными ссылками -->
        <h2>полезные ссылки</h2>
        <div class="useful-links-block">
            <div class="links-first-block">
                <a
                    target="_blank"
                    class="u-link-button"
                    href="https://docs.google.com/spreadsheets/d/1jaC3XbYSkgkcy1m8b1AhsonZzp0vKMFJHcSR9AGSoc8/edit#gid=1375956339"
                >
                    <span>общая таблица<br>coffeelike</span>
                    <div class="arrow" />
                </a>
            </div>

            <div class="links-second-block">
                <a
                    class="u-link-button"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfQgrVd9jIr6n289WQj8gluWA1b-tAK0PUGtRjh6wb8nfft9g/viewform"
                >
                    <span>пончики</span>
                    <div class="arrow" />
                </a>
                <a
                    class="u-link-button"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe1fDLuRyE2n6DVuhC2c-ChfvAe_XXnWFhnPfr-gTFa6ge0xA/viewform"
                >
                    <span>заказ еды корал</span>
                    <div class="arrow" />
                </a>
            </div>

            <div class="links-second-block">
                <a
                    class="u-link-button"
                    target="_blank"
                    href="https://antitreningi.ru/"
                >
                    <span>срез знаний</span>
                    <div class="arrow" />
                </a>
                <a
                    class="u-link-button"
                    target="_blank"
                    href="https://coffeelike-kirov.iikoweb.ru/amc/index.html#/main/dashboard/dashboard"
                >
                    <span>инвентаризация</span>
                    <div class="arrow" />
                </a>
            </div>
        </div>
        <!-- блок с важными моментами -->
        <div class="info-block">
            <h3>Не забудь заказать маффины до 16:00</h3>
            <h3>Пончики заказываем до 20:00</h3>
        </div>
        <!-- блок с общими задачами на месяц -->
        <h2>общие задачи на февраль</h2>
        <div class="tasks-block">
            <div class="week-task-block">
                <a
                    class="task-link"
                    target="_blank"
                    href="https://coffeelike-kirov.iikoweb.ru/amc/index.html#/main/dashboard/dashboard"
                >
                    <span>Инвентаризация хозки
                        <br>3 марта</span>
                    <div class="arrow" />
                </a>
                <a
                    class="task-link"
                    target="_blank"
                    href="https://coffeelike-kirov.iikoweb.ru/amc/index.html#/main/dashboard/dashboard"
                >
                    <span>Сокращенная инвентаризация
                        <br> 16 марта</span>
                    <div class="arrow" />
                </a>
            </div>
            <div class="week-task-block">
                <a
                    class="task-link"
                    target="_blank"
                    href="https://coffeelike-kirov.iikoweb.ru/amc/index.html#/main/dashboard/dashboard"
                >
                    <span>Итоговая инвентаризация
                        <br>30 марта</span>
                    <div class="arrow" />
                </a>
            </div>
            <div class="week-task-block">
                <a
                    class="task-link"
                    target="_blank"
                    href="https://antitreningi.ru"
                >
                    <span>Срез знаний
                        <br>(последняя неделя марта)</span>
                    <div class="arrow" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// export default {};
// components: {},
// props: {},
// data() {
//     return {};
// },
// methods: {
//     buttonClickHandler() {
//         console.log("buttonClickHandler", this.$router);
//         // this.$router.push({ name: "About" });
//     },
// },
</script>

<style lang="scss" scoped>
button {
    outline: none;
}

.actual-page {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
}

// стили блока инфоповодов
.info-block {
    width: 100%;
    background-color: var(--green);
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    // margin: 15px;
    padding: 15px;

    a {
        text-decoration: underline;
        color: #fff;
        white-space: normal;

        padding: 10px 30px 10px 30px;
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
    a {
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        box-shadow: 0 0 5px 1px;
    }

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
        justify-content: space-between;
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
        padding: 0 15px 0 15px;

        .arrow {
            width: 35px;
            height: 35px;
            background-image: url("~@/assets/arrow-orange.svg");
        }
    }
}

// стили для блока с задачами на месяц
.tasks-block {
    a {
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        box-shadow: 0 0 5px 1px;
    }

    .task-link {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;

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
        padding: 0 15px 0 15px;

        .arrow {
            width: 36px;
            height: 36px;
            background-repeat: no-repeat;
            background-image: url("~@/assets/arrow.svg");
        }
    }
    .week-task-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
