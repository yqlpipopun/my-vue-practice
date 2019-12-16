<template>
    <div>
        <Navigation class="fixed-top"></Navigation>
        <div class="container py-4 marginForNavigation">
            <router-view />
        </div>
        <MyFooter></MyFooter>
    </div>
</template>
<style lang="scss">
.marginForNavigation {
    margin-top: 55px;
}
</style>
