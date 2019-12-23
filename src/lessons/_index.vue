<template>
    <div class="container pt-4 pb-4">
        <LessonGrid v-if="$route.name==='練習'" class="mb-3" :routeNames="routeNames"></LessonGrid>
        <router-view />
        <div v-if="$route.name!=='練習'">
            <hr />
            <LessonGrid class="mt-3" :routeNames="routeNames"></LessonGrid>
        </div>
    </div>
</template>
<script>
import LessonGrid from '@/components/LessonGrid.vue'
export default {
    data: () => ({
        routeNames: ['vue總覽', 'API', 'v-model', '示範頁面']
    }),
    components: {
        LessonGrid
    },
}
</script>