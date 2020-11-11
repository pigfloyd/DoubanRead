<template>
    <div class="item-bd">
        <div class="num-container">
            <span class="num">{{num}}</span>
        </div>
        <img src="../assets/test.jpg" alt="">
        <div class="title-container">
            <div class="title">{{title}}</div>
            <div class="type">{{type}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['num', 'img', 'title', 'type'],
}
</script>
<style lang="scss" scoped>
    .item-bd {
        cursor: pointer;
        display: flex;
        box-sizing: border-box;
        width: 600px;
        height: 120px;
        padding: 10px;

        img {
            width: auto;
            height: 100px;
        }
        .num-container {
            display: inline-block;
            height: 100px;
            line-height: 100px;
            width: 40px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #ffce95;
        }
        .title-container {
            flex: 1;
            padding-left: 20px;
            padding-top: 20px;
            .title {
                font-size: 20px;
                font-weight: bold;
            }
            .type {
                font-size: 14px;
            }
        }
    }
</style>