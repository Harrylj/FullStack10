<template>
  <div class="home">
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="$base.goback()" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" placeholder="请输入手机号码" label="手机号" />
    <van-button size="small" type="primary" @click="btnYZM">发送验证码</van-button>
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" />

    <van-button size="small" type="primary" @click="btnDL" >登录</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data() {
    return {
      tel: "",
      sms: ""
    };
  },
  components: {},
  methods: {
    // 验证码
    btnYZM() {
      this.$http
        .get(
          "/Login/GetPhoneOrEmailCheckCode?LoginTerminal=2&contact=" +
            this.tel
        )
        .then(res => {
          if (res) {
            this.sms = res.InfoMsg;
            alert(res.InfoMsg);
          }
        });
    },
    // 登录
    btnDL(){
      this.$http.post('/Login/GetUser',{UserName:this.tel,Code:this.sms,LoginTerminal:2}).then((res) => {
                    if(res){
                      this.$store.commit('SET_USERTOKEN',res.Data.UserKey)
                      localStorage.setItem('SDTZUSRRID',res.Data.UserId)
                      this.$router.push({
                            path: '/about',
                           //  query: data
                        })
                    }
                    
                })
    }
  }
};
</script>
