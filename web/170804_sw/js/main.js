require.config({
    baseUrl: "./js",
    shim:{
        "jquery.waypoints":{
            deps:['jquery'],
            exports:"waypoint"
        }
    },
    paths: {
        "jquery": "./lib/jquery-3.1.1.min",
        "jquery.waypoints":"./lib/jquery.waypoints.min"
    }
});
require(["jquery","jquery.waypoints","waypoint_user"], function ($,waypoint) {
    var sectionArr=[];
    $('.section').each(function(i,v){
        sectionArr.push(v);
    })
    // $('#select-phone').change(function(){
    //     var p=$(this).val();
    //     $('#phone').val(p)
    // })
    $(window).scroll(function(){
        var page2Top=$(sectionArr[1]).offset().top;
        var h=($(window).height()/2)-99-30;
        var scrollTop =$(window).scrollTop();
        $(".left-menu").stop();
        var scrollTop2 = scrollTop - $(".left-menu").position().top+h;

        if(scrollTop>=$(sectionArr[1]).offset().top){
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
        for(let i=0;i<sectionArr.length;i++){
            if(scrollTop+200 >= $(sectionArr[i]).offset().top){
                $(".scroll").eq(i-1).addClass('active');
                $(".scroll").not($(".scroll").eq(i-1)).removeClass('active');
            }
        }
    });
    $('.scroll').on('click',function(){
        var _index=$(this).index()+1;
        $('html,body').animate({
            scrollTop:$(sectionArr[_index]).offset().top
        },500)
        console.log(_index)
    })
    $('.top').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600)
    })
    var i=0;
    var deg=0;
    setInterval(function(){
        i++;
        deg=i%2?4:-4;
        $('.ready').css('transform','rotate('+deg+'deg)')
    },500)
});