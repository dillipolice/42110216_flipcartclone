        // JavaScript for Image Slider
        let slideIndex = 0;

        function showSlides() {
            let slides = document.querySelectorAll('.slide');
            slides.forEach((slide, index) => {
                slide.style.display = index === slideIndex ? 'flex' : 'none';
            });
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
            showSlides();
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
            showSlides();
        }

        window.onload = function() {
            window.addEventListener('resize', resizeSlides);
            showSlides();
            resizeSlides();
        };

        function resizeSlides() {
            let slides = document.querySelector('.slides');
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }