<template>
    <div class="detail-bd">
        <h1>{{this.book.title}}</h1>
        <div class="label">简介</div>
        <div class="desc">{{this.book.desc}}</div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$axios.get(`/api/book?id= + ${this.$route.params.id}`)
        .then(res => {
            console.log(res.data)
            this.book = res.data
        })
    },
    data() {
        return {
            book: {}
        }
    }
}
</script>
<style lang="scss" scoped>
   .detail-bd {
        width: 600px;
        text-align: center; 
        h1 {
            font-size: 40px;
            font-weight: bold;
        }
        .label {
            text-align: left;
            padding: 4px;
            font-size: 16px;
            background-color: #EBF0F2;
        }
        .desc {
            margin-top: 10px;
            text-align: left;
        }
   }
</style>