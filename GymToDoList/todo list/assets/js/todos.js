//check off by clicking 
// $("li").click(function(){
 $("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click",".cancel",function(event){
	event.stopPropagation();
	//prevent trigger bubbling
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})

$("input[type='text']").keypress(function(event){
	if(event.which == 13){ //index for key enter 
	var newText = $(this).val(); //getter 
	$(this).val(""); //setter
	//create class = "cancel" in that span
	$("ul").append("<li><span class=\"cancel\"><i class='fas fa-trash-alt'></i>  </span>" + newText + "</li>")
	} 
})


$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
})