<template>
    <div class="course-container">
        <!-- 选课导航栏 -->
        <van-tabs v-model="active">
            <van-tab title="全部公告">
                <!-- 搜索框 -->
                <van-cell-group inset class="search">

                    <van-button slot="title" icon="search" type="info" class="search-btn">
                    </van-button>

                </van-cell-group>
                <!-- /搜索框 -->
                <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 -->
                <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 --> <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 --> <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 --> <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 -->
            </van-tab>
            <van-tab title="未读公告">
                <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 -->
                <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 --> <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 --> <!-- 公告 -->
                <div class="course-container">
                    <van-cell-group inset class="course-info">
                        <van-cell class="base-info" value="" center>
                            <van-image slot="icon" width="80" height="80" fit="cover"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                            <div class="content">选课公告</div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <!-- /公告 -->
            </van-tab>
        </van-tabs>
        <!-- /选课导航栏 -->
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
    margin: 10px;
}
</style>
  