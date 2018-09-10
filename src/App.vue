<template>
    <div id="app">
        <ExamComponent />
    </div>
</template>

<script>
import ExamComponent from "./components/ExamComponent.vue";

export default {
    name: "app",
    components: {
        ExamComponent,
    },
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
