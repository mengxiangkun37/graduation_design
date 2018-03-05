$(".create").on("mouseover",function(){
    $(".banner-nav").addClass("show");
})
$(".cata").on("mouseover",function(){
    // $(".white").addClass("none");
    $(this).children("div.access").removeClass("none").addClass("show");
})
$(".cata").on('mouseout',function(){
    // console.log($(this .white));
    $(this).children("div.access").removeClass("show").addClass("none");
})
$(function () {
    $('.r').click(function () {
        $(".banner .a").animate({marginLeft:"-1349px"},5, function () {
            $(".banner .a>li").eq(0).appendTo($(".banner .a"));
            $(".banner .a").css('marginLeft','0px');
        });
    })
    $('.l').click(function () {
        $(".banner .a").css('marginLeft','-1349px');
        $(".banner .a>li").eq(3).prependTo($(".banner .a"));
        $(".banner .a").animate({marginLeft:"0px"},5);
    })
})