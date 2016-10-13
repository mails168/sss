/*弹框JS内容*/
    jQuery(document).ready(function($){
        //打开窗口
        $('.cd-popup-trigger0').on('click', function(event){
            event.preventDefault();
            $('.cd-popup').addClass('is-visible');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.cd-popup').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup').removeClass('is-visible');
            }
        });
		
		//打开窗口
        $('.cd-popup-trigger1').on('click', function(event){
            event.preventDefault();
            $('.cd-popup1').addClass('is-visible1');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.cd-popup1').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup1') ) {
                event.preventDefault();
                $(this).removeClass('is-visible1');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup1').removeClass('is-visible1');
            }
        });
		
		//打开窗口
        $('.cd-popup-trigger2').on('click', function(event){
            event.preventDefault();
            $('.cd-popup2').addClass('is-visible2');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.cd-popup2').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup2') ) {
                event.preventDefault();
                $(this).removeClass('is-visible2');
            }
        });

        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup2').removeClass('is-visible2');
            }
        });
		
		//打开窗口
        $('.cd-popup-trigger3').on('click', function(event){
            event.preventDefault();
            $('.cd-popup3').addClass('is-visible3');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.cd-popup3').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup3') ) {
                event.preventDefault();
                $(this).removeClass('is-visible3');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup3').removeClass('is-visible3');
            }
        });
	
		//发票明细切换显示
		$(".fpnr-lb li").click(function(){
			$(this).siblings('.fpnr-lb-selt').removeClass('fpnr-lb-selt');
			$(this).addClass('fpnr-lb-selt');
		});

        $(document).on('click', '.invoice-fl .hover', function (e) {
            if (!$(this).hasClass('btn-hover')){        
                $('.invoice-fl .fore2-selet').removeClass("fore2-selet");
                $(this).addClass("fore2-selet");        
            }
        });

		$(".tab-nav-item li").bind("click", function () {
		   $(".tab-nav-item li").addClass("invoice-currt");
		   $(this).removeClass("invoice-currt");
		   var i = $(this).attr("data-value");
		   $(".invoice-lb").hide();
		   $(".invoice-lb:eq(" + i + ")").show();
	    });
		
        $(document).on({
            mouseenter: function() { 
                $(this).parents('.fore2').addClass('btn-hover');
            }, 
            mouseleave: function() { 
                $(this).parents('.fore2').removeClass('btn-hover');
            }
        }, '.invoice_del');

        $(document).on({ 
            mouseenter: function() { 
                $(this).addClass('hover'); 
            }, 
            mouseleave: function() { 
                $(this).removeClass('hover'); 
            }, 
            mouseover: function() { 
                $(".btns").hide();
                $(this).find(".btns").show();
            }, 
            mouseout: function(){
                $(this).find(".btns").hide();
            }
        }, '.fore2');
		
		$(".invoice_add").click(function(){
            $("#invoice_save").show();
            if($("#invoice_list span").length > 3) {
                $("#invoice_list").scrollTop($("#invoice_list").height());
            }    
        });

        //发票抬头添加
        $(document).on('click', '.save-tit', function (e) {
            var v_obj = $(this).parent().siblings('.itxt');
            var v_input = v_obj.val();
            if (v_input == ''){
                alert('请输入发票抬头！');
                return false;
            }
                
            $.ajax({
                url: '/cart/invoice_add',
                data: {content: v_input, rnd: new Date().getTime()},
                dataType: 'json',
                async:true,
                type: 'POST',
                success: function(result) {
                    if (result.msg)
                        alert(result.msg);
                    if (result.err)
                        return false;
                    var v_html = '<span class="fore2"><input type="text" value="'+v_input+'" class="itxt" data-r="'+result.id+'" readonly="readonly">'+
                                 '<div class="btns"><a class="ftx-05 invoice_del" href="#" data-r="'+result.id+'">删除</a></div>'+
                                 '</span>';
                    $(v_html).insertAfter($("#invoice_list span").eq(0));
                    v_obj.val('');
                    $("#invoice_save").hide();
                }
            });
        });

        //删除发票
        $(document).on('click', '.btn-hover .invoice_del', function (e) {
            var v_obj = $(this);
            var v_id = parseInt(v_obj.attr('data-r'));
            if (v_id == ''){
                return;
            }
            
            $.ajax({
                url: '/cart/invoice_del',
                data: {id: v_id, rnd: new Date().getTime()},
                dataType: 'json',
            async:true,
                type: 'POST',
                success: function(result) {
                    if (result.msg)
                        alert(result.msg);
                    if (result.err)
                        return false;
                    v_obj.parent().parent().remove();
                }
            });
        });

        $(".save_invoice").click(function(){
            var v_type = $(".invoice-currt").attr('data-value');
            $(".err_empty").hide();
            var v_html = '';
            if (v_type == 0){
                var v_inc_name = $("#inc_name").val();
                var v_inc_mobile = $("#inc_mobile").val();
                var v_inc_content = $("#inc_content").val();
                if (v_inc_name.length <= 0) {
                    $("#inc_name_error").show();
                    return false;
                }
                if (v_inc_mobile.length <= 0) {
                    $("#inc_mobile_error").show();
                    return false;
                }
                if (v_inc_content.length <= 0) {
                    $("#inc_content_error").show();
                    return false;
                }
                v_html = '<a href="javascript:void(0);" class="invoice_msg_check"><span>开票方式：增值发票</span><span>发票抬头：'+v_inc_name+'</span><span>联系方式：'+v_inc_mobile+'</span><span>开票留言：'+v_inc_content+'</span></a><span><a href="javascript:void(0);" class="cd-popup-trigger3">修改</a></span>';
                setCookie('invoice_msg',v_inc_name+'#'+v_inc_mobile+'#'+v_inc_content,0);
            } else {
                var v_name = $(".fore2-selet input").val();
                var v_content = $(".fpnr-lb-selt").html();
                if (v_name == ''){
                    alert('请输入发票抬头！');
                    return false;
                }
                if (v_content == ''){
                    alert('请选择发票内容！');
                    return false;
                }
                v_html = '<a href="javascript:void(0);" class="invoice_msg_check"><span>开票方式：普通发票</span><span>发票抬头：'+v_name+'</span><span>发票内容：'+v_content+'</span></a><span><a href="javascript:void(0);" class="cd-popup-trigger3">修改</a></span>';
                setCookie('invoice_msg',v_name+'#'+v_content,0);
            }
            $("#invoice_msg").html(v_html);
            $('.cd-popup3').removeClass('is-visible3');
        });	
        
    });

    
    var v_address_id = '0';

    //增加地址
    function load_address_form(address_id) {
        $.ajax({
            url: '/cart/load_address_form',
            data: {address_id: address_id, rnd: new Date().getTime()},
            dataType: 'json',
            type: 'POST',
            success: function(result) {
                if (result.msg)
                    alert(result.msg);
                if (result.err)
                    return false;
                if (result.html) {
                    $('#address_block_new').html(result.html).modal('show');
                }
            }
        });
    }
    //取消 弹窗
    function submit_address_close(){
        $('#address_block_new').removeClass('is-visible2');
        $('.cd-popup3').removeClass('is-visible3');
    }
    function load_city() {
        $(':input[name=city]')[0].options.length = 1;
        $(':input[name=district]')[0].options.length = 1;
        var parent_id = $(':input[name=province]').val();
        if (!parent_id)
            return;
        $.ajax({
            url: '/region/load_region',
            data: {parent_id: parent_id, rnd: new Date().getTime()},
            dataType: 'json',
            type: 'POST',
            success: function(result) {
                if (result.msg)
                    alert(result.msg);
                if (result.err)
                    return false;
                sel = $(':input[name=city]')[0];
                for (i in result.data) {
                    sel.options.add(new Option(result.data[i].region_name, result.data[i].region_id));
                }
            }
        });
        return true;
    }

    function load_district() {
        $(':input[name=district]')[0].options.length = 1;
        var parent_id = $(':input[name=city]').val();
        if (!parent_id)
            return;
        $.ajax({
            url: '/region/load_region',
            data: {parent_id: parent_id, rnd: new Date().getTime()},
            dataType: 'json',
            type: 'POST',
            success: function(result) {
                if (result.msg)
                    alert(result.msg);
                if (result.err)
                    return false;
                if (result.data.length == 0) {
                    $(':input[name=district]').css('display', 'none');
                } else {
                    $(':input[name=district]').css('display', 'inline-block');
                }
                sel = $(':input[name=district]')[0];
                for (i in result.data) {
                    sel.options.add(new Option(result.data[i].region_name, result.data[i].region_id));
                }
            }
        });
        return true;
    }

    //判断填写内容
    function check_address() {
        var movePhone = /^1[3,5,8][0-9]{9}/,
            postCode = /^\d{6}$/;
        if ($('.address_block').css('display') == 'none')
            return true;
        
        if (!$(':input[name=province]').val() || !$(':input[name=city]').val() || !$(':input[name=district]').val())
            $("#region_err").show();
        if (!$.trim($(':input[name=address]').val()))
            $("#address_err").show();
        if (!$.trim($(':input[name=consignee]').val()))
            $("#consignee_err").show();
        if (!movePhone.exec($.trim($(':input[name=mobile]').val()))) {
            $("#mobile_err").show();
        }    
        return true;
    }

    //提交地址
    function submit_address_form() {
        $('.err_tip').hide();
        check_address();
        if ($('.err_tip:visible').length > 0) {
            $('.err_tip:first').focus();
            return false;
        }
        var address_id = $.trim($(':input[name=address_id]').val());
        var data = {rnd: new Date().getTime(), address_id: address_id}
        data['address_id'] = address_id;
        data['consignee'] = $.trim($(':input[name=consignee]').val());
        data['address'] = $.trim($(':input[name=address]').val());
        data['zipcode'] = $.trim($(':input[name=zipcode]').val());
        data['mobile'] = $.trim($(':input[name=mobile]').val());
        data['province'] = $.trim($(':input[name=province]').val());
        data['city'] = $.trim($(':input[name=city]').val());
        data['district'] = $.trim($(':input[name=district]').val());
        data['is_used'] = ($("#iscurrent").hasClass('checked')) ? 1 : 0;
        $.ajax({
            url: '/cart/submit_address_form',
            data: data,
            dataType: 'json',
            type: 'POST',
            success: function(result) {
                if (result.msg)
                    alert(result.msg);
                if (result.err)
                    return false;
                if (result.html)
                    $('.address_list').html(result.html);
                $('#address_block_new').modal('hide');
            }
        });
    }

    // 删除地址
    $(document).on('click', '.address_del', function (e) {
        var address_id = $(this).attr('data-recid');
        $.ajax({
            url: '/address/address_delete?address_id='+address_id,
            data: {},
            dataType: 'json',
            type: 'GET',
            success: function(result) {
                if (result.mobile_check_err)
                    $("#address"+address_id).remove();
            }
        });
    });

    //设置默认地址
    $(document).on('click', '.address_default', function (e) {
        var address_id = $(this).attr('data-recid');
        $.ajax({
            url: '/address/address_default?address_id='+address_id,
            data: {},
            dataType: 'json',
            type: 'GET',
            success: function(result) {
                if (!result.error) {
                    $(".address_list .deftip").remove();
                    $("#address"+address_id).append('<ins class="deftip">默认</ins>');
                    $(".address_list .address_default:hidden").show();
                    $("#address"+address_id+" .address_default").hide();
                    $(".address_list li").removeClass('default');
                    $("#address"+address_id).addClass('default');
                    var v_address ='<div class="shouhuo">收货人：'+ $("#address"+address_id+" .prov").html()+' '+$("#address"+address_id+" .city").html()+' '+$("#address"+address_id+" .addr-bd").html()+'</div>';
                    v_address += '<p class="con-dizhi">收货人：'+$("#address"+address_id+" .name").html()+'  '+$("#address"+address_id+" .tell").html()+'</p>';
                    $(".send").html(v_address);
                }
            }
        });
    });

    //切换地址
    $(document).on('click', '.address_list li', function (e) {
        var v_id = $(this).attr('id');
        if (v_id == undefined) return;
        v_id = parseInt(v_id.replace(/address/, ''));
        v_address_id = v_id;
        $(".address_list li").removeClass('default');
        $("#address"+v_id).addClass('default');
        var v_address ='<div class="shouhuo">收货人：'+ $("#address"+v_address_id+" .prov").html()+' '+$("#address"+v_address_id+" .city").html()+' '+$("#address"+v_address_id+" .addr-bd").html()+'</div>';
        v_address += '<p class="con-dizhi">收货人：'+$("#address"+v_address_id+" .name").html()+'  '+$("#address"+v_address_id+" .tell").html()+'</p>';
        $(".send").html(v_address);
        get_shipping_fee();
    }); 

    //选择物流公司
    $(document).on('click', '.shipping_company label.radio_ico', function (e) {
        $('.shipping_company label').removeClass('radio_xz');
        $('.shipping_company li .express_box').removeClass('express_box_sct');
        $(this).addClass('radio_xz');
        $(this).parent().parent().parent('.express_box').addClass('express_box_sct');
        var id = $(this).attr('data-id');
        v_shipping_id = id;
        var address_id = $(".address_list .default").attr('id');
        if (address_id == undefined) {
            alert('请选择地址');
            return false;
        }
        v_address_id = parseInt(address_id.replace(/address/, ''));
        get_shipping_fee();
    });

    //修改运费金额
    function get_shipping_fee(){
        $.ajax({
            url: '/cart/get_shipping_fee2/'+v_shipping_id+'/'+v_address_id+'/0/0/'+v_rec_ids,
            data: {rnd: new Date().getTime()},
            dataType: 'json',
            async:true,
            type: 'POST',
            success: function(result) {
                if (result.msg)
                    alert(result.msg);
                if (result.err)
                    return false;
                $("#shipping_fee").html(+result.data);
                unpay_total();
            }
        });    
    }

    // 计算应付总金额
    function unpay_total(){
        var total = parseFloat($('#totalmoney').html());//商品总额
        var shipping_fee = parseFloat($("#shipping_fee").html());//运费
        //var voucher = parseFloat($("#freight").html());//券
        //var unpay_amount = total + shipping_fee - voucher;
        var unpay_amount = total + shipping_fee;
        console.log(total+' - '+shipping_fee);
        $("#paymoney").html(unpay_amount);
    }

    //选择支付方式
    $(document).on('click', '.shipping_pay label.radio_ico', function (e) {
        $('.shipping_pay label').removeClass('radio_xz');
        $('.shipping_pay .payment_lb .pay_box').removeClass('pay_box_selected');
        $(this).addClass('radio_xz');
        $(this).parent().parent().parent().parent('.pay_box').addClass('pay_box_selected');
    });

