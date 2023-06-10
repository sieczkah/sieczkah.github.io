// Show timeline
$(document).ready(function () {
    $(".show-timeline").click(function () {
        $("#timeline").toggle();
        $(this).text(function (i, text) {
            return text === "Show timeline" ? "Hide timeline" : "Show timeline";
        });
    });

});

