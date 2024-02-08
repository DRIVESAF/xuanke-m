<template>
    <div class="course-container">
        <!-- 底部导航栏 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/course">选课</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="/notice">公告</van-tabbar-item>
            <van-tabbar-item icon="contact-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
        <!-- /底部导航栏 -->

        <!-- 选课导航栏 -->
        <van-tabs v-model="active">
            <van-tab title="全部课程">
                <!-- 已选课程 -->

                <div class="chosen">
                    <!-- 搜索框 -->
                    <van-cell-group inset class="search">
                        <van-field v-model="value1" left-icon="search" placeholder="搜索" />
                    </van-cell-group>
                    <!-- /搜索框 -->

                    <!-- 倒计时 -->
                    <van-cell-group inset class="c-coundown">
                        <van-cell>

                            <div class="coundown">
                                <span class="c-title">23-24-2学期专业选修课、素质拓展选修课选课 </span>
                                <van-tag type="primary">进行中</van-tag>
                                <div class="i-time">
                                    <span>距离结束</span>
                                    <!-- <span class="w-b">0</span>
                                    <span class="w-b">0</span>
                                    <span>天</span>
                                    <span class="w-b">0</span>
                                    <span class="w-b">3</span>
                                    <span>小时</span>
                                    <span class="w-b">3</span>
                                    <span class="w-b">0</span>
                                    <span>分钟</span> -->
                                    <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />

                                </div>
                                <div class="num">当前在线:451</div>

                            </div>
                        </van-cell>
                    </van-cell-group>
                    <!-- /倒计时 -->

                    <!-- 课程 -->
                    <van-cell-group inset>
                        <van-cell>
                            <div class="icon">
                                <van-image slot="icon" width="70" height="70" fit="cover"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <div class="ifm">
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">选择</van-button>

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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">选择</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">选择</van-button>
                                <van-button size="mini" plain type="primary">已满</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">选择</van-button>
                                <van-button size="mini" plain type="primary">冲突</van-button>
                            </div>
                        </van-cell>
                    </van-cell-group>
                    <!-- /课程 -->

                </div>
                <!-- /已选课程 -->
                <van-nav-bar />

            </van-tab>
            <!-- /全部课程 -->

            <!-- 专业选修课 -->
            <van-tab title="专业选修课">
                <!-- 已选课程 -->

                <div class="chosen">

                    <!-- 课程 -->
                    <van-cell-group inset>
                        <van-cell>
                            <div class="icon">
                                <van-image slot="icon" width="70" height="70" fit="cover"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <div class="ifm">
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">退选</van-button>
                            </div>
                        </van-cell>
                    </van-cell-group>
                    <!-- /课程 -->

                </div>
                <!-- /已选课程 -->
                <van-nav-bar />

            </van-tab>
            <!-- /专业选修课 -->

            <!-- 素质拓展选修课 -->
            <van-tab title="素质拓展选修课">
                <!-- 已选课程 -->

                <div class="chosen">

                    <!-- 课程 -->
                    <van-cell-group inset>
                        <van-cell>
                            <div class="icon">
                                <van-image slot="icon" width="70" height="70" fit="cover"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <div class="ifm">
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">退选</van-button>
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
                                <div class="c-title">电气自动化与应用</div>
                                <div class="i-text">
                                    <span>李华</span>
                                    <span>线下</span>
                                    <span>2学分</span>
                                    <span>100/100</span>
                                </div>
                                <div>1-8周 星期二 第7节-第8节 乐群楼(教五)316</div>
                                <van-button disabled size="mini" type="primary">退选</van-button>
                            </div>
                        </van-cell>
                    </van-cell-group>
                    <!-- /课程 -->

                </div>
                <!-- /已选课程 -->
                <van-nav-bar class="bottom" />
            </van-tab>
            <!-- /素质拓展选修课 -->
        </van-tabs>


        <!-- /选课导航栏 -->
    </div>
</template>

<script>
export default {
    name: 'CourseIndex',
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
.course-container {


    .chosen {
        margin: 0 12px;

        .van-cell {

            background: none;

        }

        .c-coundown {
            background: linear-gradient(to bottom right, #cdd1de, #e7d3d1);
        }

        .van-image {
            display: block;
            padding: 10px;
        }

        .van-image__img {
            border-radius: 8px;
        }

        .van-cell-group--inset {
            margin: 17px 0;
            padding: 20px 0;


        }

        .icon {
            transform: scale(1.5);
        }

        .van-cell-group--inset {
            padding: 0;

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

            .van-button {
                margin: 0 5px;
            }


            .van-button--mini {
                float: right;

            }

            .c-title {
                font-weight: bold;
            }

            .i-text {
                span {
                    padding: 3px;
                }
            }


        }

        .coundown {
            padding: 0 20px;
            text-align: left;
            color: black;
            background: linear-gradient(to bottom right, #cdd1de, #e7d3d1);

            .c-title {
                font-weight: bold;
                font-size: large;
            }

            .i-time {
                text-align: center;
                font-size: large;
                padding: 10px 0;

                .w-b {
                    background-color: #f4f1f1;
                    margin: 0 2px;
                    padding: 0 2px;
                }
            }

            .num {
                float: right;
                color: #696464;
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

    .van-nav-bar {
        background: #f7f3f3;
    }


}
</style>
  