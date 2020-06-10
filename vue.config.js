module.exports = {
    devServer: {
        proxy: 'https://capps.game.qq.com'
    }
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //     .set('@$', resolve('src'))
    //     .set('@static', resolve('src/static'))
    // }
}