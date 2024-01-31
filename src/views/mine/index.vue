<template>
    <van-cell class="title">我的</van-cell>

    <div class="mine-container">
        <van-cell-group inset class="my-info">
            <van-cell class="base-info" value="" center>
                <van-image slot="icon" width="80" height="80" fit="cover" round
                    src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                <div slot="title">李华</div>
            </van-cell>
        </van-cell-group>
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
.my-info {
    background-color: rgb(107, 186, 255);
}

.base-info {
    background-color: unset;
}

.van-cell__value {
    flex: none;

}
</style>
  