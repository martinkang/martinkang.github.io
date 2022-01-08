function setTags( aTagCount, aTags )
{
  let sTags = "";

  for( let i = 0; i < aTagCount; i++ )
  {
    sTags = sTags + '<span class="tag" data-tag="' + aTags[i] + '">' + 
    aTags[i] + '</span>'
  }

  return sTags;
}

function setPostCard( aSearchResult ) {
  let sPostCard = '';
  let sTags = "";

  sTags = setTags( aSearchResult.tags.length, aSearchResult.tags );

  sPostCard =  '<div class="post-card">' +
                '<a class="post-link" href="' + aSearchResult.aUrl + '">' +
                  '<div class="post-head">' +
                    '<span class="post-head-img"><i class="'+ aSearchResult.imgtag + '"></i></span>' +
                    '<span class="post-head-title">' + aSearchResult.title + ' </span>' +
                  '</div>' +
                  '<div class="post-description">' + aSearchResult.description + '</div>' +
                  '<div class="post-footer">' +
                    '<div class="post-footer-tag-wrapper">' +
                      '<div class="tag-box">' + sTags + '</div>' +
                    '</div>' +
                    '<div class="post-footer-date">' + aSearchResult.date + '</div>' +
                  '</div>' + 
                '</a>' +
               '</div>';

  return sPostCard;
}

/* 즉시 실행 함수 https://beomy.tistory.com/9 */
$(function () {
  let sPosts = [];
  $.get('/search/data.json', function (data) {
    sPosts = data;
  });
  
  $('#search').on('keyup', function () {
    let sKeyword = this.value.toLowerCase();
    let sSearchResult = [];

    if (sKeyword.length > 0) {
      $('#search-result').show();
      $('#search-result').text('');
    } 
    else {
      $('#search-result').hide();
    }

    $('#search-result').text('');
  
    for (let i = 0; i < sPosts.length; i++) {
      let sPost = sPosts[i];
      if (
        ( sPost.title.toLowerCase().indexOf(sKeyword) >= 0 ) ||
        ( sPost.description.toLowerCase().indexOf(sKeyword) >= 0 )
      ) {
        sSearchResult.push(sPost);
      }
    }
    if (sSearchResult.length === 0) {
      $('#search-result').append(
        '<div class="result-item"><div class="description">검색 결과가 없습니다.</div></div>'
      );
    } 
    else {
      for (let i = 0; i < sSearchResult.length; i++) {
        $('#search-result').append( setPostCard(sSearchResult[i]) );
      }
    }
  });
});
