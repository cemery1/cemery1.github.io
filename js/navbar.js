// Some scroll-related code inspired by Ari Daly Portfolio
// https://github.com/acdaly/acdaly.github.io

$(document).ready(function() {
    // Determine initial state of navbar
    (window.innerWidth < 576)
        ? ($("#design-link, #software-link, #data-link").hide())
        : ($("#project-link").hide());

    // Smooth scrolling between sections
    $(".nav-link, .navbar-brand").on("click", function(e) {
        // Prevent id from being added to the URL (unless it's the resume link)
        !($(this).attr("id") === "navbar-resume") && e.preventDefault();

        var navbarOffset = $("#navbar-container").height();

        var destination = $(this).attr("href");
        $("html, body").animate({scrollTop: $(destination).offset().top - navbarOffset}, "slow");
    });

    // Update navbar based on the width of the screen
    $(window).resize(function() {
        // Get current screen position and offset
        if (window.innerWidth < 576) {
            $("#design-link, #software-link, #data-link").hide();
            $("#project-link").show();
        } else {
            $("#design-link, #software-link, #data-link").show();
            $("#project-link").hide()
        }
    });

    // Update navbar highlight when moving between sections
    $(document).scroll(function() {
        // Get current screen position and offset
        var curPos = $(document).scrollTop();
        var offset = $("#navbar-container").height() + 160;

        if (curPos > $("#about").offset().top - offset) { // in the about section
            $(".active").removeClass("active");
            $("#about-link").addClass("active");
        } else if (curPos > $("#data").offset().top - offset) { // in the data science section
            $(".active").removeClass("active");
            $("#data-link").addClass("active");
            $("#project-link").addClass("active");
        } else if (curPos > $("#software").offset().top - offset) { // in the software section
            $(".active").removeClass("active");
            $("#software-link").addClass("active");
            $("#project-link").addClass("active");
        } else if (curPos > $("#design").offset().top - offset) { // in the design and user research section
            $(".active").removeClass("active");
            $("#design-link").addClass("active");
            $("#project-link").addClass("active");
        } else { // on the home page
            $(".active").removeClass("active");
        }
    });
});