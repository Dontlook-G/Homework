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

    // ----------------------

    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');
    const container = document.querySelector('.catalog__bottom');

    // режим "Сетка"
    gridBtn.addEventListener('click', () => {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
    });

    // режим "Список"
    listBtn.addEventListener('click', () => {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
    });


    const gridBtnSec = document.getElementById('gridView');
    const listBtnSec = document.getElementById('listView');
    const containeSec = document.querySelector('.secondary');

    // режим "Сетка"
    gridBtnSec.addEventListener('click', () => {
        containeSec.classList.remove('list-view');
        containeSec.classList.add('grid-view');
    });

    // режим "Список"
    listBtnSec.addEventListener('click', () => {
        containeSec.classList.remove('grid-view');
        containeSec.classList.add('list-view');
    });


    // ------------------------------

    const line = document.querySelectorAll('.type__button');

    line.forEach(btn => {

        btn.setAttribute('aria-pressed', 'false');

        btn.addEventListener('click', () => {
            const wasActive = btn.classList.contains('clicked');

            line.forEach(b => {
                b.classList.remove('clicked');
                b.setAttribute('aria-pressed', 'false');
            });

            if (!wasActive) {
                btn.classList.add('clicked');
                btn.setAttribute('aria-pressed', 'true');
            }
        });
    });

    // -------------------------------

    const btn = document.getElementById('dropdownBtn');
    const menu = document.getElementById('dropdownMenu');

    // Переключаем видимость списка при нажатии на кнопку
    btn.addEventListener('click', () => {
        menu.classList.toggle('catalog-filter__options--show');
    });



    // Закрываем меню при клике на пункт списка
    const items = menu.querySelectorAll('a');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            menu.classList.remove('catalog-filter__options--show');
        });
    });

    // ----------------------------

    const btnSort = document.getElementById('dropdownBtnSort');
    const menuSort = document.getElementById('dropdownMenuSort');

    // Переключаем видимость списка при нажатии на кнопку
    btnSort.addEventListener('click', () => {
        menuSort.classList.toggle('catalog-sort__options--show');
    });


    const itemsSort = menuSort.querySelectorAll('a');
    itemsSort.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            menuSort.classList.remove('catalog-sort__options--show');
        });
    });

    // --------------------

    const mixContainer = document.querySelector('#mixContainer');

    if (mixContainer && typeof mixitup !== 'undefined') {
        const mixer = mixitup(mixContainer, {
            selectors: {
                target: '.catalog__product' // ✅ карточка товара
            },
            animation: {
                duration: 400,
                effects: 'fade translateY(20%)',
            }
        });

        console.log('✅ MixItUp инициализирован:', mixer);

        // ✅ Привяжем фильтрацию к ссылкам из выпадающего меню
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const filterValue = item.getAttribute('data-filter');
                mixer.filter(filterValue || 'all');
            });
        });
    } else {
        console.warn('⚠️ MixItUp не найден или контейнер отсутствует');
    }




})()