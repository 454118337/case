/**
 * Created by Administrator on 14-9-3.
 */
$(document).ready(function(){
    $(".homeItemLeft li").mouseenter(function(){
        var $index=$(this).index();
       $(this).addClass("here").siblings("li").removeClass("here");
        $(".homeItemRight").eq($index).show().siblings(".homeItemRight").hide();
    }).eq(0).mouseenter();

    $(".homeTeamTitle li").click(function(){
       var  $index=$(this).index();
        $(this).addClass("here").siblings("li").removeClass("here");
        $(".homeTeamInfo").eq($index).show().siblings(".homeTeamInfo").hide();
    }).eq(0).click();
//案例筛选
    $(".homeNewsTitle dl").click(function(){
        $(this).children("dd").slideDown();
        $(this).children("dd").click(function(){
           var $text=$(this).text();
           $(this).siblings("dt").html($text).siblings("dd").slideUp();
            return false;
        });

    });
// 表单下拉
    $(".assess_list input.choose").click(function(){
        $(this).next("ul").stop(true,true).slideDown().children("li").click(function(){
            var txt=$(this).html();
            $(this).parents("ul").slideUp().prev("input").val(txt);
            });

    });
 //表单选择
   $(".assess_column li").click(function(){
      var  index=$(this).index();
       $(this).addClass("on").siblings("li").removeClass("on");
       $(".assess_list").eq(index).show().siblings(".assess_list").hide();
   }).eq(0).click();
//移民申请
   $(".apply_left li").click(function(){
       var index=$(this).index();
       $(this).addClass("on").siblings("li").removeClass("on");
       $(this).parents("ul").siblings(".apply_info").eq(index).show().siblings(".apply_info").hide();
   }).eq(0).click();
//海外生活
    $(".cn_life_bar li").click(function(){
     var index=$(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(this).parents(".homeNewsTitle").siblings(".cn_news_cont").eq(index).show().siblings(".cn_news_cont").hide();
    }).eq(0).click();
//其他国家
    $(".home_nav li.more").click(function(){
       $(this).parents("ul").siblings("ul.more").slideToggle();
    });
//
   $(".pnBtn").click(function(){
       s_here();
   }) ;

});

function s_here(){
    var s_left=Math.ceil(Math.abs($(".tempWrap ul").position().left));
    var s_id=Math.round(Math.abs(s_left/158))-1;
    $(".slider li").eq(s_id).addClass("here").siblings("li").removeClass("here");
}
setInterval(s_here,3000);