<template>
    <div>
        登录页面
        <h1>this is login page.</h1>
        <van-cell-group>
        <van-field
            v-model="username"
            required
            label="用户名"
            placeholder="请输入用户名"
            right-icon="question-o"
            @click-right-icon="$toast('question11111')"
            error-message="123"
        />
        <van-field
            v-model="username"
            required
            label="用户名"
            placeholder="请输入用户名"
            right-icon="question-o"
            @click-right-icon="$toast('question11111')"
            error-message="123"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            right-icon="question-o"
            @click-right-icon="$toast('password')"
            error-message="1234"
            required
             
        />
        <!-- <van-button type="info" @submit.prevent="handleLogin" @validate="handleValidate">登录</van-button> -->
        <van-button type="info" @click="handleLogin">登录</van-button>
        
        </van-cell-group>
    </div>
</template>

<script>
import Vue from 'vue';
/*
import { Field,CellGroup } from 'vant';

Vue.use(Field,CellGroup);
*/
import vant from 'vant';


Vue.use(vant);
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            /*
            handleValidate(ret){
                console.log(ret);
            },
            */
            handleLogin(e) {
                // 登录请求
                
                this.$store.dispatch("login", this.model).then(success =>{
                    
                    if (success) {
                        const path = this.$route.query.redirect || '/'
                        this.$router.push(path)
                    }
                }).catch(error => {
                    console.log('登录失败,why')
                    /*
                    const toast = this.$createToast({
                        time:2000,
                        txt:'登录失败',
                        type:'error'
                    }).show();
                    */
                });
                
            }
            /*
            handleLogin(e) {
                // 登录请求
                this.$store.dispatch("login", this.model).then(success =>{
                    if (success) {
                        const path = this.$route.query.redirect || '/'
                        this.$router.push(path)
                    }
                }).catch(error => {
                    const toast = this.$createToast({
                        time:2000,
                        txt:'登录失败',
                        type:'error'
                    }).show();
                });
            }
            */
        }
    }
</script>

<style lang="scss" scoped>

</style>