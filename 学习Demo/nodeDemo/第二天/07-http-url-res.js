var http = require('http')

// 1.创建server
var server = http.createServer()

// 2.监听request请求事件，设置请求处理函数
server.on('request', function (req, res) {
    console.log('收到请求了，请求路径是：' + req.url)

    // res.write('hello')
    // res.write('   good')

    // res.end()


    // 也可以直接简写：
    // res.end('hello world')

    var url = req.url

    // res.end(url)

    // if (url === '/') {
    //     res.end('index page')
    // } else if (url === '/login') {
    //     res.end('login page')
    // } else {
    //     res.end('404 NOT FOUND!')
    // }


    if (url === '/products') {
        var products = [
            {
                name: '苹果X',
                price: 8888
            },
            {
                name: '菠萝',
                price: 888
            },{
                name: '小米',
                price: 1888
            },{
                name: '小辣椒',
                price: 800
            },
        ]

        res.end(JSON.stringify(products))
    }
})

// 3.绑定端口号，启动服务
server.listen(3000, function() {
    console.log('服务器启动成功，可以访问了')
})