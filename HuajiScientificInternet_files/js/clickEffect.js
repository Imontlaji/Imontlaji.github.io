var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("苟", "利", "国", "家", "生", "死", "以", "岂", "因", "祸", "福", "避", "趋", "之");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 100000000,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": randomclo()
        });
        $("body").append($i);
        $i.animate({
            "top": y - 200,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
    });
});
//随机颜色
var randomclo = function randomclo() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
