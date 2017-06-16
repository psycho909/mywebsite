// JavaScript Document<script type="text/javascript">
function float(event){
	var offset = 500;
	var scrollTop = $(document).scrollTop();
	var top = offset + $(document).scrollTop() ;
	var right = -50;
	$("#topBtn").animate({top:top + "px", right:right + "px"}, {duration:500, queue:false});
}
$(document).ready(function(){
	float();
	$(window).scroll(float).resize(float);
});