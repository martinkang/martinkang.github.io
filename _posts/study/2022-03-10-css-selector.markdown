---
layout: post
title:  "[CSS] CSS Selectors 정의와 Type, Class, ID, Attribute Selectors"
description: "CSS Selectors 정의와 Type, Class, ID, Attribute Selectors 에 대해 알아보자"
date:   2022-03-10 13:20:00 +0900
categories: study
tags: [html, Front-End]
img-tag: html
---

# CSS Selectors
스타일을 지정할 웹 페이지의 HTML 요소를 지정하는데 사용한다.  
선택하는 방법에 따라 다양한 CSS Selectors 가 있다.  

![css-selectors](/assets/img/post-img/base-layout/css-selector.png){:class="lazyload" .post-img .img-w400} 

## CSS Selecotrs List
CSS Selectors 는 단일 대상뿐 아니라 (,) 를 사용하여 List 처럼 사용할 수 있다.
```
h1 { color : red; }
.post-title { color : red;}
```  
위와 같이 h1 요소 또는 class 가 post-title 의 폰트 컬러 스타일이 red 로 지정되었을 때   
아래와 같이 표현이 가능하다.
```
h1,
.post-title {
    color : red;
}
```
<br>

CSS Selecotrs 에 유효하지 않은 값이 있을경우 ( 잘못된 Selectors 사용 또는 잘못된 속성 값 )   
***해당 Selecotrs 에 지정된 속성은 전부 무효***가 된다.  
( ***별다른 에러 메시지가 없으므로*** 지정한 속성이 적용이 안되었다면 Selecotrs 나 해당 속성 값을 확인해보자  )  

<br>

# HTML Tag 의 구성
Selecotrs 를 사용하기 위해선 HTML Tag 의 구성을 알아야 한다.  
![HTML-elements](/assets/img/post-img/base-layout/HTML-elements.png){:class="lazyload" .post-img .img-w700} 
- 태그 ( Tag ) : 요소에 의미를 주는 식별자
- 속성 ( Attribute ) : 요소의 성격을 표현
- 값 ( Value ) : 요소의 성격을 나타내는 값

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

## 요소의 다중 속성값 사용
위의 예제를 보면 \<div class="grandchild grandchild_1-1"> 와 같이    
class 속성값이 스페이스로 나누어진걸 볼 수 있다.      
이 요소는 class 속성값이 grandchild 와 grandchild_1-1 로 두개의 속성값을 가진다.    
***( 속성값은 스페이스로 구분한다. )***     

<br>

이는 하나의 요소에 다양한 CSS 속성값을 부여하고 싶을때 사용한다.   
예를들어 몇개의 비슷한 요소들의 backgorund-color 를 red 로 설정하고 싶지만   
이 중 몇개의 요소의 글씨색에 차별을 주고 싶다.   
이럴땐 공통의 backgorund-color 부여하고 싶은 요소에 같은 class 속성값을 준 뒤 ( "grandchild" )     
CSS Selectors 를 이용하여 이 grandchild 의 backgorund-color 를 red 로 지정한다.  

<br>

그리고 글씨색을 별도로 지정하고 싶은 box 에 별도의 속성값을 추가해주고 ( grandchild_1-1 와 grandchild_1-3 )   
CSS Selecotrs 를 이용하여 속성 값을 따로 지정하면 된다.    
```
.grandchild { background-color: red; }
.grandchild_1-1 { color: white; }
.grandchild_1-3 { color: yellow; }
```
<div class="selector-box selector-multiple-attr-value">
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
.selector-multiple-attr-value .grandchild { background-color: red; }
.selector-multiple-attr-value .grandchild_1-1 { color: white; }
.selector-multiple-attr-value .grandchild_1-3 { color: yellow; }
</style>
class 속성값으로 grandchild 를 가진 모든 요소들의 배경색이 빨강 글씨색이 검정 이지만   
grandchild_1-1 와 grandchild_1-3 만 글씨색이 다른걸 볼 수 있다. 
즉 grandchild 라는 공통의 CSS 속성값과 grandchild_1-1, grandchild_1-3 이란 CSS 속성값을 따로 부여 가능하다.   
<br>


# Type Selectors
HTML 요소중 Tag 를 대상으로 하는 Selectors.   
***Selector 로 Tag 를 그대로 쓰면 된다.***    
즉 h1 Tag 를 선택하고 싶으면 h1 {} 를 쓰고 {} 안에 CSS 속성 값을 설정해준다.   
```
h1 { background-color : red; }
```

<div class="selector-box type-selector-box">
    <div class="selector-box-title"><h1>h1 : Type Selectors 예제 박스</h1></div>
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
.type-selector-box h1 { background-color : red; }
</style>

