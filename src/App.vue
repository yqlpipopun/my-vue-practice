<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Noto Sans TC";
    background-color: whitesmoke;
}
.container {
    min-height: 100vh;
    position: relative;
    .container__image {
        width: 100%;
    }
    .container__image--max400 {
        max-width: 400px;
    }
    .container__image--max800 {
        max-width: 800px;
    }
}
</style>
