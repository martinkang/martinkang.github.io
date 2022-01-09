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

function setImg( aImgTag )
{
  let sImgPath = '';

  if ( aImgTag.slice(0,2) == 'fa' ) {
    /* img from fontawesome */
    sImgPath = '<i class="'+ aImgTag + '"></i>';
  }
  else {
    sImgPath = '<img src="\\assets\\img\\infos\\tag-' + aImgTag.toLowerCase() + '.webp" >';
  }

  return sImgPath;
}

function setPostCard( aSearchResult ) {
  let sPostCard = '';
  let sTags = "";

  sTags = setTags( aSearchResult.tags.length, aSearchResult.tags );

  sPostCard =  '<div class="post-card">' +
                '<a class="post-link" href="' + aSearchResult.url + '">' +
                  '<div class="post-head">' +
                    '<span class="post-head-img">' + setImg(aSearchResult.imgtag) + '</span>' +
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

function searchKeyword( aPosts, aKeyword )
{
  let sSearchResult = [];

  if (aKeyword.length > 0) {
    $('#search-result').show();
    $('#search-result').text('');
  } 
  else {
    $('#search-result').hide();
  }

  for (let i = 0; i < aPosts.length; i++) {
    let sPost = aPosts[i];
    if (
      ( sPost.title.toLowerCase().indexOf(aKeyword) >= 0 ) ||
      ( sPost.description.toLowerCase().indexOf(aKeyword) >= 0 )
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
}

/* 즉시 실행 함수 https://beomy.tistory.com/9 */
$(function () {
  let sPosts = [];
  let sImgTags = [];

  $.get('/search/data.json', function (data) {
    sPosts = data;
  });


  $('#search').on('keyup', function () {
    let sKeyword = this.value.toLowerCase();
    searchKeyword( sPosts, sKeyword );
  });

  $(window).on("pageshow", (event) => 
  {
    let sInputBox = document.getElementById('search');
    if ( sInputBox.value) {
      searchKeyword( sPosts, sInputBox.value );
    }
  });
});

