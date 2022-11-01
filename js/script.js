
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if(burger && menu) {
    burger.addEventListener('click', (event)=> {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}

// FILTER
const filter = document.querySelector('.filter');
if(filter) {
    const items = filter.querySelectorAll('.block-filter');

    items.forEach(el => {
        el.addEventListener('click', event => {
            el.querySelector('.block-filter__dropdown').classList.toggle('_active');
            el.querySelector('.block-filter__icon').classList.toggle('_active');

            if(event.target.classList.contains('block-filter__item')) {
                el.querySelector('.block-filter__value').textContent = event.target.textContent;
            }

        })
    })
}

// slider
const popularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.popular-slider-next',
      prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        // when window width is >= 1020px
        1020: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 2,
        }
      }
  
  });

  const reviewsSlider = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  });


// slider end