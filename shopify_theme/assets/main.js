/* =========================================================================
   SCENTS BY SARA - V2 MAIN SCRIPT
   Handles:
   - Header Scroll Logic (Hide down, show up)
   - Mobile Hamburger Menu Toggle
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Header Scroll Logic --- */
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    const stickyThreshold = 150; // Delay before taking over

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // At the very top
            if (currentScrollY <= stickyThreshold) {
                header.classList.remove('header-scrolled', 'header-hidden');
            }
            // Scrolling Down -> Hide Menu
            else if (currentScrollY > lastScrollY) {
                header.classList.add('header-hidden');
                header.classList.remove('header-scrolled');
            }
            // Scrolling Up -> Show Sticky Menu
            else {
                header.classList.remove('header-hidden');
                header.classList.add('header-scrolled');
            }

            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    /* --- Mobile Navigation Toggle --- */
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeMenuBtn = document.querySelector('.close-mobile-menu');

    const toggleMenu = (e) => {
        if (e) e.preventDefault();
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            // Close
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        } else {
            // Open
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock scroll
        }
    };

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', toggleMenu);
    }
    /* --- Search Toggle Logic --- */
    const searchToggleBtns = document.querySelectorAll('.search-toggle');
    const searchCloseBtn = document.querySelector('.search-close');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');

    if (searchToggleBtns && searchOverlay) {
        searchToggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                searchOverlay.classList.toggle('active');
                if (searchOverlay.classList.contains('active')) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            });
        });
    }

    if (searchCloseBtn && searchOverlay) {
        searchCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.remove('active');
        });
    }

    /* --- Hero Image Slider Logic --- */
    const heroSlider = document.querySelector('.hero-slider');
    const heroDots = document.querySelectorAll('.home-hero .slider-dots .dot');

    if (heroSlider && heroDots.length > 0) {
        const totalSlides = heroDots.length;
        let currentSlide = 0;
        let autoSlideInterval;

        const updateSlider = (index) => {
            heroSlider.style.transform = `translateX(-${index * 100}%)`;
            heroDots.forEach(dot => dot.classList.remove('active'));
            heroDots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = currentSlide + 1;
            if (next >= totalSlides) next = 0;
            updateSlider(next);
        };

        const prevSlide = () => {
            let prev = currentSlide - 1;
            if (prev < 0) prev = totalSlides - 1;
            updateSlider(prev);
        }

        // Dots click
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
                resetAutoSlide();
            });
        });

        // Swipe (Touch Events)
        let touchStartX = 0;
        let touchEndX = 0;

        heroSlider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        heroSlider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                nextSlide();
                resetAutoSlide();
            }
            if (touchEndX > touchStartX + 50) {
                prevSlide();
                resetAutoSlide();
            }
        };

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 5000); // 5s
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        };

        // Init
        startAutoSlide();
    }

    /* --- Testimonials Slider Logic --- */
    const testSlider = document.querySelector('.testimonials-slider');
    const testDots = document.querySelectorAll('.testimonials-section .slider-dots .dot');
    const testSlides = document.querySelectorAll('.testimonial-slide');

    if (testSlider && testDots.length > 0 && testSlides.length > 0) {
        const totalSlides = testDots.length;
        let currentSlide = 0;
        let autoSlideInterval;

        const updateSlider = (index) => {
            testSlides.forEach(slide => slide.classList.remove('active'));
            testDots.forEach(dot => dot.classList.remove('active'));

            testSlides[index].classList.add('active');
            testDots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = currentSlide + 1;
            if (next >= totalSlides) next = 0;
            updateSlider(next);
        };

        // Dots click
        testDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
                resetAutoSlide();
            });
        });

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 6000); // 6s
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        };

        // Init
        startAutoSlide();
    }

});
