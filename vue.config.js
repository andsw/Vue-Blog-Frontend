const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
    devServer: {
        // 默认的8080端口被后台程序占用
        port: 8888
    },
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets/'))
            .set('@components', resolve('src/components/'))
            .set('@views', resolve('src/views/'))
            .set('@store', resolve('src/store/'))
            .set('@router', resolve('src/router/'))
    }
};