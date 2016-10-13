var com_loading = null;
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (j) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return j.isFunction(converter) ? converter(value) : value;
    }

    var config = j.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !j.isFunction(value)) {
            options = j.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling j.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    j.removeCookie = function (key, options) {
        if (j.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        j.cookie(key, '', j.extend({}, options, { expires: -1 }));
        return !j.cookie(key);
    };

}));


// 用户登录
jQuery(document).ready(function($){  
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var v_user_name = '';
    for (var i = cookies.length - 1; i >= 0; i--) {
        var item = cookies[i].split('=');
        if (item[0]=='v_user_name') {
            v_user_name = decodeURIComponent(item[1]);
        };
        if (item[0]=='v_advar') {
            user_advar = user_advar + decodeURIComponent(item[1]) ;
        };
    };
    if (!v_user_name) {
        $('.top-left').html('您好，欢迎来悦牙网请<a href="/user/login" class="top-login">登录</a><a href="/user/signin">免费注册</a>');
        $('.sideright_login').html('您好！请<a href="/user/login">登录</a>丨<a href="/user/signin">注册</a>');
    } else {
        $('.top-left').html(v_user_name +'  您好，欢迎来悦牙网 <a href="/user/logout.html">退出</a>');
        $('.avatar_imgbox').html('<img src="' + user_advar + '?v=version" />');
        $('.sideright_login').html('您好，'+ v_user_name +' <a href="/user/logout.html">退出</a>');

        $('.account-left').click(function(){ 
            location.href = '/user/order_list.html';
        })
        $('.account-right').click(function(){
            location.href = '/user/index.html';
        })
    }

    //头部的手机二维码
    $(".top-right").hover(function () {
        $(this).find(".top-code").show();
        $(".top-right a").addClass("mob-yy")
    }, function () {
        $(this).find(".top-code").hide();
        $(".top-right a").removeClass("mob-yy")
    });

    // tab ====> 开始

    j('.recommend-top li').click(function () {
        j('.recommend-top li').removeClass("sp_current");
        j(this).addClass("sp_current");
        j('.recommend div ul').hide();
        j('.recommend div ul').eq(j(this).index()).show();
    });

});


// tab ====> 结束

jQuery(document).ready(function ($) {
    //给这个menu样式下的li 的a标签 绑定点击事件
    $('.menu-list li a').bind("click", function () {
        //移除menu样式下所有//
        $('.menu-list li a').removeClass('active');
        $(this).addClass('active');
    });

    // 分类导航 ===》开始
    $(".menu_fenlei").hover(function() { //一级导航悬浮
        $(".v-class-name").show();
        $(".dorpdown-layer").children(".item-sub").hide();
        $(".dorpdown-layer").children(".item-sub").eq(0).show();
    },function(){
        $(".v-class-name").hide();
    })

    j(".v-class-name div").children(".fenlei_item").hover(function() { //二级导航悬浮
        var index = j(this).index();
        j(".dorpdown-layer").children(".item-sub").hide();
        j(".dorpdown-layer").children(".item-sub").eq(index).show();
    })
    // 分类导航 ====》结束

    //定位顶部导航
    varscrolling = false;
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 157) {
            $(".nav-banner").addClass('main-nav-be-fixedtrans');
            $("#left-side").css('display', "block");
        } else {
            $(".nav-banner").removeClass('main-nav-be-fixedtrans');
            $("#left-side").css('display', 'none');
        }
    });

    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
    $(document).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").fadeIn(1500);
        } else {
            $("#back-to-top").fadeOut(1500);
        }
    });

    //当点击跳转链接后，回到页面顶部位置  
    $("#back-to-top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $('a[href!=""]:not[target]').add('a[href!="javascript:void(0);"]:not[target]').live('click', function(){
        com_loading = new Loading();
        com_loading.init({target:this});
        com_loading.start();
    });

    
});

// 最右边导航栏 ====> 开始
$(".quick_links_panel li").mouseenter(function () {
    $(this).children(".mp_tooltip").animate({ left: -183, queue: true });
    $(this).children(".ibar_login_box").css("display", "block");
});
$(".quick_links_panel li").mouseleave(function () {
    $(this).children(".mp_tooltip").animate({ left: 0, queue: true });
    $(this).children(".ibar_login_box").css("display", "none");
});

$(".quick_toggle li").mouseover(function () {
    $(this).children(".mp_qrcode").show();
});
$(".quick_toggle li").mouseleave(function () {
    $(this).children(".mp_qrcode").hide();
});

$(".c_baike").mouseover(function(){
    $("#h_baike_menu").show();
});

$(".c_baike").mouseleave(function(){
    $("#h_baike_menu").hide();
});
// 元素以及其他一些变量
var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");
var numberItem = 0;
// 抛物线运动
var myParabola = funParabola(eleFlyElement, eleShopCart, {
    speed: 400, //抛物线速度
    curvature: 0.0008, //控制抛物线弧度
    complete: function () {
        eleFlyElement.style.visibility = "hidden";
        eleShopCart.querySelector("span").innerHTML = ++numberItem;
    }
});
// 绑定点击事件
if (eleFlyElement && eleShopCart) {
    [].slice.call(document.getElementsByClassName("btnCart")).forEach(function (button) {
        button.addEventListener("click", function (event) {
            // 滚动大小
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
            eleFlyElement.style.left = event.clientX + scrollLeft + "px";
            eleFlyElement.style.top = event.clientY + scrollTop + "px";
            eleFlyElement.style.visibility = "visible";
            // 需要重定位
            myParabola.position().move();
        });
    });
}

