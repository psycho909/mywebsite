function toShow(){
	var _top=$(document).scrollTop();
	if(_top>500){
		$('#top').addClass('active');
	}else{
		$('#top').removeClass('active');
	}
}
function init(){
	var _top=$(document).scrollTop();
	nTop=$('#bg2').offset().top-($('#bg2').offset().top/4);
	toShow()
	if(nTop<=_top){
		$('#notice').addClass('active');
	}else if(_top == 0){
		$('#notice').removeClass('active');
	}
}
$(function(){
	toShow();
	var nTop;
	init();
	$(window).scroll(function(){
		var _top=$(document).scrollTop();
		nTop=$('#bg2').offset().top-($('#bg2').offset().top/4);
		toShow()
		$(".bgg").each(function(i,v){
			var bggTop=$(v).offset().top;
			if(_top>=bggTop-Math.floor($(document).height()/3)){
				$('.bgg').not($('.bgg').eq(i)).removeClass('active')
				$('.bgg').eq(i).addClass('active');
			}
		})
	})
	$('#top').on('click',function(){
		$('body,html').animate({
			scrollTop:0
		},300)
	})
})