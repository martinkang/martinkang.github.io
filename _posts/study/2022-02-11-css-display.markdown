---
layout: post
title:  "[CSS] - Display 속성 [inline, block]"
description: "CSS 의 Display 속성 inline, block 에 대해 알아보자."
date:   2022-02-11 14:20:00 +0900
categories: study
tags: [css, Front-End]
img-tag: css
---


<script defer src="/public/js/iframe.js"></script>

# Display 속성
HTML 요소(Element) 의 외부와 내부 자식 요소의 디스플레이 유형을 설정한다.  
외부적으로 자신과 다른 요소의 배치 레이아웃을 설정하고,    
내부 자식 요소의 배치 레이아웃을 설정한다.   

<br>


# 예제 Box 속성값
- 이 페이지에서 쓰는 예제 box 들의 공통 속성 값.
    - width: 50px 
    - height: 50px
    - margin: 5px
<br>

# Display 속성 별 특징

## none
- 해당 요소를 접근성 트리에서 제외한다.
    - ***visibility: hidden 과 다르게, 요소 공간을 차지하지 않는다.***
    - 더 자세한 내용은 
 <span class="tooltip" id="id-1">DOM</span>과 함께 이야기 하고, 지금은 none 과 hidden 의 차이점만 기억하자.  
- display 속성
    - zero box
        - display: inline-block 
        - ***visibility: hidden***
    - one, three box
        - display: inline-block
    - two box
        - ***display: none***
<iframe class="code-box" src="/assets/html/base-layout/none.html"></iframe>


위의 사진을 보면   
- one 왼편에 빈칸이 있다.
    - zero box 가 공간을 차지하고 있지만 visibility 가 hidden 이라 보이지 않는다.
- one 오른편에 three 가 있다.
    - ***two 는 display 가 none 이라 공간을 차지하지 않는다***.

    

## inline

- 요소간에 줄바꿈 없이 ***한 줄에 다른 요소들이 나란히 배치.***
- 부모 요소의 공간이 부족하면 다음줄로 넘어간다.
- ***width 와 height 속성을 사용 불가***. 
    - ***요소안의 content 의 크기만큼 공간***을 차지한다
- ***margin 은 좌우 값만 적용***된다.  
- 기본적으로 inline 속성을 가진 HTML 태그 
    - \<span>, \<a>, \<em> 태그 등

<br>


<iframe class="code-box" src="/assets/html/base-layout/inline.html"></iframe>

위의 사진을 보면 
- 모든 요소들 끼리 전부 일렬로 배치되어 있다.  
- 각 box 의 크기를 같게 설정 하였지만, 크기가 각기 다르다.     
    - inline 은 컨텐츠 만큼의 크기를 가지기 때문에, box 는 글씨크기 이다.   
    - 즉 ***width 와 heigth 속성을 설정하여도 적용이 안된다.*** 
- margin 전체 값을 주었다.
    - 좌우 box 끼리의 공백이 존재한다.
    - 부모 요소 ( 검은 점선 ) 과는 공백이 존재하지 않는다.  
    - 즉 inline 에서 상하 margin 은 적용되지 않는다.    

<br>

## block
- block 속성을 지닌 요소는 ***무조건 한줄을 차지***하여, 다른 요소는 아래줄로 내려간다.   
- width 와 height 속성을 이용하여 크기 지정 가능
    - 따로 지정을 하지 않으면 width 부모의 크기만큼, height 는 컨텐츠 크기만큼 지정된다. 
- 기본적으로 block 속성을 가진 HTML 태그
    - \<div>, \<p>, \<h1> 태그 등

<br>

<iframe class="code-box" src="/assets/html/base-layout/block.html"></iframe>

위의 사진을 보면 
- 모든 요소들 각각 한줄을 차지하고 있다.    
- 각 box 의 크기가 같다.     
- margin 전체 값을 주었다.
    - 전후좌우 모든 같은 공백 값이 적용되었다.    

<br>

## inline-block
- inline 과 같이 요소간에 줄바꿈 없이 ***한 줄에 다른 요소들이 나란히 배치.***
- block 과 같이 ***width 와 height 속성을 이용하여 크기 지정 가능***. 
    - 따로 지정을 하지 않으면, inline 과 같이 컨텐츠 크기만큼 지정된다.
- block 과 같이 ***margin 전후좌우 적용***된다.  
- 즉 ***inline 과 block 의 속성 모두***를 가지고 있다.  
- 기본적으로 inline-block 속성을 가진 HTML 태그 
    - \<button>, \<input>, \<select> 등

<br>
<iframe class="code-box" src="/assets/html/base-layout/inline-block.html"></iframe>

위의 사진을 보면 
- 모든 요소들 끼리 전부 일렬로 배치되어 있다.  
- 각 box 의 크기가 같다.     
- margin 전체 값을 주었다.
    - 전후좌우 모든 같은 공백 값이 적용되었다.    
<br>

다음엔 Display 속성 중 flex 에 대해 알아보자.  
grid 라는 속성도 있지만, 이 홈페이지에선 쓰질 않고 호환이 안되는 부분이 많아 차후 정리해 보자.  

<br>

# 다음 주제
- [[CSS] - Display 속성 flex [flex container]][display2-link]

<hr>

# 참조
- MDN Web Docs: [display 문서][display-link]
- 위키피아 : [문서 객체 모델][dom-link]
- 1분 코딩 : [CSS 레이아웃을 시작하는 사람들이 반드시 알아야 할 개념][display-1min-link]
<hr>


<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    문서 객체 모델( Document Object Model ),  XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스.
    </div>
</div>

[dom-link]: https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%EA%B0%9D%EC%B2%B4_%EB%AA%A8%EB%8D%B8
[display-link]: https://developer.mozilla.org/ko/docs/Web/CSS/display
[display-1min-link]: https://studiomeal.com/archives/282

[display2-link]: /study/2022/02/11/css-display2.html




