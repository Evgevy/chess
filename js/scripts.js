





new Swiper ('.players__slider', {
    
    slidesPerView: 3,
    //slidesPerGroup: 3,
    loop: true,
    
    autoplay: {
        delay: 4000,
    },
  
   
    navigation: {
        
        nextEl: '.swiper-button-next-two',
        prevEl: '.swiper-button-prev-two',
    
    },
  
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    spaceBetween: 20,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
        280: {
            slidesPerView: 1, 
            
        },

        376: {
            slidesPerView: 2, 
        },

        /*560: {
            slidesPerView: 2,  
        },*/

        640: {
            slidesPerView: 2,
        },

        1025: {
            slidesPerView: 3,
            //slidesPerGroup: 3,
          
        }
      },

   
});



let swiper = null;

function initSwiper() {
  swiper = new Swiper('.stages__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      560: {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 30,
      }
    },

    

    pagination: {
      el: '.swiper-page',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    

  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

function checkWindowSize() {
  if (window.innerWidth <= 560) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
