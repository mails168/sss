var load = null;
	
jQuery(function($){
	
	title = '悦牙网';
	//创建DOM
	var 
	quickHTML = document.querySelector("div.quick_link_mian"),
	quickShell = $(document.createElement('div')).html(quickHTML).addClass('quick_links_wrap'),
	quickLinks = quickShell.find('.quick_links');
	quickPanel = quickLinks.next();
	quickShell.appendTo('.mui-mbar-tabs');
	
	//具体数据操作 
	var 
	quickPopXHR,
	loadingTmpl = '<div class="loading" style="padding:30px 80px"><i></i><span>Loading...</span></div>',
	popTmpl = '<a href="javascript:;" class="ibar_closebtn" title="关闭"></a><div class="ibar_plugin_title"><h3><%=title%></h3></div><div class="pop_panel"><%=content%></div><div class="arrow"><i></i></div><div class="fix_bg"></div>',
	historyListTmpl = '<ul><%for(var i=0,len=items.length; i<5&&i<len; i++){%><li><a href="<%=items[i].productUrl%>" target="_blank" class="pic"><img alt="<%=items[i].productName%>" src="<%=items[i].productImage%>" width="60" height="60"/></a><a href="<%=items[i].productUrl%>" title="<%=items[i].productName%>" target="_blank" class="tit"><%=items[i].productName%></a><div class="price" title="单价"><em>&yen;<%=items[i].productPrice%></em></div></li><%}%></ul>',
	newMsgTmpl = '<ul><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.commentNewReply%></b></em></span>商品评价/晒单</a></li><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.consultNewReply%></b></em></span>商品咨询</a></li><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.messageNewReply%></b></em></span>我的留言</a></li><li><a href="#"><span class="tips">新通知<em class="num"><b><%=items.arrivalNewNotice%></b></em></span>到货通知</a></li><li><a href="#"><span class="tips">新通知<em class="num"><b><%=items.reduceNewNotice%></b></em></span>降价提醒</a></li></ul>',
	quickPop = quickShell.find('#quick_links_pop'),
	quickDataFns = {
		//购物信息
		message_list: {
			title: '购物车',
			content: '<div class="ibar_login_box status_login" style="display: none;"><div class="avatar_box"><p class="avatar_imgbox"><img src="http://static.yueyawang.com/new_pc/images/my_cnt_pic.jpg"></p><div class="sideright_login">你好！请<a href="#">登录</a>丨<a href="#">注册</a></div></div><div class="login_btnbox"><div class="account-inner"><div class="account-left"><span class="side-order"></span><p>我的订单</p></div><div class="account-right"><span class="side-center"></span><p>会员中心</p></div></div></div><i class="icon_arrow_white"></i></div>',
			init:$.noop
		},
		
		//我的资产
		history_list: {
			title: '我的资产',
			content: '<div class="ibar_plugin_content"><div class="ia-head-list"><a href="#" target="_blank" class="pl"><div class="num">0</div><div class="text">优惠券</div></a><a href="#" target="_blank" class="pl"><div class="num">0</div><div class="text">红包</div></a><a href="#" target="_blank" class="pl money"><div class="num">￥0</div><div class="text">余额</div></a></div><div class="ga-expiredsoon"><div class="es-head">即将过期优惠券</div><div class="ia-none">您还没有可用的现金券哦！</div></div><div class="ga-expiredsoon"><div class="es-head">即将过期红包</div><div class="ia-none">您还没有可用的红包哦！</div></div></div>			',
			init: $.noop
		},
		//给客服留言
		leave_message: {
			title: '我关注的产品',
			content: $("#ibar_gzcp").html(),
			init:$.noop
		},
		mpbtn_histroy:{
			title: '我的足迹', 
			content:'',
			init: $.noop
		},
		mpbtn_wdsc:{
			title: '悦牙网公众号',
			content: '<div class="ibar_plugin_content"><div class="ibar_cart_group ibar_cart_product"><img src="http://static.yueyawang.com/pc/images/wechat_qrcode.jpg" alt="关注悦牙网公众号" style=""></div></div>',
			init: $.noop
		},

		mpbtn_mobile:{
			title: '手机悦牙网',
			content: '<div class="ibar_plugin_content"><div class="ibar_cart_group ibar_cart_product"><img src="http://static.yueyawang.com/new_pc/images/mobile_web.png" alt="关注悦牙网公众号" style=""></div></div>',
			init: $.noop
		},

		mpbtn_recharge:{
			title: '手机充值',
			content: '<div class="ibar_plugin_content"><form target="_blank" class="ibar_recharge_form"><div class="ibar_recharge-field"><label>号码</label><div class="ibar_recharge-fl"><div class="ibar_recharge-iwrapper"><input type="text" name="19" placeholder="手机号码" /></div><i class="ibar_recharge-contact"></i></div></div><div class="ibar_recharge-field"><label>面值</label><div class="ibar_recharge-fl"><p class="ibar_recharge-mod"><span class="ibar_recharge-val">100</span>元</p><i class="ibar_recharge-arrow"></i><div class="ibar_recharge-vbox"><ul style="display:none;"><li><span>10</span>元</li><li class="sanwe selected"><span>100</span>元</li><li><span>20</span>元</li><li class="sanwe"><span>200</span>元</li><li><span>30</span>元</li><li class="sanwe"><span>300</span>元</li><li><span>50</span>元</li><li class="sanwe"><span>500</span>元</li></ul></div></div></div><div class="ibar_recharge-btn"><input type="submit" value="立即充值" /></div></form></div>',
			init: $.noop
		},
		mpbtn_qqkefu:{
			title: '悦牙网QQ客服',
			content: '<div class="ibar_plugin_content"><div class="ibar_cart_group ibar_cart_product"><ul class="floatDqq">      <li><a target="_blank" href="tencent://message/?uin=3518955275&amp;Site=sc.chinaz.com&amp;Menu=yes"><img src="http://static.yueyawang.com/new_pc/images/qq.png?v=123" align="absmiddle">在线客服1号</a></li>      <li><a target="_blank" href="tencent://message/?uin=3090196682&amp;Site=sc.chinaz.com&amp;Menu=yes"><img src="http://static.yueyawang.com/new_pc/images/qq.png?v=123" align="absmiddle">在线客服2号</a></li>      <li><a target="_blank" href="tencent://message/?uin=1487211367&amp;Site=sc.chinaz.com&amp;Menu=yes"><img src="http://static.yueyawang.com/new_pc/images/qq.png?v=123" align="absmiddle">在线客服3号</a></li></ul></div></div>',
			init: $.noop
		}
	};
	
	//showQuickPop
	var 
	prevPopType,
	prevTrigger,
	doc = $(document),
	popDisplayed = false,
	hideQuickPop = function(){
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		popDisplayed = false;
		prevPopType = '';
		quickPop.hide();
		quickPop.animate({left:280,queue:true});
	},
	showQuickPop = function(type){
		if(quickPopXHR && quickPopXHR.abort){
			quickPopXHR.abort();
		}
		if(type !== prevPopType){
			var fn = quickDataFns[type];
			quickPop.html(ds.tmpl(popTmpl, fn));
			fn.init.call(this, fn);
		}
		doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);

		quickPop[0].className = 'quick_links_pop quick_' + type;
		popDisplayed = true;
		prevPopType = type;
		quickPop.show();
		quickPop.animate({left:0,queue:true});
	};
	quickShell.bind('click.quick_links', function(e){
		e.stopPropagation();
	});
	quickPop.delegate('a.ibar_closebtn','click',function(){
		quickPop.hide();
		quickPop.animate({left:280,queue:true});
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
	});

	//通用事件处理
	var 
	view = $(window),
	quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
	getHandlerType = function(className){
		return className.replace(/current/g, '').replace(/\s+/, '');
	},
	showPopFn = function(){
		var type = getHandlerType(this.className);
		if(popDisplayed && type === prevPopType){
			return hideQuickPop();
		}


		//处理各种逻辑
		switch(this.className) {
			case 'mpbtn_histroy':
					$.ajax({
						type:'GET',
						url:'/product/ajax_get_history',
						async:false,
						timeout:5000,
						beforeSend:function() {
							load = new Loading();
							load.init({
								target: $('.mui-mbar-tabs')[0]
							});
							load.start();
						},
						success:function(html){
							var count = $(html).find('.imp-addCart').length;
							quickDataFns[type].title = '我的历史';
							quickDataFns[type].content = '<div class="ibar_plugin_content"><div class="ibar-history-head">共' + count + '件产品<a href="javascript:void(0)" onclick="cleanHistory();">清空</a></div><div class="ibar-moudle-product">' + html + '</div></div>';
							
						},
						error:function(){
							quickDataFns[type].title = '我的历史';
							quickDataFns[type].content = '<div class="ibar_plugin_content"><div class="ibar-history-head"><span style="color:red;font-weight:bold">未知错误</span><a href="javascript:void(0)" onclick="cleanHistory();">清空</a></div><div class="ibar-moudle-product"></div></div>';
						},
						complete:function(){
							if (load) {
								setTimeout(function(){load.stop()}, 1000);
							};
						}



					});
					
				break;
			default:
				break;

		}

		///
		showQuickPop(this.className);
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		prevTrigger = $(this).addClass('current');
	},
	quickHandlers = {
		//购物车，最近浏览，商品咨询
		my_qlinks: showPopFn,
		//message_list: showPopFn,
		history_list: showPopFn,
		leave_message: showPopFn,
		mpbtn_histroy:showPopFn,
		//mpbtn_recharge:showPopFn,
		mpbtn_qqkefu:showPopFn,
		mpbtn_wdsc:showPopFn,
		mpbtn_mobile:showPopFn,
		//返回顶部
		return_top: function(){
			ds.scrollTo(0, 0);
			hideReturnTop();
		}
	};
	quickShell.delegate('a', 'click', function(e){
		var type = getHandlerType(this.className);
		if(type && quickHandlers[type]){
			quickHandlers[type].call(this);
			e.preventDefault();
		}
	});
	
	//Return top
	var scrollTimer, resizeTimer, minWidth = 1350;

	function resizeHandler(){
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(checkScroll, 160);
	}
	
	function checkResize(){
		quickShell[view.width() > 1340 ? 'removeClass' : 'addClass']('quick_links_dockright');
	}
	function scrollHandler(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkResize, 160);
	}
	function checkScroll(){
		view.scrollTop()>100 ? showReturnTop() : hideReturnTop();
	}
	function showReturnTop(){
		quickPanel.addClass('quick_links_allow_gotop');
	}
	function hideReturnTop(){
		quickPanel.removeClass('quick_links_allow_gotop');
	}
	view.bind('scroll.go_top', resizeHandler).bind('resize.quick_links', scrollHandler);
	quickLinkCollapsed && quickShell.addClass('quick_links_min');
	resizeHandler();
	scrollHandler();
});