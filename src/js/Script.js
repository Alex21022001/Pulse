$(document).ready(
    function () {
        $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            // adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                }
            ]
        });

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this)
                .addClass('catalog__tab_active').siblings()
                .removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
                .eq($(this).index()).addClass('catalog__content_active');
        });


        function toggleButton(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });
        }

        toggleButton('.catalog-item__link');
        toggleButton('.catalog-item__back');

    //Modal
        function closePopUp(){
            $('.modal__close').on('click', function (){
                $('.overlay, #consultation-modal, #order-modal, #thanks-modal').fadeOut('fast');
            });
        }
        function closeCross(){
            $('.overlay, #consultation-modal, #order-modal, #thanks-modal').fadeOut('fast');
        }

        $('[data-modal=consultation]').on('click', function (){
           $('.overlay, #consultation-modal').fadeIn('200');
        });

        $('.button_mini').each(function (i){
           $(this).on('click', function (){
               $('#order-modal .modal__descr').text(
                  $('.catalog-item__subtitle').eq(i).text()
              );
               $('.overlay, #order-modal').fadeIn('200');
           });
        });

        closePopUp();
        $(document).keydown(function (e){
           if(e.keyCode===27){
               closeCross();
           }
        });


    });