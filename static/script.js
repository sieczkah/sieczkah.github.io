$(document).ready(function () {
    $(".show-timeline").click(function () {
        $("#timeline").toggle();
        $(this).text(function (i, text) {
            return text === "Show timeline" ? "Hide timeline" : "Show timeline";
        });
    });
    const counterUp = window.counterUp.default;

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                setTimeout(() => { // Add a setTimeout with a delay of 1000 milliseconds (1 second)
                    counterUp(el, {
                        duration: 1500,
                        delay: 16,
                    });
                    el.classList.add('is-visible');
                }, 50);
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const counters = document.querySelectorAll('.counter'); // Select all counter elements

    counters.forEach(counter => {
        IO.observe(counter); // Observe each counter element individually
    });

    $(".navlinks ul li a[href^='#']").on('click', function (e) {
        // Check window width
        if ($(window).width() >= 1200) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            var hash = this.hash;

            // Calculate target position with 100px offset
            var targetPosition = $(hash).offset().top - 100;

            // Animate scroll
            $('html, body').animate({
                scrollTop: targetPosition
            }, 1000, function () {

            });
        }
    });
    // Function to handle scrollspy
    function scrollSpy() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#navlinks a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('custom-active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('custom-active');
                }
            });
        });
    }

    // Call the scrollspy function
    scrollSpy();
});
