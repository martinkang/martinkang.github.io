---
layout: post
title:  "[CSS] CSS Selectors - Pseudo-classes, Pseudo-elements, Combinators Selectors"
description: "Pseudo-classes Pseudo-elements, Combinators, Selectors 에 대해 알아보자"
date:   2022-03-13 13:20:00 +0900
categories: study
tags: [html, Front-End]
img-tag: html
---

# CSS Selectors
CSS Selectors 가 무엇인지 잘 모르겠다면     
[[CSS] CSS Selectors ( Type, Class, ID, Attribute Selectors )][css-sel-link] 를 먼저 읽어보자.  

<br>

# 예제 HTML 문서
아래 HTML 문서를 기준으로 각각 CSS Selectors 를 이용하여 스타일을 변경할 때,  
각각 어떻게 변하는지 알아보자.  
아래는 이 페이지에서 쓸 예제의 HTML, CSS 이다.  

```
<div class="selector-box">
    <div class="selector-box-title"><h1>h1 : CSS Selecotr 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>

<style>
    .selector-box {border: dashed black;}
    .selector-box-title { text-align: center; }

    .parent { font-size: x-large; }
    .child { font-size: large; text-indent: 1em; }
    .grandchild { font-size: medium; text-indent: 2em; }
</style>
```

<div class="selector-box">
    <div class="selector-box-title"><h1>h1 : CSS Selecotr 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>

<br>


# Pseudo-classes Selectors 
Pseudo-classes 는 요소의 특정 상태를 뜻한다.   
***'Tag:Pseudo-classes' 를 써서 특정 상태의 요소를 선택할 수 있다.***   
예를들어 a:hover {} 라 쓸 경우   
a 태그에 마우스를 올린 상태 (hover) 를 선택하게 된다.  


```
<body>
    <div class="selector-bo pseudo-classes-box">
        <a href="https://martinkang.github.io/">코딩독학 링크</a>
    </div>
</body>

<style>
    a:hover { color: red; }
</style>
```

<div class="selector-box pseudo-classes-box">
    <div class="selector-box-title"><h1>Pseudo-classes Selectors 예제 박스</h1></div>
    <div>아래 링크에 마우스를 올려보자</div>
    <a href="https://martinkang.github.io/">코딩독학 링크</a>
</div>

<style>
    .pseudo-classes-box a:hover { color: red; }
</style>

color 속성은 글자색을 표현한다. 따라서 \<a> 태그에 마우스를 올릴 경우 글씨가 red 로 변하게 된다.  
<br>

hover 말고도 다른 Pseudo-classes 가 궁금하면 [MDM Web Docs - Pseudo-classes][Pseudo-classes-link] 여길 참고하자.  

<br>

# Pseudo-elements Selectors
pseudo-elements 는 요소의 특정 부분을 뜻한다.   
***'Tag::Pseudo-elements' 를 써서 요소의 특정 부분을 선택할 수 있다.***   
예를들어 p::first-line {} 라 쓸 경우  
문단의 첫번째 텍스트 라인을 선택하게 된다.

```
<body>
    <div class="selector-box pseudo-elements-classes-box">
        <p>
            첫번째 문단<br>
            두번째 문단<br>
            세번째 문단<br>
        </p>
    </div>
</body>

<style>
    p::first-line { color: red; }
</style>
```

<div class="selector-box pseudo-elements-classes-box">
        <p>
            첫번째 문단<br>
            두번째 문단<br>
            세번째 문단<br>
        </p>
</div>

<style>
    .pseudo-elements-classes-box p::first-line { color: red; }
</style>

<br>

first-line 말고도 다른 Pseudo-elements 가 궁금하면 [Pseudo-elements][Pseudo-elements-link] 여길 참고하자.  


<br>

# Combinators Selectos
다른 Selectors 와 결합하는 Selectors.  
- Descendant Selectors : 모든 후손 요소를 선택
- Child Selectors : 바로 아래 자손 요소만 선택

<br>

## Descendant Selectors
HTML 요소중 특정 조상의 하위 요소를 선택한다.  
***Selectors 사이에 ' ' (공백) 을 이용하여 요소를 선택한다.***    
class 속성값이 parent 인 요소의 후손중 div 태그를 가진 요소를 선택하기 위해선  
.parent div {} 를 쓰면 된다.  
```
.grandchild { background-color : blue; color: white; }
.parent div { background-color : red; }
```


<div class="selector-box descendant-selectos-box">
    <div class="selector-box-title"><h1>h1 : Descendant Selectors 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>

<style>
    .descendant-selectos-box .grandchild { background-color : blue; color: white; }
    .descendant-selectos-box .parent div { background-color : red; }
</style>
grandchild 의 배경색을 blue, 글자색을 white 로 지정하였지만    
.parent div 를 이용하여 class 속성값이 parent 인 요소의 모든 후손중    
div 태그를 가진 요소의 배경색을 red 로 변경하였기 때문에  
parent 의 후손이고 div 태그를 가진 grandchild 역시 배경색이 red 가 된다.   

<br>

