$(function () {
  var posts = [];
  $.get('/search/data.json', function (data) {
    posts = data;
  });
  $('#search').on('keyup', function () {
    var keyword = this.value.toLowerCase();
    var searchResult = [];

    if (keyword.length > 0) {
      $('#search-result').show();
    } else {
      $('#search-result').hide();
    }
    $('.result-item').remove();

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      if (
        post.title.toLowerCase().indexOf(keyword) >= 0 ||
        post.description.toLowerCase().indexOf(keyword) >= 0
      ) {
        searchResult.push(post);
      }
    }
    if (searchResult.length === 0) {
      $('#search-result').append(
        '<div class="result-item"><div class="description">There is no search result.</div></div>'
      );
    } else {
      for (var i = 0; i < searchResult.length; i++) {
        $('#search-result').append(
           '<div class="post-card">' +
          '<a class="post-link" href="' + searchResult[i].url + '">' +
              '<div class="post-head"><span class="post-head-img">' +
                      '<i class="'+ searchResult[i].imgtag + '"></i>' +
              '</span>' +
                  '<span class="post-head-title">' + searchResult[i].title + ' </span>' +
              '</div>' +
              '<div class="post-description">' + searchResult[i].description + '</div>' +
              '<div class="post-footer">' +
                  '<div class="post-footer-tag-wrapper">' +
                          '<div class="tag-box">' +
                              '<span class="tag" data-tag="' + searchResult[i].tags + '">' + searchResult[i].tags + '</span>' +
                          '</div>' +
                  '</div>' +
                  '<div class="post-footer-date">' + searchResult[i].date + '</div>' +
          '</div></a></div>'
        );
      }
    }
  });
});