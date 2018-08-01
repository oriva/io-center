$(document).ready(function () {
    var tel = $('#tel');
    $(document).on('scroll', function () {
        if ($('.footer').offset().top - $(window).height()<$(window).scrollTop()) {
            $('.tel').css('bottom', $(window).scrollTop() + $(window).height() - $('.footer').offset().top);
        } else {
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
});
$('.get__item').click(function(){
    var but = $(this);
    $('.get__item.active').removeClass('active');
    $(this).addClass('active');
    $('.get__img').addClass('scale-zero');
    $('.get__text').addClass('scale-text');
    setTimeout(function(){
        $('.get__img').attr('src', but.data('url'));
        $('.get__text').html(but.data('text'));
        $('.get__img').removeClass('scale-zero');
        $('.get__text').removeClass('scale-text');
    }, 170);
});
$('.header a').click(function (event) {
    if($(this).attr('href').substring(0,1)=='#'){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }
});
$('.get-form').click(function() {
    $('.modal-enter').show();
});
$('.modal-enter .closed').click(function(){
    $('.modal-enter').hide();
});


//forms

$('.sent__form').on('submit', function(){
    e.preventDefault();
    var data_form = $(this).serialize();
    console.log(data_form);
    var phone = $(this).find('.input--tel');
    if(phone.val().length!=16){
        alert('Слишком короткий номер');
    } else {
        var needname = $('.saleform').find('.name_hid').val();
        yaCounter49117123.reachGoal('send_sale');
        $.ajax({
            type: "POST",
            url: "/sale_send.php",
            data: data_form,
            success: function() {
                
            },
            error: function() {
                
            }
        });
    }
    return false;
});