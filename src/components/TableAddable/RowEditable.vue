<template>
    <div class="row__ediatble">
        <div class="row__addGroup">
            新增一筆資料
            <button class="row__add">
                <img class="add__icon" src="./add.svg" />
            </button>
        </div>
        <div class="editable__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        isOpen: false
    }),
    props: {

    }
}
</script>
<style lang="scss" scoped>
.row__ediatble {
    background-color: #f6f6f6;
    .editable__content {
        padding: 12px 24px;
        > :not(:first-child) {
            margin-top: 8px;
        }
    }
}
.row__addGroup {
    background-color: white;
    min-height: 32px;
    position: relative;
    .row__add {
        position: absolute;
        left: 0;
        width: 40px;
        height: 32px;
        border: solid 1px #c8c8c8;
        background-color: #c6d1ff;
        line-height: 32px;
        transform: translateX(-100%);
        cursor: pointer;
    }
}
</style>