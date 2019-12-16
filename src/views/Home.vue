<template>
    <div class="home container py-4">
        <ThemeGrid>
            <router-link :to="{name:'Vuex'}">
                <CardLogo class="home__card">
                    <img src="https://storage.googleapis.com/deedoo-material/logoVue.png" />
                    <h4>Vuex API (Symbol List)</h4>
                </CardLogo>
            </router-link>
            <router-link :to="{name:'元件'}">
                <CardLogo class="home__card">
                    <img src="https://storage.googleapis.com/deedoo-material/logoVue.png" />
                    <h4>使用元件 (Symbol List)</h4>
                </CardLogo>
            </router-link>
            <router-link :to="{name:'練習'}">
                <CardLogo class="home__card">
                    <img src="https://storage.googleapis.com/deedoo-material/logoVue.png" />
                    <h4>練習</h4>
                </CardLogo>
            </router-link>
        </ThemeGrid>
    </div>
</template>