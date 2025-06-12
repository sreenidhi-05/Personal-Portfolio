document.addEventListener("DOMContentLoaded", function () {
    // Reveal project cards on scroll
    const cards = document.querySelectorAll('.project-card');
    function revealOnScroll() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Smooth scroll for scroll-down-arrow
    document.querySelectorAll('.scroll-down-arrow').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
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

// Trigger once in case page is refreshed mid-scroll
window.dispatchEvent(new Event('scroll'));
