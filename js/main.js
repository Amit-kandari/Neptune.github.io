const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

//Dashboard

$(document).ready(function(){
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
	  $(this).find('.dropdown').toggleClass('rotate');
	});
});

$(document).ready(function(){
   $('.menu-btn').click(function(){
	   $('.SideBar').addClass('active');
	   $('.menu-btn').css("visibility", "hidden");
   });
});

$(document).ready(function(){
	$('.close-btn').click(function(){
		$('.SideBar').removeClass('active');
		$('.menu-btn').css("visibility", "visible");

	})
 });