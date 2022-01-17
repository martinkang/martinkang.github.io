/* global variable */
const MIN_SCROLL_SHIFT = 100;
const SIDEBAR = document.getElementById('sidebar-id');
let gScrolled = false;
let gLastScrollTop = 0;
let gNavBarHeight = SIDEBAR.clientHeight;

function selectMenu() {
    let sMenu = window.location.hash.substring(1).toLocaleLowerCase();
    let sSelectedMenu = document.querySelectorAll( '.sidebar-item .sidebar-item-list' );
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
        if ( sSelectedMenu.item(i).classList[1] == sSelectedMenuName )
        {
            sSelectedMenu.item(i).classList.add( 'menu-selected' );
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
        gLastScrollTop = window.scrollY;
        gScrolled = false;
        
        SIDEBAR.classList.remove('nav-down');
        SIDEBAR.classList.add('nav-up'); 
    }
}, 300);


window.addEventListener ('scroll', function(){
    gScrolled = true;
});


window.addEventListener( 'hashchange', () => {
    selectMenu();
});

window.addEventListener( "pageshow", (event) => {
    /* https://ifuwanna.tistory.com/63 */
    // if ( event.persisted || (window.performance && window.performance.navigation.type == 2 ) ) {
    // }
    selectMenu();
});

