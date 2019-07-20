var fs = require('fs')

fs.writeFile('./你好.md', '大家好，给大家介绍一下，我是node.js', function(error) {
    // console.log('文件写入成功')
    // console.log(error)
    if (error) {
        console.log('写入成功');
    } else {
        console.log('写入成功');
    }
})