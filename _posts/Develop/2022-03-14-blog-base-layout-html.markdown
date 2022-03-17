---
layout: post
title:  "[GitHub Blog - 10] - HTML 을 이용하여 기본 레이아웃 꾸미기"
description: "HTML 을 이용하여 기본 레이아웃을 만들어 보자."
date:   2022-03-14 17:20:00 +0900
categories: develop
tags: [blog, html, css, Front-End]
img-tag: css
---

# 목표 레이아웃
아래와 같은 레이아웃을 만드는걸 목표로 한다.  
실제 이 사이트는 푸터(Footer) 를 쓰지 않지만,   
연습을 위해 아래 사진의 검정 부분에 푸터를 만들어 본다.   
![base](/assets/img/post-img/base-layout/base.png){:class="lazyload" .post-img .img-w750}  
- 초록 
    - 네비바(Navigation Bar)
    - 웹사이트 메뉴로, 웹 사이트를 탐색하기 위한 링크를 가지고 있다.   
- 빨강 
    - 헤더(Header)
    - 해당 페이지나, 카테고리의 제목을 나타낸다.  
- 파랑
    - 컨텐츠(Contents)
    - 실제 페이지의 내용을 표시한다.  
- 검정 
    - 푸터(Footer)
    - 보통 사이트 연락처, 사이트맵, 저작권 정보 등을 표기한다.

<br>

위와 같은 구성으로 간단히 만들어 보자.  

<br>

# HTML 
***HTML 은 인터넷 웹 문서의 구조와 형태를 표현하고 꾸며주는 역할***을 한다.   
기본적으로 웹 페이지를 구성하기 위해선 HTML 을 이용하여 페이지를 구성해야 한다.  
HTML 을 쓸 줄 모른다면 아래 링크를 읽어보자.  

<br>
너무 많아 어려울거 같다면 아래 태그들만 읽기를 추천한다.    
나머지 태그는 모르는게 나올때 해당 링크에서 찾아보면 된다.  
어짜피 못외운다.    
<br>

***꼭 봐야하는 태그*** : \<header> \<main> \<footer> \<nav> \<a> \<link> \<div> \<span> \<img>   
[[HTML] 자주 쓰이는 HTML 태그][html-link]   



<br>

## HTML 구성 꾸며보기
위에 자주쓰이는 HTML 태그를 보면 ***콘텐츠 구획*** 란이 있다.  
이 콘텐츠 구획을 이용하여 HTML 문서를 체계적으로 구성하면   
개발할때 그리고 나중에 유지보수에 도움이 된다.   
(일주일만 지나도 내가 짠걸 기억못할 수 있기 때문에,   
속성 이름이나 이 구획만 보고 이게 어떤 목적이였는지 알 수 있는게 좋다. )   

<br>

우선 위에서 나눈 각 구획을 태그를 이용하여 나타내보자.  
나누는 구분은 자신이 정하는 것이다.   
정답은 없고, 나중에 봤을때 이게 어떤 의도로 만들어진 구획인지 파악이 가능하면 된다.  

- 초록 네비바 : \<nav> 태그
- 빨강 헤더   : \<header> 태그
- 파랑 컨텐츠 : \<main> 태그
- 검정 푸터   : \<footer> 태그

<br>

이제 지난번에 만든 HTML 문서를 ( default.html ) 보자.  
기억이 안난다면 [[GitHub Blog - 6] - 기본 접속페이지 index.html 만들기][base-link] 여기를 참조하자.  

![default](/assets/img/post-img/base-layout/default.png){:class="lazyload" .post-img .img-450}  

위의 페이지는 jekyll 에서 기본으로 제공하는 페이지를 수정한 페이지이다.  
보면 \<header>, \<main>, \<footer> 태그를 이미 쓰고있다.  
위의 구획들은 보편적으로 쓰이는 태그로   
다른 웹페이지를 분석할때 이 태그들을 따라 분석하면 도움이 많이 된다.

<br>
\<nav> 태그가 없으니 추가하자.  
include 를 써서 재활용할 예정이므로 _includes 폴더안에 nav.html 을 만들고  
아래와 같이 \<nav> 태그를 만든다.     
( 네비바는 모든페이지의 좌측에 존재할 것이기 때문에 모든 페이지마다 네비바를 붙여 넣을 것이다.  
따라서 nav.html 을 만들고 include 하면 모든 페이지마다 재사용이 가능하다. )  


_include/nav.html
```
<nav class="site-nav">
네비게이션바
</nav>
```

만들었으면 기존 default.html 에서 \<header> 의 위에 위치시키자.  

<br>

![default2](/assets/img/post-img/base-layout/default-2.png){:class="lazyload" .post-img .img-450}  

nav.html 의 위치는 \<body> 의 맨위에 위치시키자.  
이유는 각 요소의 배치 순서는 좌->우, 상->하 이기 때문에 네비바를 맨 위에 위치하거나,    
좌측에 위치할 경우 \<body> 요소중 제일 위에 있는게 좋다.  
(만약 제일 우측에 위치하고 싶으면 \<body> 의 제일 오른쪽에 위치하자)  



<br>    
그럼 이제 127.0.0.1:4000 로 들어가 확인해보자.  
아래와 같이 네이게이션바를 추가하였다.  

![default-page](/assets/img/post-img/base-layout/default-page.png){:class="lazyload" .post-img .img-450}  

<br>

이제 기본적인 HTML 구조를 만들었으니 다음은 CSS 를 이용하여   
적절한 부분을 적절한 곳에 위치시키고 꾸며 보자.  
 

# 다음 주제
- [[GitHub Blog - 11] - CSS 를 이용하여 기본 레이아웃 꾸미기][layout-link]





[html-link]: /study/2022/03/09/html-tag.html
[base-link]: /develop/2022/01/17/blog-base-page2.html
[layout-link]: /develop/2022/03/15/blog-base-layout-css.html