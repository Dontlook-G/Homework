(function () {


    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // =========================================

    new Swiper('.hero__slider', {
        slidesPerViev: 1,
        loop: true,
        pagination: {
            el: ".hero__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },

    });

    // ==================================

    new Swiper('.gallery__slider', {
        spaceBetween: 20,
        slidesPerView: 1,

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            401: {
                spaceBetween: 20,
                slidesPerView: 1,
            },


            801: {
                spaceBetween: 20,
                slidesPerView: 2,
            },


            1101: {
                spaceBetween: 20,
                slidesPerView: 3,
            },

            1601: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }



    });



})()