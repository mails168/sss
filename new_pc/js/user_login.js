$(function(){

	//用户登录
	$('#password').on('input propertychange', function(){
        var username = $('input[name="username"]'), psw = $('#password');
        if (0 < username.length && 0 < psw.length){
            $('button.disabled').removeClass('disabled').removeAttr('disabled');        
        }
    })

    var username = $('input[name="username"]');
    username.blur(function(){
        if ('' == username.val()){
            username.parent().prev().text('请输入账号');
        } else {
            username.parent().prev().text('');
        }
    })
    
    $('form[name="loginForm"]').on('submit', function(e){
        e.preventDefault();
        var psw = $('#password');    
            
        if ('' == psw.val()){
            psw.parent().prev().text('请输入密码');
            $('button.disabled').attr('disabled', 'disabled');
        } else {
            $('button.disabled').removeClass('disabled').removeAttr('disabled');
            $.ajax({url:'/user/proc_login', data:$(this).serialize(), method:'POST', dataType:'json', success:function(data){
                if (1 == data.error){
                    $('input[name='+data.name+']').parent().prev().text(data.message);
                }else if(0 == data.error) {
                    if( !data.back_url ) data.back_url ='/';
                    location.href = data.back_url;
                }
            }
            })
        }
        return false;
    })


    //新用户注册
    $('input[type!="checkbox"]').focus(function(){
	    $(this).parent().prev().text('');
	})
	$('#checkbox').change(function(){
	    if ($(this).is(':checked')){
	        $('.error').last().text('');
	        if (0 < $('input[name=mobile]').val().length && 0 < $('input[name=authcode]').val().length && 0 < $('input[name=password]').val().length && 0 < $('input[name=password1]').val().length){
	        $('button.disabled').removeClass('disabled').removeAttr('disabled');        
	        }
	    }
	})
	$('.captcha').click(function(e){
	    e.preventDefault();
	    $('.captcha>img').attr('src', '/user/show_verify?v='+Math.random());
	})
	$('input[name=authcode]').on('blur', function(){
	    var self = $(this);
	    var p = $(this).parent();
	    if ('' != $.trim(self.val())){
	    $.get('/user/validate_code', {captcha:self.val()}, function(res){
	        if (!res){
	            //show mobile code
	            self.val('').off('blur');
	            p.prev().text('');
	            $('.captcha').removeClass('captcha').hide();
	            $('.fsyzm').css('display', 'inline-block');
	            self.on('input propertychange', function(){
	                if(4 == $(this).val().length){
	                    if (0 < $('input[name=mobile]').val().length && 0 < $('input[name=authcode]').val().length && 0 < $('input[name=password]').val().length && 0 < $('input[name=password1]').val().length){
	                        $('button.disabled').removeClass('disabled').removeAttr('disabled');        
	                    }


	                }
	            })
	        } else {
	            p.prev().text(res);
	        }
	    })
	    }
	})
	$('input[name^=password]').on('input propertychange', function(){
	    if(4 == $(this).val().length){
	        if (0 < $('input[name=mobile]').val().length && 0 < $('input[name=authcode]').val().length && 0 < $('input[name=password]').val().length && 0 < $('input[name=password1]').val().length){
	            $('button.disabled').removeClass('disabled').removeAttr('disabled');        
	        }
	    }

	})
	btn = $('.fsyzm');
	checked = false;
	var retry = 0;
	btn.click(function(e){
	    e.preventDefault();
	    if (checked) return;
	    if (0 == retry){
	        $.ajax({
	        url:'/user/reg_auth',
	            async:false,
	            dataType:'json',
	            data:{mobile:$('input[name=mobile]').val(), is_register:true},
	            success:function(data){
	                if(data.mobile_check_err){
	                    $('input[name=mobile]').parent().prev().text(data.mobile_check_err);
	                    btn.html('重新发送');
	                } else {
	                    btn.addClass('disabled').attr('disabled', 'disabled');
	                    checked = true;
	                    smscount(60);
	                    retry = 1;
	                }
	            }
	    })
	    } else {        
	        $.getJSON('/user/reg_auth', {retry:1}, function(data){
	            if (0 == data.msg_send_result){
	                btn.addClass('disabled').attr('disabled', 'disabled');
	                checked = true;
	                smscount(60);
	            } else {
	                btn.html('重新发送');
	            }
	        })

	    }
	});
	$('form[name="registerForm"]').on('submit', function(e){
	    e.preventDefault();
	    if (!$('#checkbox').is(':checked')){
	        $('.zhuchen').next().text('您还未接受悦牙网服务条款');
	        return false;
	    }
	    $.ajax({url:'/user/proc_register', data:$(this).serialize(), method:'POST', dataType:'json', success:function(data){
	        if ('' != data.error){
	            //console.log(data.error);
	            $('input[name='+data.name+']').parent().prev().html(data.error);
	        } else {
	            location.href = '/user/reg_success';
	        }
	    }
	    });
	    return false;
	})
	function smscount(n){
	        n--;
	        if (n<0){
	            btn.removeClass('disabled').removeAttr('disabled').html('重新发送');
	            checked=false;
	        } else { 
	            btn.html('重新发送('+n+')');
	            setTimeout(function(){smscount(n)},1000);
	        }
	}
})