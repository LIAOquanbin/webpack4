// 导入处理路径模块
var path=require('path');
console.log(__dirname)
module.exports={
    // 模式 生产模式
    mode:"production",
    // 配置入口
    entry:{
        index:"./app/app.js"
    },
    // 打包输出 目录 
    output:{
        // 输出文件路径
        path:path.resolve(__dirname,"./abc"),

        // 输出文件名
        // 输出文件名和配置入口的键名一致
        filename:'abc.js'
    }
}