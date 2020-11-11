<template>
    <div>
        <h1>图书排行</h1>
        <div class="bd">
            <BookItem v-for="(item, index) in bookArr" 
            :key="index"
            :num="index + 1"
            :imgUrl="item.imgUrl"
            :title="item.title"
            :type="item.type"
            @click.native="goTo()"/>
        </div>
    </div>
</template>
<script>
import BookItem from '../components/BookItem.vue'
export default {
    components: {
        BookItem
    },
    mounted() {
        this.$axios.get('/api/books')
        .then(res => {
            this.bookArr = res.data
        })
    },
    data() {
        return {
            bookArr: []
        }
    },
    methods: {
        goTo() {
            this.$router.push('/book-detail')
        }
    },
}
</script>
<style lang="scss" scoped>
   .bd {
       background-color: white;
       width: 600px;
       height: auto;
       border-radius: 10px;
       box-shadow: 0px 1px 3px rgba(0, 0, 0, .19);
   }
</style>