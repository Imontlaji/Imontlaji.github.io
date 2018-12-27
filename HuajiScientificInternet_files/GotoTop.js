var moving = 0;
var header = document.getElementById("#header");
var toptitle = document.getElementById("#top");
var totop = document.getElementById("#totop");
var a, roll;
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    console.log();
    if (document.body.clientWidth > 1300) {
        roll = document.body.scrollTop || document.documentElement.scrollTop;
        a = Math.max(parseInt(roll) / (header.offsetTop + header.clientHeight + 200), 0.8);
        toptitle.style.opacity = a;
        if (moving === 0) {
            if (roll > header.offsetTop + header.clientHeight || roll > header.offsetTop + header.clientHeight) {
                $(".smallbutton").fadeIn(500);
            } else {
                $(".smallbutton").fadeOut(500);
            }
        } else {
            $(".smallbutton").fadeOut(500);
        }
    } else {
        totop.style.display = "none";
    }
}

// 点击按钮，返回顶部
function gotoTop(acceleration, stime) {
    acceleration = acceleration || 0.1;
    stime = stime || 10;
    var x1, y1, x2, y2, x3, y3;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;
    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));
    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
    var speeding = 1 + acceleration;
    window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
    // 如果距离不为零, 继续调用函数
    if (x > 0 || y > 0) {
        moving = 1;
        var run = "gotoTop(" + acceleration + ", " + stime + ")";
        window.setTimeout(run, stime);
    } else {
        moving = 0;
    }
}

//function gotoElement(id,acceleration,stime) {
//   acceleration = acceleration || 0.1;
//   stime = stime || 10;
//  var y1 = $(id).offset().top;
//  var x1,x2,y2;
//   x2 = window.scrollX || 0;
//   y2 = window.scrollY || 0;
// 滚动条到页面顶部的水平距离
//   var x = Math.max(x1, x2);
// 滚动条到页面顶部的垂直距离
//   var y = Math.max(y1, y2);
// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
//   var speeding = 1 + acceleration;
//   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
// 如果距离不为零, 继续调用函数
//   if(y === y1) {
//       var run = "gotoTop("+ id +"," + acceleration + ", " + stime + ")";
//       window.setTimeout(run, stime);
//   }
//}
