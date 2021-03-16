<template>
    <div class="faq">
        <div class="faq-info">
            Первое правило: сначала попробуй найти ответ на свой вопрос в поиске по стене группы
            <a
                target="_blank"
                href="https://vk.com/likefamily43"
            >LikeFamily</a>
        </div>
        <div class="faq-container">
            <!-- TODO: добавить ссылку на таблицу с теорией -->

            <div class="faq-barista">
                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1BLTisbjpSxBGvpHdhe_BSuZhpe-gekLQ_AkRTA_lBmw/edit"
                    class="faq-item"
                >Шляпа бариста или что я такое</a>

                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/14y4hfZa3ROEkqyO3qJgiFrZ9QCj3vsC93XqDalMf8BQ/edit#heading=h.ugnchmv42do7"
                    class="faq-item"
                >FAQ по вопросам работы бариста</a>
            </div>
            <div class="faq-theory">
                <a
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1OmSIVeV9cAk4VALBQcu5VuuTMMkOLTn3CH0o5inF2WI/edit#gid=736137690"
                    class="faq-item"
                >Таблица с теорией по всему (ТТК там тоже есть)</a>
                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1Xi4eCc1QMQN4mt14rHRrXw3y-VLGm-njo1c7fsnPn7o/edit#"
                    class="faq-item"
                >Общая теория по работе и устройству оборудования</a>
            </div>
            <div class="faq-work">
                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1iD-HFfCKH3y816OshcUxlPUEEG43v8b7ic61zNhtpic/edit"
                    class="faq-item"
                >КАК СЧИТАТЬ РЕВИЗИЮ</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a {
    color: #000;
    font-weight: 400;

    &:hover {
        font-weight: 600;
    }
}

.faq-info {
    font-size: 18px;
}

.faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 20px 20px 20px;

    .faq-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .faq-barista, .faq-theory, .faq-work {
            display: flex;
            flex-direction: column;
            margin: 20px 30px;
        }

        .faq-item {
            color: #000;
            font-size: 20;
            text-decoration: underline;
            margin-top: 30px;
        }
    }
}
</style>
