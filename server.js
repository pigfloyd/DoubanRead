const express = require('express');
const { mock } = require('mockjs');
const app = express();
const Mock = require('mockjs');
const bookArr = [
    {
        id: 1,
        title: '偶然爱情',
        desc: '每篇一万字左右的爱情故事，争取写满10个'
    },
    {
        id: 2,
        title: '人间真实粥小姐',
        desc: `“ 我文身、抽烟、喝酒、说脏话 ，但我知道我是个好女孩。 ”
        看完某个公众号的推文，粥小姐熄灭手机屏幕，转身望着窗外的夕阳，身下的飘窗给她一种巨大的悬浮感，她喜欢这种感觉。
        她闭上眼，光落在她的眸子上，上帝看了都觉得楚楚动人。
        对面楼房的猥琐男已经不是一次两次被粥小姐发现拿着望远镜偷窥了，她懒得理，忽的一下从飘窗上起身，同时裹紧身上那件薄荷绿色的针织开衫。
        她再面无表情地拉上窗帘，走向那张2.0*1.8的大床时，想起推文里的那句话。
        心里有个声音飘出来：“那不全是我。”
        “因为老子——还喜欢约炮。”`
    },
    {
        id: 3,
        title: 'S号档案：遗失的背影',
        desc: `1995年，章九海调到顺平县主抓刑侦工作。他刚到顺平的第四天，一向风平浪静的小城发生了一起恶心杀人事件。三名女工深夜惨遭杀害，唯一的幸存者永远的失去了双眼。调查之后，阿海发现四个女工竟是他两年前办的一起失踪案的失踪人员。与此同时市局在下水道里发现了另外两个失踪女孩的尸体。这一切究竟是巧合？还是有人故意为之？瘸腿的音像店老板，朝阳堡子的村支书，工厂的领导，还有那个孱弱的会计，他们之间究竟隐藏了什么？
        这是阿海当警察的第六个年头，这时的他已经褪去了青涩可以独当一面，但是这个案子似乎没有看上去那么简单，故事的背后尽是人性的疮痍。`
    },
    {
        id: 4,
        title: '钗头凤',
        desc: `时年康熙三十一年，洛英就此困顿，再难回到她的时代！
        在现代，洛英简直是完美的职场女斗士，她没有男盆友，是个资深0恋爱女孩——
        但她聪敏，独立，好学，努力丰盈自己，活得又飒又帅！
        直到有那么一天，她意外来到了清朝，遇到了胤禛，还有康熙，
        一个青龙在潜，一个圣谟高远，胤禛把她当作一生挚爱，康熙把她作为中年生活的猎艳······
        “我穿越长长的时空距离，来到清朝，只是为了遇见你！”`
    },
]
app.get('/books', (req, res) => {
    res.json(Mock.mock(
        [
            {
                'id': 1,
                'title': '偶然爱情',
                'type': '言情',
                'imgUrl': 'https://img2.doubanio.com/view/ark_column_cover/retina/public/35021043.jpg?v=1600051892',
            },
            {
                'id': 2,
                'title': '人间真实粥小姐',
                'type': '女性',
                'imgUrl': 'https://img3.doubanio.com/view/ark_column_cover/retina/public/35137900.jpg?v=1603678632'
            },
            {
                'id': 3,
                'title': 'S号档案：遗失的背影',
                'type': '悬疑',
                'imgUrl': 'https://img1.doubanio.com/view/ark_column_cover/retina/public/34864437.jpg?v=1600654475'
            },
            {
                'id': 4,
                'title': '钗头凤',
                'type': '言情',
                'imgUrl': 'https://img2.doubanio.com/view/ark_column_cover/retina/public/35492803.jpg?v=1604284358'
            },
        ]
    ))
});
app.get('/book',(req,res) => {
    let result = bookArr.find(item => {
        return item.id == req.query.id
    })
    res.json(Mock.mock(result))
})
app.listen(3000);