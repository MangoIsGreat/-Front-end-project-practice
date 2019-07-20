var http = require('http')

var server = http.createServer()

// 服务器的功能：
//     1.提供服务：对数据的服务
//     2.发请求
//     3.接收请求
//     4.处理请求
//     5.给个反馈（发送响应）
//     6.注册request请求事件
//     7.当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理

server.on('request', function () {
    console.log('收到客户端的请求了')
})

server.listen(3000, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问')
})