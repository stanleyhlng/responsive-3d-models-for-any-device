$.resolution = "";

$(window).scroll(function(e) {
	$el = $('.fixedElement');
	if ($(this).width() <= 760) {
		return;
	}
	if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed') {
		$('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
	}
});


$(window).resize(function() {
	var resolution = "";
	if ($(this).width() <= 760) {
		resolution = "low";
	}
	else if ($(this).width() <= 1140) {
		resolution = "medium";
	}
	else {
		resolution = "high";
	}
		
	if ($.resolution != resolution) { 
		var userAgent = navigator.userAgent.toLowerCase();
		if (/chrome/.test(userAgent) || /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )) {
			setCanvasVisibility(true);
			loadModel(getModelFile(resolution));
		}
		else {
			setCanvasVisibility(false);
		}
	
		setResolution(resolution);
	}
});


$(document).ready(function() {
	var resolution = "";
	
	if ($(this).width() <= 760) {
		resolution = "low";
	}
	else if ($(this).width() <= 1140) {
		resolution = "medium";
	}
	else {
		resolution = "high";
	}
	
	if ($.resolution != resolution) { 
		var userAgent = navigator.userAgent.toLowerCase();
		console.log(userAgent);
		if (/chrome/.test(userAgent) || /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )) {
			console.log("go-ahead");
			setCanvasVisibility(true);
			webGLStart(resolution);
		}
		else {
			console.log("nth-happen");
			setCanvasVisibility(false);
		}
	
		setResolution(resolution);	
	}
});


function setCanvasVisibility(visibility) {
	if (visibility) {
		$('#perspective canvas').css('display', 'block');
		$('#perspective img').css('display', 'none');
	}
	else {
		$('#perspective canvas').css('display', 'none');
		$('#perspective img').css('display', 'block');
	}
}

function setResolution(resolution) {
	if (resolution == "low") {
		$('#top    img').attr('src', 'img/bun_res4_500_top.png');
		$('#bottom img').attr('src', 'img/bun_res4_500_bottom.png');
		$('#left   img').attr('src', 'img/bun_res4_500_left.png');
		$('#right  img').attr('src', 'img/bun_res4_500_right.png');
		$('#front  img').attr('src', 'img/bun_res4_500_front.png');
		$('#back   img').attr('src', 'img/bun_res4_500_back.png');	
	}
	else if (resolution == "medium") {
		$('#top    img').attr('src', 'img/bun_res3_500_top.png');
		$('#bottom img').attr('src', 'img/bun_res3_500_bottom.png');
		$('#left   img').attr('src', 'img/bun_res3_500_left.png');
		$('#right  img').attr('src', 'img/bun_res3_500_right.png');
		$('#front  img').attr('src', 'img/bun_res3_500_front.png');
		$('#back   img').attr('src', 'img/bun_res3_500_back.png');	
	}
	else if (resolution == "high") {
		$('#top    img').attr('src', 'img/bun_res2_500_top.png');
		$('#bottom img').attr('src', 'img/bun_res2_500_bottom.png');
		$('#left   img').attr('src', 'img/bun_res2_500_left.png');
		$('#right  img').attr('src', 'img/bun_res2_500_right.png');
		$('#front  img').attr('src', 'img/bun_res2_500_front.png');
		$('#back   img').attr('src', 'img/bun_res2_500_back.png');	
	}
	$.resolution = resolution;
};