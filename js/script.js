
const sections = document.querySelectorAll('.sec');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop-250; // Adjust for fixed header
        const height = sec.offsetHeight;

        if (scrollY >= offset && scrollY < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
});

window.dispatchEvent(new Event('scroll'));



AOS.init({
    duration: 1500,
    once: true
});

// Swiper 3D Coverflow for certificates
var swiper = new Swiper('.certificates-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});