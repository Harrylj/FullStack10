module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': ['./src/theme']
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: false
        }
    },
    // 配置服务器
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/login', (req,res) => {
                    const {username,password} = req.query;
                    if (username === 'kaikeba' && password === '123') {
                        //状态200
                        res.json({code:1,token:'jilei'})
                    } else {
                        res.status(401).json({code:0, message:'用户名或密码错误'})
                    }
                })
            }
        }
    }
};