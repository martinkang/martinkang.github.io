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

# CSS
CSS(Cascading Style Sheets) 는 마크업 언어가 실제 표현되는 방식을 기술하는 스타일 언어이다.  
즉 화면 표시 방법을 정의한다.   
CSS 를 사용하기 위해선 아래 두가지 요소를 꼭 알아둬야 한다.  
아래 링크를 따라 먼저 숙지한 뒤 다음으로 넘어가자.  

## Display 속성
[[CSS] - Display 속성 [inline, block]][display-link]  
[[CSS] - Display 속성 [flex]][display2-link]  

## Position 속성
[[CSS] - position 속성][position-link]


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

<hr>


<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    Jekyll 의 환경 설정 파일
    </div>
    <div class="tooltip-description" id="desc-2">
    Gem 은 루비 프로젝트에 포함시킬 수 있는 코드이며 기능들을 패키지화 해서 다른 사람들이나 프로젝트에 공유할 수 있게 함.
    Gemfile 은 해당 프로젝트에서 필요한 Gem 들의 목록을 기록한 파일이다.
    </div>
    <div class="tooltip-description" id="desc-3">
    Hyper Text Markup Languag. 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공
    </div>
    <div class="tooltip-description" id="desc-4">
    Ruby 기반의 오픈소스 HTML 템플릿 언어
    </div>
</div>

[mdn-position-link]: https://developer.mozilla.org/ko/docs/Web/CSS/position
[mdn-display-link]: https://developer.mozilla.org/ko/docs/Web/CSS/display
[base-page-link]: /develop/2022/01/15/blog-base-page.html
[config-link]: /develop/2022/01/20/blog-start-github-config.html
[jekyll-link2]: /develop/2021/12/21/blog-start-jekyll2.html
[display-link]: /study/2022/02/11/css-display.html
[display2-link]: /study/2022/02/11/css-display2.html
[position-link]: /study/2022/02/10/css-position.html

[code-sandbox-link]: https://codesandbox.io/

[layout-link]: /develop/2022/02/10/blog-base-layout2.html