const loadEvent = () => {
    //剛載入時，sec1的動畫
    $('#sec1 nav').addClass('sec1nav');
    $('#sec1a').addClass('sec1ashow');
    $('#sec1b').addClass('sec1bshow');
    $('#sec1a h1').addClass('sec1aH1show');
    $('#sec1b h1').addClass('sec1bH1show');
};
const scrollWindos = () => {
    //當視窗捲動時，物件滑入
    let targetTop2 = $('#sec2').offset().top;
    let targetTop3 = $('#sec3').offset().top;
    // let targetTop5 = $('#sec5').offset().top;
    let scroH = $(window).scrollTop();
    let windowH = $(window).height();
    let windowW = $(window).width();

    if ($(window).width() <= 767) {
        if (scroH + windowH >= targetTop2 + windowW + 100) {
            //當視窗捲動時，物件滑入sec2

            $('#sec2b').slideDown(1000);
        }
    }

    if (scroH + windowH >= targetTop2 + 100) {
        //當視窗捲動時，物件滑入sec2
        $('#sec2a').addClass('sec2ashow');
        $('#sec2b').addClass('sec2bshow');
    }
    if (scroH + windowH >= targetTop3 + 100) {
        //當視窗捲動時，物件滑入sec2
        $('.sec3b>li').slideDown(1000);
    }

    //當視窗捲動時，物件滑入sec5
    // if (scroH + windowH >= targetTop5) {
    //     $('#sec5>h1').addClass('sec5h1show');
    //     $('#sec5>div').addClass('sec5divshow');
    // }
};
const resizeEvent = () => {
    $(window).resize(() => {
        if (window.innerWidth > 767) {
            $('#sec1 ul').show();
        }
    });
};
const secFourClickEvent = () => {
    //sec4的背景活動
    $('#sec4').on('click', function () {
        $('#sec4>div').slideDown();
    });
};
const menuButton = () => {
    function closemune() {
        $('#menu2').removeClass('t');
        $('#menu3').removeClass('tt');
        $('.menu1').removeClass('ttt');
        $('.menu4').removeClass('ttt');
        $('#list').removeClass('onepage');
    }
    let menuState = false;
    $('#menu').on('click touchstart', (event) => {
        menuState = !menuState;
        let smallWindos = $(window).width() <= 767;
        if (menuState && smallWindos) {
            $('#menu2').addClass('t');
            $('#menu3').addClass('tt');
            $('.menu1').addClass('ttt');
            $('.menu4').addClass('ttt');

            $('#sec1 ul').slideDown();
            $('#list').addClass('onepage');
        } else {
            closemune();
            $('#sec1 ul').slideUp();
        }
        event.preventDefault();
    });

    $('nav a,.round').on('click', function () {
        if ($(window).width() <= 767) {
            menuState = false;

            closemune();
            $('#sec1 ul').hide();
        } else {
            let idname = $(this).attr('href');
            let targetTop = $(idname).position().top;
            $('html,body').animate({ scrollTop: targetTop }, 700);
        }
    });

    $('.round').on('click', function () {
        let idname = $(this).attr('href');
        let targetTop = $(idname).position().top;
        $('html,body').animate({ scrollTop: targetTop }, 700);
    });
};
