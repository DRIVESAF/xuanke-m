<template>
    <div class="login-container">
        <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <!-- 登录表单 -->
        <van-cell-group>
            <van-field v-model="user.userId" left-icon="contact-o" placeholder="请输入手机号" />
            <van-field v-model="user.password" left-icon="bag-o" placeholder="请输入密码">
                <template #button>
                    <van-button size="small" round class="send-btn">获取验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <div class="login-btn-warp">
            <van-button class="login-btn" type="primary" block @click="onLogin">登录</van-button>
        </div>
        <!-- /登录表单 -->
    </div>
</template>
  
<script>
import { login } from '@/api/user'
import { showSuccessToast, showFailToast } from 'vant'
import { showLoadingToast } from 'vant'
import 'vant/es/toast/style'


export default {
    name: 'LoginIndex',
    components: {},
    props: {},
    data() {
        return {
            user: {
                userId: '', //手机号
                password: ''    //密码
            }
        }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
        async onLogin() {
            showLoadingToast({
                message: '加载中...',
                forbidClick: true,
            })
            // 找到数据接口
            // 封装请求方法
            // 请求调用登录
            try {
                const res = await login(this.user)
                console.log(res)
                showSuccessToast('登录成功')
                // 处理响应结果
            } catch (err) {
                console.log(err)
                showFailToast('登录失败')
            }

        }
    }
}
</script>

<style lang="less">
.login-container {
    .send-btn {
        background-color: #ededed;
    }

    .login-btn-warp {
        padding: 0 20px;
    }
}
</style>
  