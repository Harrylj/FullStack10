<template>
    <div>
        登录页面
        <h1>this is login page.</h1>
        <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
    </div>
</template>

<script>
import Vue from 'vue';
import { Field,CellGroup } from 'vant';

Vue.use(Field,CellGroup);

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>