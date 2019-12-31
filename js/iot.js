$(function(){

    var liObj = [
        {
            text: '支持各类IPC摄像头设备快速接入，具备音视频传输、音视频交互、云端存储、远程视频等能力，配合丰富的AI算法模型，可满足家居安防监控等场景的智能应用需求。',
            img: '../images/iot/par2_img1.png'
        },
        {
            text: '支持各类车载终端的快速搭建，具备音视频传输、音视频交互等能力，配合AI语音控制，可满足智能车载等场景的智能应用需求。',
            img: '../images/iot/par2_img2.jpg'
        },
        {
            text: '支持各类安防系统的快速搭建，具备音视频传输、音视频交互、图像识别、服务器录音录像等能力，满足智能安防场景的全应用需求。',
            img: '../images/iot/par2_img3.jpg'
        },
        {
            text: '支持各类远程教育系统的快速搭建，具备音视频传输、音视频交互、全景录像等能力，提供智慧教育的全场景应用需求。',
            img: '../images/iot/par2_img4.jpg'
        },
        {
            text: '支持远程诊疗、远程医疗培训、医疗观摩、手术示教等场景应用需求，提供音视频传输、音视频交互、服务器录音录像等音视频能力。',
            img: '../images/iot/par2_img5.jpg'
        },
        {
            text: '支持各类视频会议场景的应用需求，提供音视频传输、音视频交互、服务器录音录像、文件传输等能力。',
            img: '../images/iot/par2_img6.jpg'
        }
    ]

    // 当前页面全屏
    var win = $(window)
    var banner = $('.banner')[0]
    // console.log(win.height())
    if(win.width() > 1000){
        banner.style.height = win.height() + 'px';
    }


    window.onresize = function(){
        if(win.width() <= 1000 && win.width() > 500){
            banner.style.height = 58 + 'vw'
        }else if (win.width() > 1000){
            banner.style.height = win.height() + 'px';
        }
    }


    // 滚轮事件
    var height = banner.clientHeight
    $(window).scroll(function () {
        if($(window).scrollTop() > height) {
            $("#topBtn").fadeIn(1500)
        } else {
            $("#topBtn").fadeOut(1500)
        }
    })

   // 鼠标hover事件 part2
   //  var liList = Array.from($('.liList'))
    var $liList = $('.liList')
    var liList = []
    for(var i = 0; i < $liList.length; i++) {
        liList[i] = $liList[i]
    }
    // console.log(liList)
    liList.forEach.call(liList, function(list, index){
        $(list).hover(function (){
            liList.forEach(function (item){
                item.classList.remove('special')
            })
            list.classList.add('special')
                $('#img').fadeIn(2000, function (){
                    $('#img')[0].style.backgroundImage = 'url('+ liObj[index].img + ')'
                })
                $('#info')[0].innerText = liObj[index].text

        }, null)
    })
    // part2的imgWrapper
    var $img = $('#img')
    $img.mouseenter(function(){
        /*background-size: 110% 110%;*/
        /*animation: scaleBG 0.5s;*/
        $(this).css({
            'background-size': '110% 110%',
            'animation': 'scaleBG 0.5s',
            '-webkit-animation': 'scaleBG 0.5s',
            '-o-animation': 'scaleBG 0.5s',
            '-ms-animation': 'scaleBG 0.5s',
        })
    })
    $img.mouseleave(function(){
        /*background-size: 110% 110%;*/
        /*animation: scaleBG 0.5s;*/
        $(this).css({
            'background-size': '100% 100%',
            'animation': 'scaleSM 0.5s',
            '-webkit-animation': 'scaleSM 0.5s',
            '-o-animation': 'scaleSM 0.5s',
            '-ms-animation': 'scaleSM 0.5s',
        })
    })




    // part2解决mac上hover失效
    var divHover = $('.divHover')
    var divHoverSpecial = $('.divHoverSpecial')[0]
    divHover.mouseenter(function(){
        // console.log(this)
        this.classList.add('divHover1')
        if(this !== divHoverSpecial){
            divHoverSpecial.classList.remove('divHover1')
        }
    })
    divHover.mouseleave(function(){
        // console.log(this)
        this.classList.remove('divHover1')
        divHoverSpecial.classList.add('divHover1')
    })


    // part3 hover改变颜色

    var part3Li = $('.part3Li')
    // pc端动画
    if(!(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))){
        part3Li.hover(function () {
            var imgObj = this.children[0].children
            var pObj = this.children[1]
            imgObj[0].src = imgObj[0].src.replace('.png', '_hover.png')
            pObj.style.color = 'rgb(75, 117, 255)'
        }, function(){
            var imgObj = this.children[0].children
            var pObj = this.children[1]
            imgObj[0].src = imgObj[0].src.replace('_hover.png', '.png')
            pObj.style.color = 'black'
        })
    }





// 点击上去按钮
    $('#topBtn').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 1000)
    })


    $('#contPhone').hover(function(){
        $('.phoneShow').show();
        $('.phoneShow1').show();
    }, function(){
        $('.phoneShow').hide();
        $('.phoneShow1').hide();
    })

    $('#ask').hover(function(){
        $('.ask').show();
        $('.ask1').show();
    }, function(){
        $('.ask').hide();
        $('.ask1').hide();
    })

    $('#wxCode').hover(function(){
        $('.code').show();
        $('.code1').show();
    }, function(){
        $('.code').hide();
        $('.code1').hide();
    })

    if(win.width() < 500){
        $('.side')[0].style.display = 'none'
    }


    // 手机端
    var arr = ['One' ,'Two', 'Three', 'Four', 'Five', 'Six']
    arr.forEach(function(item){
        var collapse = '#collapse'+ item
        if(item !== 'One'){
            $(collapse).collapse('hide')
        }
    })

    $('.panel-heading').on('click', function(){
        arr.forEach(function(item){
            var collapse = '#collapse'+ item
            $(collapse).collapse('hide')
        })
    })
    var $panel_collapse = $('.panel-collapse')
    $panel_collapse.on('hide.bs.collapse', function(){
        $(this).prev().find('a').addClass('black')
        $(this).prev().find('i').removeClass('collapse_goto_down')
    })
    $panel_collapse.on('show.bs.collapse', function(){
        $(this).prev().find('a').removeClass('black')
        $(this).prev().find('i').addClass('collapse_goto_down')
    })

    var chooseArr = [
        {
            src: '../images/h5/part5_1.png',
            desc: '100%期货公司、95%证券机构、 超50家银行等共同选择AnyChat'
        }, {
            src: '../images/h5/part5_2.jpg',
            desc: '与国内外3000+客户开展合作，累计服务超过1亿人次选择AnyChat'
        }, {
            src: '../images/h5/part5_3.jpg',
            desc: '14年商用历程，0泄密0投诉，稳定可靠，值得信赖'
        }, {
            src: '../images/h5/part5_4.jpg',
            desc: '音视频独创式融入AI技术，助力企业全方位提升效率选择AnyChat'
        }

    ]
    var $choose_span = Array.from($('.choose-span'))
    $choose_span.forEach(function(item, index){
        $(item).on('click', function(){
            $choose_span.forEach(function(item){
                $(item).removeClass('blue')
            })
            $(item).addClass('blue')
            $('.img-wrapper > img').attr('src', chooseArr[index].src)
            $('.choose-desc').html(chooseArr[index].desc)
        })
    })
    $('.contact_h5').on('click', function(){
        $('.contact_h5').removeClass('blue')
        $(this).addClass('blue')
    })
    var nowYear = (function(){
        return new Date().getFullYear()
    })()
    $('.nowYear').html(nowYear)

    $('#tel').on('click', function(){
        window.location.href = "tel:020-8527 6986";
    })

})
