function showCategory( aCategory ) {
     if ( aCategory ) {
        let sCategory = document.getElementById( 'nav-item-name-' + aCategory );
        /* id 가 category-name 인 클래스의 text 를 변경해준다 */
        document.getElementById('category-name').textContent  = sCategory.textContent;
     }
     else {
        document.getElementById('category-name').textContent = "전체 글";
     }

     document.getElementById('category-' + aCategory).hidden = false;
}

function initHiddenClass() {
    /* querySelectorAll = sanpshot list
       getElementsByClassName = live list */

    let sAllTagBoxs = document.querySelectorAll( '.tag-wrapper > .tag-box' );
    let sAllPostCards = document.querySelectorAll( '.post-list > .post-wrapper' );

    for ( let i = 0; i < sAllTagBoxs.length; i++ ) {
        sAllTagBoxs.item(i).classList.remove( 'hidden' );
    }

    for ( let i = 0; i < sAllPostCards.length; i++ ) {
        sAllPostCards.item(i).classList.remove( 'hidden' );
    }
}

function initHiddenAttribute() {
    document.getElementById( 'content-tag-list-id-develop' ).hidden = true;
    document.getElementById( 'content-tag-list-id-bugs' ).hidden = true;
    document.getElementById( 'content-tag-list-id-develop' ).hidden = true;

    document.getElementById('category-develop').hidden = true;
    document.getElementById('category-bugs').hidden = true;
    document.getElementById('category-study').hidden = true;
}


function showTagByCategory( aCategory ) {
    if ( aCategory != '')
    {
        let sTags = document.querySelectorAll( '.tag-wrapper > .tag-box' );
        for ( let i = 0; i < sTags.length; i++ ) {
            if ( ( !(sTags.item(i).getAttribute( `tag-category-all` ) == null) )  ||
                 ( !(sTags.item(i).getAttribute( `tag-category-${aCategory}` ) == null) ) ) {
                sTags.item(i).classList.remove('hidden');
            }
            else {
                sTags.item(i).classList.add('hidden');
            }
        }

        document.getElementById( 'content-tag-list-id-' + aCategory ).hidden = false;
    }
}

function initSelected() {
    let sSelectedElems = document.getElementsByClassName( `selected` );
    
    while( sSelectedElems.length ) {
        sSelectedElems.item(0).classList.remove( `selected` );
    }

}

function setTags( aCategory ) { 
    initSelected();
    initHiddenClass();
    showTagByCategory( aCategory )

    let sTagAll = document.querySelectorAll('[data-tag="all"]');
    for ( let i = 0; i < sTagAll.length; i++ ) {
        sTagAll.item(i).classList.add('selected'); 
    }
}

function showPostCardsByTagName( aTagName ) {
    let sAllPostCards = document.querySelectorAll( '.post-list > .post-wrapper' );

    if ( aTagName != "all") {
        for ( let i = 0; i < sAllPostCards.length; i++ ) {
            if ( sAllPostCards.item(i).getAttribute( `data-${aTagName}` ) == null ) {
                sAllPostCards.item(i).classList.add('hidden');
                sAllPostCards.item(i).classList.remove( 'selected' );
            }
            else {
                sAllPostCards.item(i).classList.remove( 'hidden' );
                sAllPostCards.item(i).classList.add( 'selected' );
            }
        }       
    }
    else {
        for ( let i = 0; i < sAllPostCards.length; i++ ) {
            sAllPostCards.item(i).classList.remove( 'hidden' );
            sAllPostCards.item(i).classList.remove( 'selected' );
        }
    }
}

window.addEventListener( 'hashchange', () => {
    let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

    initHiddenAttribute();
    showCategory( sCategory );
    setTags( sCategory );
});

/* https://programmingsummaries.tistory.com/380 
뒤로 가기 버튼으로 돌아가면 BFCache 를 사용하기 때문에 $(document).ready 호출이 발생하지 않는다.
이 캐쉬에 상관없이 pageshow 이벤트가 발생하기 때문에 이 이벤트를 사용한다. */
window.addEventListener( "pageshow", (event) => 
{
    // if (event.originalEvent.persisted) {
        let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

        initHiddenAttribute();
        showCategory( sCategory );
        setTags( sCategory );
    // }
});

document.onload = function() {	
    let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

    initHiddenAttribute();
    showCategory( sCategory );
    setTags( sCategory );	
};

window.addEventListener( 'click', (event) =>
{
    sCurrentTag = event.target.dataset.tag;

    if ( sCurrentTag ) {  
        initSelected();
        showPostCardsByTagName( sCurrentTag );
        
        sSelectedTags = document.querySelectorAll(`[data-tag="${sCurrentTag}"]`);
        for ( let i = 0; i < sSelectedTags.length; i++ ) {
            sSelectedTags.item(i).classList.add('selected');
        }
    }
});
