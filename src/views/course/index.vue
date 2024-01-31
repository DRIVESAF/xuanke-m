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
                <!-- 搜索框 -->
                <van-cell-group inset class="search">

                    <van-button slot="title" icon="search" type="info" class="search-btn">
                    </van-button>

                </van-cell-group>
                <!-- /搜索框 -->


                <!-- 全部课程 -->
                <van-cell-group inset>
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <span class="custom-title">23-24-2学期专业选修课、素质拓展选修课选课 </span>
                                <van-tag type="primary">进行中</van-tag>
                                <div class="discount">
                                    <span>距离结束 00天 03小时 31分钟</span>
                                </div>
                                <div class="people">
                                    <span>当前在线：352</span>
                                </div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                    <!-- 课程 -->
                    <div class="course-container">
                        <van-cell-group inset class="course-info">
                            <van-cell class="base-info" value="" center>
                                <van-image slot="icon" width="80" height="80" fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                <div class="content">电汽自动化与应用</div>
                            </van-cell>
                        </van-cell-group>
                    </div>
                    <!-- /课程 -->
                </van-cell-group>


            </van-tab>

            <!-- /全部课程 -->

            <!-- 专业选修课 -->
            <van-tab title="专业选修课">
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
            </van-tab>
            <!-- /专业选修课 -->

            <!-- 素质拓展选修课 -->
            <van-tab title="素质拓展选修课">
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
                <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 --> <!-- 课程 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">电汽自动化与应用</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /课程 -->
            </van-tab>
        </van-tabs>
        <!-- /素质拓展选修课 -->

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
.van-cell__value {
    text-align: left;
    display: inline;
}


.course-info {
    background-color: #ffffff;
}


.van-cell-group {
    margin: 20px;
    overflow: visible;
}

.course-container .search-btn {
    margin: 10px auto;
    width: 335px;
    height: 32px;
    background-color: #fff;
    border: 0;
    display: flex;
    margin-right: auto
}


.van-cell {
    border-radius: 8px;

}

.course-container .van-cell-group {
    background-color: #f7f3f3;
    padding: 0;
    margin: 20px 10px;
}

.custom-title {
    font-size: large;
    font-weight: bold;
    color: #000;
}

.discount {
    font-size: large;
    text-align: center;
}

.people {
    text-align: right;
}
</style>
  