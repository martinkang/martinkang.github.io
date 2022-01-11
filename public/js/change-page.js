function setCategory() {
    let hash = window.location.hash.substring(1).toLocaleLowerCase();

     if ( hash ) {
        let sCategory = document.getElementById( 'nav-item-name-' + hash );
        /* id 가 category-name 인 클래스의 text 를 변경해준다 */
        document.getElementById('category-name').textContent  = sCategory.textContent;
     }
     else {
        document.getElementById('category-name').textContent = "전체 글";
     }
}

function removeCategory() {
    let sHiddenElems = document.getElementsByClassName( 'hidden' );
    let sSelectedElems = document.getElementsByClassName( 'selected' );
    for ( let i = 0; i < sHiddenElems.length; i++ ) {
        sHiddenElems.item(i).classList.remove( 'hidden' );
    }

    for ( let i = 0; i < sSelectedElems.length; i++ ) {
        sSelectedElems.item(i).classList.remove( 'selected' );
    }


    if (window.location.hash) {
        let sHash = window.location.hash.substring(1).toLocaleLowerCase();
        let sItems = document.getElementsByClassName('post-list-item');
      
        for ( let i = 0; i < sItems.length; i++ ) {
            if ( !(sItems.item(i).classList[1] == 'post-category-' + sHash) ) {
                sItems.item(i).hidden = true;    
            }
            else {
                sItems.item(i).hidden = false;
            }
        }
    }

    document.querySelectorAll('[data-tag="all"]').item(0).classList.add('selected');
}


function removeTag() {
    let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

    if ( sCategory != '')
    {
        let sTags = $('.tag-wrapper > .tag-box').each((i, e) => {
            if ( ( !e.hasAttribute('tag-category-all') ) 
            && ( !e.hasAttribute(`tag-category-${sCategory}` ) )) {
                $(e).hide();
            } else {
                $(e).show();
            }
        });
    }
}

window.addEventListener( 'hashchange', () => {
    setCategory();
    removeCategory();	
    removeTag();
});

document.onload = function() {		
    setCategory();
    removeCategory();	
    removeTag();
};

/* https://programmingsummaries.tistory.com/380 
뒤로 가기 버튼으로 돌아가면 BFCache 를 사용하기 때문에 $(document).ready 호출이 발생하지 않는다.
이 캐쉬에 상관없이 pageshow 이벤트가 발생하기 때문에 이 이벤트를 사용한다. */
window.addEventListener( "pageshow", (event) => 
{
    // if (event.originalEvent.persisted) {
        setCategory();
        removeCategory();	
        removeTag();
    // }
});

window.addEventListener( 'click', (event) =>
{
    sCurrentTag = event.target.dataset.tag;

    if ( sCurrentTag ) {
        let sHiddenElems = document.getElementsByClassName( 'hidden' );
        let sSelectedElems = document.getElementsByClassName( 'selected' );
        for ( let i = 0; i < sHiddenElems.length; i++ ) {
            sHiddenElems.item(i).classList.remove( 'hidden' );
        }

        for ( let i = 0; i < sSelectedElems.length; i++ ) {
            sSelectedElems.item(i).classList.remove( 'selected' );
        }

        filterByTagName( sCurrentTag );

        sSelectedTags = document.querySelectorAll(`[data-tag="${sCurrentTag}"]`);
        for ( let i = 0; i < sSelectedTags.length; i++ ) {
            sSelectedTags.item(i).classList.add('selected');
        }
    }
});

function filterByTagName( aTagName ) {
    if ( aTagName != "all") {
        let sAllPostCards = document.getElementsByClassName( 'post-wrapper' );

        
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
}