h1 태그를 가진 요소만 배경색이 red 가 된것을 볼 수 있다.  
<br>

# Class Selectors
HTML 요소중 Class 속성 값을 대상으로 하는 Selectors.    
***class 속성값 앞에 '.' 을 붙여 해당 요소를 선택한다.***     
즉  class="child" 를 선택하고 싶으면 .child {} 를 쓰고 {} 안에 CSS 속성 값을 설정해준다.    
```
.child { background-color : red; }
```

<div class="selector-box class-selector-box">
    <div class="selector-box-title"><h1>h1 : Class Selectors 예제 박스</h1></div>
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
.class-selector-box .child { background-color : red; }
</style>

Class 속성값에 child 를 가진 모든 요소들 배경색이 red 가 되었다.   
grandchild 역시 ***child 의 \<div> 와 \</div> 사이에 포함되므로 child 의 요소가 된다.***  
따라서 해당 범위안에 있는 grandchild 역시 배경색이 red 가 된다.  
<br>

# ID Selectors
HTML 요소중 ID 속성 값을 대상으로 하는 Selectors.  
***ID 속성값 앞에 '#' 를 붙여 해당 요소를 선택한다.***  
즉 id="test-id" 를 선택하기 위해선 #test-id {} 를 쓰고 {} 안에 CSS 속성 값을 설정해준다.    
```
#test-id { background-color : red; }
```

<div class="selector-box id-selector-box">
    <div class="selector-box-title"><h1>h1 : ID Selectors 예제 박스</h1></div>
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
.id-selector-box #test-id { background-color : red; }
</style>

id 속성값으로 test-id 를 가진 요소만 배경색이 red 가 된 것을 볼 수 있다.  

<br>

# Attribute selectors
HTML 요소중 특정 속성 또는 속성과 속성 값을 대상으로 하는 Selector.   
여러가지 방법으로 선택이 가능하다.  

<br>

첫번째로 특정한 Attribute 속성 (값이 아닌) 을 가진 요소를 선택하기 위해선  
***'[속성(Attribute)]' 을 써서 요소를 선택할 수 있다.***  
즉 test-attr 라는 속성을 가진 요소를 를 선택하기 위해선 [test-attr] {} 를 쓰고 {} 안에 CSS 속성 값을 설정해준다.    
```
[test-attr] { background-color : red; }
```

<div class="selector-box attribute-selector-box1">
    <div class="selector-box-title"><h1>h1 : Attribute Selectors 예제 박스</h1></div>
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
.attribute-selector-box1 [test-attr] { background-color : red; }
</style>

여러 요소중 ***속성값에 상관없이*** test-attr 속성을 가진 요소만 배경색이 red 가 되었다.   

<br>
두번째로 특정한 Attribute 속성과 속성값을 가진 요소를 선택하기 위해선  

***'[속성="속성값"]' 을 써서 요소를 선택할 수 있다.***  
즉 test-attr 라는 속성을 가지고, 이 속성값이 test2 인 요소를 를 선택하기 위해선   
[test-attr="test2"] {} 를 쓰고 {} 안에 CSS 속성 값을 설정해준다.   


```
[test-attr="test2"] { background-color : red; }
```

<div class="selector-box attribute-selector-box2">
    <div class="selector-box-title"><h1>h1 : Attribute Selectors 예제 박스</h1></div>
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
.attribute-selector-box2 [test-attr="test2"] { background-color : red; }
</style>

여러 요소중 test-attr 속성값이 test2 인 요소만 배경색이 red 가 되었다.   
 
<br>

이외에도 특정한 Tag 와 Attribute 속성을 가진 요소를 선택하기 위해선  
***'Tag[속성]'*** 또는 ***'Tag[속성=속성값]'*** 을 써서 요소 선택이 가능하다.  

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

남은 CSS Selectors 는 아래 링크에 이어서 쓴다.  
[[CSS] CSS Selectors 정의와 Pseudo-classes, Pseudo-elements, Combinators Selectors][css-sel-link2]  

<hr>

# 참조
- MDN Web Docs: [CSS 선택자][css-selector-link]
- MDN Web Docs: [Pseudo-classes][Pseudo-classes-link]
- MDN Web Docs: [Pseudo-elements][Pseudo-elements-link]




[css-selector-link]: https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors
[Pseudo-classes-link]: https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes
[Pseudo-elements-link]: https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements
[display2-link]: /study/2022/02/11/css-display2.html

[css-sel-link2]: /study/2022/03/13/css-selector2.html

<style>
    .selector-box {border: 5px dashed blue;}
    .selector-box-title { text-align: center; }

    .parent { font-size: x-large; }
    .child { font-size: large; text-indent: 1em; }
    .grandchild { font-size: medium; text-indent: 2em; }
</style>