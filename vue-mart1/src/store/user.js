export default{
    state:{
        // 两个感叹号是转换为boolean值
        isLogin: !!localStorage.getItem("token")
    },
    mutations:{
        setLoginState(state, val) {
            state.isLogin = val;
        }
    },
    actions: {
        login(){

        }
    }
}