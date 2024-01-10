$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});

$('.logos-item').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

// sliky header 
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $(".header-content").removeClass('fixed-header');
    else $(".header-content").addClass('fixed-header');
});

// slow scroll
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    // event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

//btn-down
$(document).ready(function(){
  $(".btn-down").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

//carusel
$('.post-carousele').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

//portfolio
 $(document).ready(function(){ 
  $('#portfolio-gallery').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
    itemSelector: '.item',
// указываем класс элемента являющегося блоком в нашей сетке
          singleMode: false,
// true - если у вас все блоки одинаковой ширины
    isResizable: true,
// перестраивает блоки при изменении размеров окна
    isAnimated: true,
// анимируем перестроение блоков
          animationOptions: { 
        queue: false, 
        duration: 500 
    }
// опции анимации - очередь и продолжительность анимации
  }); 
  });

//burger-menu
document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
};