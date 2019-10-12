import us from "@/service/user"

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
        login({commit}, userInfo){
            return us.login(userInfo).then(({token}) => {
                // code,token
                if (token) {
                    // 登录成功
                    commit('setLoginState',true)
                    localStorage.setItem('token', token)
                    return true
                }
                return false
            })
        }
    }
}