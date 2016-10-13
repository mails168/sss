$(function(){
    /**
     * 首页第一个轮播滚动
    */
    $('.ck-slide').ckSlide({
        autoPlay: true,//默认为不自动播放，需要时请以此设置
        dir: 'x',//默认效果淡隐淡出，x为水平移动，y 为垂直滚动
        interval:5000//默认间隔2000毫秒,
    });
    /**
     * 首页 左边 导航定位
    */
    $("#left-side a").click(function(){
        $("#left-side a").removeClass("mui-lift-cur-nav");
        $(this).addClass("mui-lift-cur-nav");   
    }); 

    //离页面顶部
    var J_FpLift = $('#left-side');
    floatTool(J_FpLift, 400,
        function () {
            J_FpLift.show();
            var isactive = false;
            J_FpLift.find('a[data-anchor]').each(function () {
                var anchorId = $(this).data('anchor');
                if (anchorId.length > 0) {
                    var anchorElement = $('#' + anchorId);
                    if (anchorElement.length > 0) {
                        var anchorOffsetTop = anchorElement.offset().top;
                        if (anchorOffsetTop != 0 && !isactive) {
                            var val = $(document).scrollTop() - anchorOffsetTop;
                            if (val < 30 && Math.abs(val)<500) {
                                $("#left-side a").removeClass("mui-lift-cur-nav");
                                $(this).addClass('active');
                                isactive = true;
                                return;
                            }
                        }
                        $(this).removeClass('active');
                    }
                }
            });
        }
        ,
        function () {
            J_FpLift.hide();
        }
    );
    
    /**
     * 首页 热卖 多图轮播滚动
    */
    $("#focus-img").changeImg({
        'boxWidth':1190,
        'changeLen':4,
        'changeSpend':510,
        'autoChange':true,
        'changeHandle':true,
        'autoTime':5000
    });
});

function floatTool(obj, documentScrollTop, showMethod, hideMethod) {
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > documentScrollTop) {
            showMethod();
        }
        else {
            hideMethod();
        }
    });
}

(function($){
    $.fn.changeImg=function(options){
        
        var defalutes={
            'boxWidth':800,
            'changeLen':5,
            'changeSpend':300,
            'autoChange':true,
            'changeHandle':true,
            'autoTime':5000
        };
        
        var ops=$.extend(defalutes, options),
            $that=$(this);
        
        var _html='<div class="change-bnt"><a href="javascript:;" class="prev-bnt arrow-left">&nbsp;</a></div><div class="change-bnt change-right"><a href="javascript:;" class="next-bnt arrow-right">&nbsp;</a></div>';
        
        
        var $changeBox=$that.find(".focus-img-con"),
            $changeUl=$changeBox.find("ul"),
            $changeLi=$changeBox.find("li"),
            $changePrev='',
            $changeNext='',
            _len=$changeLi.length,
            _timer='';
            
            
        $changeBox.width(ops.boxWidth);
        if(ops.changeHandle){
            $that.append(_html);
            $changePrev=$that.find(".prev-bnt");
            $changeNext=$that.find(".next-bnt");
        };
        
        
        var oWidth=$changeLi.eq(0).outerWidth(),
            bWidth=oWidth*_len,
            _handle=true;
        $changeUl.width(bWidth);
        
        
        $changePrev.on("click",function(){
            if(_handle){
                _handle=false;
                clearInterval(_timer);
                $changeUl.css('right','auto');
                for(var i=0; i<ops.changeLen; i++){
                    var _li=$changeUl.find("li").eq(i).clone(true);
                    $changeUl.append(_li);
                };
                $changeUl.stop().animate({
                    'left':-oWidth*ops.changeLen
                },300,function(){
                    for(var i=0; i<ops.changeLen; i++){
                        $changeUl.find("li").eq(0).remove();
                    };
                    $changeUl.css('left',0);
                    _handle=true;
                });
                autoPlay();
            };
        });
        
        var _len1=_len-1;
        $changeNext.on("click",function(){
            
            $changeUl.css('right',0);
            if(_handle){
                _handle=false;
                clearInterval(_timer);
                $changeUl.css('left','auto');
                for(var i=0; i<ops.changeLen; i++){
                    var $_li=$changeUl.find("li").eq(_len1).clone(true);
                    $changeUl.prepend($_li);
                };
                
                $changeUl.stop().animate({
                    'right':-oWidth*(_len-ops.changeLen) + (oWidth / 3 - 5)
                },300,function(){
                    for(var i=0; i<ops.changeLen; i++){
                        $changeUl.find("li").eq(_len).remove();
                    };
                    _handle=true;
                });
                autoPlay();
            };
        });
        
        
        function autoPlay(){
            if(ops.autoChange){
                _timer=setInterval(function(){
                    $changePrev.click();
                },ops.autoTime)
            }
        }
        autoPlay();
        
        
        return this;
    }
    
})(jQuery);