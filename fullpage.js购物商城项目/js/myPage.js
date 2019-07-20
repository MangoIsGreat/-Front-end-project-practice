$(function(){
    // 获取屏幕的高度
    var k = $(window).height();
    // 用flag 变量来接收动画是否执行完毕的信息
    var flag = false;
    // 点击next，往下播放一屏
    $('.next').click(function(event){
        $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({ //fullpage  方法里面接受json对象形式
        navigation: true, //json字符串，一定要逗号结束
        // navigationPosition: "left", //定位到左侧
        //滚动到底部后滚回顶部
        // loopBottom: true,
        // 设置滚动速度，单位为毫秒
        scrollingSpeed: 500,

        // 回调函数
        // 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function(anchorLink, index) {
            if (index == 2 && flag == false) {
                $('.next').fadeOut();
                // jquery的链式操作
                // function是回调函数
                $(".search").show().animate({"right": 370}, 1500, function() {
                    // 方块走进来，沙发两个字显示，opacity从0到1
                    $(".search-words").animate({"opacity": 1}, 500, function() {
                        // 特点：回调函数套回调函数
                        $(".search").hide();
                        // search1隐藏，search2立刻出现
                        $(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452}, 800);
                        $(".goods-02").show().animate({"height": 218}, 800);
                        $(".words-02").animate({"opacity": 1}, 500, function() {
                            $('.next').fadeIn();
                        });
                    });
                });
            };
        },  //逗号别忘了加
       
        // 刚开始滚动屏幕就触发的回调函数  onLeave
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $('.next').fadeOut();
                // 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑，白色盒子显示
                //沙发要往第三屏幕走， 走的距离就是当前屏幕的高度 - main 到底部的高度 - 沙发到main的距离  （当前屏幕的高度-250）
                $('.shirt-02').show().animate({"bottom": - (k - 250), "width": 207, "left": 260}, 2000, function() {
                    $('.img-01-a').animate({"opacity": 1}, 500, function() {
                        $('.btn-01-a').animate({"opacity": 1}, 500);
                    });
                });
                $('.cover').show();
                $('.next').fadeIn();
            };
            // 第3屏到第4屏滚动时的动画
            if (index == 3 && nextIndex == 4) {
                $('.next').fadeOut();
                $('.shirt-02').hide();
                // 沙发移动的距离=当前屏幕的高度-250+第三屏幕的50距离
                $('.t1f').show().animate({"bottom" : -((k - 250) + 50), "left": 260}, 2000, function() {
                    $(this).hide(); //动画完毕之后自动隐藏
                    $('.car-img').show();
                    // 购物车开始向右走
                    $('.car').animate({"left": "150%"}, 3000, "easeInOutSine", function() {
                        $('.note').show();
                        $('.note-img, .words-04-a').animate({"opacity": 1}, 1000, function() {
                            $('.next').fadeIn();
                        });
                    });
                });
            };
            // 第四屏幕向第五屏幕过渡
            if (index == 4 && nextIndex == 5) {
                $('.next').fadeOut();
                // 小手上来
                $('.hand-05').animate({"bottom": 0}, 2000, function() {
                    // 鼠标显示
                    $('.mouse-05-a').animate({"opacity": 1});
                    // 沙发掉下
                    $('.t1f-05').show().animate({"bottom": 70}, 1000, function() {
                        // 单子上走
                        $('.order-05').animate({"bottom": 390}, function() {
                            $('.words-05').addClass('words-05-a');
                            $('.next').fadeIn();
                        });
                    });
                });
            };
            // 第五屏幕向第六屏幕过渡
            if (index == 5 && nextIndex == 6) {
                $('.next').fadeOut();
                $('.t1f-05').animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function(){
                    $('.t1f-05').hide();
                });
                $('.box-06').animate({"left": "38%"}, 1500, function() {
                    $(this).animate({"bottom": 40}, 500, function() {
                        $(this).hide();
                        // 行走的过程就是背景移动的过程
                        $('.section6').animate({"backgroundPositionX": "100%"}, 4000, "easeOutElastic", function() {
                            $('.boy').animate({"height": 305, "bottom": 116}, 1000, function() {
                                $('.boy').animate({"right": 500}, 500, function() {
                                    $('.door').animate({"opacity": 1}, 200, function() {
                                        $('.girl').show().animate({"right": 350, "height": 306}, 500, function() {
                                            $('.pop-07').show();
                                        });
                                    });
                                });
                            });
                        });
                        // 光的速度
                        $('.words-06-a').show().animate({"left": "30%"}, 2000);
                        $('.pop-06').show();
                        $('.next').fadeIn();
                    });
                });
            };
            // 第6屏幕向第七屏幕过渡
            if(index == 6 && nextIndex == 7) {
                $('.next').fadeOut();
                // 定时器setTimeout()
                setTimeout(function() {
                    $('.star').animate({"width": 120}, 500, function() {
                        $('.good-07').show();
                        $('.next').fadeIn();
                    });
                }, 2000);
            };
            // 第八屏幕
            // 第一种方法
            // $('.beginShoping').mouseenter(function(event) {
            //     $('.btn-08-a').show();
            // }).mouseleave(function(event) {
            //     $('.btn-08-a').hide();
            // });

            // 第二种方法
            // 以后一个盒子鼠标经过显示离开隐藏，就可以用hover和toggle混搭
            $('.beginShoping').hover(function() {
                $('.btn-08-a').toggle(); //toggle显示和隐藏的切换
            });
            // 大手跟随鼠标移动
            $(document).mousemove(function(event) {
                var x = event.pageX - $('.hand-08').width()/2; //获得鼠标在页面中的x坐标
                var y = event.pageY + 10; //获得鼠标在页面中的y坐标
                // 手的top值不能小于minY的大小
                var minY = k - 499;

                if (y < minY) {
                //     // 如果top值大于minY的值，把minY的值赋给top
                //     $('.hand-08').css({"left": x, "top": minY});
                // }else {
                //     // 如果top值不小于minY，则正常“赋值”
                //     $('.hand-08').css({"left": x, "top": y});
                    y = minY;
                }
                $('.hand-08').css({"left": x, "top": y});
            })
            // 当点击再来一次的时候，分两步进行
            $('.again').click(function(event) {
                // 返回第一屏幕
                $.fn.fullpage.moveTo(1);
                // 所有的动画都复原，就是原来没有看过的样子
                // 核心原理：所有做动画的元素（图片），都清空行内样式
                $('img .move').attr("style", "");
            });
        },
    });
});