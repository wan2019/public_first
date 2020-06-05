$(document).ready(function () {
    main();
    loadEvent();
    scrollWindos();

    $(window).on('scroll', scrollWindos);
    secFourClickEvent();
    menuButton();
    resizeEvent();
});
