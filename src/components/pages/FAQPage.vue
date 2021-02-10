<template>
    <div class="faq">
        <div class="faq-info">
            Первое правило: сначала попробуй найти ответ на свой вопрос в поиске по стене группы
            <a
                target="_blank"
                href="https://vk.com/likefamily43"
            >LikeFamily</a>
        </div>
        <a
            target="_blank"
            href="https://docs.google.com/document/d/1BLTisbjpSxBGvpHdhe_BSuZhpe-gekLQ_AkRTA_lBmw/edit"
            class="faq-item"
        >Шляпа бариста или что я такое</a>
        <a
            target="_blank"
            href="https://docs.google.com/document/d/1Xi4eCc1QMQN4mt14rHRrXw3y-VLGm-njo1c7fsnPn7o/edit#"
            class="faq-item"
        >Общая теория по работе и устройству оборудования</a>
        <a
            target="_blank"
            href="https://docs.google.com/document/d/14y4hfZa3ROEkqyO3qJgiFrZ9QCj3vsC93XqDalMf8BQ/edit#heading=h.ugnchmv42do7"
            class="faq-item"
        >FAQ по вопросам работы бариста</a>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a {
    color: #000;
    font-weight: 400;
}

.faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 20px 20px 20px;

    .faq-info {
        //font-weight: 600;
        font-size: 18px;
        text-align: center;
    }

    .faq-item {
        color: #000;
        font-size: 20;
        text-decoration: underline;
        margin: 15px;
    }
}
</style>
