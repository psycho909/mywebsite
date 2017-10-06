// $(function(){
//     $('.move-box').mousemove(function(e){
//         var currsorX=e.clientX-$(this).offset().left;
//         var currsorY=e.clientY-$(this).offset().top;
//         var i=1;
//         $(this).find('.move').each(function(){
//             var imgCenterX=$(this).offset().left+($(this).width()/2);
//             var imgCenterY=$(this).offset().top+($(this).height()/2);
//             var distX=(currsorX-imgCenterX)*i/50;
//             var distY=(currsorY-imgCenterY)*i/50;
//             $(this).css({
//                 'transform':'translate3d('+distX+'px,'+distY+'px,0)'
//             })
//             i=i%2?i*1.8:i*-1.8;
//         })
//     })
// })
var moveBox=document.getElementById('move-box');
var moveBoxBounding=moveBox.getBoundingClientRect();
window.addEventListener('load',function(){
    moveBox.addEventListener('mousemove',function(e){
        var currsorX=e.clientX-moveBoxBounding.left;
        var currsorY=e.clientY-moveBoxBounding.top;
        var num=1;
        var leng=document.querySelectorAll('.move').length;
        var move=document.querySelectorAll('.move');
        for(var i=0;i<leng;i++){
            var imgCenterX=move[i].offsetLeft+(move[i].offsetWidth/2)
            var imgCenterY=move[i].offsetTop+(move[i].offsetHeight/2)
            var distX=(currsorX-imgCenterX)*num/50;
            var distY=(currsorY-imgCenterY)*num/50;
            move[i].style.transform='translate3d('+distX+'px,'+distY+'px,0)'
            num=(i+1)%2?(i+1)*1.8:(i+1)*-1.8;
			console.log(num)
        }
		
    })
})