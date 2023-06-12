$(document).ready(function () {

    function handleTimelineToggle() {
        try {
            $(".show-timeline").click(function () {
                $("#timeline").toggle();
                $(this).text(function (i, text) {
                    return text === "Show timeline" ? "Hide timeline" : "Show timeline";
                });
            });
        } catch (error) {
            console.error('Error in handleTimelineToggle:', error);
        }
    }

    function handleCounters() {
        try {
            const counterUp = window.counterUp.default;
            const callback = entries => {
                entries.forEach(entry => {
                    const el = entry.target;
                    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                        setTimeout(() => {
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
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                IO.observe(counter);
            });
        } catch (error) {
            console.error('Error in handleCounters:', error);
        }
    }

    function handleNavLinks() {
        try {
            $(".navlinks ul li a[href^='#']").on('click', function (e) {
                if ($(window).width() >= 1200) {
                    e.preventDefault();
                    var hash = this.hash;
                    var targetPosition = $(hash).offset().top - 100;

                    $('html, body').animate({
                        scrollTop: targetPosition
                    }, 1000, function () {

                    });
                }
            });
        } catch (error) {
            console.error('Error in handleNavLinks:', error);
        }
    }

    function handleScrollSpy() {
        try {
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
        } catch (error) {
            console.error('Error in handleScrollSpy:', error);
        }
    }

    // Call the functions
    handleTimelineToggle();
    handleCounters();
    handleNavLinks();
    handleScrollSpy();
});
