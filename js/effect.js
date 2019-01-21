"use strict";
function setBg(x) {
  if ($(window).scrollTop() !== 0) {
    if (x===1) {$(".down").css("background-size","auto 100%");}
    if (x===2) {$(".down").css("background-size","100% auto");}
  } else {
    if (x===1) {$(".down").css("background-size","auto 115%");}
    if (x===2) {$(".down").css("background-size","115% auto");}
  }
}
function setSize() {
  if ($(window).width() > 800) {
    setBg(2);
    $(".embedTech").css("display","block");
    $(".tech").css("width","calc(100% - 500px)");
  } else {
    setBg(1);
    $(".embedTech").css("display","none");
    $(".tech").css("width","calc(100% - 200px)");
  }
}
setSize();
$(window).scroll(function () {setSize();});
$(window).resize(function () {setSize();});
function newSet() {
    var q=0;
    var B=$("#roll .col4").length;
    while (q !== B) {
        q=q+1;
        var $nli=$('<li class="choseBtn" id="btn'+q+'" onClick="btnClick('+q+')"></li>');
        $("#list").append($nli);
    }
}
newSet();
function btnClick(x) {
    var i=0;
    var L=$("#roll .col4").length;
    while (i !== L) {
        i=i+1;
        if (i !== x) {
            $("#btn" + i).css("color","white");
            $("#roll").find(".col4").eq(i-1).css("opacity","0");
        } else {
            $("#btn" + i).css("color","rgb(53,103,212)");
            $("#roll").find(".col4").eq(i-1).css("opacity","1");
        }
        $(".col5").css("top",(x-1)*334*-1+"px");
    }
}
btnClick(1);
function newEffect() {
    var q=0;
    var B=$("#Thanks .aboutText").length;
    while (q !== B) {
        $("#Thanks").find(".aboutText").eq(q).css("animation-delay",(q*0.1)+0.5+"s");
        q=q+1;
    }
    q=0;
    B=$("#Update .aboutText").length;
    while (q !== B) {
        $("#Update").find(".aboutText").eq(q).css("animation-delay",(q*0.1)+0.5+"s");
        q=q+1;
    }
}
newEffect();