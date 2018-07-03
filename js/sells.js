$(document).ready(function () {

    $(".logo").click(function () {
        window.location.href = 'index.html';
    })

    $(".icon").draggable({
        containment: ".area1",
        scroll: false,

    });

    // $(window).resize(function() {
    //     var window_width=$(window).width();
    //     console.log(window_width);
    // });

    if ($(window).width() > 768) {

        var random_array = getRandomArray(1, 9, 9);//隨機產生1~9不重複(包含1和9)
        var random_array_num = 0;

        $(".icon").each(function () {
            var css_t = jiugonggeT(random_array[random_array_num]);
            var css_l = jiugonggeL(random_array[random_array_num]);

            $(this).animate({ left: css_l, top: css_t });

            random_array_num++;
        });
    }
    else {
        var random_array = getRandomArray(1, 5, 5);//隨機產生1~5不重複(包含1和5)
        var random_array_num = 0;
        $(".icon").css("display", "none");

        $(".icon").each(function () {
            var dataMobile = $(this).data("mobile");
            if (dataMobile != '' && dataMobile != undefined) {
                $(this).css("display","block");
                var css_t = jiugonggeT(random_array[random_array_num] * 2 - 1);
                var css_l = jiugonggeL(random_array[random_array_num] * 2 - 1);
                $(this).animate({ left: css_l, top: css_t });
                
                random_array_num++;
            }
        });

    }

    $(".icon").mousemove(function () {
        var item_bottom = $(this).data("type");
        $(".item_bottom").empty();
        $(".item_bottom").append("<p>(" + item_bottom + ")</p>");
    });

    $(".icon").click(function () {
        var type = $(this).data("type");
        // console.log(type);
        $(".area2").addClass("active");
        $("nav a").each(function () {
            nav_a_text = $(this).text();
            if (type == nav_a_text) {
                $(this).addClass("active");
            }
        });


    });

    $(".iclose").click(function () {
        $(".area2").removeClass("active");
        $("nav a").removeClass("active");
    });

    $("nav a").click(function () {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

});

function getRandomArray(minNum, maxNum, n) {
    var rdmArray = [n];
    for (var i = 0; i < n; i++) {
        var rdm = 0;
        do {
            var exist = false;
            rdm = Math.floor(minNum + (Math.random() * maxNum));
            if (rdmArray.indexOf(rdm) != -1) exist = true;
        } while (exist);
        rdmArray[i] = rdm;
    }
    return rdmArray;
}

function jiugonggeT(ex) {
    var top = '';
    switch (ex) {
        case 1:
            top = "20%";
            break;
        case 2:
            top = "20%";
            break;
        case 3:
            top = "20%";
            break;
        case 4:
            top = "40%";
            break;
        case 5:
            top = "40%";
            break;
        case 6:
            top = "40%";
            break;
        case 7:
            top = "60%";
            break;
        case 8:
            top = "60%";
            break;
        case 9:
            top = "60%";
            break;
    }
    return top;
}

function jiugonggeL(ex) {
    var left = '';
    switch (ex) {
        case 1:
            left = "20%";
            break;
        case 2:
            left = "40%";
            break;
        case 3:
            left = "60%";
            break;
        case 4:
            left = "20%";
            break;
        case 5:
            left = "40%";
            break;
        case 6:
            left = "60%";
            break;
        case 7:
            left = "20%";
            break;
        case 8:
            left = "40%";
            break;
        case 9:
            left = "60%";
            break;
    }
    return left;
}

