$('.Mall_right .pack_up').click(function () {
            if ($(this).find('i').hasClass('up-arrow')) {
                $(this).parent().parent().css({ "height": "auto" });
                $(this).html('收起<i class="drop-arrow"></i>');
            } else {
                if ($(this).parent().parent().hasClass('showLogo'))
                    $(this).parent().parent().css({ "height": "133px" });
                else
                    $(this).parent().parent().css({ "height": "90px" });
                $(this).html('更多<i class="up-arrow"></i>');
            }
        });
        
		var flcount=0;
		var ppcount=0;
        $('.Mall_right .Mall_dx').click(function () {
            flcount = 0; ppcount = 0;
            $("#Mall_lb_btn_submit").removeClass("Mall_sure");
            $("#Mall_lb_btn_submit").addClass("Mall_gay");
            $("#mall_xx_btn_submit").removeClass("Mall_sure");
            $("#mall_xx_btn_submit").addClass("Mall_gay");
            $(this).parent().parent().css({ "height": "auto" });
            $(this).parent().hide();
            if ($(this).parent().parent().hasClass('showLogo')) {
                hide_filter('h_filter_cat', 90);//每次只能打开一个多选项
                $("#Mall_lb_btn").show();
                $('.Mall_lb_pic li').on('click', function (e) {
                    if ( e && e.preventDefault ) 
                        e.preventDefault();
                    else 
                        window.event.returnValue = false;
                    if ($(this).hasClass('checkli')) {
			ppcount--;
                        $(this).removeClass('checkli');
                    } else {
			ppcount++;
                        $(this).addClass('checkli');
                    }
                    
                    if(ppcount>0){
                            $("#Mall_lb_btn_submit").removeAttr("disabled");
                            $("#Mall_lb_btn_submit").removeClass("Mall_gay");						
                            $("#Mall_lb_btn_submit").addClass("Mall_sure");
                    }else{
                            $("#Mall_lb_btn_submit").attr("disabled","disabled");
                            $("#Mall_lb_btn_submit").removeClass("Mall_sure");						
                            $("#Mall_lb_btn_submit").addClass("Mall_gay");
                    }
                });
            } else {
                hide_filter('h_filter_brand', 68);
                $("#mall_xx_btn").show();
                $('.Mall_xx li').bind('click', function (e) {
                    if ( e && e.preventDefault ) 
                        e.preventDefault();
                    else 
                        window.event.returnValue = false;
    
                    if ($(this).hasClass('checkli')) {
			flcount--;
                        $(this).removeClass('checkli');
                    } else {
			flcount++;
                        $(this).addClass('checkli');
                    }
                    
                    if(flcount>0){
                            $("#mall_xx_btn_submit").removeAttr("disabled");
                            $("#mall_xx_btn_submit").removeClass("Mall_gay");						
                            $("#mall_xx_btn_submit").addClass("Mall_sure");
                    }else{
                            $("#mall_xx_btn_submit").attr("disabled","disabled");
                            $("#mall_xx_btn_submit").removeClass("Mall_sure");						
                            $("#mall_xx_btn_submit").addClass("Mall_gay");
                    }
                });
            }
        });
        
        function hide_filter(p_obj, p_hgt){
            $("#"+p_obj).find('.multi-select').show();
            $("#"+p_obj).find('.Mall_anniu').hide();
            $(".Mall_right", $("#"+p_obj)).css({ "height": p_hgt+'px' });
            $("#"+p_obj).find('li').removeClass('checkli');
            $('.Mall_right ul li', $("#"+p_obj)).unbind('click');
            $(".Mall_anniu input:first", $("#"+p_obj)).attr("disabled", "disabled").removeClass("Mall_sure").addClass("Mall_gay");
        }
        
        $('#mall_xx_btn_cancel').click(function () {
            $(this).parent().parent().find(' .multi-select').show();
            $(this).parent().hide();
            $(this).parent().parent().css({ "height": "90px" });
            $(this).parent().parent().find('li').removeClass('checkli');
            $('.Mall_xx li').unbind('click');
            $("#mall_xx_btn_submit").attr("disabled", "disabled");
            $("#mall_xx_btn_submit").removeClass("Mall_sure");
            $("#mall_xx_btn_submit").addClass("Mall_gay");
        });
        
        $('#mall_xx_btn_submit').click(function () {
            //$(this).parent().parent().parent().hide();
            var ids = '';
            var id;
            $.each($(".Mall_xx li[class='checkli']"), function () {
                //var li = $('<a href="#" title="">' + $(this).text() + '、</a>')
                //$("#Mallfeilei .screening span").append($(li));
                id = $(this).attr('data-id');
                ids += (ids == '') ? id : ','+id;
            });
            
            var url = getArgs(ids, 'cat');
            window.location.href = url;
            //$("#Mallfeilei").show();
        });
        //url拆分
        function getArgs(p_ids, p_key) {
            var new_url = '';
            var query = location.search.substring(1);
            if (query == '') query = 'cat=0&brand=0&price=0&page=0&sort=0';
            var pairs = query.split("&");
            for(var i = 0; i < pairs.length; i++) {  
                var pos = pairs[i].indexOf('=');
                if (pos == -1) continue;
                var argname = pairs[i].substring(0,pos);
                var value = pairs[i].substring(pos+1);  
                value = decodeURIComponent(value);
                if (argname == p_key) value = p_ids;
                new_url += '&'+argname+'='+value;
            }
            if(new_url != '') new_url = '?'+new_url.substr(1);
            return new_url;
        }

        $("#Mallfeilei").click(function () {
            $('.j_Brand').show();
            $("#mall_xx_btn").hide(); $("#Mallfeilei").hide();
            $(".Mall_xx li").removeClass('checkli');
            $("#mall_xx_btn").next().show();
            $("#Mallfeilei .screening span").empty();
            $('.Mall_xx li').unbind('click');
        });
        $('#Mall_lb_btn_cancel').click(function () {
            $(this).parent().parent().find(' .multi-select').show();
            $(this).parent().hide();
            $(this).parent().parent().css({ "height": "133px" });
            $(this).parent().parent().find('li').removeClass('checkli');
            $('.Mall_lb_pic li').unbind('click');
            $("#Mall_lb_btn_submit").attr("disabled", "disabled");
            $("#Mall_lb_btn_submit").removeClass("Mall_sure");
            $("#Mall_lb_btn_submit").addClass("Mall_gay");
        });
        $('#Mall_lb_btn_submit').click(function () {
            //$(this).parent().parent().parent().hide();
            var ids = '';
            var id;
            $.each($(".Mall_lb_pic li[class='checkli']"), function () {
                //var li = $(' <a href="#" title="">' + $(this).text() + '</a>')
                //$("#MallPinpai .screening span").append($(li));
                id = $(this).attr('data-id');
                ids += (ids == '') ? id : ','+id;
            });
            
            var url = getArgs(ids, 'brand');
            window.location.href = url;
            //$("#MallPinpai").show();
        });
        $("#MallPinpai").click(function () {
            $('.j_Brand').show();
            $("#Mall_lb_btn").hide();
            $(".Mall_lb_pic li").removeClass('checkli');
            $("#Mall_lb_btn").next().show();
            $("#MallPinpai").hide();
            $("#MallPinpai .screening span").empty();
            $('.Mall_lb_pic li').unbind('click');
        });
