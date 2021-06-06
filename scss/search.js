/**
 * 鍒ゆ柇鏄惁涓鸿偂绁ㄤ唬鐮�
 */
function isStockCode(stock_code) {
    var gpze = /^(((002|000|300|600)[\d]{3})|60[\d]{4})$/;
    if (gpze.test(stock_code)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 鍒ゆ柇鏄惁涓烘墜鏈哄彿
 */
function isPhoneNumber(phone) {
    var reg = /^[1][34578][0-9]{9}$/;

    if (reg.test(phone)) {
        return true;
    } else {
        return false;
    }

}

/**
 * 鍒ゆ柇璁惧鏄惁鏄Щ鍔ㄧ
 */
function isDevicePhone() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

/*
 ** 鎼滅储鍏抽敭璇�
 */
function getSearch() {
    var refer = document.referrer; //鎼滅储鏉ユ簮椤�
    var sosuo = refer.split(".")[1];
    var grep = null;
    var str = null;
    var keyword = null;
    switch (sosuo) {
        case "baidu":
            grep = isDevicePhone() ? /word\=.*\&/i : /wd\=.*\&/i;
            break;
        case "sogou":
            grep = isDevicePhone() ? /keyword\=.*\&/i : /query\=.*\&/i;
            break;
        case "so":
            grep = /q\=.*\&/i;
            break;
        case "sm":
            grep = /q\=.*\&/i;
            break;
        case "yahoo":
            grep = /p\=.*\&/i;
            break;
        case "bing":
            grep = /q\=.*\&/i;
            break;
        case "soso":
            grep = /query\=.*\&/i;
            break;
        case "google":
            grep = /q\=.*\&/i;
            break;
    }

    try {
        str = refer.match(grep);
        keyword = str.toString().split("=")[1].split("&")[0];
    } catch (e) {
    }

    var rdata = {"keyword": keyword, "sosuo": sosuo};
    return rdata;

}

/*
 ** 鏉ユ簮url
 */
function getReferrer() {
    var ref = '';
    if (document.referrer.length > 0) {
        ref = document.referrer;
    }
    try {
        if (ref.length == 0 && opener.location.href.length > 0) {
            ref = opener.location.href;
        }
    } catch (e) {
    }

    return ref;
}

/*
 **鑾峰彇褰撳墠鏃堕棿
 */
function getTime() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;

}

//璁剧疆cookie  
function setCookie(name, value, seconds) {
    seconds = seconds || 0;   //seconds鏈夊€煎氨鐩存帴璧嬪€�  
    var expires = "";
    if (seconds != 0) {      //璁剧疆cookie鐢熷瓨鏃堕棿  
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";   //杞爜骞惰祴鍊�  
}

var now_time = getTime();
var referrer = getReferrer();

var searchInfo = getSearch();


$(function () {

    $.ajax({
        type: 'get',
        async: false,
        url: 'http://oc.yngw518.com/index.php/Home/Input/setCookie',
        dataType: 'jsonp',
        data: {
            net_time: now_time,
            referrer: referrer,
            search_words: searchInfo["keyword"],
            search_engine: searchInfo["sosuo"]
        },
        jsonp: "callback",
        success: function (data) {
            //鍒濆鍖�

        },
    });
});
