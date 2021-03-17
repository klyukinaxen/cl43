<template>
    <!-- название кофе-бара -->
    <div
        v-if="coffeeBarInfo"
        class="coffee-bar"
    >
        <!-- <pre>{{ coffeeBarInfo }}</pre> -->
        <div class="coffee-bar-name-container">
            <span class="title">
                {{ coffeeBarInfo.name }}
            </span>
            <span class="order-title">
                День заявки: {{ coffeeBarInfo.weekOrder }}
            </span>
        </div>
        <!-- список задач на неделю -->
        <h2>Задачи на неделю</h2>
        <div class="week-tasks">
            <a
                v-for="task in coffeeBarInfo.weekTasks"
                :key="task.name"
                :href="task.link"
                class="week-task"
            >
                {{ task.name }}
            </a>
        </div>

        <!-- список полезных ссылок -->
        <h2> Полезные ссылки </h2>
        <div class="useful-links">
            <a
                :href="coffeeBarInfo.faqLink"
                class="link"
                target="_blank"
            >
                <span> FAQ </span>
            </a>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQgrVd9jIr6n289WQj8gluWA1b-tAK0PUGtRjh6wb8nfft9g/viewform"
                class="link"
                target="_blank"
            >
                <span> Заказ пончиков </span>
            </a>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1fDLuRyE2n6DVuhC2c-ChfvAe_XXnWFhnPfr-gTFa6ge0xA/viewform"
                class="link"
                target="_blank"
            >
                <span> Заказ еды </span>
            </a>
            <a
                href="https://coffeelike-kirov.iikoweb.ru/amc/index.html#/main/dashboard/dashboard"
                class="link"
                target="_blank"
            >
                <span> Инвентаризация </span>
            </a>
        </div>

        <!-- рекомендуемый заказ еды -->
        <div class="about-coffee-bar">
            <div class="info-block">
                <span class="info-title"> Рекомендуемый заказ еды: </span>
                <span class="info"> Пончики: {{ coffeeBarInfo.donutsOrder }} штук </span>
                <span class="info"> Маффины: {{ coffeeBarInfo.koralOrder }} </span>
            </div>
            <div class="check-block">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScja0lqdOLPZZaZuXDKCMFJnRr7c90SAGA2QuqNLTMUypczfQ/viewform"
                    class="check"
                    target="_blank"
                >Чек-лист открытия</a>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf73iq23D4C65rnFUSul_eZGgvQVkjf4JeilZ_p3qP8tztM0g/viewform"
                    class="check"
                    target="_blank"
                >Чек-лист закрытия</a>
            </div>
        </div>

        <!-- важные моменты для шефа -->
        <div class="info-for-chief">
            <h2>Важные моменты для шефа</h2>
            <!-- здесь должна быть интеграция с гугл-таблицей -->
            <div class="iframe-sheet">
                <iframe
                    class="sheets-info"
                    src="https://docs.google.com/spreadsheets/d/1w_3rap4WPpdZcjnFArLvvS5N5s__mS4QF08ml9_05Rg/edit#gid=2082064429"
                    frameborder="0"
                />
            </div>
            <div class="sheets-button">
                Если у тебя некорректно отображается таблица нажми
                <a
                    class="icon"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1w_3rap4WPpdZcjnFArLvvS5N5s__mS4QF08ml9_05Rg/edit#gid=2082064429"
                />
            </div>
        </div>

        <h2>Уголок шефа</h2>
        <div class="chief-links">
            <a
                href="https://docs.google.com/spreadsheets/d/1Orc6HkFQeGyFxCBTgQOM9mBh7P0g9AENb9ct4h_etHY/edit#gid=380849623"
                class="link"
                target="_blank"
            >
                <span> Проверить пончики</span>
            </a>
            <a
                href=""
                class="link"
                target="_blank"
            >
                <span> Чек-лист проверки </span>
            </a>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBUTJOITHrxumkFz0oC6EUZtjb2ltXaWE5NX0HxSog1WBdIQ/viewform"
                class="link"
                target="_blank"
            >
                <span> Чек-лист шефа </span>
            </a>
            <a
                href="https://trello.com/b/31YfOVFd/задачи-шефов"
                class="link"
                target="_blank"
            >
                <span> Trello  </span>
            </a>
        </div>
    </div>
    <div v-else>
        oops
    </div>
</template>

<script>
import CoffeeBarInfoData from '@/components/CoffeeBarInfo.json'
import jsCookie from 'js-cookie'

export default {
    data () {
        return {
        }
    },
    computed: {
        /**
         * TODO: must be undefined
         * @returns {Object | undefined}
         */
        coffeeBarInfo () {
            const coffeeBarId = jsCookie.get('coffeeBar')
            console.log('coffeeBarId', coffeeBarId)
            const info = CoffeeBarInfoData.coffeeBars.find((cb, i) => {
                return cb.id === coffeeBarId
            })

            return info // + this.test
        }

    },
    methods: {
        cleck () {
            this.test = 1234
        }
    }
}
</script>

<style lang="scss" scoped>
.coffee-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0 15px 0;

    .week-tasks {
        width: 100%;
        background-color: var(--green);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px 0 15px 0;
        padding: 15px 0 15px 0;

        .week-task {
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            border: none;

            &:hover {
                border: none;
                text-decoration: underline;
                box-shadow: none;
            }
        }
    }

    .coffee-bar-name-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;

        .title {
            font-size: 24px;
            font-weight: 400;
            text-transform: uppercase;
            color: #000000;
            text-align: left;
        }

        .order-title {
            font-size: 18px;
            font-weight: 400;
            text-transform: uppercase;
        }
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        width: 180px;
        height: 40px;
        border-radius: 40px;
    }
    a:hover {
        box-shadow: 0 0 5px 1px;
    }

    .link {
        background-color: #fff;
        border: 2px solid var(--green);
        box-sizing: border-box;
        border-radius: 40px;
        color: var(--green);
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        width: 180px;
        height: 40px;

        margin: 20px;
        padding: 0 15px 0 15px;
    }
    .useful-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    .sheets-info {
        height: 500px;
        width: 100%;
    }

    .info-for-chief {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .about-coffee-bar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;

        .info-block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .info-title {
            font-weight: 500px;
            font-size: 16px;
            text-transform: uppercase;
            margin: 25px 0 25px 0;
        }

        .info {
            font-size: 14px;
            margin: 10px 0 10px 0;
        }

        .check-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .check {
                margin-top: 10px;
                font-weight: 600;
            }
        }
    }
    .sheets-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 25px;

        .icon {
            margin-left: 10px;
            width: 50px;
            height: 50px;
            background-position: center;
            background-image: url("~@/assets/icon-forward.png");
            box-shadow: none;
            text-decoration: none;
        }
    }
    .chief-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media screen and (max-width: 1000px) {
        .coffee-bar-name-container {
            flex-direction: column;

            .title {
                font-size: 18px;
            }
            .order-title {
                font-size: 14px;
                margin-top: 15px;
            }
        }

        .iframe-sheet {
            display: none;
            width: 0px;
            height: 0px;
        }
        .icon {
            width: 30px;
            height: 30px;
        }
    }
}
</style>
