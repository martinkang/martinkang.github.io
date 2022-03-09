---
layout: post
title:  "[GitHub Blog - 8] - 기본 레이아웃 꾸미기 1"
description: "CSS 를 이용하여 기본 레이아웃을 만들어 보자."
date:   2022-02-11 17:20:00 +0900
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
HTML 은 인터넷 웹 문서의 구조와 형태를 표현하고 꾸며주는 역할을 한다.   
기본적으로 웹 페이지를 구성하기 위해선 HTML 을 이용하여 페이지를 구성해야 한다.  
HTML 을 쓸 줄 모른다면 아래 링크를 읽어보자.  
[[HTML] 자주 쓰이는 HTML 태그][html-link]   



<br>

# CSS
CSS(Cascading Style Sheets) 는 <span class="tooltip" id="id-1">마크업 언어</span>가 실제 표현되는 방식을 기술하는 스타일 언어이다.  
즉 화면 표시 방법을 정의한다.   
CSS 를 사용하기 위해선 HTML 태그, Display, Position 속성 그리고 CSS Selector 를 꼭 알아둬야 한다.  
복잡해 보이지만 최대한 간단하게 정리를 했다.   
아래 링크를 따라 먼저 숙지한 뒤 다음으로 넘어가자.  


## Display 속성
웹 문서안 요소들 사이의 배치와 크기를 지정하는 속성이다.  

[[CSS] - Display 속성 [inline, block]][display-link]  
[[CSS] - Display 속성 flex [flex container]][display2-link]  
[[CSS] - Display 속성 flex [flex item]][display3-link]  

## Position 속성
웹 문서안에 요소들의 위치를 지정하는 속성이다.   

[[CSS] - position 속성][position-link]

## CSS Selector
웹 문서안에 HTML 의 특정 태그나 속성에 접근하는 방식이다.    
[[CSS] - CSS Selector][css-sel-link]





<br>

작성예정
 

# 다음 주제
- [[GitHub Blog - 8] - 기본 레이아웃 꾸미기 2][layout-link]
<hr>

# 부록

<hr>

# 참조
- MDN Web Doc : [display 문서][mdn-display-link]
- MDN Web Doc : [position 문서][mdn-position-link]
- MDN Web Doc : [CSS 선택자][css-selector-link]
- 위키백과 : [마크업 언어][mark-link]

<hr>


<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    (markup, markup language) 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지 - 위키백과
    </div>
</div>

[mdn-position-link]: https://developer.mozilla.org/ko/docs/Web/CSS/position
[mdn-display-link]: https://developer.mozilla.org/ko/docs/Web/CSS/display
[base-page-link]: /develop/2022/01/15/blog-base-page.html
[config-link]: /develop/2022/01/20/blog-start-github-config.html
[jekyll-link2]: /develop/2021/12/21/blog-start-jekyll2.html
[display-link]: /study/2022/02/11/css-display.html
[display2-link]: /study/2022/02/11/css-display2.html
[display3-link]: /study/2022/02/12/css-display3.html
[position-link]: /study/2022/02/10/css-position.html
[css-selector-link]: https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors
[html-link]: /study/2022/03/09/html-tag.html
[css-sel-link]: /study/2022/02/28/css-selector.html
[mark-link]: https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4

[code-sandbox-link]: https://codesandbox.io/

[layout-link]: /develop/2022/02/10/blog-base-layout2.html