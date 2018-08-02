$(document).ready(function () {
    var tel = $('#tel');
    $(document).on('scroll', function () {
        if ($('.footer').offset().top - $(window).height() < $(window).scrollTop()) {
            $('.tel').css('bottom', $(window).scrollTop() + $(window).height() - $('.footer').offset().top);
        }
        else {
            $('.tel').css('bottom', '0');
        }
        var position = $(window).scrollTop();
        var block_position = $('#box1').offset().top;
        if (position > block_position) {
            tel.addClass('fixed');
        }
        else {
            tel.removeClass('fixed');
        }
    });
    $(function () {
        $('.input--tel').mask('+7(999)999-99-99');
        $('.input--tel').on('focus', function () {
            if ($(this).val().length === 0) {
                $(this).val('+7(');
            }
        });
        $('.input--tel').on('focusout', function () {
            if ($(this).val().length <= 4) {
                $(this).val('');
            }
        });
        $('.input--tel').keydown(function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });
});
$('.get__item').click(function () {
    var but = $(this);
    var type = but.find('h4').html();
    but.parent().parent().find('.get-form').data('meta', type);
    $('.get__item.active').removeClass('active');
    $(this).addClass('active');
    $('.get__img').addClass('scale-zero');
    $('.get__text').addClass('scale-text');
    setTimeout(function () {
        $('.get__img').attr('src', but.data('url'));
        $('.get__text').html(but.data('text'));
        $('.get__img').removeClass('scale-zero');
        $('.get__text').removeClass('scale-text');
    }, 170);
});
$('.header a').click(function (event) {
    if ($(this).attr('href').substring(0, 1) == '#') {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    }
});
$('.get-form').click(function () {
    $('.model-enter__input-meta').val($(this).data('meta'));
    $('.modal-enter').show();
});
$('.modal-enter .closed').click(function () {
    $('.modal-enter').hide();
});
//forms
$('.sent__form').on('submit', function (e) {
    e.preventDefault();
    var data_form = $(this).serialize();
    console.log(data_form);
    var phone = $(this).find('.input--tel');
    if (phone.val().length != 16) {
        alert('Слишком короткий номер');
    }
    else {
        var needname = $('.saleform').find('.name_hid').val();
        $.ajax({
            type: "POST"
            , url: "/senda.php"
            , data: data_form
            , success: function () {
                
            }
            , error: function () {
                
            }
        });
    }
    return false;
});

//video
$('.review__people').click(function(){
    $('.review__people.active').removeClass('active');
    $(this).addClass('active');
    $('.review__youtube iframe').attr('src', $(this).data('video'));
});