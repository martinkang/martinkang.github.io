$(window).on('hashchange', () => {
    selectMenu();
});

$(document).ready(() => {
    selectMenu();
});

function selectMenu() {
    let sMenu = window.location.hash.substring(1).toLowerCase();
    let sSelectedMenu = '.sidebar-item > .nav > li.'

    $('.sidebar-item > .nav > li').removeClass('menu-selected');

    if ( sMenu ) {
        sSelectedMenu = sSelectedMenu + sMenu;
        $( sSelectedMenu ).addClass('menu-selected');
    }
    else {
        sCategory = window.location.pathname.split('/')[1];

        if ( sCategory ) {
            sSelectedMenu = sSelectedMenu  + sCategory;
        }
        else{
            sSelectedMenu = sSelectedMenu + 'home';
        }
    }

    $(sSelectedMenu).addClass('menu-selected' );
}