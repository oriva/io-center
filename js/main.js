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

        //ЦЕЛИ

        $('.header__button').click(function(){
            yaCounter49895314.reachGoal('form1');
        });
        $('.get__button').click(function(){
            yaCounter49895314.reachGoal('form2');
        });
        $('.need__button').click(function(){
            yaCounter49895314.reachGoal('form3');
        });
        $('.free__button').click(function(){
            yaCounter49895314.reachGoal('form4');
        });
        $('.sent__button').click(function(){
            yaCounter49895314.reachGoal('form5');
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
//    $('.get__text').addClass('scale-text');
    setTimeout(function () {
        $('.get__img').attr('src', but.data('url'));
//        $('.get__text').html(but.data('text'));
        $('.get__img').removeClass('scale-zero');
//        $('.get__text').removeClass('scale-text');
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
$('.closed').click(function () {
    $(this).parent().parent().parent().parent().hide();
});

$(document).mousedown(function (e){
    var div = $(".modal-info__contain");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.modal-info').hide();
        $('html').removeClass('overfloff');
    }
});

//forms
$('form').on('submit', function (e) {
    e.preventDefault();
    var data_form = $(this).serialize();
    console.log(data_form);
    var phone = $(this).find('.input--tel');
    if (phone.val().length != 16) {
        alert('Слишком короткий номер');
        return false;
    } else {
        yaCounter49895314.reachGoal('submit');
        $('.hidden_cardbye form').trigger('reset');
        $.ajax({
            type: "POST"
            , url: "/senda.php"
            , data: data_form
            , success: function () {
                $('.modal-enter').hide();
                $('.modal-success').show();
                setTimeout(function(){$('.modal-success').hide()},1300);
                return false;
            }
            , error: function () {
                $('.modal-enter').hide();
                $('.modal-success').show();
                setTimeout(function(){$('.modal-success').hide()},1300);
                return false;
            }
        });
    }
    return false;
});

//video
$('.review__people').click(function(){
    if($(window).width()<992){
         $('.review__people.active').find('tubec').slideToggle();
         $(this).find('tubec').slideToggle();
    }
    $('.review__people.active').removeClass('active');
    $(this).addClass('active');
    $('.review__youtube iframe').attr('src', $(this).data('video'));
});

$('.answer svg').click(function(){
    $('.modal-info').show();
    var number_svg = $(this).parent().index();
    switch (number_svg) {
        case 0:
            $('.modal-info h2').html('О порядке тестирования иностранных граждан.');
            $('.modal-info__text').html('Согласно закону Российской Федерации от 20 апреля 2014 г. иностранный гражданин при обращении за получением разрешения на временное проживание, вида на жительство, разрешения на работу либо патента обязан подтвердить владение русским языком, знание истории России и основ законодательства Российской Федерации одним из следующих документов:  <br>1) сертификатом о владении русским языком, знании истории России и основ законодательства Российской Федерации; <br>2) документом государственного образца об образовании (на уровне не ниже основного общего образования), выданным образовательным учреждением на территории государства, входившего в состав СССР, до 1 сентября 1991 года; <br>3) документом об образовании и (или) о квалификации, выданным лицам, успешно прошедшим государственную итоговую аттестацию на территории Российской Федерации с 1 сентября 1991 года.');
            break;
        case 1:
            $('.modal-info h2').html('Кому нужно сдавать экзамен?');
            $('.modal-info__text').html('В соответствии с законом тестирование обязаны пройти иностранные граждане: <br><br>1) обратившиеся для получения обыкновенной рабочей визы (за исключением иностранного гражданина, являющегося высококвалифицированным специалистом, и членов его семьи, а также иностранных граждан, указанных в пунктах 4 и 4.8 статьи 13 Федерального закона от 25 июля 2002 года № 115-ФЗ «О правовом положении иностранных граждан в Российской Федерации»); <br><br>2) обратившиеся для получения разрешения на временное проживание и вида на жительство; <br><br>3) прибывающие в Российскую Федерацию для осуществления трудовой деятельности в порядке, не требующем получения визы, при обращении за выдачей разрешения на работу или патента.');
            break;
        case 2:
            $('.modal-info h2').html('Какие документы необходимо подготовить?');
            $('.modal-info__text').html('Какие документы необходимы для прохождения теста по русскому языку, истории России и основам Законодательства РФ для трудовых мигрантов необходимо иметь: <br>- паспорт <br>- перевод паспорта <br>- миграционная карта. <br>Какие документы необходимы для прохождения теста по русскому языку, истории России и основам Законодательства РФ для иностранцев, получающих РВП: <br>- паспорт <br>- перевод паспорта. <br>Какие документы необходимы для прохождения теста для мигрантов на знание русского языка, которые получают вид на жительство: <br>- паспорт, в котором стоит печать РВП ');
            break;
        case 3:
            $('.modal-info h2').html('Кому не нужно сдавать экзамен?');
            $('.modal-info__text').html('От подтверждения владения русским языком, знания истории России и основ законодательства Российской Федерации при подаче заявления о выдаче разрешения на временное проживание или вида на жительство освобождаются: <br>1) недееспособные иностранные граждане или иностранные граждане, ограниченные в дееспособности; <br>2) иностранные граждане, не достигшие возраста восемнадцати лет; <br>3) иностранные граждане - мужчины, достигшие возраста шестидесяти пяти лет; <br>4) иностранные граждане - женщины, достигшие возраста шестидесяти лет; <br>5) иностранные граждане, являющиеся участниками Государственной программы по оказанию содействия добровольному переселению в Российскую Федерацию соотечественников, проживающих за рубежом, и члены их семей, переселяющиеся совместно с ними в Российскую Федерацию; <br>6) иностранные граждане - высококвалифицированные специалисты, осуществляющие трудовую деятельность в порядке, установленном статьей 132 настоящего Федерального закона, а также иностранные граждане, обучающиеся в Российской Федерации по очной форме обучения в профессиональных образовательных организациях или образовательных организациях высшего образования по имеющим государственную аккредитацию основным профессиональным образовательным программам и осуществляющие трудовую деятельность в соответствии со статьей 134 настоящего Федерального закона.');
            break;
    }
});