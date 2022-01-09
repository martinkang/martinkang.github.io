$(window).on('hashchange', () => {
    selectMenu();
});

$(document).ready(() => {
    selectMenu();
});

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