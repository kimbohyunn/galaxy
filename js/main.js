$(function(){
    //header
    $('header .menu_area a').mouseenter(function(){
        $(this).next().stop().fadeIn('fast');

        $(this).parent().mouseleave(function(){
        $(this).find('.subnav').stop().fadeOut('fast');
        });
    });
   

    //header_top
    $(window).scroll(function(){
        curr = $(window).scrollTop();

        if(curr > 10){
            $('.header_top').addClass('on');
        }else{
            $('.header_top').removeClass('on');
        }
    })

    //menu_open
    $('header .header_left .menu').click(function(e){
        e.preventDefault();
        $('.menu_open').toggleClass('on');
        $('body').toggleClass('scroll_h');
        $('.header_left').toggleClass('on');
    });
    

    /* $('.menu_open').click(function(e) { 
        if(!$(e.target).hasClass('area')) {
              
        $('.menu_open').removeClass('on');
        $('body').removeClass('scroll_h');
    }
    }); */

    //tb accodian
    $('.menu_open > ul > li > a').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.wrap').children('ul').outerHeight();

        if($(this).siblings('.wrap').height() > 0){
            $('.menu_open > ul .wrap').stop().animate({height:0},100);
            $('.menu_open > ul > li > a').removeClass('on');
        }else{
            $('.menu_open > ul .wrap').stop().animate({height:0},200);
            $(this).siblings('.wrap').animate({height:h},300);
            $('.menu_open > ul > li > a').removeClass('on');
            $(this).addClass('on')
        }
    });

    //main_vis
    var main_vis = new Swiper(".sc01", {
        navigation: {
          nextEl: ".sc01 .btn .prev",
          prevEl: ".sc01 .btn .next",
        },
        loop: true,
        autoplay: {
            delay: 4000,
        },
      });

      main_vis.on("slideChangeTransitionStart",function(){
        bar()
      })
      

      motion = gsap.to('.bar span',{
        width:'100%',
        duration:5,
        ease:'linear',
        
        onComplete:function(){
          main_vis.slideNext();
          // $('.bar span').css({width:0})
        }
      })
      motion.pause()

      function bar(){
        motion.restart();
      }
      bar();

    //sc03_line
    gsap.from('.sc03_line .line',{
        scrollTrigger:{
            trigger:'.sc03_line',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:1,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })

    //sc05_kitsune
    var swiper = new Swiper(".sc05", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".sc05 .swiper-pagination",
          clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
          767: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1282: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1283: {
            slidesPerView: 2.5,
            spaceBetween: 160,
          },
        },
    });

    //sc06
    var sc06 = new Swiper(".sc06", {
        slidesPerView:2,
        spaceBetween: 200,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1282: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1283: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
        },
      });

    //text
    $('.txt_motion').each(function(index, item){ 
        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 80%", 
                end:"bottom top",
                //markers:true
            },
            duration:0.4,
            yPercent:60,
            opacity:0,
            stagger:0.1,
        });
    });

    //footer
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc02_all').offset().top;

        if(curr >= target){
            $('footer .scroll_top').addClass('on');
        }else{
            $('footer .scroll_top').removeClass('on');
        }
    });

    $('footer .scroll_top img').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);
    })


});