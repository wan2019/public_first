$(document).ready(function(){
    //剛載入時，sec1的動畫   
    $('#sec1 nav').addClass('sec1nav'); 
    $('#sec1a').addClass('sec1ashow');
    $('#sec1b').addClass('sec1bshow');
    $('#sec1a h1').addClass('sec1aH1show');
    $('#sec1b h1').addClass('sec1bH1show');

    //當視窗捲動時，物件滑入
    function scrollWindos(){
        var targetTop2 =$("#sec2").offset().top;
        var targetTop5 =$("#sec5").offset().top;
        var scroH = $(window).scrollTop(); 
        var windowH =$(window).height();

        if((scroH + windowH )>=targetTop2+100){
//當視窗捲動時，物件滑入sec2
            $('#sec2a').addClass('sec2ashow');
            $('#sec2b').addClass('sec2bshow');
            $('#sec2>h2').slideDown(1000);
        };
        
//當視窗捲動時，物件滑入sec5
        if((scroH + windowH )>=targetTop5){
            $('#sec5>h1').addClass('sec5h1show');
            $('#sec5>div').addClass('sec5divshow');
        };

    }
    scrollWindos(); 
    $(window).on('scroll', function(event) {
        scrollWindos();     
    });

    
    //sec4的背景活動   
    $('#sec4').on('click', function(){
        $('#sec4>div').slideDown();

    });
    //closemune
    function closemune(){
        $('#menu2').removeClass('t');
        $('#menu3').removeClass('tt');
        $('.menu1').removeClass('ttt');
        $('.menu4').removeClass('ttt');
    };
    //menu 按鈕
    
    var menuState=false;
    $("#menu").on("click touchstart",function(event){
        menuState =! menuState;
        let smallWindos =$(window).width()<=767 ;
        if(menuState&&smallWindos){
                console.log(menuState);
                $('#menu2').addClass('t');
                $('#menu3').addClass('tt');
                $('.menu1').addClass('ttt');
                $('.menu4').addClass('ttt');

                $("#sec1 ul").slideDown();

            } else {
                console.log(menuState);
                closemune();
                $("#sec1 ul").slideUp();  

            }event.preventDefault();
        });
    //按上方按鈕nav時，視窗下滑 
     $('nav a').on('click', function(){
         if($(window).width()<=767){
                menuState =false;
        
//         console.log(menuState);
//         var idname =$(this).attr('href');        
//         var targetTop =$(idname).position().top;     $('html,body').animate({scrollTop:targetTop},1000);
           closemune();
         $("#sec1 ul").hide(); 
         }else{
             console.log(menuState);
        var idname =$(this).attr('href');        
        var targetTop =$(idname).position().top;     $('html,body').animate({scrollTop:targetTop},700);
         }    
            });
            
    //按鈕結束
    //控制視窗大小
    $(window).resize(function(event){
        console.log(window.innerWidth)
        if(window.innerWidth > 767 ){
            $("#sec1 ul").show();}
    });
    if(window.innerWidth > 767){
        
    };
});


