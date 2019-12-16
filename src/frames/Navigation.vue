<template>
    <div>
        <nav
            id="myNavigation"
            class="navbar navbar-expand-md navbar-dark bg-dark justify-content-start"
            aria-label="breadscrumb"
        >
            <a class="navbar-brand js-scroll-trigger" @click="closeMenu" :href="`#/`">範例</a>
            <ol class="nav">
                <li v-if="firstLayerRoute.name" class="nav-item">
                    <router-link
                        class="nav-link"
                        :active-class="'active'"
                        :to="{name:firstLayerRoute.name}"
                        tag="a"
                    >> {{firstLayerRoute.name}}</router-link>
                </li>
                <li v-if="secondLayerRoute&&secondLayerRoute.name" class="nav-item">
                    <router-link
                        class="nav-link"
                        :active-class="'active'"
                        :to="{name:secondLayerRoute.name}"
                        tag="a"
                    >> {{secondLayerRoute.name}}</router-link>
                </li>
            </ol>
            <a
                class="myNavigation__aboutMe"
                href="https://chuiantw1212.github.io/my-material/"
                target="_blank"
            >
                <img
                    class="aboutMe__avatar"
                    src="https://storage.googleapis.com/deedoo-material/myAvatar.png"
                />
            </a>
            <!-- <router-link :to="{name:'關於'}" tag="div"></router-link> -->
        </nav>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data: () => ({
        currentRoutes: [],
        isLightBoxOpen: false,
    }),
    props: {
        routes: {
            type: Array,
        },
    },
    mounted() {
        document.addEventListener("click", this.detectClickOutside);
    },
    destroyed() {
        document.removeEventListener("click", this.detectClickOutside);
    },
    computed: {
        firstLayerRoute() {
            const firstLayerRoute = this.$route.matched[1]
            return firstLayerRoute
        },
        secondLayerRoute() {
            const secondLayerRoute = this.$route.matched[2]
            return secondLayerRoute
        }
    },
    methods: {
        switchItem(event, index) {
            const navItems = this.$refs["nav-item"];
            navItems.forEach(item => {
                item.classList.remove("active");
            });
            navItems[index].classList.add("active");
            this.closeMenu();
        },
        detectClickOutside(event) {
            const myNavigation = document.querySelector("#myNavigation");
            const isClickInside = myNavigation.contains(event.target);
            if (!isClickInside) {
                this.closeMenu();
            }
        },
        closeMenu() {
            $(".navbar-collapse").collapse("hide");
        },
    }
};
</script>
<style lang="scss" scoped>
.myNavigation__aboutMe {
    border-radius: 50%;
    overflow: hidden;
    width: 44px;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    .aboutMe__avatar {
        width: 44px;
    }
}
.navbar {
    .navbar-brand {
        margin: 0;
    }
}
.nav {
    .nav-link {
        padding: 0;
    }
}
.nav-item {
    position: relative;
    margin-left: 0.5rem;
    .nav-link {
        color: lightgrey;
        background-color: unset;
        border: none;
        &:hover {
            color: white;
        }
    }
}
</style>
