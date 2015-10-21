$(document).ready(function(){
   
   $(".goal").hover(
   	function(){
   	   $(this).stop().animate({"opacity":"0.8"},"fast");},
   	function(){
       $(this).stop().animate({"opacity":"1"},"fast");
   	});

   $(".standard").hover(
   	function(){
   	    $(this).find(".caption").show();
    },
    function(){
    	$(this).find(".caption").hide();
    });

});
