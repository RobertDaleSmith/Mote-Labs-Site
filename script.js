$(window).resize(function() {
    makeResponsive();
});

$(window).scroll(function () {
    scrollChange();
});

var scrollChange = function () { 
    var home_anchor = $("#" + "top").offset().top - 20,
        apps_anchor = $("#" + "our-apps").offset().top - 20,
        team_anchor = $("#" + "team").offset().top - 20,
        from_top_sc = $(window).scrollTop();

    if (from_top_sc < apps_anchor) {
        $("#header_link_home").css('border-bottom-color', '#fafafa');
        $("#header_link_apps").css('border-bottom-color', 'transparent');
        $("#header_link_team").css('border-bottom-color', 'transparent');
    } else if (from_top_sc >= apps_anchor && from_top_sc < team_anchor) {
        $("#header_link_home").css('border-bottom-color', 'transparent');
        $("#header_link_apps").css('border-bottom-color', '#fafafa');
        $("#header_link_team").css('border-bottom-color', 'transparent');
    } else if (from_top_sc >= team_anchor) {
        $("#header_link_home").css('border-bottom-color', 'transparent');
        $("#header_link_apps").css('border-bottom-color', 'transparent');
        $("#header_link_team").css('border-bottom-color', '#fafafa');
    }
    
}

var bodyWidth  = $(window).width();
var bodyHeight = $(window).height();

var makeResponsive = function () {
    bodyWidth = $(window).width();
    bodyHeight = $(window).height();


    if (bodyWidth <= 400) {
        $('#chromemote_img').css('width', 280);
        $('#chromemote_img').css('height', 151);
        $('#flinger_img').css('width', 280);
        $('#flinger_img').css('height', 151);
        $('#our_vision').css('width', 320);
        $('#our_vision').css('height', 290);


    } else {
        $('#chromemote_img').css('width', 320);
        $('#chromemote_img').css('height', 172);
        $('#flinger_img').css('width', 320);
        $('#flinger_img').css('height', 172);
        $('#our_vision').css('width', '100%');
        $('#our_vision').css('height', 220);

    }

    if (bodyWidth <= 480) {
        $('#logo_image').css('width', 280);
        // $('#logo_image').css('height', 51);
        $('#gap_div').css('width', '100%');
        $('#gap_div').css('height', 100);

    } else {
        $('#gap_div').css('width', '100%');
        $('#gap_div').css('height', 300);
        $('#logo_image').css('width', 437);
        // $('#logo_image').css('height', 80);
    }

    if (bodyWidth <= 960) {
        $('.line').css('display', 'none');

    } else {
        $('.line').css('display', 'inline-block');
    }

    var homeDivHeight = bodyHeight
    if (bodyHeight < 678) homeDivHeight = 678;
    $('#home_div').css('height', homeDivHeight);


    if (bodyWidth <= 590) {
        $('#footer_made_in_tx').css('display', 'none');
    } else { 
        $('#footer_made_in_tx').css('display', 'inline-block');
    }
}

function scrollToAnchor(aid){
    var aTag = $("#"+ aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

window.onload = function() {
    
    $("#header_link_home").click(function() { scrollToAnchor('top');      });
    $("#header_link_apps").click(function() { scrollToAnchor('our-apps'); });
    $("#header_link_team").click(function() { scrollToAnchor('team');     });

};

