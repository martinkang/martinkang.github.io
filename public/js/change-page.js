function setCategory() {
    let hash = window.location.hash.substring(1).toLocaleLowerCase();

     if ( hash ) {
        let sCategory = $(".nav ." + hash + " .nav-item > .name")
        /* id 가 category-name 인 클래스의 text 를 text() 로 설정한다 */
        $('#category-name').text($(sCategory).text());
     }
     else {
        $('#category-name').text("전체 글");
     }
}

function removeCategory() {
    $('.hidden').removeClass('hidden');
    $('.selected').removeClass('selected');

    if (window.location.hash) {
        let hash = window.location.hash.substring(1).toLocaleLowerCase();
      
        let items = $('.post-list-item').each((i, e) => {
            if (!$(e).hasClass('post-category-' + hash)) {
                $(e).hide();
            } else {
                $(e).show();
            }
        });
    }

    $(`.tag[data-tag="all"]`).addClass('selected');
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

$(window).on('hashchange', () => {
    setCategory();
    removeCategory();	
    removeTag();
});

$(document).ready(() => {		
    setCategory();
    removeCategory();	
    removeTag();
});

/* https://programmingsummaries.tistory.com/380 
뒤로 가기 버튼으로 돌아가면 BFCache 를 사용하기 때문에 $(document).ready 호출이 발생하지 않는다.
이 캐쉬에 상관없이 pageshow 이벤트가 발생하기 때문에 이 이벤트를 사용한다. */
$(window).on("pageshow", (event) => 
{
    if (event.originalEvent.persisted) {
        setCategory();
        removeCategory();	
        removeTag();
    }
});

$("[data-tag]").click((e) => {
    $('.hidden').removeClass('hidden');
    $('.selected').removeClass('selected');

    currentTag = e.target.dataset.tag;
    filterByTagName(currentTag);
})

function filterByTagName(tagName) {
    if ( tagName != "all") {
        $('.post-wrapper').each((index, elem) => {
            if (!elem.hasAttribute(`data-${tagName}`)) {
            $(elem).addClass('hidden');
            }
        });
        $(`.tag`).removeClass('selected');
        $(`.tag[data-tag=${tagName}]`).addClass('selected');
    }
    else {
        $(`.tag[data-tag="all"]`).addClass('selected');
    }
}