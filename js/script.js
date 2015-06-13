//Page and resources loaded.
$(window).bind("load", function() {

});

$(window).on('hashchange', function() {
	checkHash();
});

$(window).ready(function() {
	checkHash();
});

// $(window).scroll(function() {
// 	console.log(window.);

// });

function checkHash(){
	var hash = window.location.hash+'';
	hash = hash.replace("#","");
	setActiveTab(hash);
}


function setActiveTab(hash){
	$("header-bar .button").removeClass("current");
	if(hash == ""){
		$("header-bar .button.top").removeClass("current");
	} else {
		$("header-bar .button."+hash).addClass("current");
	}
}

$(window).scroll(function() {
	var pageFromTop = $(this).scrollTop();
	// console.log();

	var anchors = $(".anchor");
	var active = "top";
	for(var i=0; i < anchors.length; i++){
		var thisFromTop = parseInt($( anchors[i] ).offset().top);
		var thisIdName  = $( anchors[i] ).attr("name");

		// console.log( pageFromTop + "  >=  " +thisFromTop );
		// console.log( thisIdName );
		if(pageFromTop >= thisFromTop){
			active = thisIdName;
		}
	}
	// console.log( active );
	// window.location.hash = active;
	setActiveTab(active);
});




