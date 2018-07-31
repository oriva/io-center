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
        
    });
});