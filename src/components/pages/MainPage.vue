<template>
    <div>
        <ul>
            <TodoItem
                v-for="todo of todos"
                :key="todo.id"
                :todo="todo"
            />
        </ul>

        <button @click="buttonClickHandler">clerk</button>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
    props: {},
    data() {
        return {
            todos: [
                { id: 1, title: "Buy bread", completed: false },
                { id: 2, title: "Buy butter", completed: false },
                { id: 3, title: "Buy candies", completed: false },
            ],
        };
    },
    components: {
        TodoItem,
    },
    methods: {
        buttonClickHandler() {
            console.log("buttonClickHandler", this.$router);
            // this.$router.push({ name: "About" });
        },
    },
};
</script>