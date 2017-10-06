require.config({
    baseUrl: "./js",
    shim:{
        "vue":{
            exports:"vue"
        },
        "jquery.easing":{
            deps:['jquery'],
            exports:"easing"
        },
        "jquery.fancybox":{
            deps:['jquery'],
            exports:"fancybox"
        },
        "TweenMax":{
            exports:"TweenMax"
        },
        "particlesJS":{
            exports:"particlesJS"
        }
    },
    paths: {
        "vue":"./lib/vue.min",
        "jquery": "./lib/jquery-3.1.1.min",
        "text":"./lib/text",
        "jquery.fancybox":"./plugin/jquery.fancybox.min",
        "jquery.easing":"./plugin/jquery.easing.1.3",
        "particlesJS":"./plugin/particles.min",
        "TweenMax":"./lib/TweenMax"
    }
});
require(["jquery","json/page2_json","json/page3_json","json/page4_json","particle_user","vue","components/pagetemplate","TweenMax","jquery.fancybox","jquery.easing"],
    function ($,page2_json,page3_json,page4_json,particle_user,Vue,pagetemplate,TweenMax,fancybox) {
    var app=new Vue({
        el:'#app',
        components:{
            page2template:pagetemplate.page2template,
            page3template:pagetemplate.page3template,
            page4template:pagetemplate.page4template
        },
        data:{
            triggerBtn:false
        },
        mounted:function(){
            var tl=new TimelineMax();
            var tl2=new TimelineMax();
            tl.to('.video-btn',.6,{
                delay:2,
                opacity:1,
                onComplete:function(){
                    tl.staggerTo('.trigger-btn',.4,{
                        cycle:{
                            x:[0,0,0,0],
                            y:[0,0,0,0],
                            autoAlpha:[1,1,1,1]
                        }
                    },0.4)
                }
            })
            for(var i=0;i<$('.label-btn').length;i++){
                var textLength=$('.label-btn').eq(i).text().length;
                if(textLength>10){
                    $('.label-btn').eq(i).css('font-size','14px')
                }
            }
            setTimeout(function(){
                $('.logo,.limit-bounce,.menu-group').animate({
                    opacity:1
                },1000)
                $('.wrap').prepend('<div id="particles-js"></div>');
                particle_user.particleJS();
            },1000)
        },
        methods:{
            toggleBtn:function(e){
                var _index=$(e.target).index();
                $('.page-group').addClass('active');
                $('.pages').eq(_index).addClass('active').stop().animate({
                    top:'0%'
                },800,'easeInOutBack').siblings().removeClass('active').stop().animate({
                    top:'100%'
                },800,'easeInOutBack',function(){
                    $('.pages').eq(_index).find('.pages-content').eq(0).addClass('active');
                    $('.pages').each(function(i,v){
                        $('.pages').eq(i).find(".label-btn").eq(0).addClass('active').siblings().removeClass('active');
                    })
                });
                $('.pages').eq(_index).find('.pages-content').eq(0).addClass('active');
            }
        }
    })
});