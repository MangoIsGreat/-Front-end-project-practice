// 成功
//     data 数据
//     error null
// 失败
//     data null
//     error 错误对象

var fs = require('fs')

fs.readFile('./helllo.txt', function (error, data) {
    // console.log(data);
    // console.log(data.toString())
    // console.log(error)

    
    if (error) {
        console.log('读取文件失败了')
    } else {
        console.log(data.toString())
    }

})