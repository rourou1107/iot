$(function () {
    //监控代码
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1282483122775d0cb73af14995cd133f";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })()

    // 页尾
    var  footerStr = '<div class="container flexStart pt35">\
		<div class="min80 imgWrapper flexCenter">\
			<img src="../images/wxCode.png" alt="" class="wxCode">\
		</div>\
		<div class="tl flexDCenter1 contact1">\
			<p class="t2 mb20">广州佰锐网络科技有限公司</p>\
			<p class="t2">咨询电话：020-8527 6986</p>\
			<p class="t2">商务合作：sale@bairuitech.com</p>\
			<p class="t2"><a href="https://weibo.com/anychat?is_all=1" target="_blank"> 官方微博：www.weibo.com/anychat </a></p>\
			<p class="t2">微信公众号：AnyChat</p>\
		</div>\
		<div class="flexDCenter">\
			<div class="contru1 fl fImg1">\
				<a href="http://wpa.qq.com/msgrd?v=3&uin=3163965249&site=qq&Menu=yes&Service=200&sigT=bc799de13f6b616996ffdda3884f3daf66572104e865057627b2bcdda186f3d2" target="_blank">\
				<i class="ct1"></i>\
				<span> QQ：3163965249</span>\
				</a>\
			</div>\
			<div class="contru1 fl fImg2">\
				<a href="http://bbs.anychat.cn/" target="_blank">\
					<i class="ct1"></i>\
					<span>BBS论坛技术支持</span>\
				</a>\
			</div>\
			<div class="contru1 fl fImg3">\
				<a href="http://sdk.anychat.cn/html/help/help_center.html" target="_blank">\
					<i class="ct1"></i>\
					<span class="helpTxt">帮助中心</span>\
				</a>\
			</div>\
		</div>\
	</div>\
	<div class="container links  flexCenter mt35">\
		<div class="minW150 minW50 br1 tc">\
			<a target="_blank" href="http://www.bairuitech.com">佰锐科技</a>\
		</div>\
		<div class="minW150 minW50 br1 tc">\
			<a target="_blank" href="http://sdk.anychat.cn/html/index.html">  AnyChat SDK </a>\
		</div>\
		<div class=" minW150 minW50 br1 tc"><a target="_blank" href="http://sdk.anychat.cn/html/cluster.html"> AnyChat集群版</a>   </div> \
		<div class=" minW150 minW50 br1 tc">\
        <a target="_blank" href="http://sdk.anychat.cn/html/iot.html"> AnyChat物联网</a>   </div>\
    <div class="minW150 minW50 br1 tc"> \
			<a target="_blank" href="http://cloud.anychat.cn/">AnyChat视频云 </a>\
		</div>\
			       <div class=" minW150 minW50 br1 tc"><a target="_blank" href="http://record.anychat.cn/"> AnyChat双录云</a>   </div> \
		<div class="minW150 minW50 tc"> \
			<a target="_blank" href="http://bbs.anychat.cn/" class="pb16">技术论坛</a>  \
		</div>\
	</div>\
	<div class="rights tc mt12">\
			© 2012–2019 record.anychat.cn 版权所有 ICP证：<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备13022410号-1</a>\
	</div>';
    $('#footers').html(footerStr);

    // 首页公共部分
    var topCommon = '<div class="topWrapper">\
                    <div class="top">\
                        <a target="_blank" href="http://www.bairuitech.com" class="official">佰锐官网</a>\
                        <a target="_blank" href="http://record.anychat.cn/" style="margin-right: 0">AnyChat 双录云</a>\
                        <a target="_blank" href="http://sdk.anychat.cn/html/cluster.html">AnyChat 集群版</a>\
                        <a target="_blank" href="http://cloud.anychat.cn">AnyChat 视频云</a>\
                        <a target="_blank" href="http://sdk.anychat.cn/html/index.html">AnyChat SDK</a>\
                    </div>\
                </div>\
                <div class="brandWrapper">\
                  <div class="brand flexStart">\
                    <div class="imgWrapper">\
                        <a>\
                            <img src="../images/iot/AnyChat_logo.png" alt=""/>\
                        </a>\
                    </div>\
                    <div class="flexStart" style="flex: 1;">\
                        <a href="../html/index.html">首页</a>\
                        <a target="_blank" href="http://sdk.anychat.cn/html/case.html">案例</a>\
                        <a target="_blank" href="http://sdk.anychat.cn/html/aboutUs.html">关于我们</a>\
                        <a target="_blank" href="../html/download.html">下载中心</a>\
                    </div>\
                  </div>\
               </div>'
    $('#main > .banner').prepend(topCommon)

    // 即刻咨询
    var consult = '<p>即刻点击 尊享专属服务</p>\
                        <div>\
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3163965249&site=qq&menu=yes">立即咨询</a>\
                        </div>'
    $('.part6').html(consult)


    $(window).scroll(function () {
        if($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(1500);
        } else {
            $("#back-to-top").fadeOut(1500);
        }
    });
    $("#back-to-top").on('click', function () {
        $('body,html').animate({
            scrollTop:0
        }, 1000);
        return false;
    });
    $("#wx_code a").hover(function(){
        $("#wx_code_show").css("display","block");
    },function(){
        $("#wx_code_show").css("display","none");
    })
    $("#year").text(new Date().getFullYear())
    //在线qq

    $('#contPhone').hover(function(){
        $('#phoneShow').show();
    }, function(){
        $('#phoneShow').hide();
    })
    $('#qqs span').html('QQ： 3163965249');



    //在线客服qq
    var qqSrc = "http://wpa.qq.com/msgrd?v=3&uin=3163965249&site=qq&menu=yes";
    $('#contact a').attr('href', qqSrc);


})
