---
layout: post
title:  "[GitHub Blog - 5] - 블로그 이름 설정하기"
description: "<head> 와 _config.yml 을 수정하여 블로그 이름을 설정해보자."
date:   2022-01-20 19:20:00 +0900
categories: develop
tags: [blog, jekyll, html, Front-End]
img-tag: html
---

# \<head>
HTML \<head> 요소는 기계가 식별할 수 있는 문서 정보(<span class="tooltip" id="id-1">Metadata</span>)를 담는다.   
이러한 정보를 채워 넣으면 일부 검색 엔진이나,  
컨텐츠에서 페이지 작성자나 설명에 대한 정보를 추출해서 사용할 수 있다.  
그 외에도 인터넷 창에 페이지 이름이나 아이콘,  
링크 첨부시 나타나는 정보등을 바꿀 수도 있다.  


# _config.yml
jekyll 의 환경설정 파일이다.   
여기에 선언한 변수는 site.변수 로 <span class="tooltip" id="id-2">전역 변수</span>로 사용 가능하다.  
예를들어 _config.yml 에 temp: "temp value" 라고 써놓을 경우,  
이 Repository 내 어떤 문서에서든 site.temp 값을 쓸 수 있다.  
해당 값은 "temp values" 라는 값으로 변경된다.    
  
<br>

jekyll 에서 기본적으로 제공하는 변수들이 있는데, 나중에 직접 쓸때마다 다루겠다.  
미리 보고싶다면 - [지킬 변수][jekyll-var-link]   

<br>

# \<head> 수정

### Title 의 확인 

간단히 Title 을 수정해보자.   
Title 은 기본적으로 웹 페이지 창에 이름으로 나타난다.  

지금 내 Title 은 Document 로 설정되어 있다.  

![head](/assets/img/post-img/base-page/head.png){:class="lazyload" .post-img .img-w700}     

<br>
이제 웹 페이지상 내 Title 을 확인해보자.

![github-page](/assets/img/post-img/start-config/main-title.png){:class="lazyload" .post-img .img-w700}   


<br>
그리고 이렇게 카카오톡을 통해 링크를 보냈을때도 확인해보자. 

![github-page](/assets/img/post-img/start-config/kakao-title.png){:class="lazyload" .post-img .img-w350}  
  


### Title 의 수정

_indluce/head.html 파일을 수정하자.  
\<head> 와 \</head> 사이라면 어디든 상관없다.  
```
<title> 블로그 이름 </title>
```  

![github-page](/assets/img/post-img/start-config/head-title.png){:class="lazyload" .post-img .img-w650}   


이제 127.0.0.1:4000 에 접속해서 확인해보자.  
![github-page](/assets/img/post-img/start-config/main-title-modify.png){:class="lazyload" .post-img .img-w650}  

<br>
바뀐 것을 확인 했으면 GitHub Desktop 을 이용해 Commit & Push 를 하자.  
카카오톡 확인 안하는건 127.0.0.1 은 지금 내 로컬 컴퓨터 주소를 뜻하는 것으로,    
실제 존재하는 주소가 아니다.  
즉 실제로 GitHub 에 반영전까진 카카오톡에서 확인을 할 수 없다.  
Commit & Push 후 자신의 홈페이지에 접속해보고, 카카오톡 링크도 보내보자.  

![github-page](/assets/img/post-img/start-config/kakao-title-modify.png){:class="lazyload" .post-img .img-w350}  


# _config.yml 수정
_config.yml 을 수정해보자. 
이 _config.yml 에서 추가하거나 수정한 변수들은, 전역적으로 쓸 수 있다.  
예를들어 아래 config.yml 에 title 을 코딩독학으로 바꾸었다.  

![config](/assets/img/post-img/start-config/config.png){:class="lazyload" .post-img .img-w650}   

이 변수는 다른 페이지 어디서든 {site.title} 을 쓰면 저 부분은 코딩 독학 으로 값이 변경된다.  
그럼 아까 바꾼 \<head> 에 title 을 아래처럼 바꿔보자.  

![config-title-modi](/assets/img/post-img/start-config/config-title.png){:class="lazyload" .post-img .img-w650}   

config.yml 을 바꾸었으면 jekyll 을 재시작 해야한다.   
( _config.yml 을 제외하곤, 수정사항을 저장한 뒤 웹 페이지 새로고침하면 바로 반영된다. )    
터미널 창에서 Ctrl - C 를 누르면 종료가 되고, 다시 bundle exec jekyll server 를 수행하자.   

접속해보면 타이틀이 여전히 코딩 독학 인것을 볼 수 있다.  

<br> 

# _config.yml 은 왜 바꾼 건가?
\<head> 에서 title 태그 안에 코딩독학 이라 쓴걸 왜 site.title 로 굳이 바꾼 것일까?
<br>
예를들어 사이트 제목이 상단 네비바에 하나, 하단 푸터에 하나   
또 글 중간 중간 어딘가 하나씩 있다고 치자.  
만약 처음 head 에 코딩 독학을 친것처럼 직접 작성을 하면,   
나중에 title 이 바뀔때마다 해당 부분을 다 찾아서 바꿔줘야 한다.  
그런데 _config.yml 에 전역 변수로 설정해줄 경우,  
config.yml 에 title 값만 바꾸면 site.title 을 설정한 모든 부분의 값이 바뀐다 !!

<br>

다음엔 아래와 같은 <span class="tooltip" id="id-3">Favicon</span> 을 설정해보자.

![after-favicon](/assets/img/post-img/favicon/after-favicon.png){:class="lazyload" .post-img .img-w100}  
<br>



  
# 다음 주제
- [[GitHub Blog - 6] Favicon 을 설정해보자][favicon-link]

<hr>

<br> 

# 참고
- 취미로 코딩하는 개발자 : [GitHub 블로그 기본 설정하기][github-config-link]
- jekyll 번역 : [jekyll 공식페이지][jekyll-link]
- spsarolkar.github.io : [블로그 Theme 미리보기][theme-view-link]
- MDN Web Doc : [head: 문서 메타데이터 (헤더) 요소][head-link]
- MDN Web Doc : [head 태그에는 무엇이 있을까? HTML의 메타데이터][head-meta-link]

<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    다른 데이터를 설명해 주는 데이터이다. 대량의 정보 가운데에서 찾고 있는 정보를 효율적으로 찾아내서 이용하기 위해 일정한 규칙에 따라 콘텐츠에 대하여 부여되는 데이터
    </div>
    <div class="tooltip-description" id="desc-2">
    어느 지역에서나 쓸 수 있는 변수. 여기에서는 해당 Jekyll 프로젝트 내에서 쓸 수 있다
    </div>
    <div class="tooltip-description" id="desc-3">
    웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘
    </div>
</div>

[github-config-link]: https://devinlife.com/howto%20github%20pages/blog-config/
[jekyll-var-link]: https://jekyllrb-ko.github.io/docs/variables/
[jekyll-config-link]:https://jekyllrb-ko.github.io/docs/configuration/
[theme-view-link]: https://spsarolkar.github.io/rouge-theme-preview/
[head-link]:https://developer.mozilla.org/ko/docs/Web/HTML/Element/head

[head-meta-link]:https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

[favicon-link]: /develop/2022/01/02/favicon.html