// 最右边导航栏 ====> 结束


function get_liuyan(tagType, tagId, comment_type, container) {        
    if (!tagType || !tagId || !comment_type || !container) {
        alert('数据错误');
        return;
    };        
    var xhr_obj = $.ajax({
    url : '/liuyan/liuyan_list',
    type : 'POST',
    timeout:3000,
    dataType : "json",
    data : {
        comment_type : comment_type,
        tag_type : tagType,
        tag_id : tagId
    },
    success : function(data, status, xhr) {  
        if (data.err == 0) {
            container.html(data.html);
            switch(comment_type) {
                case 1: 
                    if ($('.comment-count').length) {
                        $('.comment-count').text(data.count);    
                    };
                    
                break;
                case 2:
                    if ($('.goodscomment-count').length) {
                        $('.goodscomment-count').text(data.count);    
                    };
                    
                break;
            }

        } else {
            alert('未知错误');
        } 
    },

    error : function(xhr, status) {
        alert('数据请求错误');
    },

    complete:function(xhr, status){
        if (status == 'timeout') {
            xhr_obj.abort();
            //alert('连接超时');
        };

    }

});
}

function checkLogin(page,app,callback_str){    
    var is_login;
    $.ajax({
        async:false,
        method:'POST',
        url:'/user/check_is_login',
        dataType:'json',
        success:function(res){
        if (!res.is_login){

            is_login=false;

        }else{
            is_login=true;
            window.user_id = res.user_id;
        } 
    } 
    });
    return is_login;
}


/**
 *  点击收藏
 *  @product_id     收藏的 商品id
 *  @product_type   收藏的 商品类型  0=商品、1=礼包、2=文章、3=课程、4=视频
 *  @b              当前要收藏的 元素 （this）
 */
function add_to_collect (product_id, product_type, b) {

    if(!checkLogin(false)){
        $('.cd-popup6').addClass('is-visible6');          //登录弹层
        return;
    }

    $.ajax({
            url:'/product_api/add_to_collect',
            data:{product_id:product_id,product_type:product_type,rnd:new Date().getTime()},
            dataType:'json',
            type:'POST',
            success:function(result){
                if (result.msg) {
                    alert(result.msg)
                };
                if (result.err) {return false};
                $(b).find('i').empty();
                $(b).html('已收藏');
                //$(b).toggleClass('active');
                // TODO 显示收藏成功。
                // 
            }
    });
}

function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return null;
}

function setCookie(objName,objValue,objHours){//添加cookie
    var str = objName + "=" + escape(objValue)+";path=/";
    if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//截取中英字符串 双字节字符长度为2 ASCLL字符长度为1
function cutStr(str, cutLen){
    var returnStr = '',    //返回的字符串
        reCN = /[^\x00-\xff]/,    //双字节字符
        strCNLen = str.replace(/[^\x00-\xff]/g,'**').length; 
    if(cutLen>=strCNLen){
        return str;
    }
    for(var i=0,len=0;len<cutLen;i++){
        returnStr += str.charAt(i);
        if(reCN.test(str.charAt(i))){
            len+=2;
        }else{
            len++;
        }
    }
    return returnStr + '...';
}


cleanHistory = function(){
    j.removeCookie('recentBrowseProd', {path:'/', domain:document.domain});
}

//取消 购物车成功弹窗
function submit_address_close(){
    $('.cd-popup').removeClass('is-visible');
}
$('.cd-popup-close').on('click', function(event){
    $(this).parents('.cd-popup-container').parent().removeClass('is-visible');
});
//登录弹窗  login-box

//关闭窗口
$('.cd-popup6').on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup6') ) {
        event.preventDefault();
        $(this).removeClass('is-visible6');
    }
});

//ESC关闭
$(document).keyup(function(event){
    if(event.which=='27'){
        $('.cd-popup6').removeClass('is-visible6');
    }
});

function update_cart_num () {
    var cart_num=getCookie('cart_num');
    if(cart_num) {
        $('.cart_num').html(cart_num);
    }
}

$(function(){

    var username = $('input[name="username"]');
    username.blur(function(){
        if ('' == username.val()){
            username.prev().text('请输入账号');
        } else {
            username.prev().text('');
        }
    })

    var password = $('input[name="password"]');
    password.blur(function(){
        if ('' == password.val()){
            password.prev().text('请输入密码');
        } else {
            password.prev().text('');
        }
    })

    $('form[name="loginForm"]').on('submit', function(e){
        e.preventDefault();    
        if ('' == username.val()) {
            username.prev().text('请输入账号');
        } else if ('' == password.val()){
            password.prev().text('请输入密码');
        }else{
            console.log($(this).serialize());
            $.ajax({
                    url:'/user/proc_login', 
                    data:$(this).serialize(), 
                    method:'POST', 
                    dataType:'json', 
                    beforeSend:function() {
                        load = new Loading();
                        load.init({
                            target: $('#login-box')[0]
                        });
                        load.start();       
                    },
                    success:function(data){
                        if (1 == data.error){
                            $('input[name='+data.name+']').prev().text(data.message);
                        } else {
                            location.reload();
                        }
                    },
                    complete:function(){
                        if (load) {
                            setTimeout(function(){load.stop()}, 500);
                        };
                    }
            })
        }
        // return false;
    })
})