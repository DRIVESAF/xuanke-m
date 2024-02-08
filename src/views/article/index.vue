<template>
    <div class="article-container">
        <van-nav-bar title="公告标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <!-- 选课导航栏 -->


        <div class="chosen">

            <!-- 管理员信息 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="40" height="40" fit="cover" round
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <span class="c-title">管理员id</span>
                        <div>
                            2024-12-29
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /管理员信息 -->

            <!-- 公告内容 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="ifm">
                        <span class="n-title">公告标题</span>
                        <div>
                            公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /公告内容 -->
        </div>
        <div>
            <van-nav-bar />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ArticleIndex',
    components: {},
    props: {},
    data() {
        return { active: 0 }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {}
}
</script>
<style lang="less">
body {
    background-color: #fff;
}

.article-container {


    .chosen {

        .van-image {
            display: block;
            padding: 10px;
        }



        .icon {
            transform: scale(1.5);
        }


    }


    .van-cell__value {
        display: flex;
        align-items: center;
        border-radius: 8px;

        .icon {
            padding: 0 10px;
        }

        .ifm {
            padding: 0 10px;
            text-align: left;
            color: black;


            .c-title {
                font-weight: bold;
            }

            .eye {
                float: right;
            }

            .n-title {
                font-weight: bold;
                font-size: 20px;
            }
        }
    }

    .c-course {
        .van-nav-bar__content {
            background-color: #f7f3f3;

            .van-nav-bar__title {
                margin: 0 21px;
            }
        }

    }

}
</style>
  
  