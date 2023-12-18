//네비게이션바 width:100%;
$(function(){ 
    $(".b_box").hide()
    $(".first").mouseover(function(){
   $(this).children(".b_box").stop().slideDown();
   $(this).children("a").addClass("on");
    });
    $(".first").mouseout(function(){
      $(this).children(".b_box").stop().slideUp();
    $(this).children("a").removeClass("on");
});

//돋보기 클릭시 통함검색창
$(".search_point").click(function(){ 
    $(this).parent().addClass("w_50");
$(this).children("#search").addClass("d_in");
return false;
});
//스와이퍼 슬라이드 opacity .4
$(".up_down").click(function () {
  $(".hidden_box").stop().slideToggle();
  $("#rotating-image").toggleClass("imgon")
});
//검정색 공지사항 회전 3ea
let $listItems = $(".list li");
function  showSequentially(index) {
  if(index < $listItems.length) {
    $listItems.eq(index).css({
      "opacity" : 1,
      "transform" : "translateY(0)"
    });
setTimeout(function(){
$listItems.eq(index).css({
  "opacity" : 0,
      "transform" : "translateY(-20px)"
});
setTimeout(function(){
  showSequentially(index + 1);
}, 500);
}, 5000);
  }else{
    setTimeout(function(){
      showSequentially(0);
    },1000)
  }
}
showSequentially(0);
//블랜드 컨테인 천천히나오는거
  $(window).scroll(function(){
   let scrollPosition = $(window).scrollTop();
   $(".contain").each(function(){
    let offsetTop = $(this).offset().top;
    let showImagePosition = offsetTop - $(window).height() * 0.5;
    if(scrollPosition >= showImagePosition){
      $(this).addClass("show-image stop-image");
    }else{
      $(this).removeClass("show-image stop-image");
    }
   });
  });

});

