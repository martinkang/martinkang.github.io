/* global variable */
const MIN_SCROLL_SHIFT = 5;
const SIDEBAR = document.getElementById('sidebar-id');
let gScrolled = false;
let gLastScrollTop = 0;
let gNavBarHeight = SIDEBAR.clientHeight;


function selectMenu() {
    let sMenu = window.location.hash.substring(1).toLocaleLowerCase();
    let sSelectedMenu = document.getElementsByClassName( 'sidebar-item-list' );
    let sSelectedMenuName = '';

    for ( let i = 0; i < sSelectedMenu.length; i++ ) {
        sSelectedMenu.item(i).classList.remove('menu-selected');
    }

    if ( sMenu ) {
        sSelectedMenuName = sMenu;
    }
    else {
        let sCategory = window.location.pathname.split('/')[1];

        if ( sCategory ) {
            sSelectedMenuName = sCategory;
        }
        else {
            sSelectedMenuName = "home";
        }
    }
  
    for ( let i = 0; i < sSelectedMenu.length; i++ ) {
        if ( document.getElementsByClassName( 'sidebar-item-list' ).item(i).classList[1] == sSelectedMenuName )
        {
            document.getElementsByClassName( 'sidebar-item-list' ).item(i).classList.add( 'menu-selected' );
            break;
        }
    }

}

function hasScrolled() {
    var sCurrentScrollTop = window.scrollY;
 
    if ( Math.abs( gLastScrollTop - sCurrentScrollTop ) <= MIN_SCROLL_SHIFT ) 
        return; 
       
    SIDEBAR.classList.remove('nav-up');
    SIDEBAR.classList.add('nav-down'); 
    
    gLastScrollTop = sCurrentScrollTop;
}

/* ms 초 마다 실행 */
setInterval( function() {
    if ( gScrolled ) {
        hasScrolled();
        gScrolled = false;
    }
    else{ 
        SIDEBAR.classList.remove('nav-down');
        SIDEBAR.classList.add('nav-up'); 
    }
}, 250);


window.addEventListener ('scroll', function(){
    gScrolled = true;
});


window.addEventListener( 'hashchange', () => {
    selectMenu();
});


window.addEventListener( "pageshow", (event) => {
    /* 왜인지 캐시 관련해서 동작 안함. 무조건 새페이지로 뜨는데 살펴볼것 */
    // if ( event.persisted ) {
    //     alert( "캐시복원");
    // }
    // else {
    //     alert( "새페이지");
    // }

    selectMenu();
});

document.onload = function() {		
    selectMenu();
};