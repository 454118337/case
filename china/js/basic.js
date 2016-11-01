/**
 * Created by Administrator on 15-4-30.
 * author@liuhuawei
 */
$(document).ready(function(){
   $(".sign_tab li").on("click",function(){
       $(this).addClass("on").siblings().removeClass("on");
       $(".sign_box").hide().eq($(this).index()).show();
   }).eq(0).click();

    $(".course img").hover(function(){
        var pic=$(this).data("pic");
        $(this).data({"pic":$(this).attr("src")}).attr({src:pic});
    },function(){
        var pic=$(this).data("pic");
        $(this).data({"pic":$(this).attr("src")}).attr({src:pic});
    })
});