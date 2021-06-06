/**
 * 绑定页面推广微信，记录访问轨迹
 * 依赖jquery
 */

jQuery.fn.extend({ //拓展jquery插件方法 长按事件 仅手机端有效
    longTap: function (cb) {
        var longtimer;
        $(this).on('touchstart', function (e) {
            e.stopPropagation();
            longtimer = setTimeout(function () {
                cb();
            }, 750);//这里设置长按响应时间
        });
        $(this).on('touchend', function (e) {
            e.stopPropagation();
            clearTimeout(longtimer);
        });
        $(this).on('touchmove', function (e) {
            e.stopPropagation();
            clearTimeout(longtimer);
        });
        $(this).on('touchcancel', function (e) {
            e.stopPropagation();
            clearTimeout(longtimer);
        });
    }
});

$(function () {
    var mark = $("body").data("tgmark");
    if (!mark) {
        console.log("未填写唯一标识");
        return;
    }
    var domain = "http://120.79.183.66"; //接口域名
    var $tg_img = $(".api-wx-img");
    var $tg_num = $(".api-wx-num");

    $tg_img.longTap(function () { //长按了微信二维码,长按事件仅手机端有效
        gdt('track', 'RESERVATION', {'key1': 'value1', 'key2': 'value2'});
        addTgLongByMark();
    });

    $tg_num.longTap(function () { //长按了微信号,长按事件仅手机端有效
        gdt('track', 'RESERVATION', {'key1': 'value1', 'key2': 'value2'});
        addTgLongByMark();
    });

    //开始
    (function () {
        addTgReadByMark(); //记录访问量
        // var num, img;
        // if (localStorage.getItem("api_wx_num")) {
        //     num = localStorage.getItem("api_wx_num");
        //     img = localStorage.getItem("api_wx_img");
        //     checkTgWxByNum(num, img); //设置页面显示微信号和微信二维码
        // } else {
        getTgWxByMark();
        // }
    })();

    //推广获取微信
    function getTgWxByMark() {
        var url = domain + "/admin.php/Api/main";
        $.ajax({
            url: url,
            type: "post",
            data: {
                mark: mark
            },
            dataType: "json",
            success: function (data) {
                var num = data.wx_number;
                var img = data.picture;
                if (num) {
                    setTgEle(num, img); //设置页面显示微信号和微信二维码
                    // bindTgWx(num, img); //绑定
                } else {
                    console.log("唯一标识不存在");
                }
            },
            error: function () {
                console.log({"获取微信接口错误": arguments});
            }
        });
    }

    //检查微信是否可用
    function checkTgWxByNum(num, img) {
        var url = domain + "/admin.php/Api/check_wx";
        $.ajax({
            url: url,
            type: "post",
            data: {
                wx_number: num
            },
            dataType: "json",
            success: function (re) {
                if (re == 1) { //如果可用
                    setTgEle(num, img); //设置页面显示微信号和微信二维码
                } else { //不可用
                    getTgWxByMark(); //获取微信
                }

            },
            error: function () {
                console.log({"检查微信接口错误": arguments})
            }
        });
    }

    //记录访问量+
    function addTgReadByMark() {
        var url = domain + "/admin.php/Api/access";
        var recordTime = Date.parse(new Date()), rateTime = 1000 * 30; //限定频率，一段时间内重复刷新不会增加访问量
        if (!(localStorage.getItem('recordTime') && recordTime - localStorage.getItem('recordTime') < rateTime)) {
            localStorage.setItem('recordTime', recordTime);
            $.ajax({
                url: url,
                type: "post",
                data: {
                    mark: mark
                },
                success: function (data) {
                }
            });
        }
    }

    //记录长按次数+
    function addTgLongByMark() {
        var url = domain + "/admin.php/Api/long_hold";
        $.ajax({
            url: url,
            type: "post",
            data: {
                mark: mark
            },
            success: function (data) {
            }
        });
    }

    //绑定并记录绑定次数+
    function bindTgWx(num, img) {
        localStorage.setItem("api_wx_num", num);
        localStorage.setItem("api_wx_img", img);
        var url = domain + "/admin.php/Api/bind";
        $.ajax({
            url: url,
            type: "post",
            data: {
                wx_number: num
            },
            success: function (data) {
            }
        });
    }

    //设置页面微信二维码和微信号
    function setTgEle(num, img) {
        if (num) {
            $tg_num.html(num);
        }
        if (img) {
            // img = img + "?t=" + Math.random(); //最新图片资源
            $tg_img.each(function (index, item) {
                var $img = $(item);
                if ($img.is('img')) { //如果是img标签，设置src
                    $img.attr("src", img)
                } else { //如果不是img标签，设置背景图
                    $img.css("background-image", "url(" + img + ")");
                }
            });

        }
    }


    //写入窗口
    var popHtml = '<div id="pop_api_WeiXin" style="display:none;position:fixed;left:0;top:0;margin:0;padding:0;width:100%;height:100%;background-color:rgba(0,0,0,0.6);z-index:99999999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;">' +
        '<div style="font-size:16px;width:90%;background-color:#ffffff;position:absolute;margin:auto;top:30%;left:0;right:0;border-radius:5px;">' +
        '<h4 style="font-size:1em;text-align:center;min-height:88px;display:block;width:100%;margin:0;padding:10px 0 5px 0;">已复制成功，快去微信添加吧<div style="font-weight:normal;text-align: left;padding: 5px 10px 2px 10px;line-height: 26px;">如未自行跳转，通过以下方式添加：<br>1.手动打开微信→2.点击“+”添加朋友→3.粘贴微信号开始搜索→4.添加到通讯录→5.开始赚钱</div></h4>' +
        '<a href="javascript:pop_api_close();" style="font-size:1em;width:50%;display:block;float:left;margin:0;padding:0;text-align:center;line-height:50px;background-color:#CCCCCC;color:#ffffff;text-decoration:none;">取消</a>' +
        '<a href="weixin://" style="font-size:1em;width:50%;display:block;float:left;margin:0;padding:0;text-align:center;line-height:50px;background-color:#de0000;color:yellow;text-decoration:none;">打开微信</a>' +
        '</div>' +
        '</div>';
    $("body").append(popHtml);//写入页面
    $pop_api_WeiXin = $("#pop_api_WeiXin");//赋值弹窗对象

    //监听微信号复制成功后的事件
    // $tg_num.on("copy", function () {
    //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //判断是手机端
    //         pop_api_open();
    //     }
    // });

});

var $pop_api_WeiXin;//定义弹窗对象

function pop_api_close() { //关闭弹窗
    $pop_api_WeiXin.slideUp();
}

function pop_api_open() { //打开弹窗
    $pop_api_WeiXin.slideDown();
}