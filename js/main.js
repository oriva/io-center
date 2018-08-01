$(document).ready(function () {
    var tel = $('#tel');
    $(document).on('scroll', function () {
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
$(".header a").click(function (event) {
    if($(this).attr('href').substring(0,1)=='#'){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }
});
