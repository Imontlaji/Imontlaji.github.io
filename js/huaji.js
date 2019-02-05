jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var $i = $("<img/>").attr("src","img/smallHuaji.jpg");
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 16,
            "left": x - 16,
            "position": "absolute",
            "width": "32px",
            "height": "32px"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 200,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
