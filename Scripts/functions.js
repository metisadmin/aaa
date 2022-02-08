
//$("input[type=text]").on('input', function () {
//    if ($(this).val().length > 80) {
//        alert('you have reached a limit of 80');
//    }
//});

$('.NextDivAction').click(function () {

    //alert('Clicked');
    $(this).parent().slideUp();
    // $(this).parent().next().removeClass('hidden').css({ "border": "1px solid red" }).slideDown();
    $(this).parent().next().removeClass('hidden').slideDown();

});

//$('input').iCheck({
//    checkboxClass: 'icheckbox_flat-purple',
//    radioClass: 'iradio_flat-purple',
//  increaseArea: '20%' // optional
//});




/*----------- Global Functions -------------*/





function ShowPopUp() {
    $('.PopBG').removeClass('hidden');
    $('.PopBG').fadeIn();
    $('.PopUp').animate({ "top": "20%" });
}



$('.ClosePop').click(function () {
    $('.PopUp').animate({ "top": "-100%" });
    $('.PopBG').fadeOut(500);
    setTimeout(function () {
        $('.PopBG').addClass('hidden');
        $(".PopUp>div>div").addClass('hidden');
    }, 1000);

});



/*------------- wizard ----------------*/

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

/*------------------- Document Ready ------------------------*/

$(document).ready(function () {


    $('.UploadButton').click(function () {

        // alert('Test');

        $(this).closest(".UpFile").find(".UpFileInput").click();

    });



    /*------------- wizard ----------------*/

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });


    /*----------------------------------------*/



    //$('.Attachments').slideToggle();

    $('.AttachmentsDiv').click(function () {

        // alert('clicked');
        $('.Attachments').toggleClass('hidden');

    });



    $('.SmartSearch').click(function () {
        //  $(".PopUp>div").html();

        ShowPopUp();
        // $(".SmartSearchPop").removeClass('hidden');
        //$(".PopUp>div").html($(".SmartSearchPop").html());
        $(".SmartSearchPop").appendTo(".PopUp>div");
        $(".PopUp .SmartSearchPop").removeClass('hidden');


    });





    /*-----------------------------------------------------*/



});