$(function(){
    var page1=function(){
        $('.role-raccoon,.role-light').waypoint({
            handler:function(direction){
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    }
    var page2=function(){
        $('.role-stella').waypoint({
            handler:function(direction){
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    }
    var page3=function(){
        $('.role-haru').waypoint({
            handler:function(direction){
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    }
    var page4=function(){
        $('.role-lily').waypoint({
            handler:function(direction){
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    }
    page1();
    page2()
    page3()
    page4()
    $('.page1-a-box').addClass('pages-content');
    $('.scroll-bottom').on('click',function(){
        var top=$('.pages-content').offset().top;
        $('body,html').animate({
            scrollTop:top-48
        },600)
    })
    setTimeout(function(){
        $('.boss,.hero,.badge').addClass('active')
    },1000)
})
