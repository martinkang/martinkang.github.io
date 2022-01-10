/* global variable */
const MIN_SCROLL_SHIFT = 5;
let gScrolled = false;
let gLastScrollTop = 0;
let gNavBarHeight = $('.sidebar').clientHeight;

$(window).on('hashchange', () => {
    selectMenu();
});

$(document).ready(() => {
    selectMenu();
});

$(window).scroll(function(event){
    gScrolled = true;
})

/* ms 초 마다 실행 */
setInterval( function() {
    if ( gScrolled ) {
        hasScrolled();
        gScrolled = false;
    }
    else{ 
        $('.sidebar').removeClass('nav-down').addClass('nav-up'); 
    }
}, 250);

function hasScrolled() {
    var sCurrentScrollTop = $(this).scrollTop(); 
 
    if ( Math.abs( gLastScrollTop - sCurrentScrollTop ) <= MIN_SCROLL_SHIFT ) 
        return; 
    
    $('.sidebar').removeClass('nav-up').addClass('nav-down');
    
    gLastScrollTop = sCurrentScrollTop;
}


function selectMenu() {
    let sMenu = window.location.hash.substring(1).toLowerCase();
    let sSelectedMenu = '.sidebar-item > .nav > li.'
    let sSelected = false;

    $('.sidebar-item > .nav > li').removeClass('menu-selected');

    if ( sMenu ) {
        sSelectedMenu = sSelectedMenu + sMenu;
        $( sSelectedMenu ).addClass('menu-selected');
        sSelected = true;
    }
    else {
        sCategory = window.location.pathname.split('/')[1];

        if ( sCategory ) {
            sSelectedMenu = sSelectedMenu  + sCategory;
            sSelected = true;
        }
    }

    if ( sSelected ) {
        $(sSelectedMenu).addClass('menu-selected' );
    }
}