## Child Selectors
HTML 오소중 특정 부모의 자식 요소를 선택한다.  
***Selectors 사이에 '>' 을 이용하여 요소를 선택한다.***  
class 속성값이 parent 인 요소 바로 한단계 아래 자식요소인 div 태그를 선택하기 위해선  
.parent > div {} 를 쓰면 된다.  

<br>

Descendant Selectors 는 하위의 모든 요소가 포함되지만 Child Selectors 는 자신의 바로 아래 요소만 선택 가능하다.  

```
.grandchild { background-color : blue; color: white; }
.parent > div { background-color : red; }
```


<div class="selector-box child-selectos-box">
    <div class="selector-box-title"><h1>h1 : child Selectors 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>

<style>
    .child-selectos-box .grandchild { background-color : blue; color: white; }
    .child-selectos-box .parent > div { background-color : red; }
</style>

grandchild 의 배경색을 blue, 글자색을 white 로 지정하였지만    
.parent > div 를 이용하여 class 속성값이 parent 인 요소의 모든 자손중    
div 태그를 가진 요소의 배경색을 red 로 변경하였기 때문에  
parent 의 후손이고 div 태그를 가진 child 의 배경색이 red 가 된다.   
하지만 ***grandchild 는 parent 의 자손은 아니기 때문에, 자신의 CSS 속성값인 blue 를 가지게 된다.***  


<br>

## Adjacent sibling combinator Selectors
HTML 요소중 특정 태그/속성을 가진 ***바로 인접한 형제 요소만 선택***한다.    
***Selectors 사이에 '+  을 이용하여 요소를 선택한다.***     
class 속성값이 grandchild_1-1 인 요소의 형제 요소인 div 태그를 선택하기 위해선  
.grandchild_1-1 + div {} 를 쓰면 된다.  

```
.grandchild_1-1 + div { background-color : red; }
```


<div class="selector-box adjacent-sibling-selectos-box">
    <div class="selector-box-title"><h1>h1 : Adjacent Sibling Selectors 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>


<style>
    .adjacent-sibling-selectos-box .grandchild_1-1 + div { background-color : red; }
</style>

grandchild_1-1 요소의 바로 다음 div 태그를 가진 요소가 선택되어 배경색이 red 로 변경된다.  

<br> 

## General sibling combinator Selectors
HTML 요소중 특정 태그/속성을 가진 ***인접 모든 형제 요소를 선택***한다.  
***Selectors 사이에 '~' 을 이용하여 요소를 선택한다.***  
class 속성값이 grandchild_1-1 인 요소의 형제 요소인 div 태그 모두를 선택하기 위해선  
.grandchild_1-1 ~ div {} 를 쓰면 된다.  

```
.grandchild_1-1 ~ div { background-color : red; }
```


<div class="selector-box general-sibling-selectos-box">
    <div class="selector-box-title"><h1>h1 : General Sibling Selectors 예제 박스</h1></div>
    <div class="parent parent1"> parent1
        <div class="child child_1-1"> 1. parent1 의 자식 child_1-1</div>
        <div class="child child_1-2"> 2. parent1 의 자식 child_1-2
            <div class="grandchild grandchild_1-1"> 2.1 parent1 의 자식 child_1-2 의 자식 grandchild_1-1</div>
            <div class="grandchild grandchild_1-2" test-attr="test"> 2.2 parent1 의 자식 child_1-2 의 자식 grandchild_1-2, Attribute : test-attr="test"</div>
            <div class="grandchild grandchild_1-3"> 2.3 parent1 의 자식 child_1-2 의 자식 grandchild_1-3</div>
        </div>
    </div>
    <div class="parent parent2"> parent2
        <div class="child child_2-1"> 1. parent2 의 자식 child_2-1</div>
        <div class="child child_2-2" id="test-id"> 2. parent1 의 자식 child_2-2, id : test-id
            <div class="grandchild grandchild_2-1"> 2.1 parent2 의 자식 child_2-2 의 자식 grandchild_2-1</div>
            <div class="grandchild grandchild_2-2" test-attr="test2"> 2.2 parent2 의 자식 child_2-2 의 자식 grandchild_2-2, Attribute : test-attr="test2"</div>
        </div>
    </div>
</div>


<style>
    .general-sibling-selectos-box .grandchild_1-1 ~ div { background-color : red; }
</style>

grandchild_1-1 요소의 형제중 div 태그를 가진 모든 요소가 선택되어 배경색이 red 로 변경된다.  

<br>


<hr>

# 참조
- MDN Web Docs: [CSS Selectors][css-selector-link]
- MDN Web Docs: [Pseudo-classes][Pseudo-classes-link]
- MDN Web Docs: [Pseudo-elements][Pseudo-elements-link]




[css-selector-link]: https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors
[Pseudo-classes-link]: https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes
[Pseudo-elements-link]: https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements
[display2-link]: /study/2022/02/11/css-display2.html

[css-sel-link]: /study/2022/03/10/css-selector.html


<style>
    .selector-box {border: 5px dashed blue;}
    .selector-box-title { text-align: center; }

    .parent { font-size: x-large; }
    .child { font-size: large; text-indent: 1em; }
    .grandchild { font-size: medium; text-indent: 2em; }
</style>