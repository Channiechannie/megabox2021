//배너 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

//영화차트 이미지 슬라이드
var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});

//영화차트 탭 메뉴
var movBtn = $(".movie_title > ul > li");    
var movCont = $(".movie_chart > div");  

movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);         
    var index = target.index();  
    movBtn.removeClass("active");   
    target.addClass("active");    
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});

//공지사항 탭 메뉴

var tabMenu = $(".notice");

    tabMenu.find("ul>li>ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("acitve").siblings("li").removeClass("active").find("ul").hide();
        //버튼을 클릭하면 ~ul를 보여주고
        //부모 li 태그에 클래스 추가
        //형제의 li태그에 클래스 제거"siblings"
        //제거한 자식의 ul 태그를 숨겨줌
    }
    tabMenu.find("ul > li > a").click(tabList).focus(tabList);


//영화차트 탭

var movBtn = $(".movie_title > ul > li");
var movCont = $(".movie_chart > div");

movCont.hide().eq(0).show(); //첫번째 것만 보여줘

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this); //this를 쓰면 몇번째 버튼을 누른건 지 알수있음
    var index = target.index();
    movBtn.removeClass("active"); // 엑티브 제거
    target.addClass("active"); //내가 클릭한 탭에게 엑티브 클래스를 부여
    movCont.css("display","none");//hide 써도 됨
    movCont.eq(index).css("display","block");//택한 탭에 번호를 부여하고 보여준다?
});
//버튼을 클릭시 탭이 이동





