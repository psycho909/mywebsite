define(['jquery','jquery.waypoints'],function($,waypoint){
    var page2=function(){
        $('.page2 .title').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        }),$('.page2 .role-a').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        }),$('.page2 .role-b').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    };
    var page3=function(){
        $('.page3 .title').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        }),$('.page3 .role-a').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        }),$('.page3 .role-b').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        })
    };
    var page4=function(){
        $('.page4 .title').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('active')
            },
            offset:'50%'
        }),$('.page4 .reserve-bounce-box .bounce').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('shake')
            },
            offset:'50%'
        }),$('.page4 .fb-bounce-box .bounce').waypoint({
            handler: function(direction) {
                var b=$(this.element);
                b.addClass('shake')
            },
            offset:'80%'
        })
    }
    page2();
    page3();
    page4();
})