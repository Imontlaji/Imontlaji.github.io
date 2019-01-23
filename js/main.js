"use strict";
var mode,onClick,onHover = 0;
$(window).scroll(function () {setSize(0);});
$(window).resize(function () {setSize(1);});

function setBg(x) {
    $("body").removeClass('bgNormalX');
    $("body").removeClass('bgNormalY');
    $("body").removeClass('bgFullX');
    $("body").removeClass('bgFullY');
    if (x === 1) {
        $("body").addClass('bgNormalY');
        mode = 1;
    }
    if (x === 2) {
        $("body").addClass('bgNormalX');
        mode = 2;
    }
    if (x === 3) {
        $("body").addClass('bgFullY');
        mode = 0;
    }
    if (x === 4) {
        $("body").addClass('bgFullX');
        mode = 0;
    }

}

function setSize(d) {
    if ($(window).width() / $(window).height() < 1.983193277) {
        if (d === 0) {
            if (mode !== 1) {
                setBg(1);
            }
        } else {
            setBg(1);
        }
        if ($(window).scrollTop() === 0) {
            setBg(3);
        }
    } else {
        if (d === 0) {
            if (mode !== 2) {
                setBg(2);
            }
        } else {
            setBg(2);
        }
        if ($(window).scrollTop() === 0) {
            setBg(4);
        }
    }
    if ($(window).width() > 800) {
        $(".embedTech").css("display", "block");
        $(".tech").css("width", "calc(100% - 500px)");
    } else {
        $(".embedTech").css("display", "none");
        $(".tech").css("width", "calc(100% - 200px)");
    }
}
setSize();

function newSet() {
    var q = 0;
    var B = $("#roll .col4").length;
    while (q !== B) {
        q = q + 1;
        var $nli = $('<li class="choseBtn" id="btn' + q + '" onClick="btnClick(' + q + ')" onMouseOut="setColorOut(' + q + ')" onMouseOver="setColorIn(' + q + ')"></li>');
        $("#list").append($nli);
    }
}
newSet();

function btnClick(x) {
    onClick = x;
    var i = 0;
    var L = $("#roll .col4").length;
    while (i !== L) {
        i = i + 1;
        if (i !== x) {
            $("#btn" + i).css("color", "white");
            $("#roll").find(".col4").eq(i - 1).css("opacity", "0");
        } else {
            $("#btn" + i).css("color", "rgb(53,103,212)");
            $("#roll").find(".col4").eq(i - 1).css("opacity", "1");
        }
        $(".col5").css("top", (x - 1) * 334 * -1 + "px");
    }
}
btnClick(1);

function setDelay(x,colId) {
    if (x < 1) {return;}
    var i = 0;
    while (i !== x) {
        $(colId).find(".aboutText").eq(i).css("animation-delay", (i * 0.1) + 0.25 + "s");
        i = i + 1;
    }
}
setDelay(0,"none");

function newEffect() {
    var L = $("#Thanks .aboutText").length;
    setDelay(L,"#Thanks");
    L = $("#Update .aboutText").length;
    setDelay(L,"#Update");
}
newEffect();

function setColorIn(x) {
    if (x > 0) {if (x !== onClick) {$("#btn" + x).css("color", "rgb(125,155,223)");onHover = 1;}}
}
setColorIn(0);

function setColorOut(x) {
    if (x > 0) {if (x !== onClick) {$("#btn" + x).css("color", "white");onHover = 0;}}
}
setColorOut(0);

function autoRoll(x) {
    if (x!==0) {
        if (onHover !== 1) {
            if ($("#roll .col4").length < onClick+1) {
                btnClick(1);
            } else {
                btnClick(onClick + 1);
            }
            
        }
    }
    setTimeout(function() {autoRoll(1);},7500);
}
autoRoll(0);