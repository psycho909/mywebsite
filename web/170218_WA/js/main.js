var a=true;
var num=0;
$(function () {
	var srcName=location.pathname.split('-')[1].split('.')[0];
	var $getItem=$('.getItem');
	var $rotate=$('.rotate');
	$('.rotate').attr('src','images/rotategame/'+srcName+'game.png')
	$('.getGame img').attr('src','images/card/'+srcName.toUpperCase()+'.png')
	$('.btnStart').click(function(){
		if(a){
			rotation();
			$(this).text('停止');
			$getItem.removeClass('active');
			$('.bdarkB,.sdark').addClass('active');
			a=false;
		}else{
			num++;
			$rotate.stopRotate();
			$(this).text('再次遊玩');
			$getItem.addClass('active');
			$('.bdarkB,.sdark').removeClass('active');
			a=true;
			// if(num<10){
			// 	num='000'+num;
			// }else if(num<100){
			// 	num='00'+num;
			// }
			console.log(num)
			// $('.numBox span').text(num)
		}
	})
	$('.close').on('click',function(){
		$getItem.removeClass('active');
	})
});