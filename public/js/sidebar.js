/* global variable */
const MIN_SCROLL_SHIFT = 5;
const SIDEBAR = document.getElementById('sidebar-id');
let gScrolled = false;
let gLastScrollTop = 0;
let gNavBarHeight = SIDEBAR.clientHeight;

window.addEventListener( 'hashchange', () => {
    selectMenu();
});

document.onload = function() {
    selectMenu();
}

window.addEventListener( "pageshow", (event) => {
    selectMenu();
});

window.addEventListener ('scroll', function(){
    gScrolled = true;
})

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

function hasScrolled() {
    var sCurrentScrollTop = window.scrollY;
 
    if ( Math.abs( gLastScrollTop - sCurrentScrollTop ) <= MIN_SCROLL_SHIFT ) 
        return; 
       
    SIDEBAR.classList.remove('nav-up');
    SIDEBAR.classList.add('nav-down'); 
    
    gLastScrollTop = sCurrentScrollTop;
}


function selectMenu() {
    let sMenu = window.location.hash.substring(1).toLowerCase();
    let sSelectedMenu = document.getElementsByClassName( 'sidebar-item-list' );
    let sSelectedMenuName = '';
    let sSelected = false;

    for ( let i = 0; i < sSelectedMenu.length; i++ ) {
        sSelectedMenu.item(i).classList.remove('menu-selected');
    }

    if ( sMenu ) {
        sSelectedMenuName = sMenu;
        sSelected = true;
    }
    else {
        sCategory = window.location.pathname.split('/')[1];

        if ( sCategory ) {
            sSelectedMenuName = sCategory;
            sSelected = true;
        }
    }

    if ( sSelected ) {
        for ( let i = 0; i < sSelectedMenu.length; i++ ) {
            if ( document.getElementsByClassName( 'sidebar-item-list' ).item(i).classList[1] == sSelectedMenuName )
            {
                document.getElementsByClassName( 'sidebar-item-list' ).item(i).classList.add( 'menu-selected' );
                break;
            }
        }
    }
}