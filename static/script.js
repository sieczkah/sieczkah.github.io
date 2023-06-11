// Show timeline
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
                counterUp(el, {
                    duration: 1300,
                    delay: 16,
                });
                el.classList.add('is-visible');
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const counters = document.querySelectorAll('.counter'); // Select all counter elements

    counters.forEach(counter => {
        IO.observe(counter); // Observe each counter element individually
    });




});
