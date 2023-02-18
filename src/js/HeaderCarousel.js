// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';

// import Swiper and modules styles
Swiper.use([Navigation, Pagination]); // Add the modules to Swiper

class HeaderCarousel {
    constructor() {
        this.init();
    }

    init() {
        const customBullets = {
            '&#xe1a0;': 'Groups',
            '&#xe1d3;': 'Reactions',
            '&#xe86a;': 'Repost',
            '&#xef6c;': 'Comments',
            '&#xef76;': 'NIP-05',
            '&#xe0e6;': 'Mentions',
            '&#xec1c;': 'Tips'
        };

        const renderBullet = (index, className) => {
            const symbol = Object.keys(customBullets)[index];
            const label = customBullets[symbol];
            const bullet = `
                <span class="header-carousel-bullet tag is-rounded is-theme-surface1" data-index="${index}">
                  <span class="material-symbols-outlined">${symbol}</span>&nbsp;
                  <span>${label}</span>
                </span>
              `;
            return bullet
        };

        const swiper = new Swiper('.swiper', {
            effect: 'coverflow',
            grabCursor: true,
            autoHeight: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 50, // Definimos el espacio entre las diapositivas
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            on: {
                init: function() {
                    this.slides.eq(2).addClass('swiper-slide-active');
                },
                transitionStart: function() {
                    this.slides.removeClass('swiper-slide-active');
                },
                transitionEnd: function() {
                    this.slides.eq(this.activeIndex + 2).addClass('swiper-slide-active');
                },
            },
            pagination: {
                el: '#swiper-pagination',
                bulletClass: 'header-carousel-bullet',
                bulletActiveClass: 'is-theme-surface3',
                clickable: true,
                renderBullet,
            }
        });

        swiper.on('init', () => {
            // Obtener todos los bullets
            const bullets = document.querySelectorAll('.header-carousel-bullet');

            // Agregar un event listener para el evento "click" a cada bullet
            bullets.forEach((bullet, index) => {
                bullet.addEventListener('click', () => {
                    // Obtener el índice de la diapositiva correspondiente a través del atributo data-index
                    const slideIndex = parseInt(bullet.getAttribute('data-index'));

                    // Cambiar a la diapositiva correspondiente usando swiper.slideTo()
                    swiper.slideTo(slideIndex);
                });
            });
        });
    }
}

export default HeaderCarousel