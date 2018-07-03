$(document).ready(function () {


    $('.wrap').fullpage({

        navigation: true,
        'navigationTooltips': ['SETP CREW', 'ABOUT', 'MODELS', 'SEELS', 'TRAFFIC'],
        verticalCentered: true,
        loopTop: true,
        loopBottom: true,

    });


    create_random_string($(".hashbar a"));

    // $(".pic").attr("width","500px");

    $(".pic").each(function () {
        var data_image = $(this).data("image");
        $(this).css("background", "url(" + data_image + ")  no-repeat center center / cover");
    });


    $('.pic').click(
        function () {
            $(".leftdoor").addClass("leftdooropen");
            $(".rightdoor").addClass("rightdooropen");
            var model_name = $(this).data("name");
            var model_about = $(this).data("about");
            $(".modelname").text(model_name);
            $(".modelabout").text(model_about);

            var img_src = "url(" + ($(this).attr("data-image") + ") center center / cover");
            $(".leftdoor").css("background", img_src);

            modelact($(this));

        }
    );

    $('.iclose').click(
        function () {

            $(".leftdoor").removeClass("leftdooropen");
            $(".rightdoor").removeClass("rightdooropen");

        }
    );

    $('.navbutton').click(
        function () {
            if ($(window).width() > 767) {
                $(".navbox").addClass("navboxopen");
                $(".navbutton").addClass("navbuttonclose");
            }
            else {
                $(".navbox").addClass("element-top-zero");
                $(".navbutton").addClass("element-close");
            }
        }
    );

    $('.fa-angle-right').click(
        function () {
            $(".navbox").removeClass("navboxopen");
            $(".navbutton").removeClass("navbuttonclose");

        }
    );

    $('.fa-angle-up').click(
        function () {
            $(".navbox").removeClass("element-top-zero");
            $(".navbutton").removeClass("element-close");
        }
    );

    $(".arrow_r").click(
        function () {
            var slider_window_left = parseInt($(".slider_window").css("left"));
            var window_width = parseInt($(window).width());
            var pageNum = Math.round(slider_window_left / window_width);
            pageNum--;
            // console.log(pageNum);
            changePage(pageNum);

        }
    );
   
    $(".arrow_l").click(
        function () {
            var slider_window_left = parseInt($(".slider_window").css("left"));
            var window_width = parseInt($(window).width());
            var pageNum = Math.round(slider_window_left / window_width);
            pageNum++;
            //console.log(pageNum);
            changePage(pageNum);
        }
    );


    $(".logo1").mouseover(
        function () {
            // console.log("aa");
            var animatedata = "jello";

            $(".logo1").addClass(animatedata).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(".logo1").removeClass(animatedata);
            });
        }
    );
    
    $(".slider4_button li").click(function(){
        var sliderNum = $(this).index();
        sliderMove(sliderNum);
    });
    //$(".slider_button li").eq(sliderNum).css("background", "#fff").siblings().css("background", "transparent");

});

function changePage(nums) {
    if (nums < (-4)) {
        nums = 0;
    }
    if (nums > 0) {
        nums = (-4);
    }

    $(".slider_window").css("left", nums + "00%");
}


function hashbarran(fornum) {
    var random_chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

    //console.log(random_chars.slice(random_nums,random_nums+1));
    random_string = '';
    for (i = 0; i < fornum; i++) {
        var random_nums = Math.floor((Math.random() * 48) + 1);
        random_string += random_chars.slice(random_nums, random_nums + 1);
    }

    return random_string;
}

function create_random_string(random_dom) {

    var hashbar_a = random_dom;

    for (i = 0; i < hashbar_a.length; i++) {
        (function (i) {
            setTimeout(function () {
                var endValue = hashbar_a.eq(i).attr("endvalue");
                // console.log(endValue);//最後的值;
                var changeValue = '';

                for (j = 0; j <= endValue.length + 1; j++) {

                    (function (j) {
                        setTimeout(function () {

                            changeValue = endValue.substring(0, j) + hashbarran(endValue.length - j);

                            if (j == endValue.length + 1) {
                                hashbar_a.eq(i).text(endValue);
                            }
                            else {
                                hashbar_a.eq(i).text(changeValue);
                            }

                        }, (j + 1) * 100);

                    })(j);

                }

            }, (i + 1) * 450);

        })(i);
    }
}

function modelact(act) {
    $(".modelact").empty();
    var all_act = { "hat": "", "clothes": "", "pants": "", "shose": "", "others": "" };
    all_act["hat"] = act.data("hat");
    all_act["clothes"] = act.data("clothes");
    all_act["pants"] = act.data("pants");
    all_act["shose"] = act.data("shose");
    all_act["others"] = act.data("others");
    for (prop in all_act) {
        if (all_act[prop] == undefined || all_act[prop] == '') {
            
        }
        else {
            $(".modelact").append("<li><i class='fas fa-check'></i><a href='sells.html'>"+all_act[prop]+"</a></li>");
        }
    }

}

function sliderMove(pages){
    $(".slider4_button li").removeClass("active4");
    $(".slider4_button li").eq(pages).addClass("active4");
    $(".slider4_window").css("left","-"+pages+"00%");
}
