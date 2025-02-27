const swiper = new Swiper('.home-swiper', {
    speed: 400,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const NavBrandSwiper = new Swiper('.nav-brand-swiper', {
    speed: 1400,
    navigation: {
        nextEl: "#brandNext",
        prevEl: "#brandPrev"
    },

    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    }
});

const brandSwiper = new Swiper('.brand-swiper', {
    speed: 1400,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    },

    breakpoints: {
        320: {
            slidersPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidersPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    }
});

const seasonProductSwiper = new Swiper('.season-product-swiper', {
    speed: 1400,
    navigation: {
        nextEl: ".seasonNext",
        prevEl: ".seasonPrev"
    },

    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    },

    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 20
        },
    }
});