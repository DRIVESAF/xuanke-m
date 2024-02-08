<template>
    <div class="mine-container">
        <van-nav-bar title="我的" />
        <!-- 个人信息 -->
        <div class="mine">
            <van-cell-group inset>
                <van-cell>
                    <div class="icon">
                        <van-image slot="icon" width="70" height="70" round fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </div>
                    <div class="ifm">
                        <div>李华</div>
                        <div>计算机与软件学院/软件工程技术(普高本科)</div>
                        <div>2022级</div>
                    </div>

                </van-cell>
                <div class="m-btn ">
                    <van-button size="mini" plain type="primary">退出登录</van-button>
                </div>
            </van-cell-group>
        </div>
        <!-- /个人信息 -->

        <!-- 已选课程 -->
        <div class="c-course">
            <van-nav-bar title="已选课程" />
        </div>

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
        <div class="c-course">
            <van-nav-bar />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MineIndex',
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {}
}
</script>
<style lang="less">
.mine-container {
    .mine {
        box-shadow: 5px 5px 5px rgb(188, 188, 188);
        margin: 0 12px;

        border-radius: 8px;

        .van-cell {
            background: linear-gradient(to bottom right, #cdd1de, #e7d3d1);
        }

        .van-cell-group {
            background: linear-gradient(to bottom right, #cdd1de, #e7d3d1);
        }

        .van-cell-group--inset {
            margin: 17px 0;
            padding: 10px 0;
        }

        .van-button--plain {
            background-color: #e7e7e7;
            color: #5d5d5d;
            border-color: #5d5d5d;
            float: right;
            margin: 0 30px 5px 0;
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
            padding: 20px 0;
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

            .van-button--mini {
                float: right;

            }

            .c-title {
                font-weight: bold;
            }

            .i-text {
                span {
                    margin: 3px;
                }
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
  