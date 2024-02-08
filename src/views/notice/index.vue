<template>
    <div class="notice-container">
        <van-nav-bar title="公告" />
        <!-- 选课导航栏 -->

        <!-- 已选课程 -->

        <div class="chosen">

            <!-- 搜索框 -->
            <van-cell-group inset class="search">
                <van-field v-model="value1" left-icon="search" placeholder="搜索" />
            </van-cell-group>
            <!-- /搜索框 -->

            <!-- 课程 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="70" height="70" fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <span class="c-title">选课通知</span>
                        <div>
                            公告内容公告内容公告内容公告内容公告内容公告内容公告内容
                        </div>
                        <div class="eye">
                            <van-icon name="eye-o" />
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /课程 -->

            <!-- 课程 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="70" height="70" fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <span class="c-title">选课通知</span>
                        <div>
                            公告内容公告内容公告内容公告内容公告内容公告内容公告内容
                        </div>
                        <div class="eye">
                            <van-icon name="eye" />
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /课程 -->

            <!-- 课程 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="70" height="70" fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <span class="c-title">选课通知</span>
                        <div>
                            公告内容公告内容公告内容公告内容公告内容公告内容公告内容
                        </div>
                        <div class="eye">
                            <van-icon name="eye-o" />
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /课程 -->



            <!-- 课程 -->
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="70" height="70" fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <span class="c-title">选课通知</span>
                        <div>
                            公告内容公告内容公告内容公告内容公告内容公告内容公告内容
                        </div>
                        <div class="eye">
                            <van-icon name="eye" />
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
            <!-- /课程 -->

        </div>
        <div class="c-course">
            <van-nav-bar />
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'NoticeIndex',
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
.notice-container {
    .mine {
        box-shadow: 5px 5px 5px rgb(188, 188, 188);
        margin: 0 12px;
        background: linear-gradient(to bottom right, rgb(150, 202, 255), #1989fa);
        border-radius: 8px;

        .van-cell {
            background: linear-gradient(to bottom right, rgb(150, 202, 255), #1989fa);
        }

        .van-cell-group {
            background: linear-gradient(to bottom right, rgb(150, 202, 255), #1989fa);
        }


    }

    .chosen {
        margin: 0 12px;

        .van-image {
            display: block;
            padding: 10px;
        }

        .van-image__img {
            border-radius: 8px;
        }

        .van-cell-group--inset {
            margin: 17px 0;

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
            padding: 0 20px;
            text-align: left;
            color: black;


            .c-title {
                font-weight: bold;
            }

            .eye {
                float: right;
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
  