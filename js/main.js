// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	dotsClass: '.get__item',
//   	dots:1,
//   	slidesToShow: 1,
//   	slidesToScroll:1,
//    });
//  });
$(document).ready(function () {
    // 	var name = $('input[name=fio]').val(); 
    // 	var tel = $('input[name=tel]').val();
    // 	var otpravka = true;
    // 	if(name==""){ 
    // 	otpravka = false;
    // 	}
    // 	if(tel ==""){
    // 	otpravka = false;
    // 	}
    // 	dannie = {'polz_name':name, 'polz_tel':tel};
    // 	if(otpravka) {
    // 	$.post('senda.php', dannie, function(otvet){ 
    // 	rezultat = '<div>'+otvet.text+'</div>';
    // 	$("#form_result").hide().html(rezultat).slideDown();
    // 	}, 'json');
    // }
    var tel = $('#tel');
    $(document).on('scroll', function () {
        var position = $(window).scrollTop();
        var block_position = $('#box1').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
        if (position > block_position) { // если позиция скролла страницы больше, то ставим фикс
            tel.addClass('fixed');
        }
        else {
            tel.removeClass('fixed');
        }
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
});