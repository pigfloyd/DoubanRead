<template>
    <div>
        <h1>图书排行</h1>
        <div class="bd">
            <BookItem v-for="(item, index) in bookArr" 
            :key="index"
            :num="item.num"
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
    data() {
        return {
            bookArr: [
                {
                    num: 1,
                    title: '偶然爱情',
                    type: '言情'
                },
                {
                    num: 2,
                    title: 'S号档案：遗失的背影',
                    type: '悬疑'
                },
                {
                    num: 2,
                    title: 'S号档案：遗失的背影',
                    type: '悬疑'
                },
                {
                    num: 2,
                    title: 'S号档案：遗失的背影',
                    type: '悬疑'
                },
                {
                    num: 2,
                    title: 'S号档案：遗失的背影',
                    type: '悬疑'
                },
            ]
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