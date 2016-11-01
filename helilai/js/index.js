/**
 * Created by Administrator on 14-9-3.
 */
$(function(){
//  二级导航
 $(".nav").mouseenter(function(){
    $(".nav_info").stop(true,true).slideDown(300);
 }).mouseleave(function(){
         $(".nav_info").hide();;
     });
// 首页产品
    $(".home_ser li").click(function(){
        var index=$(this).index();
        $(this).addClass("here").siblings("li").removeClass("here");
        $(".picMarquee-left").eq(index).show().siblings(".picMarquee-left").hide();;
    }).eq(0).click();
//
    $(".cont_left dt.here").nextUntil("dt").show();
//    $(".cont_left dt").click(function(){
//        $(this).addClass("here").siblings("dt").removeClass("here");
//        $(this).siblings("dt").nextUntil("dt").stop(true,true).slideUp();
//        $(this).nextUntil("dt").stop(true,true).slideDown();
//    });

});
