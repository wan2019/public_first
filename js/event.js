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
    const closeMenu = () => {
        $('#menu2').removeClass('menu__move__one');
        $('#menu3').removeClass('menu__move__two');
        $('.menu1').removeClass('menu__move__three');
        $('.menu4').removeClass('menu__move__three');
        $('#list').removeClass('onepage');
    };
    const openMenu = () => {
        $('#menu2').addClass('menu__move__one');
        $('#menu3').addClass('menu__move__two');
        $('.menu1').addClass('menu__move__three');
        $('.menu4').addClass('menu__move__three');

        $('#list').addClass('onepage');
    };
    let menuState = false;
    $('#menu').on('click touchstart', (event) => {
        menuState = !menuState;
        let smallWindos = $(window).width() <= 767;
        if (menuState && smallWindos) {
            openMenu();
            $('.menu__box').slideDown();
        } else {
            closeMenu();
            $('.menu__box').slideUp();
        }
        event.preventDefault();
    });

    $('nav a,.round').on('click', function (e) {
        console.log('desktop');

        if ($(window).width() <= 767) {
            menuState = false;

            closeMenu();
            $('#sec1 ul').hide();
        } else {
            console.log('one');

            let idname = $(this).attr('href');
            let targetTop = $(idname).position().top;
            $('html,body').animate({ scrollTop: targetTop }, 700);
        }
    });

    $('.round').on('click', function () {
        console.log('two');

        let idname = $(this).attr('href');
        let targetTop = $(idname).position().top;
        $('html,body').animate({ scrollTop: targetTop }, 700);
    });
};
